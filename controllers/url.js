const UrlshortSchema = require("./../models/shortUrl");

const HandleshortUrl = async (req, res) => {
  const Url = req.body.fullUrl;
  console.log(Url);
  try {
    const set = await UrlshortSchema.create({ url: Url });
    res.redirect("/");
  } catch {
    console.log("Failed to shorten URL");
  }
};
const HandleHomePage = async (req, res) => {
  const ShortedURL = await UrlshortSchema.find();
  res.render("index", { ShortedURL: ShortedURL });
};
const HandleParams = async (req, res) => {
  const ShortUrl = req.params.shortURL;
  const getRedirect = await UrlshortSchema.findOne({ short: ShortUrl });
  if (!getRedirect) {
    return res.status(400).redirect("/");
  }
  getRedirect.click++;
  await getRedirect.save(); // Wait for the save operation to complete
  res.redirect(getRedirect.url);
};

module.exports = { HandleshortUrl, HandleHomePage, HandleParams };
