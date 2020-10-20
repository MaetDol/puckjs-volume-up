const controls = require('ble_hid_controls');
NRF.setServices( undefined, { hid: controls.report });

setWatch( e => {
  controls.volumeUp();
  digitalPulse( LED1, 1, 100 );
}, BTN, { edge: 'falling', repeat: true, debounce: 50 });
