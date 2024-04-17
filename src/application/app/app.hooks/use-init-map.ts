import { useEffect, useRef, useState } from "react";
import { Map } from "yandex-maps";

import { CONSTITUENCIES, MAX_ZOOM, MIN_ZOOM } from "../app.constants.ts";

export const useInitMap = () => {
    const [loading, setLoading] = useState(true);
    const mapRef = useRef<Map | null>(null);

    useEffect(() => {
        const currentConstituency = CONSTITUENCIES[0];
        const center = currentConstituency.center;
        const zoom = currentConstituency.zoom;

        window.ymaps?.ready(() => {
            setLoading(false);

            mapRef.current = new window.ymaps.Map("map", {
                center,
                zoom,
                controls: [],
            }, {
                minZoom: MIN_ZOOM,
                maxZoom: MAX_ZOOM,
            });
        });

        return () => mapRef.current?.destroy();
    }, []);

    return { loading, mapRef };
}
