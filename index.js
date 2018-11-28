const program = require('commander');

const splitWorkingHours = (val) => {
  return val.split(':').map(Number)
}

program
  .option('-u, --unit-price <n>', 'unit price', parseInt)
  .option('-w, --working-hours <n>', 'working hours', splitWorkingHours)
  .parse(process.argv);

(async () => {
  console.log(
    Math.round(program.unitPrice * (program.workingHours[0] + program.workingHours[1] / 60))
  )
})();
