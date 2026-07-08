# API Design

## Authentication APIs

POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/forgot-password
POST /api/auth/reset-password

---

## User APIs

GET /api/users/profile
PUT /api/users/profile
DELETE /api/users/profile

---

## Job APIs

GET /api/jobs
GET /api/jobs/:id
POST /api/jobs
PUT /api/jobs/:id
DELETE /api/jobs/:id

---

## Internship APIs

GET /api/internships
POST /api/internships
PUT /api/internships/:id
DELETE /api/internships/:id

---

## Resume APIs

POST /api/resume/create
GET /api/resume
PUT /api/resume
DELETE /api/resume

---

## Application APIs

POST /api/applications
GET /api/applications
PUT /api/applications/:id
DELETE /api/applications/:id

---

## AI APIs

POST /api/ai/resume
POST /api/ai/cover-letter
POST /api/ai/interview
POST /api/ai/career-coach

---

## Notification APIs

GET /api/notifications
PUT /api/notifications/read
DELETE /api/notifications
