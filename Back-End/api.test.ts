import client from "./src/config/connection"
import { expect, jest, test } from '@jest/globals';

describe('client module', () => {
    const mockAdd = jest.fn<typeof add>();

    test('adds 1 + 2 to equal 3', () => {
        expect(client.connect()
            .then(() => console.log('connected database'))
            .catch((err) => console.error('failed', err))).toBe(client.connect()
                .then(() => console.log('connected database'))
                .catch((err) => console.error('failed', err)));
    });
});



