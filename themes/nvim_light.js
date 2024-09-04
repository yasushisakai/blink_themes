// neovim default color scheme light
const foreground = '#14161b';
const background = '#E0E2EA';

const black = '#C4C6CD';
const red = '#590008'
const green = '#005523';
const yellow = '#6b5300'
const blue = '#004c63';
const magenta = '#470045';
const cyan = '#007373';
const white = '#2c2e33';

const light_black = '#9b9ea4';
const light_red ='#640009';
const light_green ='#006029';
const light_yellow ='#765d00';
const light_blue ='#005574';
const light_magenta ='#52004f';
const light_cyan ='#008080';
const light_white ='#4f5258';

t.prefs_.set('color-palette-overrides',
             [black, red, green, yellow, blue, magenta, cyan, white, light_black, light_red, light_green, light_yellow, light_blue, light_magenta, light_cyan, light_white]);

t.prefs_.set('foreground-color', foreground);
t.prefs_.set('background-color', background);
t.prefs_.set('cursor-color', foreground);
