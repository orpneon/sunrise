import {useEffect, useRef, useState} from "react";
import {Map} from "yandex-maps";

import './App.css';

const CONSTITUENCIES = [{
    title: 'Схема одномандатных округов ГО Верхняя Тура',
    center: [59.875344, 58.357110],
    zoom: 12,
}, {
    title: 'Схема округов ГО Верхотурский',
    center: [61.529170, 58.727723],
    zoom: 9,
}, {
    title: 'Схема округов Артинского ГО',
    center: [58.236285, 56.536780],
    zoom: 11,
}, {
    title: 'Схема округов Кушвинского ГО',
    center: [59.808903, 58.276302],
    zoom: 12,
}, {
    title: 'Схема округов Алапаевского МО',
    center: [61.692997, 58.006192],
    zoom: 14,
}];

const MIN_ZOOM = Math.min(...CONSTITUENCIES.map(({ zoom }) => zoom));
const MAX_ZOOM = 17;

function App() {
    const [loading, setLoading] = useState(true);
    const map = useRef<Map | null>(null);

    useEffect(() => {
        const currentConstituency = CONSTITUENCIES[0];
        const center = currentConstituency.center;
        const zoom = currentConstituency.zoom;

        window.ymaps?.ready(() => {
            setLoading(false);

            map.current = new window.ymaps.Map("map", {
                center,
                zoom,
                controls: [],
            }, {
                minZoom: MIN_ZOOM,
                maxZoom: MAX_ZOOM,
            });
        });

        return () => map.current?.destroy();
    }, []);

    return (
        <main className="app">
            {loading && <div className="app__loading">Загрузка...</div>}
            <div id="map" className="app__map"/>
            <nav className="app__nav">
                {CONSTITUENCIES.map(({ title, center, zoom }, index) => (
                    <button
                        key={index}
                        className="app__constituency"
                        onClick={() => {
                            map.current?.setZoom(zoom);
                            map.current?.panTo(center);
                        }}
                    >
                        {title}
                    </button>
                ))}
            </nav>
        </main>
    )
}

export default App
