import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}