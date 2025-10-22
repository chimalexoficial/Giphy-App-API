# 🚀 React App with Docker & AWS CI/CD

A production-ready React (Vite) app containerized with Docker and deployed to **AWS ECS Fargate** via **GitHub Actions**.

![Build Status](https://github.com/chimalexoficial/Giphy-App-API/actions/workflows/deploy.yml/badge.svg)

## 🧩 Tech Stack
- React + Vite + Tailwind CSS
- Giphy API
- Docker + Nginx  
- AWS ECR + ECS (Fargate)  
- GitHub Actions (CI/CD)

## ⚙️ How It Works
Every push to **main** triggers:
1. **Build** → Docker image created  
2. **Push** → Image uploaded to AWS ECR  
3. **Deploy** → ECS pulls and runs the new version automatically
