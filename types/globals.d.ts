declare global {
  var jQuery: {
    (arg: any, context?: any): any;
    fn: Record<string, unknown>;
  } | undefined;

  var WOW: { new (): { init(): void } } | undefined;

  var bootstrap:
    | {
        Carousel: {
          getOrCreateInstance(
            el: HTMLElement,
            opts?: Record<string, unknown>,
          ): { cycle(): void };
        };
        Collapse: {
          getOrCreateInstance(el: HTMLElement, opts?: unknown): { hide(): void };
        };
      }
    | undefined;
}

export {};