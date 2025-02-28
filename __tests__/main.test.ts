import { jest } from "@jest/globals";
import * as core from "../__fixtures__/core.js";

jest.unstable_mockModule("@actions/core", () => core);

const { run } = await import("../src/index.js");

describe("main.ts", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    core.getInput.mockImplementation(() => ""); // Default mock: empty input
  });

  it("should set the output to the input", async () => {
    core.getInput.mockImplementation(() => "test");
    await run();
    expect(core.setOutput).toHaveBeenCalledWith("output", "test");
  });
});
