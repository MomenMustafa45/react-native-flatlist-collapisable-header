# react-native-flatlist-collapsible-header

A reusable **React Native FlatList with a smooth collapsible animated header**, built using **react-native-reanimated**.  
The header smoothly fades, translates, and optionally scales away as the user scrolls.

Ideal for feeds, profile screens, dashboards, and modern mobile UIs.

---

## ✨ Features

- ⚡ Smooth animations powered by **react-native-reanimated**
- 🎯 Fully typed with **TypeScript**
- 🧩 Drop-in replacement for `FlatList`
- 🎛 Configurable animation behavior
- 📱 Optimized for performance
- 🧠 Clean and simple API

---

## 📸 Preview

Demo of the collapsible header behavior:

[Watch Demo on YouTube](https://www.youtube.com/watch?v=Jq4Im-_T3uk)

## 📥 Installation

Using npm:

```sh
npm install react-native-flatlist-collapsible-header
 or
yarn add react-native-flatlist-collapsible-header
```

## 🔧 Peer Dependencies

This library depends on the following peer dependency:

- **react-native-reanimated** `v2+`

If you haven't installed or configured it yet, follow the official installation guide:  
https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation

## 🚀 Usage

```tsx
import { AnimatedHeaderFlatList } from 'react-native-flatlist-collapsible-header';

<AnimatedHeaderFlatList
  data={data}
  headerHeight={400}
  renderHeader={() => <ListHeader />}
  renderItem={({ item }) => <ListItem item={item} />}
  keyExtractor={(item) => item.id}
/>;
```

## 🧩 Props

### `AnimatedHeaderFlatList<T>`

| Prop                        | Type                   | Required | Default | Description                                           |
| --------------------------- | ---------------------- | -------- | ------- | ----------------------------------------------------- |
| `data`                      | `T[]`                  | ✅       | —       | Data array for the FlatList                           |
| `renderItem`                | `ListRenderItem<T>`    | ✅       | —       | Function to render each item                          |
| `keyExtractor`              | `(item: T) => string`  | ✅       | —       | Extracts unique keys                                  |
| `headerHeight`              | `number`               | ✅       | —       | Height of the header in pixels                        |
| `renderHeader`              | `React.ReactNode`      | ✅       | —       | Header component to render                            |
| `hideThreshold`             | `number`               | ❌       | `0.5`   | Percentage (0–1) of header height before fully hidden |
| `headerContainerStyle`      | `ViewStyle`            | ❌       | —       | Style override for the header container               |
| `contentContainerStyle`     | `StyleProp<ViewStyle>` | ❌       | —       | Styles for FlatList content                           |
| `scrollEventThrottle`       | `number`               | ❌       | `16`    | Scroll event frequency                                |
| `animationConfig.fadeOut`   | `boolean`              | ❌       | `true`  | Fade header while scrolling                           |
| `animationConfig.translate` | `boolean`              | ❌       | `true`  | Translate header vertically                           |
| `animationConfig.scale`     | `boolean`              | ❌       | `false` | Scale header during scroll                            |
| `onScroll`                  | `(event) => void`      | ❌       | —       | Optional scroll listener                              |

> ✅ All standard `FlatList` props are supported.

## 🤝 Contributing

Contributions are welcome!

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## 🎛 Animation Configuration Example

```tsx
<AnimatedHeaderFlatList
  headerHeight={300}
  renderHeader={() => <Header />}
  animationConfig={{
    fadeOut: true,
    translate: true,
    scale: true,
  }}
/>
```

## ⚠️ Notes & Best Practices

- Requires **react-native-reanimated v2+**
- Header uses **absolute positioning**
- Avoid using margins for header layout
- Best performance with `scrollEventThrottle={16}`

## 📄 License

MIT © Momen Mustafa

---

Made with ❤️ using [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
