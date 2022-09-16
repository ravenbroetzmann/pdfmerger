import { program } from "commander";
import { mergePdf } from "./merger";

program.name("Pdf Merger");
program.option("-i <filenames...>", "pdf input file name");
program.option("-o <filename>", "pdf output filename");

program.action(async (options) => {
  await mergePdf(options.i || [], options.o).catch((e) =>
    console.log("something went wrong..")
  );
});

program.parse();
