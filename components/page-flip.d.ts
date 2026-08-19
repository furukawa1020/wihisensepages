declare module "page-flip" {
  export type PageFlipEvent = {
    data: number | string | boolean | object;
    object: PageFlip;
  };

  export class PageFlip {
    constructor(
      element: HTMLElement,
      settings: {
        width: number;
        height: number;
        size?: "fixed" | "stretch";
        minWidth?: number;
        maxWidth?: number;
        minHeight?: number;
        maxHeight?: number;
        drawShadow?: boolean;
        flippingTime?: number;
        usePortrait?: boolean;
        autoSize?: boolean;
        maxShadowOpacity?: number;
        showCover?: boolean;
        mobileScrollSupport?: boolean;
        swipeDistance?: number;
        showPageCorners?: boolean;
        disableFlipByClick?: boolean;
        startPage?: number;
      },
    );
    loadFromImages(images: string[]): void;
    loadFromHTML(items: NodeListOf<HTMLElement> | HTMLElement[]): void;
    flipNext(): void;
    flipPrev(): void;
    turnToNextPage(): void;
    turnToPrevPage(): void;
    turnToPage(page: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
    update(): void;
    destroy(): void;
    on(event: string, callback: (event: PageFlipEvent) => void): PageFlip;
    off(event: string): void;
  }
}
