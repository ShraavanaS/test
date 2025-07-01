# Glanceable Dashboard

This repository contains the starting point for the **Glanceable Dashboard** candidate exercise. The goal is to deliver a home page that summarizes key metrics and AI‑driven insights for Glanceable users.

## Project Structure

- `frontend/` – React + TypeScript application using `react-hook-form` and Nivo charts.
- `backend/` – Python FastAPI service exposing REST APIs.

## Requirements

- **Node.js** `>=18` and **npm** for the React client.
- **Python** `>=3.11` for the FastAPI service.

## Running Locally

### Frontend
```bash
cd frontend
npm install
npm start
```
This launches the React development server on <http://localhost:3000>.

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
The API server will be available at <http://localhost:8000>.

## Deployment Strategy

The app can be deployed with free‑tier services:

- **Frontend** – Vercel is recommended. Run `npm run build` and deploy the output directory.
- **Backend** – Any Python‑compatible cloud (Render, Railway, etc.) can host the FastAPI app. A small instance using a free plan is sufficient.
- **Database** – Options include MongoDB Atlas or ElephantSQL free tiers. Configure connection credentials using environment variables in both the backend and deployment service.

## Continuous Integration

GitHub Actions run basic checks for both parts of the project. See `.github/workflows/ci.yml` for details.

