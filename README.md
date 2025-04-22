# Horizon – Modern Full-Stack Banking SaaS Platform

Horizon is a financial SaaS platform built with **Next.js** and **TypeScript** that connects to multiple bank accounts using **Plaid**, displays real-time transactions, and enables secure money transfers via **Dwolla**. The project integrates **Appwrite** for backend services, uses **TailwindCSS** for styling, and visualizes data with **Chart.js**.

## 📋 Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Quick Start](#quick-start)
- [Code Snippets](#code-snippets)
- [Assets](#assets)
- [Links](#links)
- [More](#more)

## 🤖 Introduction

Horizon is a financial platform designed to help users manage their finances by linking multiple bank accounts, viewing transactions in real-time, and transferring money to others. It’s built using modern technologies and follows best practices for full-stack web development.

![Horizon Overview](images\image2.png);

If you're getting started and need assistance or face any bugs, join our active Discord community with over 34k+ members. It's a place where people help each other out.

## ⚙️ Tech Stack

### 🛠️ **Frontend:**
- **Next.js** – React framework for SSR & routing
- **React Hook Form** – Form management
- **Zod** – Schema validation
- **TailwindCSS** – Utility-first CSS framework
- **Chart.js** – Data visualization
- **ShadCN UI** – Accessible component library

### 💾 **Backend & Services:**
- **Appwrite** – Backend-as-a-Service for database, auth, storage
- **Plaid** – Bank account linking and transaction data
- **Dwolla** – Money transfer and payments

### 🧪 **Other Tools:**
- **TypeScript** – Static typing for JavaScript
- **Git** – Version control
- **ENV Configuration** – Secure credentials setup

## 🔋 Features

- **Authentication**: Ultra-secure SSR authentication with proper validations and authorization.
- **Connect Banks**: Integrates with **Plaid** to link multiple bank accounts.
- **Home Page**: Shows general account overview, total balance from all connected banks, recent transactions, and spending categories.
- **My Banks**: View a list of connected banks with respective balances and account details.
- **Transaction History**: Pagination and filtering for viewing transaction history.
- **Real-time Updates**: Reflects changes across pages when new bank accounts are connected.
- **Funds Transfer**: Allows users to transfer funds via **Dwolla** to other accounts.
- **Responsiveness**: Seamless user experience across desktop, tablet, and mobile devices.

## 🤸 Quick Start

### Prerequisites

Ensure the following are installed on your machine:

- **Git**
- **Node.js**
- **npm (Node Package Manager)**

### Cloning the Repository

