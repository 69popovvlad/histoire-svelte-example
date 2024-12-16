const constructRgbColorValue =
  (name) =>
  ({ opacityValue }) => {
    return `rgba(var(--color-${name}), ${opacityValue || 1})`;
  };

const constructOklchColorValue =
  (name) =>
  ({ opacityValue }) => {
    return `oklch(var(--color-${name}) / ${opacityValue || 1})`;
  };

const ColorValueType = {
  RGB: 0,
  OKLCH: 1,
};
Object.freeze(ColorValueType);

/**
 *
 * @param {ColorValueType} type
 * @param {string} name
 */
const constructColorValue = (type, name) => {
  switch (type) {
    case ColorValueType.RGB:
      return constructRgbColorValue(name);
    case ColorValueType.OKLCH:
      return constructOklchColorValue(name);
    default:
      throw Error('unsupported color type: ' + type);
  }
};

const appColors = [
  { name: 'dark-200', type: ColorValueType.RGB },
  { name: 'dark-700', type: ColorValueType.RGB },
  { name: 'dark-900', type: ColorValueType.RGB },

  { name: 'yellow-700', type: ColorValueType.RGB },
  { name: 'yellow-900', type: ColorValueType.RGB },

  { name: 'primary', type: ColorValueType.RGB },

  { name: 'primary-50', type: ColorValueType.OKLCH },
  { name: 'primary-100', type: ColorValueType.OKLCH },
  { name: 'primary-200', type: ColorValueType.OKLCH },
  { name: 'primary-300', type: ColorValueType.OKLCH },
  { name: 'primary-400', type: ColorValueType.OKLCH },
  { name: 'primary-500', type: ColorValueType.OKLCH },
  { name: 'primary-600', type: ColorValueType.OKLCH },
  { name: 'primary-700', type: ColorValueType.OKLCH },
  { name: 'primary-800', type: ColorValueType.OKLCH },
  { name: 'primary-900', type: ColorValueType.OKLCH },
  { name: 'primary-950', type: ColorValueType.OKLCH },

  { name: 'main', type: ColorValueType.RGB },
  { name: 'empty', type: ColorValueType.RGB },
  { name: 'popup', type: ColorValueType.RGB },
  { name: 'input-border', type: ColorValueType.RGB },
  { name: 'pink-gradient', type: ColorValueType.RGB },
  { name: 'blue-gradient', type: ColorValueType.RGB },
  { name: 'purple-base', type: ColorValueType.RGB },
  { name: 'purple-base-light', type: ColorValueType.RGB },
  { name: 'purple-base-dark', type: ColorValueType.RGB },
  { name: 'purple-dark', type: ColorValueType.RGB },
  { name: 'warning-info', type: ColorValueType.RGB },
  { name: 'disabled-text', type: ColorValueType.RGB },
];

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: (() => {
        const result = {};

        for (const appColor of appColors) {
          result[appColor.name] = constructColorValue(
            appColor.type,
            appColor.name,
          );
        }

        return result;
      })(),
    },
  },

  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],
};
