# React Native FlatList Performance Bug

This repository demonstrates a common performance issue encountered when using the FlatList component in React Native with large datasets.  Scrolling quickly can result in blank spaces or incorrect item rendering.

The `BuggyFlatList.js` file shows the problematic implementation. The `FixedFlatList.js` file provides a solution by optimizing the rendering process.

**Key improvements in the solution:**

* **`ItemSeparatorComponent`**: Added a separator component to visually improve the list.
* **`keyExtractor`**: Implemented a `keyExtractor` function to improve FlatList performance by providing unique keys for each item. 
* **Optimized `renderItem`**: Made sure the renderItem function is efficient and avoids unnecessary re-renders.  Any heavy computations should be done outside this function if possible.
* **`getItemLayout` (Optional)**: This can significantly improve scrolling performance by providing measurements for items ahead of time (requires knowing item size beforehand).