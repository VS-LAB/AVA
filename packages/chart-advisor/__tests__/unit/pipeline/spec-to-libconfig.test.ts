import { Advice, specToLibConfig } from '../../../src';

describe('API - specToLibConfig', () => {
  describe('Results', () => {
    test('should work for basic dataset', () => {
      const spec: Advice = {
        type: 'pie_chart',
        spec: {
          mark: {
            type: 'arc',
          },
          encoding: {
            theta: {
              field: 'value',
              type: 'quantitative',
            },
            color: {
              field: 'city',
              type: 'nominal',
            },
          },
        },
        score: 1.8111111111111111,
      };

      const libConfig = specToLibConfig(spec);

      console.log(libConfig);
    });
  });
});