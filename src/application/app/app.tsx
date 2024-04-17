import { AppLoading } from "./__loading/app__loading.tsx";
import { AppMap } from "./__map/app__map.tsx";
import { AppNav } from "./__nav/app__nav.tsx";
import { AppConstituency } from "./__constituency/app__constituency.tsx";
import { useInitMap } from "./app.hooks/use-init-map.ts";
import { CONSTITUENCIES } from "./app.constants.ts";

import './app.css';

function App() {
    const { loading, mapRef } = useInitMap();

    return (
        <main className="app">
            {loading && <AppLoading />}
            <AppMap />
            <AppNav>
                {CONSTITUENCIES.map((constituency, index) => (
                    <AppConstituency key={index} constituency={constituency} mapRef={mapRef} />
                ))}
            </AppNav>
        </main>
    )
}

export default App
