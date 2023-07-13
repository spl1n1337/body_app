import { r as readable, w as writable } from "./index2.js";
const ExpressIcon = "/_app/immutable/assets/training-express.b30fc239.png";
const CardioIcon = "/_app/immutable/assets/training-cardio.67e05c83.png";
const StretchIcon = "/_app/immutable/assets/training-stretch.0e3110b0.png";
const training1 = "/_app/immutable/assets/training1.5dfc5065.jpg";
const training2 = "/_app/immutable/assets/training2.cfa9b003.jpg";
const training3 = "/_app/immutable/assets/training3.68a7d6c9.jpg";
const training4 = "/_app/immutable/assets/training4.6e4d894a.jpg";
const dumbbell = "/_app/immutable/assets/dumbbell.5ea815ac.svg";
const timer = "/_app/immutable/assets/timer.ea8be01b.svg";
readable(
  [
    { id: 0, name: "Экспресс - тренировка", bgcolor: "bg-pink", img: ExpressIcon },
    { id: 1, name: "Кардио тренировка", bgcolor: "bg-l-blue", img: CardioIcon },
    { id: 2, name: "Стретчинг тренировка", bgcolor: "bg-sand", img: StretchIcon },
    { id: 3, name: "Стретчинг тренировка", bgcolor: "bg-sand", img: StretchIcon }
  ]
);
readable(
  [
    { id: 0, name: "Отведение бедра в сторону в фитнес‑резинке", icon: dumbbell, amount: "25", img: training1 },
    { id: 1, name: "Наклоны вперед в фитнес‑резинке", icon: timer, amount: "2 мин", img: training2 },
    { id: 2, name: "Подъём бедра в фитнес‑резинке", icon: timer, amount: "2 мин", img: training3 },
    { id: 3, name: "Отведение бедра в сторону в фитнес‑резинке", icon: dumbbell, amount: "25", img: training4 },
    { id: 3, name: "Отведение бедра в сторону в фитнес‑резинке", icon: dumbbell, amount: "25", img: training4 },
    { id: 3, name: "Отведение бедра в сторону в фитнес‑резинке", icon: dumbbell, amount: "25", img: training4 }
  ]
);
const linkRoad = readable(
  // 'http://127.0.0.1:8000'
  "https://96ed-212-58-120-54.ngrok-free.app"
  // "https://6959-212-58-120-54.ngrok-free.app"
);
let currentTraining = writable(1);
let pickerOutput = writable({});
export {
  currentTraining as c,
  dumbbell as d,
  linkRoad as l,
  pickerOutput as p,
  timer as t
};
