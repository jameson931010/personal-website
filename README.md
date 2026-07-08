# Personal Task & Dashboard Server

A personal dashboard featuring a FastAPI backend and a Next.js frontend.

## Project Structure
- `/backend`: Python backend managed by `uv` (FastAPI, SQLModel, SQLite).
- `/frontend`: TypeScript frontend managed by `pnpm` (Next.js, Tailwind CSS).

## Prerequisites
- **Python 3.12+** & **uv** (for backend)
- **Node.js** & **pnpm** (for frontend)

## Running Locally

Run the backend and frontend in separate terminals:

### 1. Backend Setup & Run
```bash
cd backend
uv run uvicorn main:app --port 8000 --reload
```
*The database file `database.db` will be auto-created. API docs are available at http://localhost:8000/docs.*

### 2. Frontend Setup & Run
```bash
cd frontend
pnpm install
pnpm dev
```
*The dashboard will be available at http://localhost:3000.*
