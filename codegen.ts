import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://headless.local/graphql',
  documents: 'graphql/*.tsx',
  generates: {
    'generated/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
