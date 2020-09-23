process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spinner = function(specials) {
  let delay = 0;

  for (let i = 0; i < 3; i++) {
    for (const special of specials) {
        setTimeout(() => {
          process.stdout.write(special);
        }, delay += 200);
    }
  }
}

const specials = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

spinner(specials);
