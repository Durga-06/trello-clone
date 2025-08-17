# --- Build stage ---
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build   # CRA builds to /app/build

# --- Run stage: serve static build with Nginx ---
FROM nginx:1.27-alpine
# Replace default server config with SPA-friendly fallback
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy CRA build output
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
