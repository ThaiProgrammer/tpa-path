---
name: mobile-app-developer
description: Builds cross-platform and native mobile applications with Flutter, React Native, Swift (iOS), and Kotlin (Android). Enforces clean architecture, state management, and offline-first storage.
---

# Mobile Application Developer Skill

## Core Frameworks & Approaches

### 1. Flutter (Dart 3)
- Use **Riverpod** or **BLoC** for deterministic, testable state management.
- Prefer `const` constructors to prevent unnecessary widget rebuilds.
- Isolate CPU-heavy tasks using `compute()` or worker Isolates to maintain 60/120 FPS.
- Follow Material 3 and Cupertino platform conventions.

### 2. React Native (Expo)
- Use Expo Router for file-based routing and deep linking.
- State management: Zustand or TanStack Query (React Query) for server state caching.
- Optimize images using `expo-image` with caching and blurhash placeholders.
- Avoid anonymous arrow functions in render loops.

### 3. Native Platforms (SwiftUI & Jetpack Compose)
- **iOS**: Swift 5.9+ / Swift 6 concurrency (Actors, async/await), SwiftUI declarative layouts, MVVM.
- **Android**: Kotlin Coroutines, StateFlow, Jetpack Compose, Clean Architecture with Hilt DI.

### 4. Offline-First & Storage
- Local caching: SQLite (Room, drift), Realm, or MMKV for fast key-value storage.
- Implement queue-and-sync synchronization for offline mutations with background workers.

### 5. Mobile Accessibility (WCAG 2.2 & Mobile Standards)
- **Touch Target Sizing (SC 2.5.8)**: Minimum 48x48dp on Android and 44x44pt on iOS for all tappable icons and buttons.
- **Screen Reader Support**: Provide explicit accessibility labels (`Semantics` in Flutter, `accessibilityLabel` in React Native, `.accessibilityLabel()` in SwiftUI).
- **Dynamic Type & Font Scaling**: Support system font magnification without clipping or broken layouts.
- **Color Contrast & Theme Support**: Satisfy >= 4.5:1 text contrast in both light and dark mode appearances.
