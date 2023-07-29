FROM node:18-alpine AS builder

COPY . .

RUN npm ci

RUN npm run build

FROM nginx:alpine AS runner

COPY nginx.conf.default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder build /usr/share/nginx/html
