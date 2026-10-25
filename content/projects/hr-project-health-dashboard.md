---
title: HR Project Health Dashboard
description: A full-stack HR analytics dashboard built during an internship at Aragen Life Sciences, covering workforce KPIs, CTC analytics, manager performance, tenure, and attrition.
order: 5
summary: A full-stack HR analytics dashboard with live CRUD, multi-filter search, and a validated Excel/CSV import pipeline.
badge: Internship · Aragen Life Sciences
context: Internship · Aragen Life Sciences, Bangalore
period: Jun 2026 – Sep 2026
categories: [Full-stack]
stack: [React, FastAPI, SQLite, Python, Pandas]
metrics:
  - value: '5'
    label: Analytics areas covered
  - value: Live
    label: Dashboards update on every change
cover: bars
featured: false
---

## Problem

HR and project leads needed one place to see workforce health — headcount, compensation, manager performance, tenure, and attrition — and to keep that data current without hand-editing spreadsheets.

## Approach & Architecture

A React front end over a FastAPI service, with SQLite storage and Pandas handling imports and aggregation.

::pipeline-diagram
---
steps:
  - title: Excel / CSV upload
    detail: Bulk employee data
  - title: Validation & preview
    detail: Duplicate detection before any write
  - title: FastAPI + SQLite
    detail: CRUD API and storage
  - title: Pandas analytics
    detail: KPI and attrition aggregates
  - title: React dashboard
    detail: Interactive charts and filters
---
::

- **Analytics coverage:** workforce KPIs, CTC analytics, manager performance, employee tenure, and attrition insights.
- **Employee CRUD** with dynamic search and multi-filtering — every dashboard updates automatically after a data change.
- **Import pipeline** for Excel/CSV with data validation, duplicate detection, and a preview step before records are written.
- **Responsive, enterprise-style UI** with interactive charts for workforce analysis and project health monitoring.

## Data & Evaluation

Built on internal HR data. Company data and screenshots are confidential and are not shown here.

## Results

- A working full-stack dashboard delivered over a four-month internship.
- Safe bulk updates: invalid or duplicate records are caught before they reach the database.

## What I'd Do Next

<!-- TODO(chiranth): confirm these directions. -->

- Add attrition-risk forecasting on top of the descriptive analytics.
- Role-based access so managers see only their teams.
