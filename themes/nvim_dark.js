// neovim default color scheme dark
const foreground = '#E0E2EA';
const background = '#14161b';

const black = '#2C2E33';
const red = '#E5ADB9'
const green = '#A2DFC0';
const yellow = '#E3CA85'
const blue = '#95C5E5';
const magenta = '#E5B6E6';
const cyan = '#7EDFDE';
const white = '#C4C6CD';

const light_black = '#4f5258';
const light_red ='#FFC0B9';
const light_green ='#B4F6C0';
const light_yellow ='#FCE094';
const light_blue ='#A6DBFF';
const light_magenta ='#FFCAFF';
const light_cyan ='#8CF8F7';
const light_white ='#9b9ea4';

t.prefs_.set('color-palette-overrides',
             [black, red, green, yellow, blue, magenta, cyan, white, light_black, light_red, light_green, light_yellow, light_blue, light_magenta, light_cyan, light_white]);

t.prefs_.set('foreground-color', foreground);
t.prefs_.set('background-color', background);
t.prefs_.set('cursor-color', foreground);
