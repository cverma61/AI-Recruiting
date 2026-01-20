import React from 'react';
import { renderToString } from 'react-dom/server';
import { Router } from 'wouter';
import { memoryLocation } from './lib/wouter-memory-location';
import App from './App';
import { articles } from './lib/articles';

export function render(url: string) {
  const { hook } = memoryLocation({ path: url, static: true });
  return renderToString(
    <Router hook={hook}>
      <App />
    </Router>
  );
}

export const routes = [
  '/',
  '/consultation',
  '/buyer-guides',
  '/comparisons',
  '/reviews',
  '/resources',
  ...articles.map(article => `/articles/${article.slug}`)
];
