export default defineBackground(() => {
  console.log('Hello background from melvin!', { id: browser.runtime.id });
});
