# 🏋️ FitLog

### Modern Workout Library & Personal Workout Planner

FitLog is a modern, responsive workout management web application built with **Next.js, React, TypeScript, and Tailwind CSS**.

It allows users to explore workouts, search exercises, view detailed workout information, build a daily workout plan, save workouts, manage their plans, and track workout statistics through a clean dark-themed interface.

---

## 🌐 Live Demo

🔗 **[Visit FitLog](https://fit-log-explore.vercel.app/)**

## 📦 GitHub Repository

🔗 **[View Source Code](https://github.com/pavelsolutions/Fit-Log)**

---

## 📸 Project Preview

<img width="1600" height="2757" alt="fitlog" src="https://github.com/user-attachments/assets/549f7eb8-30ef-47c4-8469-d8d234d34bfb" />

---

## ✨ Features

### 🏋️ Workout Library

- Browse available workouts from the workout API
- View workout name and image
- View muscle groups
- View required equipment
- View difficulty level
- View workout duration
- View calories burned
- View sets and reps
- View workout rating
- View workout description
- View step-by-step workout instructions

---

### 🔍 Workout Search

Users can search the workout library by:

- Workout name
- Muscle group / tag

The search updates the displayed workout list based on the user's search query.

---

### 📄 Workout Details

Each workout has a dedicated dynamic details page.

Users can view:

- Workout image
- Workout name
- Description
- Muscle groups
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Instructions

Dynamic workout routes are handled using Next.js App Router.

---

### 📋 Today's Workout Plan

Users can create their own daily workout plan.

Features include:

- Add workout to today's plan
- Prevent duplicate workouts
- Maximum of 5 workouts/lifts
- Remove workouts from the plan
- View workout details
- Mark workouts as completed
- View total planned exercises
- View total workout minutes
- View total calories

The **Add to today's plan** button becomes disabled when the plan already contains 5 workouts.

---

### 🔖 Saved Workouts

Users can save workouts for later.

Features include:

- Save workouts
- Prevent duplicate saved workouts
- Remove saved workouts
- View saved workouts from the My Plan page
- View workout details

---

### 💾 Local Storage Persistence

Workout plan and saved workout data are persisted using browser `localStorage`.

This means:

- Today's Plan survives page reloads
- Saved workouts survive page reloads
- User selections are restored when the application loads again

---

### 📊 Workout Statistics

The My Plan page provides live statistics for the current list.

Statistics include:

- **Exercises** — total number of workouts
- **Minutes** — total workout duration
- **Calories** — total calories burned

Statistics update based on the currently selected tab.

---

### 🔃 Workout Sorting

Users can sort the current workout list using:

- **Duration**
- **Calories**
- **Rating**

Sorting is applied to the currently selected list.

#### Duration

Shortest to longest:

```text
20 min → 30 min → 40 min
````

#### Calories

Highest to lowest:

```text
400 kcal → 300 kcal → 200 kcal
```

#### Rating

Highest to lowest:

```text
4.9 → 4.8 → 4.7
```

---

### 🗂️ My Plan Tabs

The My Plan page contains two sections:

* **Today's Plan**
* **Saved**

Users can switch between the two lists and manage their workouts independently.

---

### 🔔 Toast Notifications

The application provides toast feedback for user actions.

Examples include:

* Workout added successfully
* Workout already exists
* Workout saved successfully
* Workout already saved
* Workout removed
* Workout marked as completed

Toast notifications are customized to match the FitLog dark theme.

---

### ⏳ Loading States

FitLog provides loading feedback while workout data is being fetched.

Loading states include:

* Workout library skeleton
* Workout details skeleton
* Animated skeleton cards
* Loading UI for asynchronous route content

Next.js `loading.tsx` and React `Suspense` are used where appropriate.

---

### ❌ Custom 404 Page

FitLog includes a custom 404 page for unknown or invalid routes.

For example:

```text
/unknown
/workout-test
/invalid-route
```

will display a custom FitLog-themed **Workout Not Found** page.

Invalid workout IDs can also trigger the custom `not-found.tsx` page.

---

### 🎯 Hero CTA

The Home page includes a primary:

**BROWSE WORKOUTS**

CTA button with an icon.

Clicking the button smoothly scrolls the user to the workout library section using:

```text
#library
```

It does not navigate to another route.

---

### 📱 Responsive Design

FitLog is designed for different screen sizes:

* 📱 Mobile
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop

The layout, navigation, workout cards, buttons, and plan management interface adapt to different screen sizes.

---

### 🎨 Dark Fitness UI

FitLog uses a modern dark fitness-focused design system.

#### Main colors

```text
Background:  #0C0D10
Card:        #15171D
Border:      #292C31
Accent:      #C2F800
Muted Text:  #858B97
```

The design uses:

* Dark cards
* Lime accent color
* Oswald for headings
* Inter for body text
* Rounded cards
* Responsive layouts
* Subtle hover effects
* Clean visual hierarchy

---

## 🛠️ Technologies Used

| Technology         | Purpose                                   |
| ------------------ | ----------------------------------------- |
| **Next.js**        | React framework and application routing   |
| **React**          | UI development and component architecture |
| **TypeScript**     | Type-safe development                     |
| **Tailwind CSS**   | Styling and responsive design             |
| **DaisyUI**        | UI components                             |
| **Context API**    | Global workout state management           |
| **REST API**       | Fetching workout data                     |
| **Next/Image**     | Optimized image rendering                 |
| **React Toastify** | Toast notifications                       |
| **localStorage**   | Persisting plan and saved workouts        |
| **React Icons**    | UI icons                                  |

---

## 🔌 API

FitLog uses the following REST API:

```text
https://api.abcz.workers.dev/api/fitlog
```

The API provides workout information including:

```text
Workout
├── ID
├── Name
├── Image
├── Muscle Groups
├── Equipment
├── Difficulty
├── Duration
├── Calories Burned
├── Sets
├── Reps
├── Rating
├── Description
└── Instructions
```

---

## 📁 Project Structure

```text
Fit-Log/
│
├── app/
│   ├── my-plan/
│   │   └── page.tsx
│   │
│   ├── workouts/
│   │   └── [id]/
│   │       ├── page.tsx
│   │       └── loading.tsx
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── globals.css
│
├── components/
│   ├── home/
│   │   ├── Banner.tsx
│   │   ├── WorkoutLibrary.tsx
│   │   └── WorkoutLoading.tsx
│   │
│   ├── shared/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PlanList.tsx
│   │
│   └── workoutDetails/
│       ├── MyPlanButton.tsx
│       └── SavedButton.tsx
│
├── context/
│   └── WorkoutContext.tsx
│
├── types/
│   └── workout.ts
│
├── assets/
│   └── ...
│
├── public/
│   └── ...
│
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pavelsolutions/Fit-Log.git
```

### 2. Navigate to the project

```bash
cd Fit-Log
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

```text
http://localhost:3000
```

---

## 🧩 Application Flow

```text
                    FitLog
                      │
                      ▼
                Workout Library
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
      Search                   View Details
          │                       │
          │              ┌────────┴────────┐
          │              ▼                 ▼
          │        Add to Plan          Save
          │              │                 │
          └──────────────┴─────────────────┘
                         │
                         ▼
                     My Plan
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
        Today's Plan              Saved
              │
              ▼
        Statistics / Sort
              │
              ▼
       Mark as Completed
```

---

## 🎯 Project Goals

The main goals of FitLog are to:

* Make workout discovery simple
* Provide detailed exercise information
* Help users organize daily workouts
* Limit daily plans to five lifts
* Allow users to save workouts for later
* Persist user workout selections
* Provide useful workout statistics
* Offer a responsive and modern fitness experience

---

## 👨‍💻 Author

### Pavel Ahammed

**Frontend Developer**

Built with ❤️ using:

**Next.js · React · TypeScript · Tailwind CSS**

---

## ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for learning, portfolio, and demonstration purposes.

```
