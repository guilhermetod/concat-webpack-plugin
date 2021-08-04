import path from 'path';

import concat from 'concat';
import fs from 'fs-extra';
import globby from 'globby';
import type { Compiler, WebpackPluginInstance } from 'webpack';

export class ConcatWebpackPlugin implements WebpackPluginInstance {
  constructor(private outputFile: string) { }

  apply(compiler: Compiler): void {
    compiler.hooks.afterEmit.tapPromise(this.constructor.name, async () => {
      const { output } = compiler.options;
      const outputPath = output.path ?? path.dirname(output.filename as string);
      const sourceFiles = path.join(outputPath, '*.js');

      await fs.ensureDir(path.dirname(this.outputFile));

      await concat(globby.sync(sourceFiles), this.outputFile);
    });
  }
}
