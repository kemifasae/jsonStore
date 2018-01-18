function checkJson(jsonFile){
  jsonFile = typeof(jsonFile) !== "string" ? JSON.stringify(jsonFile) : jsonFile;
  try {
    jsonFile = JSON.parse(jsonFile);
  } catch(e) {
      return false;
  }

  if (typeof jsonFile === "object" && jsonFile !== null) {
      return true;
  }
  return false;
}
module.exports= checkJson
