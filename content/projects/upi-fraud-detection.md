---
title: UPI Fraud Detection System
description: A modular fraud detection system for UPI transactions that combines anomaly detection, context analysis, and rule-based risk scoring — winner of the 8th Mile Hackathon at RVCE.
order: 1
summary: Anomaly detection, context analysis, and rule-based risk scoring that flag suspicious UPI transactions in real time.
badge: Winner · 8th Mile Hackathon, RVCE
context: Hackathon project
categories: [Fraud]
stack: [Python, HTML, Anomaly detection, Rule engine, Graph analysis]
metrics:
  - value: '1st'
    label: 8th Mile Hackathon, RVCE
  - value: '4'
    label: Modular detection engines
  - value: Real-time
    label: Fraud-score dashboard
cover: graph
featured: true
---

## Problem

UPI payments settle in seconds, so a fraud check has to make a call before the money moves. A single model score is hard to act on and hard to explain; the goal was a system that flags suspicious transactions **and** shows why.

## Approach & Architecture

The system layers three complementary signals — statistical anomaly detection, transaction context, and explicit risk rules — and fuses them into one fraud score.

::pipeline-diagram
---
steps:
  - title: Transaction stream
    detail: Simulated UPI transactions
  - title: Anomaly detection
    detail: Flags statistically unusual activity
  - title: Context & graph analysis
    detail: Relationships between accounts and patterns
  - title: Rule engine
    detail: Explicit, explainable risk rules
  - title: Risk scoring
    detail: Fused fraud score per transaction
  - title: Live dashboard
    detail: Scores and insights, HTML + Python
---
::

- **Modular engines** for fraud scoring, rules, graph analysis, and simulation — each can be tested and swapped independently.
- **Simulation engine** generates transaction streams, so detection logic can be exercised without real payment data.
- **Real-time dashboard** visualizes fraud scores and transaction insights as they are produced.

## Data & Evaluation

The architecture was validated on **simulated transaction datasets** produced by the simulation engine, with a modular structure designed to be testable engine by engine.

<!-- TODO(chiranth): dataset size, fraud ratio, and the metric used (precision/recall?). -->

## Results

- **Won the 8th Mile Hackathon** at RV College of Engineering.
- A scalable, testable architecture where every detection engine is an independent module.
- A working real-time dashboard that surfaces suspicious transaction patterns as they occur.

## What I'd Do Next

<!-- TODO(chiranth): confirm these directions. -->

- Evaluate on a public fraud benchmark to report precision and recall against a single-model baseline.
- Learn the weights for fusing engine scores instead of setting them by hand.
- Add per-transaction explanations that trace a score back to the rules and anomalies that triggered it.
