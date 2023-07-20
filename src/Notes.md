Time to crank up the resolution.

- [ ] What happens when you render an array of `<Pixel>`s?
    <details style="padding-left: 2em">
      <summary>More about arrays of components</summary>
      
      React is capable of handling plenty of components on the screen at once, so let's test it out a bit. Back in your `<App>` component, instead of manually pasting in `<Pixel>`s like this:

  ```js
  return (
    <div>
      <Pixel />
      <Pixel />
      <Pixel />
    </div>
  )
  ```

  try returning an **array** of components, like this (note the absence of a wrapping div):

  ```js
  return [<Pixel />, <Pixel />, <Pixel />]
  ```

  > The ability to return an array of JSX components was introduced with React 16.

  Notes on above:
  Both approaches achieve the same outcome of rendering multiple <Pixel> components. However, there are some key differences between the two implementations:

      Parent Container vs. Direct Array: In the first approach, you wrap the <Pixel> components inside a parent container (a <div> in this case). In the second approach, you directly return an array of components. The second approach is more concise and can be useful when you want to generate components dynamically based on some data or conditions.

      Fragments vs. Parent Container: In the first approach, using a parent container like <div> will create an additional DOM node in the rendered output. On the other hand, when returning an array of components, it doesn't add any extra DOM nodes, as it uses React Fragments implicitly. React Fragments allow you to group multiple components without introducing a new DOM element. The second approach can be more efficient in terms of the DOM structure.

      Key Prop: When rendering an array of components, it's important to assign a unique key prop to each component. React uses this key to efficiently update and re-render components. In the first approach, the parent container implicitly assigns keys to the children, but in the second approach, you must explicitly provide keys, especially if the components have dynamic data.

Performance-wise, both implementations are generally fine for small arrays of components. The key difference is that the second approach with an array of components can be more efficient since it avoids introducing additional DOM nodes. However, for larger arrays, it might be better to use the second approach, as it reduces the overhead of creating and managing multiple DOM nodes. Additionally, using the second approach with explicit keys is essential for efficient updates when the array elements change over time.

In summary, using an array of components with explicit keys is generally preferred for rendering large arrays of components or dynamically generating components based on data. However, for smaller arrays, both implementations are functionally equivalent, and you can choose the one that fits your coding style and readability preferences.

  </details>
