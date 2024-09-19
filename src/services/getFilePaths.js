const PATH = "https://ab-file-explorer.athleticnext.workers.dev/?file=regular";

const getFilePaths = async () => {
  try {
    const response = await fetch(PATH);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.filepaths;
  } catch (error) {
    return `An error occurred when loading the files: ${error.message}`;
  }
};

export default getFilePaths;
