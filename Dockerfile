# Stage 1: Build前端鏡像
FROM node:18 as blog_frontend

WORKDIR /usr/techblog

COPY package*.json ./
RUN npm install

COPY ./ .

EXPOSE 8080

CMD ["npm", "run", "dev"]

# RUN npm run build

# # Stage 2: Run Nginx
# FROM nginx:1.24

# COPY --from=blog_frontend /usr/techblog/dist /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
