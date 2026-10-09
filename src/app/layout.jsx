import './globals.css';
import './catalog.css';
import './updates.css';
import './home-refinements.css';
import './homepage.css';
import './storefront-header.css';
import { AppChrome } from './AppChrome';
export const metadata = { title: 'Jain Desi & Pure', description: 'Fresh atta in two hours in Central Noida on orders of ₹1,000 or more including atta. Explore oils, ghee, spices and more to discover; enquire on WhatsApp.' };
export default function RootLayout({ children }) { return <html lang="en"><head><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"/></head><body><AppChrome>{children}</AppChrome></body></html>; }
