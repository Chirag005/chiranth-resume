---
title: Video Conversation Chatbot
description: An AI chatbot that converses with users through video input, combining real-time speech recognition with NLP-generated responses.
order: 3
summary: A video-input chatbot with real-time speech recognition and NLP responses in under 300 ms — built for interviews, tutoring, and assistance.
context: Conversational AI project
categories: [Speech, NLP]
stack: [Python, Speech recognition, NLP]
metrics:
  - value: '82%'
    label: Transcription accuracy in noise
  - value: '<300 ms'
    label: Response latency
cover: wave
featured: true
---

## Problem

Text chatbots ask users to type. For virtual interviews, tutoring, and digital assistance, people would rather just talk — which means the system has to hear accurately in real rooms and answer fast enough to feel like a conversation.

## Approach & Architecture

Spoken input from the video stream is transcribed in real time, then passed to an NLP stage that generates the reply.

::pipeline-diagram
---
steps:
  - title: Video input
    detail: User speaks to the camera
  - title: Speech recognition
    detail: Real-time transcription
  - title: NLP understanding
    detail: Interprets the transcribed turn
  - title: Response generation
    detail: Conversational reply
  - title: Reply
    detail: Returned to the user in real time
---
::

- **Real-time speech recognition** for spoken input, evaluated in noisy environments.
- **NLP response generation** that keeps conversational turns under the latency budget.
- Designed for **virtual interviews, tutoring, and digital assistance**.

## Data & Evaluation

Transcription was evaluated for **accuracy in noisy environments**, and end-to-end **response latency** was measured per turn.

<!-- TODO(chiranth): test conditions, accuracy metric (WER?), and hardware used for latency. -->

## Results

- **82% transcription accuracy** even in noisy environments.
- Conversational responses generated in **under 300 ms**.

## What I'd Do Next

<!-- TODO(chiranth): confirm these directions. -->

- Report word error rate on a standard noisy-speech benchmark.
- Use visual cues from the video (lip movement, expression) to improve recognition and turn-taking.
- Stream partial transcripts to cut perceived latency further.
