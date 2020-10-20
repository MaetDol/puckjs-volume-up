Memos for me

# puckjs-volume-up
Using Puck as camera capture button.
Based on [this article](https://www.espruino.com/BLE+Music+Control).

# Espruino Web IDE (https://www.espruino.com/ide/)
Using for debugging code, Flashing code on board.
Also work on Android chrome.

# Chrome bluetooth-internals (chrome://bluetooth-internals/)
You can check connected BLE devices, or scanning or forget or blahblah

## Troubleshooting
Actually don't know how fixed, why appeared thoes errors
#### connection failed or no response from board
Fixed by hard reset then update firmware.
#### 0x8 INVALID_STATE
Also hard reset, update firmware.
I think may caused by connect multiple services but not exactly.
If connected well then in bluetooth setting there will be can be found option like toggleable 'input device'


## Refs
- API Document: https://www.espruino.com/Reference
- ble_hid_controls module source code : https://www.espruino.com/modules/ble_hid_controls.js
- Espruino BLE Keyboard short article : https://www.espruino.com/BLE+Keyboard
- Update Puck.js firmware : https://www.espruino.com/Puck.js#firmware-updates
- Hard reset Puck.js : https://www.espruino.com/Puck.js#hard-reset
