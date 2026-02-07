
import { Trainer, Activity } from './types';

export const TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Daniel Salgado',
    specialty: 'Powerlifting & Fuerza',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'Especialista en levantamientos pesados y biomecánica aplicada al rendimiento.'
  },
  {
    id: '2',
    name: 'Victor Baston',
    specialty: 'Entrenamiento Funcional',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'Apasionado por el movimiento natural y la agilidad para la vida cotidiana.'
  },
  {
    id: '3',
    name: 'Antonio Dominguez',
    specialty: 'Nutrición Deportiva',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'Transformando cuerpos a través de la ciencia de la alimentación y el entreno.'
  },
  {
    id: '4',
    name: 'Nayara Nogueira',
    specialty: 'Yoga & Pilates',
    image: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'Buscando el equilibrio perfecto entre mente, cuerpo y flexibilidad.'
  },
  {
    id: '5',
    name: 'Alex Esqueleton',
    specialty: 'HIIT & Boxeo',
    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'Energía pura. Clases de alta intensidad diseñadas para romper tus límites.'
  },
  {
    id: '6',
    name: 'Montse',
    specialty: 'English Yoga & Crossfit',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'Monitora internacional. Imparte sus clases en inglés para unir fitness e idiomas.'
  }
];

export const SCHEDULE: Activity[] = [
  { id: 'a1', title: 'Powerlifting Pro', trainer: 'Daniel Salgado', time: '08:00', day: 'Lunes', category: 'Fuerza' },
  { id: 'a2', title: 'Flow Yoga', trainer: 'Nayara Nogueira', time: '10:00', day: 'Lunes', category: 'Yoga' },
  { id: 'a8', title: 'English Yoga', trainer: 'Montse', time: '11:30', day: 'Lunes', category: 'English Classes' },
  { id: 'a3', title: 'Boxeo Explosivo', trainer: 'Alex Esqueleton', time: '18:00', day: 'Martes', category: 'Boxeo' },
  { id: 'a9', title: 'English Crossfit', trainer: 'Montse', time: '19:30', day: 'Martes', category: 'English Classes' },
  { id: 'a4', title: 'Funcional Core', trainer: 'Victor Baston', time: '19:30', day: 'Miércoles', category: 'Cardio' },
  { id: 'a10', title: 'Pilates Reformer', trainer: 'Nayara Nogueira', time: '09:00', day: 'Jueves', category: 'Pilates' },
  { id: 'a5', title: 'HIIT Intenso', trainer: 'Alex Esqueleton', time: '07:30', day: 'Jueves', category: 'HIIT' },
  { id: 'a6', title: 'Zen Meditation', trainer: 'Nayara Nogueira', time: '12:00', day: 'Viernes', category: 'Yoga' },
  { id: 'a11', title: 'English Crossfit', trainer: 'Montse', time: '18:00', day: 'Viernes', category: 'English Classes' },
  { id: 'a7', title: 'Taller de Nutrición', trainer: 'Antonio Dominguez', time: '11:00', day: 'Sábado', category: 'Fuerza' },
  { id: 'a12', title: 'WOD Competition', trainer: 'Daniel Salgado', time: '10:00', day: 'Domingo', category: 'Crossfit' },
];

export const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
