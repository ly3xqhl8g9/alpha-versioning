// #region imports
    // #region external
    import {
        segmentKindMap,
    } from '../data/constants';

    import {
        AlphaSegments,
        AlphaSegmentKind,
        AlphaUpdateType,
    } from '../data/interfaces';
    // #endregion external
// #endregion imports



// #region module
const splitAlphaSegments = (
    value: string,
) => {
    const split = value.split('-');
    const base = split[0];
    const developmenterData = split[1];

    if (!base || !developmenterData) {
        return;
    }

    const baseSplit = base.split('.');
    const enderData = baseSplit[0];
    const launcherData = baseSplit[1];
    const revisionerData = baseSplit[2];

    if (
        !enderData
        || !launcherData
        || !revisionerData
    ) {
        return;
    }

    const ender = parseInt(baseSplit[0]);
    const launcher = parseInt(baseSplit[1]);
    const revisioner = parseInt(baseSplit[2]);
    const developmenter = parseInt(split[1]);

    if (
        ender >= 0
        && launcher >= 0
        && revisioner >= 0
        && developmenter >= 0
    ) {
        const segments: AlphaSegments = {
            ender,
            launcher,
            revisioner,
            developmenter,
        };

        return segments;
    }

    return;
}


const isAlphaVersion = (
    value: string,
): boolean => {
    const segments = splitAlphaSegments(value);

    if (!segments) {
        return false;
    }

    return true;
}


const getAlphaSegments = (
    value: string,
): AlphaSegments => {
    const segments = splitAlphaSegments(value);

    if (!segments) {
        return {
            ender: 0,
            launcher: 0,
            revisioner: 0,
            developmenter: 0,
        };
    }

    return segments;
}


const updateAlphaSegment = (
    segments: AlphaSegments,
    kind: AlphaSegmentKind,
    type: AlphaUpdateType,
) => {
    const selector = segmentKindMap[kind];

    if (!selector) {
        return segments;
    }

    if (type === 'increase') {
        segments[selector] += 1;
    } else {
        if (segments[selector] - 1 < 0) {
            segments[selector] = 0;
        } else {
            segments[selector] -= 1;
        }
    }

    return segments;
}


const updateAlphaVersion = (
    value: string,
    kind: AlphaSegmentKind = 'development',
    type: AlphaUpdateType = 'increase',
): string => {
    const segments = getAlphaSegments(value);

    const updatedSegments = updateAlphaSegment(
        segments,
        kind,
        type,
    );

    const {
        ender,
        launcher,
        revisioner,
        developmenter,
    } = updatedSegments;

    const alphaValue = `${ender}.${launcher}.${revisioner}-${developmenter}`;

    return alphaValue;
}
// #endregion module



// #region exports
export {
    isAlphaVersion,
    getAlphaSegments,
    updateAlphaVersion,
};
// #endregion exports
