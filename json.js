var showposts = false;
var showpictures = false;
var showcomments = false;
function showrecentposts(json) {
  for (var i = 0; i < numposts; i++) {
    var entry = json.feed.entry[i];
    var posturl;
    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        posturl = entry.link[k].href;
        break;
      }
    }
	var posttitle = entry.title.$t;
	posttitle = posttitle.link(posturl);
    var readmorelink = "(далее)";	 
    var postdate = entry.published.$t;
	var cdyear = postdate.substring(0,4);
    var cdmonth = postdate.substring(5,7);
    var cdday = postdate.substring(8,10);
    var monthnames = new Array();
    monthnames[1] = "Января";
    monthnames[2] = "Февраля";
    monthnames[3] = "Марта";
    monthnames[4] = "Апреля";
    monthnames[5] = "Мая";
    monthnames[6] = "Июня";
    monthnames[7] = "Июля";
    monthnames[8] = "Августа";
    monthnames[9] = "Сентября";
    monthnames[10] = "Октября";
    monthnames[11] = "Ноября";
    monthnames[12] = "Декабря";
    var postauthor = entry.author[0].name.$t;
    if ("content" in entry) {
      var postcontent = entry.content.$t;}
    else
    if ("summary" in entry) {
      var postcontent = entry.summary.$t;}
    else var postcontent = "";
    var test = /https:\/\/\S+(\.png|\.jpg|\.gif)/g;
    if(postcontent.match(test)) {
 var testURL = postcontent.match(test);}
    else testURL = 'https://dl.dropboxusercontent.com/s/eprvnrqiqh89yje/carousel_btn.gif';
	
     readmorelink = readmorelink.link(posturl);
    var re = /<\S[^>]*>/g; 
    postcontent = postcontent.replace(re, "");
	if (showpictures == true) {
  document.write('<div class="imageElement">');
  document.write('<a class="open" href="' + posturl + '" title="Узнать больше!"></a>');
  document.write('<h2>' + posttitle + '</h2>');
  document.write('<img class="full" src="'+testURL[0]+'"><img class="thumbnail" src="'+testURL[1]+'">');
   if (postcontent.length < 100) {
  document.write('<p>');
  document.write(postcontent);
  document.write('</p></div>');   } else { 
  document.write('<p>');
  postcontent = postcontent.substring(0, 100);
   var quoteEnd = postcontent.lastIndexOf(" ");
   postcontent = postcontent.substring(0,quoteEnd);
  document.write(postcontent + '...' + readmorelink);
  document.write('</p></div>');   }}
	if (showposts == true) {
  document.write('<ul>');
  if (showpostdate == true) {document.write('<li>' + posttitle + ' - ' + cdday + ' ' + monthnames[parseInt(cdmonth,10)] + '</li>');} else {
  document.write('<li>' + posttitle + '</li>');}
  document.write('</ul>');   }
  	if (showcomments == true) {
  document.write('<ul>');
  if (showpostdate == true) {document.write('<li>' + posttitle + ' - ' + cdday + ' ' + monthnames[parseInt(cdmonth,10)] );} else {
  document.write('<li>' + posttitle);}
   if (postcontent.length < 100) {
  document.write('<br><i>');
  document.write(postcontent);
  document.write('</i></li></ul>');   } else { 
  document.write('<br><i>');
  postcontent = postcontent.substring(0, 100);
   var quoteEnd = postcontent.lastIndexOf(" ");
   postcontent = postcontent.substring(0,quoteEnd);
  document.write(postcontent + '...' + readmorelink);
  document.write('</i></li></ul>');   }}
  }}