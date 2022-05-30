import { createHooks } from "atomico/test-hooks";
import { useDemo } from "../base";
import { describe, expect, it } from "vitest";

describe("my test suit", () => {
    it("my test", () => {
        const hooks = createHooks();

        const initState = "example";

        const firstValue = hooks.load(() => useDemo(initState));

        expect(initState).toBe(firstValue);
    });
});
