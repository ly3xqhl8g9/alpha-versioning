// #region module
export interface AlphaSegments {
    ender: number;
    launcher: number;
    revisioner: number;
    developmenter: number;
}

export type AlphaSegmentKind = 'end' | 'launch' | 'revision' | 'development';

export type AlphaUpdateType = 'increase' | 'decrease';
// #endregion module
