FROM node:14-alpine3.14 AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /opt/app
COPY ./package.json ./yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:14-alpine3.14 AS builder
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN yarn build

FROM node:14-alpine3.14 AS runner
WORKDIR /opt/app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /opt/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
COPY --from=builder /opt/app/package.json ./package.json
COPY --from=builder /opt/app/next.config.js ./next.config.js

USER nextjs

EXPOSE 5000

CMD ["yarn", "start"]