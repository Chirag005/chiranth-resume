---
title: Image Caption Generator
description: A deep learning model that writes descriptive captions for images using a CNN encoder, an LSTM decoder, and an attention mechanism.
order: 2
summary: A CNN encoder and LSTM decoder with attention that write object-aware captions in under 1.2 seconds per image.
context: Deep learning project
categories: [Vision, NLP]
stack: [Python, CNN, LSTM, Attention]
metrics:
  - value: '+85%'
    label: BLEU vs. rule-based baseline
  - value: '<1.2 s'
    label: Inference per image
cover: caption
featured: true
---

## Problem

Describing an image in natural language requires two skills at once: recognizing what is in the scene and expressing it fluently. Rule-based captioners produce rigid, template-like sentences that miss what actually matters in a photo.

## Approach & Architecture

An encoder–decoder model: a convolutional network turns the image into visual features, and a recurrent language model writes the caption word by word, attending to different regions of the image at each step.

::pipeline-diagram
---
steps:
  - title: Input image
    detail: Raw photo
  - title: CNN encoder
    detail: Spatial visual features
  - title: Attention
    detail: Weights image regions per word
  - title: LSTM decoder
    detail: Generates the caption token by token
  - title: Caption
    detail: Object-aware description
---
::

- **CNN** extracts visual features from the image.
- **Attention mechanism** lets the decoder focus on the relevant objects for each word, producing more human-like, object-aware captions than typical caption generators.
- **LSTM** handles language generation.
- **Optimized inference pipeline** for fast caption generation.

## Data & Evaluation

Caption quality was measured with **BLEU** against a **rule-based captioning baseline**.

<!-- TODO(chiranth): dataset name and split; absolute BLEU-4 for model and baseline. -->

## Results

- **85% BLEU score improvement** over the rule-based baseline.
- Captions generated in **under 1.2 seconds per image**.

## What I'd Do Next

<!-- TODO(chiranth): confirm these directions. -->

- Report BLEU-4, METEOR, and CIDEr on a standard benchmark for comparison with published models.
- Replace the LSTM decoder with a transformer and compare quality against inference cost.
- Visualize attention maps to check that the model attends to the objects it names.
