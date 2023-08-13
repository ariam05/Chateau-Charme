import { proxy } from 'valtio';

const state = proxy({
    intro: true, //currently on home page?
    color: '#EFBD48', 
    isLogoTexture: true, //is there a logo displayed on the shirt
    isFullTexture: false, //
    logoDecal: './threejs.png', //initial logo
    fullDecal:  './threejs.png',
    
});

export default state;