import "~/assets/styles/tailwind.css";
import ReactDom from "react-dom/client";
import ZenUI from "@/components/zen-ui";
import type { ContentScriptContext } from "#imports";

const whereToShowCustomUI = [new MatchPattern("*://*.youtube.com/")];
let uiRef: ShadowRootContentScriptUi<ReactDom.Root> | null = null;

const checkIfWeCanInjectUI = (newUrl: string) => {
  return whereToShowCustomUI.some((pattern) => pattern.includes(newUrl));
};

const mountShadowRootUi = async (ctx: ContentScriptContext) => {
  uiRef = await createShadowRootUi(ctx, {
    name: "zen-ui",
    position: "inline",
    anchor: "body",
    onMount: (container) => {
      const app = document.createElement("div");
      container.appendChild(app);

      const root = ReactDom.createRoot(app);
      root.render(<ZenUI />);
      return root;
    },

    onRemove: (root) => {
      root?.unmount();
    },
  });

  uiRef.mount();
};

export default defineContentScript({
  matches: ["*://*.youtube.com/*"],
  cssInjectionMode: "ui",
  runAt: "document_end",

  async main(ctx) {
    console.log("content.ts initialized", ctx);

    ctx.addEventListener(window, "wxt:locationchange", async ({ newUrl }) => {
      if (!uiRef && checkIfWeCanInjectUI(newUrl.toString())) {
        await mountShadowRootUi(ctx);
      }
    });

    if (checkIfWeCanInjectUI(window.location.href)) {
      await mountShadowRootUi(ctx);
    }
  },
});
