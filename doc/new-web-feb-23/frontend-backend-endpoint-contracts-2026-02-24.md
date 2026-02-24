# Frontend Backend Endpoint Contracts (February 24, 2026)

## Purpose
This is the backend contract checklist for the dashboard redesign + create-test v0 rollout.  

## Scope
1. Dev dashboard redesign data wiring
2. Create-test `v0` submission flow
3. Minimal test builder server-read bridge

---

## Already Available 
1. `GET /api/companies/profile`
2. `GET /api/companies/dashboard`
3. `GET /api/notifications`
4. `GET /api/jobs`
5. `GET /api/jobs/company/:companyId`
6. `POST /api/jobs`
7. `PUT /api/jobs/:id`
8. `DELETE /api/jobs/:id`

---

## Required New/Finalized Contracts

## A) Identity
1. `GET /api/me`
- Purpose: sidebar/header user identity source
- Response:
```json
{
  "success": true,
  "data": {
    "id": "user_id",
    "email": "user@company.com",
    "firstName": "Sho",
    "lastName": "Adachi",
    "role": "employer",
    "company": {
      "id": "company_id",
      "name": "PCI Test"
    }
  }
}
```

## B) Tests List and Lifecycle
2. `GET /api/tests?query=&status=&page=&pageSize=&sort=`
- Purpose: `/tests` table (replaces role-based mock rows)
- Response:
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "test_id",
        "title": "Mechanical Engineer Test",
        "status": "active",
        "createdAt": "2026-02-24T00:00:00.000Z",
        "candidatesCount": 12
      }
    ],
    "pagination": {
      "page": 1,
      "pageSize": 20,
      "total": 132,
      "totalPages": 7
    }
  }
}
```

3. `POST /api/tests`
- Purpose: create from v0 form and return new `testId`
- Request:
```json
{
  "engineerType": "mechanical",
  "industry": "Automotive",
  "skills": ["CAD / SolidWorks", "GD&T"],
  "titleOverride": "optional custom title"
}
```
- Response:
```json
{
  "success": true,
  "data": {
    "test": {
      "id": "test_id",
      "title": "Mechanical Engineer Test",
      "status": "draft",
      "createdAt": "2026-02-24T00:00:00.000Z"
    }
  }
}
```

4. `GET /api/tests/:testId`
5. `PATCH /api/tests/:testId`
6. `POST /api/tests/:testId/duplicate`
7. `POST /api/tests/:testId/archive`
8. `DELETE /api/tests/:testId`

## C) Sections 
9. `GET /api/tests/:testId/sections`
- Purpose: server-first load for `/tests/[testId]`
- Response:
```json
{
  "success": true,
  "data": {
    "sections": [
      {
        "id": "section_id",
        "title": "Section 1",
        "order": 1,
        "questions": [
          {
            "id": "q1",
            "type": "multiple_choice",
            "prompt": "Question text",
            "choices": ["A", "B", "C", "D"],
            "correctAnswer": "A",
            "timeLimitSeconds": 120
          }
        ]
      }
    ]
  }
}
```

---

## Contract Decisions Backend Must Confirm
1. Final status enum values:
- Proposed: `draft`, `active`, `archived`, `closed`
2. Allowed transitions:
- `draft -> active`
- `active -> archived`
- `active -> closed`
- `archived -> active` (yes/no)
3. Default list sort for `GET /api/tests`
4. Error shape standardization (validation/auth/not found/conflict)
5. `POST /api/tests` behavior:
- How v0 fields map to generated sections/questions
- Behavior when mapping confidence is low

---

## Frontend Delivery Dependency
1. Non-blocked redesign work is already implemented with existing endpoints.
2. Full test-domain migration is blocked until contracts above are finalized.
3. Once contracts are approved, frontend can complete remaining wiring in one follow-up slice.

