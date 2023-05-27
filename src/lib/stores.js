import { readable, writable } from 'svelte/store';

import ExpressIcon from '$lib/TrainingsIcons/training-express.png';
import CardioIcon from '$lib/TrainingsIcons/training-cardio.png';
import StretchIcon from '$lib/TrainingsIcons/training-stretch.png';
import training1 from '$lib/TrainingsIcons/training1.jpg';
import training2 from '$lib/TrainingsIcons/training2.jpg';
import training3 from '$lib/TrainingsIcons/training3.jpg';
import training4 from '$lib/TrainingsIcons/training4.jpg';
import dumbbell from '$lib/icons/dumbbell.svg';
import timer from '$lib/icons/timer.svg';

export const trainingsInfo = readable(
    [
        {id: 0, name: 'Экспресс\u00A0- тренировка', bgcolor: 'bg-pink', img: ExpressIcon},
        {id: 1, name: 'Кардио тренировка', bgcolor: 'bg-l-blue', img: CardioIcon},
        {id: 2, name: 'Стретчинг тренировка', bgcolor: 'bg-sand', img: StretchIcon},
        {id: 3, name: 'Стретчинг тренировка', bgcolor: 'bg-sand', img: StretchIcon},
    ]
)

export const exercises = readable(
    [
        {id: 0, name: 'Отведение бедра в сторону в фитнес\u2011резинке', icon: dumbbell, amount: '25', img: training1},
        {id: 1, name: 'Наклоны вперед в фитнес\u2011резинке', icon: timer, amount: '2 мин', img: training2},
        {id: 2, name: 'Подъём бедра в фитнес\u2011резинке', icon: timer, amount: '2 мин', img: training3},
        {id: 3, name: 'Отведение бедра в сторону в фитнес\u2011резинке', icon: dumbbell, amount: '25', img: training4},
        {id: 3, name: 'Отведение бедра в сторону в фитнес\u2011резинке', icon: dumbbell, amount: '25', img: training4},
        {id: 3, name: 'Отведение бедра в сторону в фитнес\u2011резинке', icon: dumbbell, amount: '25', img: training4},
    ]
)


export const linkRoad = readable(
    'https://5ab9-212-58-120-54.ngrok-free.app'
    )


export let currentTraining = writable(1);