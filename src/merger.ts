import PDFMerger from "pdf-merger-js";

const merger = new PDFMerger();

export async function mergePdf(inputFileNames: string[], outputName: string) {
  try {
    await Promise.all(
      inputFileNames.map(async (fileName) => {
        await merger.add(fileName);
      })
    );
    await merger.save(outputName || "merged.pdf");
  } catch (e) {
    return Promise.reject(e);
  }
}
