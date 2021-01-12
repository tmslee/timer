const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (key, data) => {
  if (data.ctrl && data.name === 'c') {
    console.log('THanks for using me, ciao!');
    process.exit();
  }
  else {
    if(data.name === 'b'){
      console.log('\u0007');
    } else if (!isNaN(Number(data.name))) {
      let time = Number(data.name);
      console.log(`setting timer for ${time} seconds ...`);
      setTimeout(() => console.log('\u0007'), time*1000);
    }
  }
})