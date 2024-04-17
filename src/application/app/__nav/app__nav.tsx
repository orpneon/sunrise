import { FC, ReactNode } from 'react';

import './app__nav.css';

export interface AppNavProps {
    children?: ReactNode;
}

export const AppNav: FC<AppNavProps> = ({ children }) => (
    <nav className="app__nav">{children}</nav>
);
