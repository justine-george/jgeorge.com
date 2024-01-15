---
title: "Deep Dive into Tab Keeper's Anonymous Login Mechanism"
description: "An in-depth look at how Tab Keeper leverages chrome.storage.sync for efficient and secure cross-device synchronization"
publishDate: "04 Oct 2023"
tags: ["tab keeper", "chrome extension", "system design", "anonymous login"]
draft: false
featured: true
---

## Rationale Behind the Shift

It's amazing how a single comment can shift your perspective. That's what happened with Tab Keeper. After seeing a Reddit discussion pointing out the unnecessary hassle of the login process, it clicked: why not make things simpler? So, I decided to integrate `chrome.storage.sync` for an anonymous login experience. The goal was to streamline the data synchronization across devices, emphasizing security and privacy without the cumbersome login steps. Long gone are the days when users had to sign up with their private email addresses just to enjoy seamless cross-device data synchronization.

## How It Works

The mechanism is straightforward:

- **For Returning User**: If a UUID is found in the user's `chrome.storage.sync`, it's used to pull data from Firebase Cloud Firestore.
- **For New User**: Absence of a UUID triggers the generation and storage of a new one in `chrome.storage.sync`.

## Technical Overview

![Tab Keeper's Anonymous Login Flow](./handling-anonymous-login.png)

The system is designed to work optimally when users have Chrome sync enabled. If Chrome sync is not enabled, the extension uses a fallback strategy, resembling `localStorage`, ensuring data persistence locally without synchronization.

## Why Firebase Cloud Firestore?

Despite the efficient data syncing capabilities of `chrome.storage.sync`, it has storage limitations (100KB in total, 8KB per item). Therefore, Firebase Cloud Firestore is used for its scalability and flexibility, with the UUID serving as a unique reference to the user's data.

## Future Considerations

Based on user feedback, I'm exploring the idea of adding an optional login module (something like Clerk) in the future so that users can access their data across devices without relying on Chrome sync.

## Impact on User Experience

The shift to anonymous login with `chrome.storage.sync` in Tab Keeper has been a game-changer. It's streamlined the user experience, making it hassle-free and more secure. Users now enjoy seamless cross-device synchronization without the cumbersome login process. As Tab Keeper continues to evolve, I remain committed to this journey of innovation, always with an ear to the ground for your invaluable feedback and suggestions.
