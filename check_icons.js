
import * as icons from '@icons-pack/react-simple-icons';
const keys = Object.keys(icons);
console.log('Facebook:', keys.filter(k => k.toLowerCase().includes('facebook')));
console.log('LinkedIn:', keys.filter(k => k.toLowerCase().includes('linkedin')));
console.log('X:', keys.filter(k => k.toLowerCase().includes('six') || k === 'SiX' || k === 'X'));
console.log('Twitter:', keys.filter(k => k.toLowerCase().includes('twitter')));
