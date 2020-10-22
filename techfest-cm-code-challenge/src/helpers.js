export function handleArrayResponse(arr) {
  if (!Array.isArray(arr)) {
    return "WARNING: You should be returning an array from your sortAndFilter function. Check your code and try again!";
  }

  const stringified = arr.join("");
  return stringified.replace(
    /([^\S]|^)(((https?:\/\/)|(www\.))(\S+))/gi,
    (_, space, url) => {
      let hyperlink = url;
      if (!hyperlink.match("^https?://")) {
        hyperlink = "http://" + hyperlink;
      }
      return space + '<a href="' + hyperlink + '">' + url + "</a>";
    }
  );
}
