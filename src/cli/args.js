const isEven = (number) => number % 2 === 0;

const parseArgs = () => {
  const args = process.argv.slice(2);
  const keys = args.filter((value, index) => isEven(index));
  const values = args.filter((value, index) => !isEven(index));
  console.log(
    keys
      .map((key) => key.replace(/^--/, ""))
      .map((key, index) => `${key} is ${values[index]}`)
      .join(", ")
  );
};

parseArgs();
