import { useEffect } from "react";

export const useEndOfPageEffect = (callback, active = true) => {
  useEffect(() => {
    if (!active) return;

    let debounce = false;
    const el = document.querySelector(".App");

    const listener = (e) => {
      const reachedEndOfPage =
        Math.abs(el.scrollHeight - el.scrollTop - el.clientHeight) < 10;

      if (!reachedEndOfPage && debounce) debounce = false;

      if (reachedEndOfPage && !debounce) {
        console.log(`end of page`);

        debounce = true;
        callback();
      }
    };

    const clean = () => el.removeEventListener("scroll", listener);

    el.addEventListener("scroll", listener);

    return clean;
  }, [callback, active]);
};