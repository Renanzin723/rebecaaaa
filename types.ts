import React from 'react';

export interface BookFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export enum ComfortTheme {
  Hope = "Esperança",
  Memory = "Memória",
  Healing = "Cura",
  Love = "Amor Eterno"
}