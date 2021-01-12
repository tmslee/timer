let args = process.argv.splice(2);

for(let arg of args){
  arg = Number(arg);
  if(!isNaN(arg) && arg >= 0){
    setTimeout(()=>{
      process.stdout.write('.');
    }, arg*1000);
  }
}