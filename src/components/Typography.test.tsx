import { describe, it, expect } from 'vitest';
// @ts-ignore
import fs from 'fs';
// @ts-ignore
import path from 'path';

describe('Typography Scale Tokens', () => {
  // @ts-ignore
  const cssPath = path.resolve(__dirname, '../styles/index.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8') as string;

  it('defines all standard typography scale font-sizes in index.css', () => {
    const expectedFontSizes = [
      '--fs-xs',
      '--fs-sm',
      '--fs-base',
      '--fs-md',
      '--fs-lg',
      '--fs-xl',
      '--fs-2xl',
      '--fs-3xl',
      '--fs-4xl',
      '--fs-5xl',
    ];

    expectedFontSizes.forEach((token) => {
      expect(cssContent).toContain(token);
    });
  });

  it('defines standard line heights in index.css', () => {
    const expectedLineHeights = [
      '--lh-tight',
      '--lh-snug',
      '--lh-normal',
      '--lh-relaxed',
    ];

    expectedLineHeights.forEach((token) => {
      expect(cssContent).toContain(token);
    });
  });

  it('defines standard font weights in index.css', () => {
    const expectedFontWeights = [
      '--fw-normal',
      '--fw-medium',
      '--fw-semibold',
      '--fw-bold',
    ];

    expectedFontWeights.forEach((token) => {
      expect(cssContent).toContain(token);
    });
  });

  it('defines typography utility classes in index.css', () => {
    const expectedClasses = [
      '.text-xs',
      '.text-sm',
      '.text-base',
      '.text-md',
      '.text-lg',
      '.text-xl',
      '.text-2xl',
      '.text-3xl',
      '.text-4xl',
      '.text-5xl',
      '.fw-normal',
      '.fw-medium',
      '.fw-semibold',
      '.fw-bold',
    ];

    expectedClasses.forEach((cls) => {
      expect(cssContent).toContain(cls);
    });
  });
});
