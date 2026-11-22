import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import aadhaarCardRegenImg from './assets/images/regenerated_image_1794745526539.webp';

(window as any).__aadhaarCardRegenImgUrl = aadhaarCardRegenImg;
const existingHeroAadhaarImg = document.querySelector('#renterHeroAadhaarCardBox > img') as HTMLImageElement | null;
if (existingHeroAadhaarImg && aadhaarCardRegenImg) {
  existingHeroAadhaarImg.src = aadhaarCardRegenImg;
}

createRoot(document.getElementById('root')!).render(<App />);
