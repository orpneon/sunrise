import { Constituency } from 'src/entities/constituency/types/constituency.ts';

export const CONSTITUENCIES: Constituency[] = [{
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

export const MIN_ZOOM = Math.min(...CONSTITUENCIES.map(({zoom}) => zoom));
export const MAX_ZOOM = 17;
