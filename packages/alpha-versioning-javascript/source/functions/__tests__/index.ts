// #region imports
    // #region external
    import {
        isAlphaVersion,
        getAlphaSegments,
        updateAlphaVersion,
    } from '../';
    // #endregion external
// #endregion imports



// #region module
describe('isAlphaVersion', () => {
    it('is not alpha version', () => {
        const value = 'a.b.c-d';
        const result = isAlphaVersion(value);

        expect(result).toBeFalsy();
    });

    it('is alpha version', () => {
        const value = '0.1.2-3';
        const result = isAlphaVersion(value);

        expect(result).toBeTruthy();
    });
});


describe('getAlphaSegments', () => {
    it('gets alpha segments', () => {
        const value = '0.1.2-3';
        const result = getAlphaSegments(value);

        expect(result.ender).toEqual(0);
        expect(result.launcher).toEqual(1);
        expect(result.revisioner).toEqual(2);
        expect(result.developmenter).toEqual(3);
    });
});


describe('updateAlphaVersion', () => {
    it('update alpha version developmenter', () => {
        const value = '0.1.2-3';
        const result = updateAlphaVersion(value);

        expect(result).toEqual('0.1.2-4');
    });

    it('update alpha version revisioner', () => {
        const value = '0.1.2-3';
        const result = updateAlphaVersion(
            value,
            'revision',
        );

        expect(result).toEqual('0.1.3-0');
    });

    it('update alpha version launcher', () => {
        const value = '0.1.2-3';
        const result = updateAlphaVersion(
            value,
            'launch',
        );

        expect(result).toEqual('0.2.0-0');
    });

    it('update alpha version ender', () => {
        const value = '0.1.2-3';
        const result = updateAlphaVersion(
            value,
            'end',
        );

        expect(result).toEqual('1.0.0');
    });
});
// #endregion module
