const dorks = {
	intitle:"Restricts search results to pages with various keywords inside the title",
	allintitle:"restrict pages that contain titles with X characters, e.g. allintitle:\"Security Companies\"",
	inurl:"Fetch results whose URL contains the specified word",
	allinurl:"Fetch results whose URL contains all the specified characters",
	intext:"Fetch pages that contain certain characters or strings inside their text",
	allintext:"Searches for specific text contained on any web page",
	site:"Will show you the full list of all indexed URLs for the specified domain and subdomain, e.g. site:youtube.com",
	filetype:"Used to search for any kind of file extensions, for example, if you want to search for pdf files you can use: filetype:pdf",
	ext:"Similar to filetype",
	inanchor:"Search for an exact anchor text used on any links",
	link:"Displays web pages that link to the specified URL , providing insights into backlinks and potential collaborations",
}
module.exports = { dorks };
