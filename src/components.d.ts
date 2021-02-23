/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppFooter {
    }
    interface AppRoot {
    }
    interface WageOutput {
        "futureWage": number;
        "futureWageByWeeks": number;
        "pensionPayments": number;
        "presentWage": number;
        "presentWageAsSa": number;
    }
}
declare global {
    interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {
    }
    var HTMLAppFooterElement: {
        prototype: HTMLAppFooterElement;
        new (): HTMLAppFooterElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLWageOutputElement extends Components.WageOutput, HTMLStencilElement {
    }
    var HTMLWageOutputElement: {
        prototype: HTMLWageOutputElement;
        new (): HTMLWageOutputElement;
    };
    interface HTMLElementTagNameMap {
        "app-footer": HTMLAppFooterElement;
        "app-root": HTMLAppRootElement;
        "wage-output": HTMLWageOutputElement;
    }
}
declare namespace LocalJSX {
    interface AppFooter {
    }
    interface AppRoot {
    }
    interface WageOutput {
        "futureWage"?: number;
        "futureWageByWeeks"?: number;
        "pensionPayments"?: number;
        "presentWage"?: number;
        "presentWageAsSa"?: number;
    }
    interface IntrinsicElements {
        "app-footer": AppFooter;
        "app-root": AppRoot;
        "wage-output": WageOutput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-footer": LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "wage-output": LocalJSX.WageOutput & JSXBase.HTMLAttributes<HTMLWageOutputElement>;
        }
    }
}
