import { FC, MutableRefObject } from 'react';
import { Map } from "yandex-maps";

import { Constituency } from 'src/entities/constituency/types/constituency.ts';

import './app__constituency.css';

export interface AppConstituencyProps {
    mapRef: MutableRefObject<Map | null>;
    constituency: Constituency;
}

export const AppConstituency: FC<AppConstituencyProps> = ({ constituency, mapRef }) => {
    const {title, center, zoom} = constituency;

    return (
        <button
            className="app__constituency"
            onClick={() => {
                mapRef.current?.setZoom(zoom);
                mapRef.current?.panTo(center);
            }}
        >
            {title}
        </button>
    );
}
