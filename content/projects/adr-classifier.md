---
title: Adverse Drug Reaction Classifier
description: A transformer-based classifier that detects potential adverse drug reactions in user reviews and medical text to support pharmacovigilance.
order: 4
summary: Transformer embeddings that flag adverse drug reactions in reviews and medical text — 84% accuracy with 20% fewer false positives.
context: NLP · pharmacovigilance project
categories: [NLP]
stack: [Python, Transformer embeddings, NLP, Keyword extraction]
metrics:
  - value: '84%'
    label: ADR detection accuracy
  - value: '−20%'
    label: False positives
cover: text
featured: true
---

## Problem

Adverse drug reactions are often first described by patients in reviews and free text, long before they reach formal reports. Manual reporting is slow, and medical language is noisy and domain-specific — so a classifier has to catch real reactions without drowning reviewers in false alarms.

## Approach & Architecture

Domain-aware preprocessing feeds transformer embeddings into a classifier that decides whether a text describes a potential adverse reaction.

::pipeline-diagram
---
steps:
  - title: Reviews & medical text
    detail: User-written and clinical sources
  - title: Preprocessing
    detail: Enhanced cleaning for medical text
  - title: Keyword extraction
    detail: Domain-specific drug & symptom terms
  - title: Transformer embeddings
    detail: Contextual text representations
  - title: Classifier
    detail: ADR / no ADR
---
::

- **Transformer-based embeddings** capture context that bag-of-words features miss.
- **Enhanced text preprocessing** and **domain-specific keyword extraction** target the false positives common in medical text.

## Data & Evaluation

The classifier was trained and evaluated on **user reviews and medical text**, measuring detection accuracy and false-positive rate.

<!-- TODO(chiranth): dataset name and size; precision/recall/F1; embedding model. -->

## Results

- **84% ADR detection accuracy** with transformer embeddings.
- **20% fewer false positives** through better preprocessing and keyword extraction.
- **Faster ADR detection** than traditional manual reporting.

## What I'd Do Next

<!-- TODO(chiranth): confirm these directions. -->

- Fine-tune a biomedical language model end to end rather than using frozen embeddings.
- Extract the specific drug–reaction pairs, not just a binary label.
- Evaluate on an external benchmark to measure how well the model generalizes across sources.
