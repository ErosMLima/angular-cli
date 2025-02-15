import {join} from 'path';
import {ng} from '../../../utils/process';
import {expectFileToMatch} from '../../../utils/fs';


export default function() {
  const modulePath = join('src', 'app', 'app.module.ts');

  return ng('generate', 'component', 'test-component', '--export')
    .then(() => expectFileToMatch(modulePath, /exports: \[\n(\s*)  TestComponentComponent\n\1\]/))

    // Try to run the unit tests.
    .then(() => ng('test', '--watch=false'));
}
