# Stage 1: Build React app
FROM node:20-bookworm-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Prevent Rollup from trying to load native bindings
ENV ROLLUP_SKIP_NODE_BUILD=1

# Build app
RUN npm run build


# Stage 2: Serve using Nginx
FROM nginx:1.27-alpine

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
