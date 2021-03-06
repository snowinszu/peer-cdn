---
id: installation
title: Getting Started
sidebar_label: Installation
---

*_PeerCDN_* is a lightweight library providing peer to peer CDN functionality.

The main idea of **[peer-cdn](https://github.com/vardius/peer-cdn)** is to use **WebRTC** with **Service Worker** to allow assets such as *scripts*, *images*, *videos*, *styles* and other files to be shared between peers reducing server usage.

## Installation

<!--DOCUSAURUS_CODE_TABS-->
<!--npm-->
```yarn
npm install peer-cdn
```
<!--yarn-->
```bash
yarn add peer-cdn
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Bundle size

```bash
┌───────────────────────────────────┐
│                                   │
│   Destination: dist/index.es.js   │
│   Bundle Size:  231.98 KB         │
│   Minified Size:  103.35 KB       │
│   Gzipped Size:  28.92 KB         │
│                                   │
└───────────────────────────────────┘
┌────────────────────────────────┐
│                                │
│   Destination: dist/index.js   │
│   Bundle Size:  247.79 KB      │
│   Minified Size:  95.14 KB     │
│   Gzipped Size:  27.77 KB      │
│                                │
└────────────────────────────────┘
```
