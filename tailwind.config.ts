import sharedConfig from "@dub/tailwind-config/tailwind.config";
import type { Config } from "tailwindcss";

const config: Pick<Config, "presets"> = {
  presets: [
    {
      ...sharedConfig,
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./ui/**/*.{js,ts,jsx,tsx}",
        "../dub.link/packages/ui/src/**/*.{js,ts,jsx,tsx}",
      ],
    },
  ],
};

export default config;
