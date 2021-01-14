/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface WageOutput {
        "futureWage": number;
        "futureWageByWeeks": number;
        "pensionPayments": number;
        "presentWage": number;
    }
}
declare global {
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
        "app-root": HTMLAppRootElement;
        "wage-output": HTMLWageOutputElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface WageOutput {
        "futureWage"?: number;
        "futureWageByWeeks"?: number;
        "pensionPayments"?: number;
        "presentWage"?: number;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "wage-output": WageOutput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "wage-output": LocalJSX.WageOutput & JSXBase.HTMLAttributes<HTMLWageOutputElement>;
        }
    }
}