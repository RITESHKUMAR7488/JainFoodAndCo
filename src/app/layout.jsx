import './globals.css';
import { AppChrome } from './AppChrome';
export const metadata = { title: 'Jain Desi & Pure', description: 'Stone-ground attas, single-origin spices and wood-pressed oils.' };
export default function RootLayout({ children }) { return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"/></head><body><AppChrome>{children}</AppChrome></body></html>; }
