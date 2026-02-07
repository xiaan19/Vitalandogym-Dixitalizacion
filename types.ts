
export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
}

export interface Activity {
  id: string;
  title: string;
  trainer: string;
  time: string;
  day: string;
  category: 'HIIT' | 'Yoga' | 'Fuerza' | 'Cardio' | 'Boxeo' | 'Crossfit' | 'English Classes' | 'Pilates';
}

export interface UserProfile {
  name: string;
  level: string;
  weight: number;
  height: number;
  workoutsCompleted: number;
  joinedDate: string;
}
