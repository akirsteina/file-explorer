const path = "https://ab-file-explorer.athleticnext.workers.dev/?file=regular";

const getFilePaths = async () => {
  try {
    const response = await fetch(path);
    const data = await response.json();
    return data.filepaths;
  } catch (error) {
    return `An error occured when loading the files: ${error.message}`;
  }
};

export default getFilePaths;
