import { program } from "commander";
import axios from "axios";
import chalk from "chalk";

program
  .version("1.0.0")
  .description("CLI tool to search npm packages by name and description")
  .arguments("<search-term>")
  .option("-l, --limit <number>", "Limit number of results", 5)
  .action(async (searchTerm, options) => {
    try {
      const res = await axios.get(`https://registry.npmjs.org/-/v1/search`, {
        params: {
          text: searchTerm,
          size: options.limit,
        },
      });

      const packages = res.data.objects;

      if (packages.length === 0) {
        console.log(chalk.yellow("No packages found."));
        return;
      }

      console.log(chalk.blue.bold(`\nFound ${packages.length} packages:\n`));

      packages.forEach((pkg, idx) => {
        const { name, version, description } = pkg.package;
        const packageLink = `https://www.npmjs.com/package/${name}`;

        console.log(chalk.green.bold(`${idx + 1}. ${name}`));
        console.log(chalk.yellow(`    Version: ${version}`));
        console.log(`    Description: ${description || "No description"}`);
        console.log(chalk.cyan(`    Link: ${packageLink}`));
        console.log(chalk.dim("    --------------------"));
      });
    } catch (error) {
      console.log(chalk.red("Error: ", error.message));
      process.exit(1);
    }
  });

program.parse(process.argv);
