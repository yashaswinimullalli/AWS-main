<div align="center">

# ⚕️ AUTHENX  
## 🧠 AI-Powered Smart Healthcare Triage & Hospital Queue Management System

<img src="https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge&logo=react" />
<img src="https://img.shields.io/badge/Node-Backend-green?style=for-the-badge&logo=node.js" />
<img src="https://img.shields.io/badge/OpenStreetMap-Overpass-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/badge/AI-Triage-purple?style=for-the-badge" />
<img src="https://img.shields.io/badge/Real--Time-Sync-red?style=for-the-badge" />

---

🚀 A complete AI-driven healthcare ecosystem connecting **Patients** and **Hospitals** in real-time.

</div>

---
### 👤 Patient Application
🔗 https://github.com/Preetham-Bharadwaj/AWS-AI-For-Bharath.git

---

### 🏥 Hospital Management Dashboard
🔗 https://github.com/Preetham-Bharadwaj/Hospital-dashboard.git

---

# 🌟 Project Overview

AuthenX is a **full-stack AI-based healthcare system** designed to:

- Prioritize patients based on medical risk
- Reduce hospital waiting time
- Digitize token generation
- Enable real-time hospital queue management
- Synchronize patient and hospital systems instantly

This system contains **two connected web applications**:

1️⃣ Patient Web App  
2️⃣ Hospital Management Dashboard  

Both use:
- Same backend
- Same database
- Real-time synchronization

---

# 🏗️ System Architecture

```
               ┌──────────────────┐
               │   Patient App    │
               └─────────┬────────┘
                         ↓
                Shared Backend API
                         ↓
                Shared Database
                         ↓
               ┌──────────────────┐
               │Hospital Dashboard│
               └──────────────────┘
```

---

# 👤 PATIENT APPLICATION

## 🔹 Features

### 📍 1. Smart Location Detection
- Auto GPS detection
- Manual coordinate entry
- Fetch nearby hospitals using Overpass API (OpenStreetMap)

---

### 🧠 2. AI Medical Triage

Analyzes:
- Symptoms
- Severity
- Pain scale
- Medical history

Returns:
- 🔴 Critical
- 🟠 High
- 🔵 Medium
- 🟢 Low
- Required Specialization
- Urgency Level
- Recommendation

---

### 🏥 3. Intelligent Hospital Ranking

Hospitals ranked based on:

- Distance
- Risk level priority
- Specialization match
- Availability
- Rating score

---

### 🎫 4. Smart Priority Token Generation

Queue Logic:

```
Critical > High > Medium > Low
FIFO within same priority
```

- Token number generated
- Estimated wait time calculated
- Real-time queue position tracking

---

### 📊 5. Live Queue Tracking

- View patients ahead
- See currently serving token
- Live updates every 30 seconds

---

# 🏥 HOSPITAL MANAGEMENT DASHBOARD

## 🔹 Features

### 🔐 Secure Login (Hospital Only)

- Authentication required
- Role-based access

---

### 📋 Real-Time Patient Queue

- Fetch patients from shared database
- Filter by hospital_id
- Automatically sorted by:
  - Risk priority
  - Registration time (FIFO)

---

### ▶ Treatment Controls

Hospital staff can:

- Start Treatment → status = in_progress
- Complete Treatment → status = completed
- Auto-call next patient

---

### ⏸ Hospital Control

- Pause hospital (stop new tokens)
- Resume hospital
- Real-time updates reflected in patient app

---

# 🔄 Complete Application Flow

## Patient Side

```
Location →
Patient Details →
Fetch Hospitals →
AI Analysis →
Hospital Ranking →
Token Generation →
Live Queue Tracking
```

## Hospital Side

```
Login →
View Queue →
Start Treatment →
Complete Treatment →
Auto Next Patient
```

---

# 🗄️ Database Structure (Shared)

### patients table

| Field | Type |
|-------|------|
| id | UUID |
| name | String |
| age | Number |
| symptoms | Text |
| risk_level | String |
| hospital_id | String |
| token_number | Number |
| status | waiting / in_progress / completed |
| created_at | Timestamp |

---

# 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | React.js |
| Styling | Custom CSS UI System |
| Backend | Node.js / Express (Shared API) |
| Database | Shared Real-Time Database |
| Location Data | OpenStreetMap (Overpass API) |
| AI Engine | Claude AI Model |
| Deployment | GitHub Pages / Cloud Hosting |

---

# 🎯 Problem It Solves

❌ Long hospital waiting lines  
❌ No patient prioritization  
❌ Manual queue management  
❌ Delayed emergency handling  

✅ AI-driven medical risk classification  
✅ Smart hospital recommendation  
✅ Digital token system  
✅ Real-time hospital queue control  
✅ Critical case fast-tracking  

---

# 🚀 Vision

To build a scalable AI-powered healthcare prioritization system that can be integrated into:

- Government hospitals  
- Private clinics  
- Emergency response systems  
- Smart city healthcare networks  

---

# ⚠️ Disclaimer

This platform assists in medical triage decision support.  
It does not replace professional medical diagnosis.

___________________________________________________________________________________________________________________________
