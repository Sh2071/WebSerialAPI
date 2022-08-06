//Shows connected devices
connect.addEventListener('click', () => {
const usbVendorId = 0xABCD;
navigator.serial.requestPort({ filters: [{ usbVendorId }]}).then((port) => {
  // Connect to `port` or add it to the list of available ports.
}).catch((e) => {
  // The user didn't select a port.
});
});


//**Note: await must be inside async function or the buttons won't work

//define the baudRate
async function baudrate(){
await port.open({ baudRate: 9600 });
}
baudrate();

//writing data to the ports
async function writer(){
const encoder = new TextEncoder();
const writer = port.writable.getWriter();
await writer.write(res);
// releaseLock() is required for the serial port to be closed later.
writer.releaseLock();
}
writer();
