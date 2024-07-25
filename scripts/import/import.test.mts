import { expect, it, describe, vi } from 'vitest';
// import * as importMethods from './import.mts';
import { app, cloneAndCheckout } from './import.mts';
// import { CleanOptions } from 'simple-git';

vi.mock('simple-git', () => {
  const mockGit = {
    clean: vi.fn().mockReturnThis(),
    clone: vi.fn().mockResolvedValue({
      cwd: vi.fn().mockReturnThis(),
    }),
    cwd: vi.fn().mockReturnThis(),
    checkout: vi.fn().mockResolvedValue(undefined),
  };

  mockGit.clone.mockImplementation(() => {
    return {
      cwd: mockGit.cwd,
    };
  });

  return {
    simpleGit: () => mockGit,
    CleanOptions: {
      DRY_RUN: 'n',
    },
  };
});

vi.mock('fs', () => ({
  existsSync: vi.fn().mockImplementation(() => ''),
  mkdirSync: vi.fn().mockImplementation(() => ''),
  promises: () => ({
    readdir: vi.fn().mockImplementation(() => ''),
    rename: vi.fn().mockImplementation(() => ''),
  }),
  rmSync: vi.fn().mockImplementation(() => ''),
}));

describe('import', () => {
  it('clones the correct repo', async () => {
    console.log({ cloneAndCheckout });
    // console.log(importMethods);
    const cloneAndCheckoutSpy = vi.spyOn(await import('./import.mts'), 'cloneAndCheckout');

    await app();
    expect(cloneAndCheckoutSpy).toHaveBeenCalledOnce();

    cloneAndCheckoutSpy.mockRestore();
  });
});
