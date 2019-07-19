import webpack from 'webpack';
import path from 'path';

const config: webpack.Configuration = {
  entry: {
    index: [path.resolve(__dirname, './src/index.ts')]
  },
  output: {
    path: path.resolve(__dirname, './lib'),
    filename: '[name].js',
    library: 'MyConstants',
    libraryTarget: 'umd',
  },
  externals: [
  ],
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)$/,
        exclude: /node_modules/,
        loaders: [
            {
                loader: 'ts-loader',
                options: {
                configFile: 'tsconfig.json',
                },
            },
        ],
      },
    ],
  },
};

export default config;
