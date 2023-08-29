const yargs = require("yargs");

yargs
  .command("greet", "greet a user", (yargs) => {
    yargs.option("name", {
      alias: "name",
      description: "enter you name",
      type: "tring",
      demandOption: true,
    });
  })
  .help().argv;

const argv = yargs.argv;
console.log(argv);

if (argv._[0] == "greet") {
  console.log("hi", argv.name);
}
