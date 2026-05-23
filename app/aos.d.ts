declare module "aos" {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    mirror?: boolean;
    offset?: number;
    disable?: string | boolean | ((el: HTMLElement) => boolean);
    easing?: string;
    delay?: number;
  }

  function init(options?: AosOptions): void;
  function refresh(): void;
  function refreshHard(): void;

  export default {
    init,
    refresh,
    refreshHard,
  };
}
