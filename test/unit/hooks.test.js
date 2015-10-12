import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('sails-rest-api:hooks', () => {
  describe('Should properly generate hooks', () => {
    before(done => test.run(path.join(__dirname, '../../src/hooks')).on('end', done));

    it('Should properly create api files', () => {
      assert.file([
        'api/hooks/pluralize-models.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/hooks/pluralize-models.test.js'
      ]);
    });
  });
});
