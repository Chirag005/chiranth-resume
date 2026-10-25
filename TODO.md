# Content still needed from Chiranth

The site is complete and deployable as-is. These items would make it stronger for PhD admissions committees. None of them are shown on the live site as placeholders — they are tracked here and as `<!-- TODO(chiranth) -->` comments in the source.

## High priority

- [ ] **Profile photo** — add to `public/images/` and set `photo` in `app/app.config.ts`.
- [ ] **Research interests** — confirm or rewrite the four areas in `app/data/profile.ts` (`researchInterests`) so they match the statement of purpose.
- [ ] **"Why research" paragraph** on `/about` — rewrite in your own words (`app/pages/about.vue`).
- [ ] **Expected graduation year** — currently "Expected 2027" in `app/data/profile.ts` (`timeline`).
- [ ] **GitHub repository links** for each project — add under `links:` in each `content/projects/*.md`.

## Per project

### UPI Fraud Detection System

- [ ] Name the simulated dataset (size, fraud ratio) and the evaluation metric used.
- [ ] A screenshot of the dashboard.

### Image Caption Generator

- [ ] Name the training/evaluation dataset (e.g. Flickr8k / MS-COCO).
- [ ] Report the absolute BLEU-4 score alongside the "+85% vs. rule-based baseline" figure — reviewers will ask.
- [ ] Two or three example images with generated captions.

### Video Conversation Chatbot

- [ ] Name the speech recognition model and how the 82% accuracy was measured (WER on which test set?).
- [ ] Name the response-generation model.
- [ ] A short demo video or screenshots.

### Adverse Drug Reaction Classifier

- [ ] Name the dataset and the transformer model used for embeddings.
- [ ] Report precision / recall / F1 alongside accuracy.

### HR Project Health Dashboard

- [ ] Confirm with Aragen what can be shown publicly (no screenshots of company data).

### All projects

- [ ] Confirm or edit the **"What I'd Do Next"** bullets — they were drafted from the project descriptions and should reflect your own thinking.
