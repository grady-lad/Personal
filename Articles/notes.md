# Article Notes

### Keeping order of [setState](https://stackoverflow.com/questions/48563650/does-react-keep-the-order-for-state-updates/48610973)

If setState is down in a eventhandler then all setState call's are batched, which means only one re-render. In React 17 this will be done by default in every method and not just eventHandlers.

### Event loop

[Mirco tasks and the event loop](<[YouTube](https://www.youtube.com/watch?v=cCOL7MC4Pl0)>)

* Using setTimeout loops will not block the UI thread

* When using setTimeout we should be weary when trying to render. Because in the event loop the rendering is on the onther side of the loop and the task processing is on the other

* To use a setTimeoutish alternative use requestAnimationFrame (RAF), its like processes the task at the same time when processing rendering

* Using setTimeout instead of RAF will cause too many unecessary rendering as the event loop will try to process so many tasks but it doesn't need to.

```javascript
button.addEventListner("click", () => {
  box.style.transfrom = "translateX(1000px)";
  box.style.transistion = "transform 1s ease-out";
  /**
  Without the below line this would not work!
  Because when this task has processed.
  the transform will be 500 because the
  task has been completed.

Using getComputedStyle will get the style above before the rendering.

We should be using RAF, but safari
and edge process RAF after the render rather than before.
 **/
  getComputedStyle(box).transform;
  button.style.transfrom = "translateX(500px)";
});
```

* #### MicroTasks
  * Think of these as promises. They can block the ui if the event loop has to continouslt processes microtasks so be carfeul

  * Be careful with Events and process, there are differences when events are triggered via js and by user ineractions. Micro task are processed immeditaly via user interactions, but when processing events via js which is synchronous, micro tasks are queued and only processed once the synchronous code is processed.
* #### Compositor thread
  * takes the pixel data and arranges into the page.
  * compositor can not draw, but can already drawn bitmaps and move them around.
* #### Multiple Event loops

  * Any time we create workers, they have their own event loops
  * Different pages must share the same event loop if they can gain synchronous access to eachother
  * When opening a new page, the new page shares the same event loop and has access to its parent page via `window.opener.document` !!
  * `rel="noopener"` will stop this, add on the anchor tag
  * The above will only work on same origin. But when on cross origin it can navigate the url of the parent page via `window.opener.location`


### Use css over js

https://calendar.perfplanet.com/2020/html-and-css-techniques-to-reduce-your-javascript/
