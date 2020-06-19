import { icons } from './icons';

export function getRandomIcon() {
    const index = Math.floor(Math.random() * icons.length);
    return icons[index];
}
