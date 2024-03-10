dorks = {
    "intitle:": "Restricts search results to pages with various keywords inside the title",
    "allintitle:": "restrict pages that contain titles with X characters, e.g. allintitle:\"Security Companies\"",
    "inurl:": "Fetch results whose URL contains the specified word",
    "allinurl:": "Fetch results whose URL contains all the specified characters",
    "intext:": "Fetch pages that contain certain characters or strings inside their text",
    "allintext:": "Searches for specific text contained on any web page",
    "site:": "Will show you the full list of all indexed URLs for the specified domain and subdomain, e.g. site:youtube.com",
    "filetype:": "Used to search for any kind of file extensions, for example, if you want to search for pdf files you can use: filetype:pdf",
    "ext:": "Similar to filetype",
    "inanchor:": "Search for an exact anchor text used on any links",
    "link:": "Displays web pages that link to the specified URL , providing insights into backlinks and potential collaborations",
    "cache:": "Cached version of a website",
	"-":"Exclude search term , e.g. site:target -www",
	"\"":"Wrap what you are searching for around quotes , e.g. \"cyber security\"",
	"*":"Any word e.g. to find subdomains site:*.target.com",
	"|":"Or operator  e.g. apple | xss ",
};

prebuilt_bbp = {
	"site:*.target.com -www -shop":"Broad domain search with negative search to remove subdomains you aren't interested in ",
	"site:*.target.com inurl:apidocs | inurl:api-docs | inurl:swagger | inurl:api-explorer":"API docs ",
	"site:*.target.com sign in | login | dashboard | portal ":"Logins ",
	"site:*.target.com sign up | register ":"registrations pages ",
	"site:pastebin.com \"example.com\"":"Code leak ",
	"site:jsfiddle.net \"example.com\"":"Code leak ",
	"site:codebeautify.org \"example.com\"":"Code leak ",
	"site:codepen.io \"example.com\"":"Code leak ",
	"site:site:s3.amazonaws.com \"example.com\"":"Cloud storage ",
	"site:blob.core.windows.net \"example.com\"":"Cloud storage ",
	"site:googleapis.com \"example.com\"":"Cloud storage ",
	"site:dev.azure.com \"example.com\"":"Cloud storage ",
	"site:onedrive.live.com \"example.com\"":"Cloud storage ",
	"site:digitaloceanspaces.com \"example.com\"":"Cloud storage ",
	"site:sharepoint.com \"example.com\"":"Cloud storage ",
	"site:s3-external-1.amazonaws.com \"example.com\"":"Cloud storage ",
	"site:s3.dualstack.us-east-1.amazonaws.com \"example.com\"":"Cloud storage ",
	"site:dropbox.com/s \"example.com\"":"Cloud storage ",
	"site:box.com/s \"example.com\"":"Cloud storage ",
	"site:docs.google.com \"example.com\"":"Cloud storage ",
	"site:firebaseio.com \"example.com\"":"firebase ",
	"site:target.com \"choose file\"":"File upload endpoint",
	"cache:target.com ":"cached version of a website",
	"site:s3.dualstack.us-east-1.amazonaws.com \"example.com\"":"Cloud storage ",
	"inurl:cmd | inurl:exec= | inurl:query= | inurl:code= | inurl:do= | inurl:run= | inurl:read= | inurl:ping= inurl:& site:target.com":"RCE parameters",
	"site:target.com ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw ":"Publicly exposed documents",
	"site:*.target.com inurl:include | inurl:dir | inurl:detail= | inurl:file= | inurl:folder= | inurl:inc= | inurl:locate= | inurl:doc= | inurl:conf= inurl:&":"LFI parameters",
	"site:*.target.com inurl:http | inurl:url= | inurl:path= | inurl:dest= | inurl:html= | inurl:data= | inurl:domain= | inurl:page= inurl:&":"SSRF parameters ",
	"site:*.target.com inurl:id= | inurl:pid= | inurl:category= | inurl:cat= | inurl:action= | inurl:sid= | inurl:dir= inurl:&":"SQLi parameters",
	"site:*.target.com inurl:url= | inurl:return= | inurl:next= | inurl:redirect= | inurl:redir= | inurl:ret= | inurl:r2= | inurl:page= inurl:& inurl:http":"Open redirect parameters",
	"site:*.target.com ext:php inurl:? -shop":"PHP extension with parameters",
	"site:*.target.com ext:log | ext:txt | ext:conf | ext:cnf | ext:ini | ext:env | ext:sh | ext:bak | ext:backup | ext:swp | ext:old | ext:~ | ext:git | ext:svn | ext:htpasswd | ext:htaccess":"Juicy extensions",
	"site:*.target.com ext:asp | ext:aspx | ext:config | ext:ashx | ext:asmx | ext:aspq | ext:axd | ext:cshtm | ext:cshtml | ext:rem | ext:soap | ext:vbhtm | ext:vbhtml | ext:asa | ext:cer | ext:shtml | ext:jsp | ext:jspx | ext:jsw | ext:jsv | ext:jspf | ext:wss | ext:do | ext:action | ext:cfm | ext:cfml | ext:cfc | ext:dbm | ext:swf | ext:pl | ext:cgi | ext:yaws | ext:php | ext:php4 | ext:php5 | ext:phtml | ext:module | ext:inc | ext:hphp | ext:ctp | ext:php | ext:php2 | ext:php3 | ext:php4 | ext:php5 | ext:php6 | ext:php7 | ext:phps | ext:phps | ext:pht | ext:phtm | ext:phtml | ext:pgif | ext:shtml | ext:htaccess | ext:phar | ext:inc | ext:hphp | ext:ctp | ext:module":"Other extensions like php",
	"site:target.com intitle:\"index of\"":"Directory listing enabled",
	"site:target.com ext:log":"log file exposure ",
	"site:target.com intitle:\"index of / \"*key.pem\" \"":"Directory listing ",
	"site:target.com intitle:\"index of\" ext:sql|xls|xml|json|csv":"files exposure",
	"site:target.com \"-----BEGIN RSA PRIVATE KEY-----\"":"RSA private key leaked",
	"inurl:example.com allintext:\"API_SECRET*\" ext:env | ext:yml":"API keys leaked",
	"inurl:example.com intext:admin ext:sql inurl:admin":"sql file exposure",
	"inurl:example.com intitle:\"index of\" \"config.db\"":"database configuration",
	"inurl:example.com \"MYSQL_ROOT_PASSWORD:\" ext:env OR ext:yml -git":"database configuration",
	"intext:\"© 2019\" site:target.com":"Find old websites belonging to the target"

}

bbp = {
	
"inurl:/bug bounty":"companies that have a responsible disclosure program or bug bounty program",
"inurl:/security":"companies that have a responsible disclosure program or bug bounty program",
"inurl:security.txt":"companies that have a responsible disclosure program or bug bounty program",
"inurl:security \"reward\"":"companies that have a responsible disclosure program or bug bounty program",
"inurl:/responsible disclosure":"companies that have a responsible disclosure program or bug bounty program",
"inurl:/responsible-disclosure/ reward":"companies that have a responsible disclosure program or bug bounty program",
"inurl:/responsible-disclosure/ swag":"companies that have a responsible disclosure program or bug bounty program",
"inurl:/responsible-disclosure/ bounty":"companies that have a responsible disclosure program or bug bounty program",
"inurl:'/responsible disclosure' hoodie":"companies that have a responsible disclosure program or bug bounty program",
"responsible disclosure swag r=h:com":"companies that have a responsible disclosure program or bug bounty program",
"responsible disclosure hall of fame":"Responsible disclosure programs",
"responsible disclosure europe":"Responsible disclosure programs",
"responsible disclosure white hat":"Responsible disclosure programs",
"white hat program":"Responsible disclosure programs",
"insite:\"responsible disclosure\" -inurl:nl":"Responsible disclosure programs",
"intext:responsible disclosure":"Responsible disclosure programs",
"site:.eu responsible disclosure":"Responsible disclosure programs",
"site:.nl responsible disclosure":"Responsible disclosure programs",
"site:responsible disclosure":"Responsible disclosure programs",
"responsible disclosure:sites":"Responsible disclosure programs",
"responsible disclosure r=h:nl":"Responsible disclosure programs",
"responsible disclosure r=h:uk":"Responsible disclosure programs",
"responsible disclosure r=h:eu":"Responsible disclosure programs",
"responsible disclosure bounty r=h:nl":"Responsible disclosure programs",
"responsible disclosure bounty r=h:uk":"Responsible disclosure programs",
"responsible disclosure bounty r=h:eu":"Responsible disclosure programs",
"responsible disclosure swag r=h:nl":"Responsible disclosure programs",
"responsible disclosure swag r=h:uk":"Responsible disclosure programs",
"responsible disclosure swag r=h:eu":"Responsible disclosure programs",
"responsible disclosure reward r=h:nl":"Responsible disclosure programs",
"responsible disclosure reward r=h:uk":"Responsible disclosure programs",
"responsible disclosure reward r=h:eu":"Responsible disclosure programs",
"\"powered by bugcrowd\" -site:bugcrowd.com":"Responsible disclosure programs",
"submit vulnerability report":"Responsible disclosure programs",
"site:*.gov.* \"responsible disclosure\"":"Responsible disclosure programs",
"intext:\"we take security very seriously\"":"Responsible disclosure programs",
"site:responsibledisclosure.com":"Responsible disclosure programs",
"inurl:'vulnerability-disclosure-policy' reward":"Responsible disclosure programs",
"intext:Vulnerability Disclosure site:nl":"Responsible disclosure programs",
"intext:Vulnerability Disclosure site:eu":"Responsible disclosure programs",
"site:*.*.nl intext:security report reward":"Responsible disclosure programs",
"site:*.*.nl intext:responsible disclosure reward":"Responsible disclosure programs",
"\"security vulnerability\" \"report\"":"Responsible disclosure programs",
"inurl:\"security report\"":"Responsible disclosure programs",
"\"responsible disclosure\" university":"Responsible disclosure programs",
"inurl:/responsible-disclosure/ university":"Responsible disclosure programs",
"buy bitcoins \"bug bounty\"":"Responsible disclosure programs",
"inurl:/security ext:txt \"contact\"":"Responsible disclosure programs",
"\"powered by synack\"":"Responsible disclosure programs",
"intext:responsible disclosure bounty":"Responsible disclosure programs",
"inurl: private bugbountyprogram":"Responsible disclosure programs",
"inurl:/.well-known/security ext:txt":"Responsible disclosure programs",
"inurl:/.well-known/security ext:txt intext:hackerone":"Responsible disclosure programs",
"inurl:/.well-known/security ext:txt -hackerone -bugcrowd -synack -openbugbounty":"Responsible disclosure programs",
"inurl:reporting-security-issues":"Responsible disclosure programs",
"inurl:security-policy.txt ext:txt":"Responsible disclosure programs",
"site:*.*.* inurl:bug inurl:bounty":"Responsible disclosure programs",
"site:help.*.* inurl:bounty":"Responsible disclosure programs",
"site:support.*.* intext:security report reward":"Responsible disclosure programs",
"intext:security report monetary inurl:security":"Responsible disclosure programs",
"intext:security report reward inurl:report":"Responsible disclosure programs",
"site:security.*.* inurl: bounty":"Responsible disclosure programs",
"site:*.*.de inurl:bug inurl:bounty":"Responsible disclosure programs",
"site:*.*.uk intext:security report reward":"Responsible disclosure programs",
"site:*.*.cn intext:security report reward":"Responsible disclosure programs",
"vulnerability reporting policy":"Responsible disclosure programs",
"\"van de melding met een minimum van een\" -site:responsibledisclosure.nl":"Responsible disclosure programs",
"inurl:/security ext:txt \"contact\"":"Responsible disclosure programs",
"inurl:responsible-disclosure-policy":"Responsible disclosure programs",
"\"If you believe you've found a security vulnerability\"":"Responsible disclosure programs",
"intext:\"BugBounty\" and intext:\"BTC\" and intext:\"reward\"":"Responsible disclosure programs",
"intext:bounty inurl:/security":"Responsible disclosure programs",
"inurl:\"bug bounty\" and intext:\"€\" and inurl:/security":"Responsible disclosure programs",
"inurl:\"bug bounty\" and intext:\"$\" and inurl:/security":"Responsible disclosure programs",
"inurl:\"bug bounty\" and intext:\"INR\" and inurl:/security":"Responsible disclosure programs",
"inurl:/security.txt \"mailto*\" -github.com  -wikipedia.org -portswigger.net -magento":"Responsible disclosure programs",
"/trust/report-a-vulnerability":"Responsible disclosure programs",
"site:*.edu intext:security report vulnerability":"Responsible disclosure programs",
"\"cms\" bug bounty":"Responsible disclosure programs",
"\"If you find a security issue\"  \"reward\"":"Responsible disclosure programs",
"\"responsible disclosure\" intext:\"you may be eligible for monetary compensation\"":"Responsible disclosure programs",
"inurl: \"responsible disclosure\", \"bug bounty\", \"bugbounty\"":"Responsible disclosure programs",
"responsible disclosure inurl:in":"Responsible disclosure programs",
"site:*.br responsible disclosure":"Responsible disclosure programs",
"site:*.at responsible disclosure":"Responsible disclosure programs",
"site:*.be responsible disclosure":"Responsible disclosure programs",
"site:*.au responsible disclosure":"Responsible disclosure programs"
}

jobs = {
  "inurl:career | inurl:careers penetration tester \"join us\"":"Pentester jobs",
  "inurl:career \"junior penetration tester\"":"junior penetration tester",
  "intext:\"open positions\" penetration tester":"Penetration tester jobs",
  "site:crunchbase.com \"cybersecurity\"":"Find cyber security companies",
  "site:crunchbase.com \"offensive security\"":"Find offensive security companies",
  "site:crunchbase.com \"attack surface management\"":"ASM companies",
  "inurl:jobs security engineer": "Security Engineer Jobs",
  "inurl:job-opportunities cybersecurity analyst": "Cybersecurity Analyst Opportunities",
  "inurl:careers \"penetration testing\"": "Penetration Testing Careers",
  "intext:\"job listings\" information security": "Information Security Job Listings",
  "site:indeed.com \"cybersecurity consultant\"": "Cybersecurity Consultant Roles",
  "site:monster.com \"security operations center analyst\"": "Security Operations Center Analyst Positions",
  "inurl:jobs \"network security engineer\"": "Network Security Engineer Jobs",
  "inurl:job-vacancies \"security specialist\"": "Security Specialist Vacancies",
  "inurl:careers \"cyber defense analyst\"": "Cyber Defense Analyst Careers",
  "intext:\"employment opportunities\" security researcher": "Security Researcher Employment Opportunities",
  "site:glassdoor.com \"security compliance manager\"": "Security Compliance Manager Roles",
  "site:ziprecruiter.com \"application security engineer\"": "Application Security Engineer Openings",
  "inurl:jobs \"information assurance specialist\"": "Information Assurance Specialist Jobs",
  "inurl:job-openings \"security consultant\"": "Security Consultant Openings",
  "inurl:careers \"cybersecurity engineer\"": "Cybersecurity Engineer Careers",
  "intext:\"career opportunities\" security auditor": "Security Auditor Career Opportunities",
  "site:careerbuilder.com \"security analyst\"": "Security Analyst Positions",
  "site:dice.com \"cybersecurity architect\"": "Cybersecurity Architect Roles",
  "inurl:jobs \"incident response coordinator\"": "Incident Response Coordinator Jobs",
  "inurl:job-search \"cloud security engineer\"": "Cloud Security Engineer Positions",
  "inurl:careers \"security operations manager\"": "Security Operations Manager Careers",
  "intext:\"work with us\" penetration tester": "Penetration Tester Employment",
  "site:careerjet.com \"information security officer\"": "Information Security Officer Roles",
  "site:careerjet.com \"security administrator\"": "Security Administrator Opportunities",
  "inurl:job-listings \"cybersecurity specialist\"": "Cybersecurity Specialist Listings",
  "inurl:job-search \"threat intelligence analyst\"": "Threat Intelligence Analyst Positions",
  "inurl:careers \"network security analyst\"": "Network Security Analyst Careers",
  "intext:\"join our team\" cybersecurity engineer": "Cybersecurity Engineer Opportunities",
  "site:usajobs.gov \"cybersecurity specialist\"": "Cybersecurity Specialist Positions"
}

logins = {
  "inurl:signup | inurl:register site:target.com ":"sign up portals",
  "intext:\"Create an account\" | intext:\"register account\" | intext:\"sign up\" site:target.com":"registrations ad signup paegs",
  "inurl:login | inurl:portal | inurl:sign-in | inurl:dashboard | inurl:/admin/ site:target.com":"Pages containing logins",
  "inurl:*admin | login | inurl:.php | .asp": "Pages Containing Login Portals",
  "inurl:/intranet/login.php": "Pages Containing Login Portals",
  "intitle:Teltonika -Web UI | intitle:Teltonika-RUT -Web UI inurl:/cgi-bin/luci": "Pages Containing Login Portals",
  "inurl:/admin/login.php intitle:(Iniciar sesion OR Login)": "Pages Containing Login Portals",
  "intitle:Login intext:cam": "Pages Containing Login Portals",
  "inurl:console/login.jsp": "Pages Containing Login Portals",
  "inurl:EMSWebClient/": "Pages Containing Login Portals",
  "inurl admin login php gov.in": "Pages Containing Login Portals",
  "site:*.in inurl:jira login": "Pages Containing Login Portals",
  "site:*.gov.au inurl:wp-admin": "Pages Containing Login Portals",
  "Fwd: intitle:Schneider Electric Telecontrol - Industrial Web Control intext:Xflow": "Pages Containing Login Portals",
  "inurl *:8443/login.jsp": "Pages Containing Login Portals",
  "intitle:Login intext:camera": "Pages Containing Login Portals",
  "site:smtp3.*.*/login": "Pages Containing Login Portals",
  "inurl:login.php site:.in": "Pages Containing Login Portals",
  "index of:customer/login": "Pages Containing Login Portals",
  "index of:seller/login": "Pages Containing Login Portals",
  "site:*.in inurl: admin login": "Pages Containing Login Portals",
  "inurl:gov.in & (intitle:login | intitle:signin)": "Pages Containing Login Portals",
  "inurl:gov.in & inurl:wp-admin": "Pages Containing Login Portals",
  "site:*.gov.in inurl:login.jsp": "Pages Containing Login Portals",
  "site:.edu.in inurl:login.php": "Pages Containing Login Portals",
  "site:.edu inurl:login Admin": "Pages Containing Login Portals",
  "inurl:gov.uk & inurl:wp-admin": "Pages Containing Login Portals",
  "site:.edu.in inurl:login.aspx": "Pages Containing Login Portals",
  "intext:untitled intext:admin filetype:php": "Pages Containing Login Portals",
  "site:gov.in inurl:/admin/login": "Pages Containing Login Portals",
  "inurl:80 ext:php inurl:login": "Pages Containing Login Portals",
  "site:in inurl:/admin/login": "Pages Containing Login Portals",
  "inurl:gov.in": "Pages Containing Login Portals",
  "intitle:MailEnable inurl:/Login.aspx": "Pages Containing Login Portals",
  "inurl:8888 ext:php inurl:login": "Pages Containing Login Portals",
  "inurl:4444 ext:php inurl:login": "Pages Containing Login Portals",
  "inurl:login.net": "Pages Containing Login Portals",
  "site:com inurl:/admin/login": "Pages Containing Login Portals",
  "inurl:/carbon/admin/login.jsp": "Pages Containing Login Portals",
  "intext:Powered by inurl:/login": "Pages Containing Login Portals",
  "inurl:newsdesk.cgi?": "Pages Containing Login Portals",
  "intext:untitled intext:login filetype:php": "Pages Containing Login Portals",
  "intext:untitled intext:password filetype:php": "Files Containing Juicy Info",
  "intitle:webmail Login": "Pages Containing Login Portals",
  "intitle:Kerio Connect Client inurl:/webmail/login/": "Pages Containing Login Portals",
  "intitle:I-Portal inurl:login.jsp": "Pages Containing Login Portals",
  "intitle:RM Portal": "Pages Containing Login Portals",
  "intitle:TOTVS SmartClient HTML - Parâmetros Iniciais": "Pages Containing Login Portals",
  "intitle:Gophish - Login": "Pages Containing Login Portals",
  "intitle:TYPO3 CMS Login: New TYPO3 site inurl:/typo3/index.php": "Pages Containing Login Portals",
  "inurl:brandmeister page=login": "Pages Containing Login Portals",
  "intext:admin AND login | sign in AND © AND rights reserved": "",
  "inurl:login/users.pwd": "Pages Containing Login Portals",
  "inurl:wp-login.php?action=login": "Pages Containing Login Portals",
  "intitle:LoRaWAN Login": "Pages Containing Login Portals",
  "intext: mailenable inurl:/lang/sys/login.aspx": "Files Containing Juicy Info",
  "intitle:Hikvision login page": "Pages Containing Login Portals",
  "intitle:ip camera login page": "Pages Containing Login Portals",
  "site:.bd http intitle: admin": "Files Containing Juicy Info",
  "intitle:Admin Login inurl:login.aspx": "Pages Containing Login Portals",
  "intitle:HRMS inurl:login.aspx": "Pages Containing Login Portals",
  "inurl:index.php intitle:CMS Login": "Pages Containing Login Portals",
  "intitle:Student inurl:login.aspx": "Pages Containing Login Portals",
  "intitle:Employee Login & inurl:(login.aspx | login.asp)": "Pages Containing Login Portals",
  "intitle:Journal inurl:login.aspx": "Pages Containing Login Portals",
  "intext:Project hosted at: For support, contact: Copyright Openbravo": "Pages Containing Login Portals",
  "intitle:CMS inurl:login.php": "Pages Containing Login Portals",
  "site:*/membership-login/": "Pages Containing Login Portals",
  "intitle:TYPO3 CMS Login": "Pages Containing Login Portals",
  "intitle:Sign in [Jenkins] inurl:login?from": "Pages Containing Login Portals",
  "inurl:/designs/imm/index.php": "Pages Containing Login Portals",
  "intitle:Sophos inurl:/userportal/webpages/myaccount/login.jsp": "Pages Containing Login Portals",
  "inurl:fgtauth?": "Pages Containing Login Portals",
  "inurl:/phpldapadmin/cmd.php": "Pages Containing Login Portals",
  "allintitle:MeshCentral - Login": "Pages Containing Login Portals",
  "intitle:CMS inurl:login.jsp": "Pages Containing Login Portals",
  "fluig login": "Pages Containing Login Portals",
  "Fwd: intitle:Support Portal intext:Bomgar Corporation. Redistribution Prohibited. All Rights Reserved. Representatives": "Pages Containing Login Portals",
  "inurl:/?page=login": "Pages Containing Login Portals",
  "inurl:/?a=login intext:login": "Pages Containing Login Portals",
  "Fwd: intitle:Cloudphysician RADAR": "Pages Containing Login Portals",
  "filetype:conf intext:Footer Powered By": "Pages Containing Login Portals",
  "inurl:mail intitle:Webmail - Login": "Pages Containing Login Portals",
  "inurl:/admin/login.php intitle: panel": "Pages Containing Login Portals",
  "Fwd: intitle:MedDream Softneta -.com": "Pages Containing Login Portals",
  "Fwd: inurl:/sslvpn_logon.shtml intitle:User Authentication WatchGuard Technologies": "Pages Containing Login Portals",
  "intitle:Portal inurl:login.jsp": "Pages Containing Login Portals",
  "intitle:SonicWall Analyzer Login": "Pages Containing Login Portals",
  "intitle:Issabel login - page": "Pages Containing Login Portals",
  "intitle:Juniper Networks Web Log In": "Pages Containing Login Portals",
  "intitle:Portal & (inurl:login.asp | inurl:login.aspx)": "Pages Containing Login Portals",
  "intitle:Portal inurl:login.php": "Pages Containing Login Portals",
  "com.sap.itsam.problems.java.systeminfo": "Pages Containing Login Portals",
  "intitle:cisco This is a restricted Access Server": "Pages Containing Login Portals",
  "intitle:vmware This is a restricted Access Server": "Pages Containing Login Portals",
  "Fwd: intitle:Project Insight - Login Sign In to Continue Shift4 Payments": "Pages Containing Login Portals",
  "inurl:sap/public/ intext:Logon Password": "Pages Containing Login Portals",
  "intext:Open Game Panel 2021": "Pages Containing Login Portals",
  "site:*.com inurl: admin/index.php": "Pages Containing Login Portals",
  "Fwd: intitle:Zimbra Web Client Sign In Synacor": "Pages Containing Login Portals",
  "inurl:/webmail/src/login.php intext:SquirrelMail": "Pages Containing Login Portals",
  "Fwd: intitle:Login FLX Web Server": "Pages Containing Login Portals",
  "site:*/oauth/authorize": "Pages Containing Login Portals",
  "inurl: admin-login.php": "Pages Containing Login Portals",
  "Dork - inurl: site admin": "Pages Containing Login Portals",
  "inurl:admin/reset.php -github": "Pages Containing Login Portals",
  "intext:Provided by ProjectSend": "Pages Containing Login Portals",
  "inurl: /admin/login.php intitle: panel admin": "Pages Containing Login Portals",
  "inurl:.html.php:intext:admin|intext:user|intext:login:site:.in": "Pages Containing Login Portals",
  "intitle:Dericam Remember Me": "Pages Containing Login Portals",
  "site:*/etc/passwd inurl/etc/passwd": "Pages Containing Login Portals",
  "intitle:webcam login": "Pages Containing Login Portals",
  "inurl:saml2/login": "Pages Containing Login Portals",
  "inurl:profile/login": "Pages Containing Login Portals",
  "intitle:Welcome intext:Login": "Pages Containing Login Portals",
  "intext:Infinitium Copyrights Reserved": "Pages Containing Login Portals",
  "intitle:administration intext:portail Login": "Pages Containing Login Portals",
  "inurl:login.rsp User name": "Pages Containing Login Portals",
  "inurl:/admin/AdminLogin.jsp intitle:CERGY - Administration": "Pages Containing Login Portals",
  "intitle:Codian MCU - login Copyright TANDBERG": "Pages Containing Login Portals",
  "intitle:admin login site:.gov.in": "Pages Containing Login Portals",
  "intitle|inurl::IoT login": "Pages Containing Login Portals",
  "inurl: login.http": "Pages Containing Login Portals",
  "companies' service login Login Portal": "",
  "intitle:Intelbras All Rights Reserved -.com": "Pages Containing Login Portals",
  "intitle|inurl:SCADA login": "Pages Containing Login Portals",
  "allinurl:logon.html CSCOE": "Pages Containing Login Portals",
  "site:*/admin.php inurl:admin": "Pages Containing Login Portals",
  "inurl:login intext: fiesta login": "Pages Containing Login Portals",
  "intitle:admin login site:.in": "Pages Containing Login Portals",
  "Stanford CoreNLP Visualisation provided using the brat visualisation": "Various Online Devices",
  "Google Dork: inurl:admin/login site:.gov.in": "Pages Containing Login Portals",
  "site:.om intitle:login": "Pages Containing Login Portals",
  "intitle:admin login site:.net": "Pages Containing Login Portals",
  "intitle:admin login site:.org": "Pages Containing Login Portals",
  "intitle:Login - splunk": "Pages Containing Login Portals",
  "intitle:oracle login site:.gov": "Pages Containing Login Portals",
  "inurl:employee-login.html": "Pages Containing Login Portals",
  "intitle:TestRail inurl:/index.php?/auth/login/": "Pages Containing Login Portals",
  "Username Password This system is for authorized use only. intitle:Gaia": "Pages Containing Login Portals",
  "inurl:(admin/password.php) +site:.com": "Pages Containing Login Portals",
  "intitle:admin login site:.gov": "Pages Containing Login Portals",
  "intitle:faculty login": "Pages Containing Login Portals",
  "cms inurl:login site:gov.ae": "Pages Containing Login Portals",
  "site:.com inurl:(administrator/login.php OR admin/login.php)": "Pages Containing Login Portals"
}

exposedfiles = {
  "ext:sql | ext:dbf | ext:mdb":"Exposed database files",
  "ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini":"Exposed configuration files",
  "ext:log":"Exposed log files",
  "ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup":"Exposed backup files",
  "ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw ":"Publicly exposed documents",
  "inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor":"Shell backdoors files ",
  "ext:php intitle:phpinfo \"published by the PHP Group\"":"phpinfo file disclosure",
  "inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config":"Install/Setup files",
  "inurl:\"/phpinfo.php\" | inurl:\".htaccess\" | inurl:\"/.git\"  -github":"Exposed log files",
  "ext:swf":"swf files",
  "ext:log":"Exposed log files",
  "intitle:\"index of\" inurl:ftp intext:admin":"Files exposure",
  "intitle:\"index of\" \"system/config\"":"Files exposure",
  "intitle:\"index of\" admin/config":"File exposure",
  "\"index of\" \"/config/sql\"":"File exposure",
  "intitle:\"index of\" \"api/admin\"":"File exposure",
  "intitle:\"index of\" \"tinyfilemanager.php\"":"Exposed sensitive files",
  "intitle:\"index of\" \"test/storage/framework/sessions/\"":"Exposed sensitive files",
  "intitle:\"index of\" \"symfony/config\"":"Exposed sensitive files",
  "intitle:\"index of\" \"graphsql/subscription\"":"Exposed sensitive files",
  "intitle:\"index of\" \"/admin/backup\"":"Exposed sensitive files",
  "intitle:\"index of\" \"admin/json\"":"Exposed sensitive files",
  "intitle:\"index of\" \"/admin_backup\"":"Exposed sensitive files",
  "intitle:\"index of\" \"git-jira-log\"":"Exposed sensitive files",
  "intitle:\"index of\" \"/db.frm\"":"Exposed sensitive files",
  "intitle:\"index of\" \"/global.asa\"":"Exposed sensitive files",
  "intitle:\"index of\" \"/proxy.pac\" OR \"proxy.pac.bak\"":"Exposed sensitive files",
  "intitle:\"index of\" \"/MySQL-Router\"":"Exposed sensitive files",
  "intitle:\"index of\" \"/owncloud/config/*\"":"Exposed sensitive files",
  "intitle:\"index of\" \"common.crt\" OR \"ca.crt\"":"Exposed sensitive files",
  "ext:log":"Exposed sensitive files",
  "ext:log":"Exposed sensitive files",
  "ext:log":"Exposed sensitive files",
  "intitle:index of *.pl": "Vulnerable Files",
  "intitle:index of *.phtml": "Vulnerable Files",
  "intitle:index of *.php": "Vulnerable Files",
  "inurl:*gov intitle:index of docker-compose": "Files Containing Juicy Info",
  "intitle:Index of site:.in": "Vulnerable Files",
  "intitle:index of master03.xml": "Vulnerable Files",
  "intitle:index of stylesheet.css": "Vulnerable Files",
  "intitle:index of pres.xml": "Vulnerable Files",
  "intext:powered by BlueCMS v1.6": "Google Dork to find the pages vulnerable to CVE-2020-19853",
  "intitle:index of /cgi-bin admin": "Vulnerable Files",
  "intitle: Index of /assets/admin/system": "Vulnerable Files",
  "inurl:/supportboard": "Support Board 3.3.3 - \"Multiple\" SQL Injection (Unauthenticated) Support Board 3.3.3 - \"Multiple\" SQL Injection (Unauthenticated)",
  "Google Dork: intitle:index of /sql admin": "This Dork will return the important files containing admin setup to sql.",
  "intitle:index of schema.sql": "Vulnerable Files",
  "index of / intext:wp-config zip": "",
  "Index of upload_image.php": "Vulnerable Files",
  "intitle:index of .env": "Sensitive Directories",
  "intitle: index of /Invoices*": "Sensitive Directories",
  "intitle: index of backup.php": "Sensitive Directories",
  "intitle: index of backup.xml": "Sensitive Directories",
  "intitle:index of SCADA": "Sensitive Directories",
  "Google Dork: intitle: index of payment": "Sensitive Directories",
  "intitle:index of private/log": "Sensitive Directories",
  "intitle: Index of inurl:fileadmin": "Sensitive Directories",
  "intitle:index.of (inurl:admin | intitle:admin)": "Pages Containing Login Portals",
  "intitle:index of contacts.vcf": "Sensitive Directories",
  "inurl:filemanager/upload/asp/ index of": "Sensitive Directories",
  "intitle:index of /configs": "Sensitive Directories",
  "intext:CAD Media Log": "",
  "intitle:index of /.vscode": "Finding directories with sensitive information",
  "intitle:index of intext:client.key.pem": "",
  "inurl:wp-content/uploads/ intitle:logs": "Sensitive Directories",
  "inurl:/wp-content/uploads/wp-file-manager-pro/fm_backup": "Sensitive Directories",
  "inurl:/wp-content/uploads/wp-file-manager-pro": "Sensitive Directories",
  "\"-----BEGIN PGP PRIVATE KEY BLOCK-----\" ext:pem | ext:key | ext:txt -git": "Sensitive Directories",
  "\"-----BEGIN EC PRIVATE KEY-----\" | \"-----BEGIN EC PARAMETERS-----\" ext:pem | ext:key | ext:txt": "Sensitive Directories",
  "inurl:tcpconfig.html": "Various Online Devices",
  "inurl:/certs/server.key": "This will expose the Private RSA Key",
  "inurl:print.htm intext:Domain Name: + Open printable report": "Sensitive Directories",
  "inurl:/jsps/testoperation.jsp": "Test Operation"
}


shodan_dorks = {
	  "city:":"Find devices in a particular city, e.g. city:\"Rabat\"",
	  "country:":"Find devices in a particulat country, e.g. country:\"MA\"",
	  "geo:":"Find devices by giving geographical coordinates , e.g. geo:\"56.913055,118.250862\"",
	  "hostname:":"Find devices marching the hostname , e.g. hostname:example.com",
	  "net:":"Find devices based on IP adresses or CIDR , e.g. net:210.214.0.0/16",
	  "org:":"Find devices based on organization name , e.g. org:\"United States Department\"",
	  "ASN:":"Find devices based on autonomous system number , e.g. asn:ASxxxx",
	  "os:":"Find devices based on operating system , e.g. os:\"windows 7\"",
	  "port:":"Find devices based on port number , e.g. port:8080",
	  "before:":"Find devices before a specified date e.g. apache after:22/02/2009 before:14/3/2010",
	  "after:":"Find devices after a specified date e.g. apache after:22/02/2009 before:14/3/2010",
	  "device:":"Find devices based on type , e.g. device:webcam",
	  "ssl:":"Find devices based on SSL info",
	  "ssl.cert.subject.cn:":"Find devices based on SSL certificate canonical name , e.g. ssl.cert.subject.cn:google.com",
	  "product:":"Find devices based on product , e.g. product:nginx product:chromecast",
	  "server:":"Find devices based on servers e.g. server:apache",
	  "product:":"Find devices based on product , e.g. product:nginx product:apache",
	  "http.favicon.hash:":"Find devices based favicon hash",
	  "http.html:":"Websites that have words in theire html",
	  "http.component:":"Websites that have a specific component in their HTML , e.g. http.component:bootstrap",
	  "http.title:":"Websites that have a specific title in their HTML",
	  "http.title:":"Websites that have a specific title in their HTML",
	
}

shodan_all = {
	"http.html:/dana-na":"Pulse secure",
	"http.title:\"Index of /\" http.html:\".pem\"":"PEM certificates",
	"onion-location":"TOR/darkweb sites",
	"\"product:MySQL\" mysql port:\"3306\"":"MYSQL databases",
	"\"product:MongoDB\"":"MongoDB databases",
	"mongodb port:27017":"MongoDB databases",
	"\"MongoDB Server Information { \"metrics\"\:\"":"Fully open MongoDB databases",
	"\"Set-Cookie: mongo-express=\" \"200 OK\"":"Fully open MongoDB databases",
	"\"MongoDB Server Information\" port:27017 -authentication":"Fully open MongoDB databases",
	"kibana content-legth:217":"Kibana dashboard without authentication",
	"port:9200 json":"Elastic search",
	"port:\"9200\" all:elastic":"Elastic search",
	"port:\"9200\" all:\"elastic indices\"":"Elastic search",
	"\"product:Memcached\"":"Memecached",
	"\"product\:CouchDB\"":"CouchDB",
	"port:\"5984\"+Server: \"CouchDB/2.1.0\"":"CouchDB",
	"\"port:5432 PostgreSQL\"":"Postgresql",
	"\"port:8087 Riak\"":"Riak",
	"\"product:Redis\"":"Redis",
	"\"product:Cassandra\"":"Cassandra",
	"hacked-router-help-sos":"Routers which got compromised",
	"product:\"Redis key-value store\"":"Redis open instances",
	"title:\"citrix gateway\"":"Cirtix gateway",
	"x-jenkins 200":"Jenkins dashboard",
	"title:\"Weave Scope\" http.favicon.hash:567176827":"Weave Scope dashboard",
	"\"X-Jenkins\" \"Set-Cookie: JSESSIONID\" http.title:\"Dashboard\"":"Jenkins CI",
	"\"Docker Containers:\" port:2375":"Docker APIs",
	"\"Docker-Distribution-Api-Version: registry\" \"200 OK\" -gitlab":"Docker private registries",
	"\"dnsmasq-pi-hole\" \"Recursion: enabled\"":"Pi-hole open dns servers",
	"\"port: 53\" Recursion: Enabled":"DNS servers with recursion",
	"port:23 console gateway":"Telnet access",
	"\"root@\" port:23 -login -password -name -Session":"Logged in telnet as root",
	"\"polycom command shell\"":"Polycom video-conference system no-auth shell",
	"nport -keyin port:23": "NPort serial-to-eth / MoCA devices without password",
	"\"Android Debug Bridge\" \"Device\" port:5555": "Android Root Bridges",
	"Lantronix password port:30718 -secured": "Lantronix Serial-to-Ethernet Adapter Leaking Telnet Passwords",
	"\"Citrix Applications:\" port:1604": "Citrix Virtual Apps",
	"Vulnerable (kind of \"by design,\" but especially when exposed). \"smart install client active\"": "Cisco Smart Install",
	"PBX \"gateway console\" -password port:23": "PBX IP Phone Gateways",
	"http.title:\"- Polycom\" \"Server: lighttpd\"":"Polycom Video Conferencing",
	"\"Polycom Command Shell\" -failed port:23": "Polycom Video Conferencing",
	"\"Server: Bomgar\" \"200 OK\"": "Bomgar help desk portal",
	"\"Intel(R) Active Management Technology\" port:623,664,16992,16993,16994,16995 \"Active Management Technology\"":"Intel Active Management CVE-2017-5689",
	"HP-ILO-4 !\"HP-ILO-4/2.53\" !\"HP-ILO-4/2.54\" !\"HP-ILO-4/2.55\" !\"HP-ILO-4/2.60\" !\"HP-ILO-4/2.61\" !\"HP-ILO-4/2.62\" !\"HP-iLO-4/2.70\" port:1900":"HP iLO 4 CVE-2017-12542",
	"\"Press Enter for Setup Mode port:9999\"":"Lantronix ethernet adapter’s admin interface without password",
	"html:\"def_wirelesspassword\"":"Wifi passwords",
	"http.html:\"* The wp-config.php creation script uses this file\"":"Misconfigured Wordpress Sites",
	"\"x-owa-version\" \"IE=EmulateIE7\" \"Server: Microsoft-IIS/7.0\"":"outlook web access exchange 2007",
	"\"x-owa-version\" \"IE=EmulateIE7\" http.favicon.hash:442749392":"outlook web access exchange 2010",
	"\"X-AspNet-Version\" http.title:\"Outlook\" -\"x-owa-version\"":"outlook web access exchange 2013/2016",
	"\"X-MS-Server-Fqdn\"":"Lync / Skype for Business",
	"\"Authentication: disabled\" port:445":"SMB file shares",
	"\"Authentication: disabled\" NETLOGON SYSVOL -unix port:445":"Specifically domain controllers:",
	"\"Authentication: disabled\" \"Shared this folder to access QuickBooks files OverNetwork\" -unix port:445":"Concerning default network shares of QuickBooks files",
	"\"220\" \"230 Login successful.\" port:21":"FTP Servers with Anonymous Login",
	"\"Set-Cookie: iomega=\" -\"manage/login.html\" -http.title:\"Log In\"":"Iomega / LenovoEMC NAS Drives",
	"Redirecting sencha port:9000":"Buffalo TeraStation NAS Drives",
	"\"Server: Logitech Media Server\" \"200 OK\"":"Logitech Media Servers",
	"\"X-Plex-Protocol\" \"200 OK\" port:32400":"Plex Media Servers",
	"\"CherryPy/5.1.0\" \"/home\"":"Tautulli / PlexPy Dashboards",
	"\"IPC$ all storage devices\"":"Home router attached USB",
	"title:camera":"Generic camera search",
	"webcam has_screenshot:true":"Webcam with screenshots",
	"\"d-Link Internet Camera, 200 OK\"":"D-Link webcams",
	"\"Server: yawcam\" \"Mime-Type: text/html\"":"Yawcams",
	"(\"webcam 7\" OR \"webcamXP\") http.component:\"mootools\" -401":"Yawcams",
	"\"Server\: IP Webcam Server\" \"200 OK\"":"Android IP Webcam Server",
	"html:\"DVR_H264 ActiveX\"":"Security DVRs",
	"NETSurveillance uc-httpd":"Surveillance Cams",
	"Server: uc-httpd 1.0.0":"Surveillance Cams",
	"\"Serial Number\:\" \"Built:\" \"Server: HP HTTP\"":"HP Printers",
	"ssl:\"Xerox Generic Root\"":"Xerox Copiers/Printers",
	"\"SERVER: EPSON_Linux UPnP\" \"200 OK\"":"Epson Printers",
	"\"Server: EPSON-HTTP\" \"200 OK\"":"Epson Printers",
	"\"Server: KS_HTTP\" \"200 OK\"":"Canon Printers",
	"\"Server: CANON HTTP Server\"":"Canon Printers",
	"\"Server: AV_Receiver\" \"HTTP/1.1 406\"":"Home Devices Yamaha Stereo",
	"\"\x08_airplay\" port:5353":"Apple AirPlay Receivers, Apple TVs, HomePods , etc.",
	"\"Chromecast:\" port:8008":"Chromecasts / Smart TVs",
	"\"Model: PYNG-HUB\"":"Crestron Smart Home Controllers",
	"\"Server: calibre\" http.status:200 http.title:calibre":"Calibre libraries",
	"title:\"OctoPrint\" -title:\"Login\" http.favicon.hash:1307375944":"OctoPrint 3D Printer Controllers",
	"\"ETH - Total speed\"":"Etherium Miners",
	"http.title:\"Index of /\" http.html:\".pem\"":"Apache Directory Listings, with pem extension ",
	"http.html:\"* The wp-config.php creation script uses this file\"":"Exposed wp-config.php files containing database credentials",
	"\"Minecraft Server\" \"protocol 340\" port:25565":"Too Many Minecraft Servers",
	"net:175.45.176.0/22,210.52.109.0/24,77.94.35.0/24":"Everything in North Korea",
	"ssl:\"MetasploitSelfSignedCA\"":"Metasploit C2 ",
	"ssl:\"Covenant\" http.component:\"Blazor\"":"Covenant C2",
	"http.html_hash:-1957161625":"Brute Ratel C2",
	"product:\"Brute Ratel C4\"":"Brute Ratel C2",
	"product:\"cobalt strike team server\"":"CobaltStrike Servers",
	"product:\"Cobalt Strike Beacon\"":"CobaltStrike Servers",
	"ssl.cert.serial:146473198":"CobaltStrike Servers",
	"ssl.jarm:07d14d16d21d21d07c42d41d00041d24a458a375eef0c576d23a7bab9a9fb1":"CobaltStrike Servers default certificate serial numbers",
	"ssl:foren.zik":"CobaltStrike Servers",
	"\"Server: Prismview Player\"":"Samsung Electronic Billboard ICS",
	"\"in-tank inventory\" port:10001":"Gas Station Pump Controllers ICS",
	"\"privileged command\" GET":"Fuel Pumps connected to internet ICS",
	"P372 \"ANPR enabled\"":"Automatic License Plate Readers ICS",
	"mikrotik streetlight":"Traffic Light Controllers / Red Light Cameras ICS",
	"\"voter system serial\" country:US":"voting Machines in the United States ICS",
	"NCR Port:\"161\"":"Open ATM",
	"\"Cisco IOS\" \"ADVIPSERVICESK9_LI-M\"":"Telcos Running Cisco Lawful Intercept Wiretaps",
	"\"[2J[H Encartele Confidential\"":"Prison Pay Phones",
	"http.title:\"Tesla PowerPack System\" http.component:\"d3\" -ga3ca4f2":"Tesla PowerPack Charging Status",
	"\"Server: gSOAP/2.8\" \"Content-Length: 583\"":"Electric Vehicle Chargers",
	"\"Cobham SATCOM\" OR (\"Sailor\" \"VSAT\")":"Maritime Satellites",
	"title:\"Slocum Fleet Mission Control\"":"Submarine Mission Control Dashboards",
	"\"Server: CarelDataServer\" \"200 Document follows\"":"CAREL PlantVisor Refrigeration Units",
	"http.title:\"Nordex Control\" \"Windows 2000 5.0 x86\" \"Jetty/3.1 (JSP 1.1; Servlet 2.2; java 1.6.0_14)\"":"Nordex Wind Turbine Farms",
	"\"[1m[35mWelcome on console\"":"C4 Max Commercial Vehicle GPS Trackers",
	"DICOM Medical X-Ray Machines":"\"DICOM Server Response\" port:104",
	"\"Server: EIG Embedded Web Server\" \"200 Document follows\"":"GaugeTech Electricity Meters",
	"\"Siemens, SIMATIC\" port:161":"Siemens Industrial Automation",
	"\"Server: Microsoft-WinCE\" \"Content-Length: 12581\"":"Siemens HVAC Controllers",
	"\"HID VertX\" port:4070":"Door / Lock Access Controllers",
	"\"log off\" \"select the appropriate\"":"Railroad Management",
	"http.title:\"Tesla PowerPack System\" http.component:\"d3\" -ga3ca4f2":"Tesla Powerpack charging Status",
	"title:\"xzeres wind\"":"XZERES Wind Turbine",
	"\"html:\"PIPS Technology ALPR Processors\"\"":"PIPS Automated License Plate Reader",
	"port:502":"Modbus",
	"port:1911,4911 product:Niagara":"Niagara Fox",
	"port:18245,18246 product:\"general electric\"":"GE-SRTP",
	"port:5006,5007 product:mitsubishi":"MELSEC-Q",
	"port:2455 operating system":"CODESYS",
	"port:102":"S7",
	"port:47808":"BACnet",
	"port:5094 hart-ip":"HART-IP",
	"port:9600 response code":"Omron FINS",
	"port:2404 asdu address":"IEC 60870-5-104",
	"port:20000 source address":"DNP3",
	"port:44818":"EtherNet/IP",
	"port:1962 PLC":"PCWorx",
	"port:789 product:\"Red Lion Controls\"":"kkk",
	"port:20547 PLC":"ProConOS",
	"\"authentication disabled\" port:5900,5901":"Unprotected VNC",
	"\"authentication disabled\" \"RFB 003.008\"":"Unprotected VNC",
	"\"\\x03\\x00\\x00\\x0b\\x06\\xd0\\x00\\x00\\x124\\x00\"":"Windows RDP"
}

function createTable(tableid,d){
		const table = document.createElement('table');
		table.id = tableid;
        table.classList.add('table', 'is-hoverable', 'is-striped', 'is-narrow', 'is-fullwidth', 'is-scrollable');
        const headerRow = table.createTHead().insertRow();
        const header1 = document.createElement('th');
        const header2 = document.createElement('th');
        header1.textContent = 'Dorks';
        header2.textContent = 'Description';
        headerRow.appendChild(header1);
        headerRow.appendChild(header2);

        const tbody = table.createTBody();

        
        for (const dork in d) {
            const row = tbody.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            cell1.textContent = dork;
            
            cell2.textContent = d[dork];
			
			// Add click event listener to each row
			row.addEventListener('click', function() {
			// Set the keyword value to the input box
				document.getElementById('searchbox').value += dork+" ";
			});
        }
		
        dorksTableContainer.appendChild(table);
}


function createTable2(tableid,d){
		const table = document.createElement('table');
		table.id = tableid;
        table.classList.add('table', 'is-hoverable', 'is-striped', 'is-narrow', 'is-fullwidth', 'is-scrollable');
        const headerRow = table.createTHead().insertRow();
        const header1 = document.createElement('th');
        const header2 = document.createElement('th');
        header1.textContent = 'Dorks';
        header2.textContent = 'Description';
        headerRow.appendChild(header1);
        headerRow.appendChild(header2);

        const tbody = table.createTBody();

        
        for (const dork in d) {
            const row = tbody.insertRow();
            const cell1 = row.insertCell();
            const cell2 = row.insertCell();
            cell1.textContent = dork;
            
            cell2.textContent = d[dork];
			
			// Add click event listener to each row
			row.addEventListener('click', function() {
			// Set the keyword value to the input box
				document.getElementById('searchbox2').value += dork+"";
			});
        }
		
        dorksTableContainer2.appendChild(table);
}


document.getElementById('builder').addEventListener('click', function() {const dorksTableContainer = document.getElementById('dorksTableContainer');


    const existingTable = document.getElementById('dorkstable');

    if (existingTable) {
        dorksTableContainer.removeChild(existingTable); // If table exists, remove it
    } else { 
	createTable("dorkstable",dorks)
	}
})

// Add event listener to the button
document.getElementById('prebuilt').addEventListener('click', function() {
	
  
  // Toggle the visibility of the target div
  if (document.getElementById('checkboxes').style.display === 'none' ) {
    document.getElementById('checkboxes').style.display = '';
	
  } else {
    document.getElementById('checkboxes').style.display = 'none';
	
	
  }
}); 

document.getElementById('bugbountyvuln').addEventListener("click",function(){
	if(this.checked){
		createTable("dorkstable1",prebuilt_bbp)
    } else{
		
		const eTable = document.getElementById('dorkstable1')
		dorksTableContainer.removeChild(eTable)
	}
})
//2
document.getElementById('bbp').addEventListener("click",function(){
	if(this.checked){
		createTable("dorkstable2",bbp)
    } else{
		
		const eTable = document.getElementById('dorkstable2')
		dorksTableContainer.removeChild(eTable)
	}
})
//3
document.getElementById('exposedfiles').addEventListener("click",function(){
	if(this.checked){
		createTable("dorkstable3",exposedfiles)
    } else{
		
		const eTable = document.getElementById('dorkstable3')
		dorksTableContainer.removeChild(eTable)
	}
})
//4
document.getElementById('jobs').addEventListener("click",function(){
	if(this.checked){
		createTable("dorkstable4",jobs)
    } else{
		
		const eTable = document.getElementById('dorkstable4')
		dorksTableContainer.removeChild(eTable)
	}
})
//5
document.getElementById('logins').addEventListener("click",function(){
	if(this.checked){
		createTable("dorkstable5",logins)
    } else{
		
		const eTable = document.getElementById('dorkstable5')
		dorksTableContainer.removeChild(eTable)
	}
})

document.getElementById("startButton").addEventListener("click",function(){
	value = document.getElementById("searchbox").value;
	var newURL = "https://www.google.com/search?q="+value;
	//console.log(value);
	chrome.tabs.create({ url: newURL });
	
})

document.getElementById('builder2').addEventListener('click', function() {const dorksTableContainer2 = document.getElementById('dorksTableContainer2');


    const existingTable = document.getElementById('shodantable');

    if (existingTable) {
        dorksTableContainer2.removeChild(existingTable); // If table exists, remove it
    } else { 
	createTable2("shodantable",shodan_dorks)
	}
})

document.getElementById('prebuilt2').addEventListener('click', function() {const dorksTableContainer2 = document.getElementById('dorksTableContainer2');


    const existingTable = document.getElementById('shodantable');

    if (existingTable) {
        dorksTableContainer2.removeChild(existingTable); // If table exists, remove it
    } else { 
	createTable2("shodantable",shodan_all)
	}
})

document.getElementById("startButton2").addEventListener("click",function(){
	value = document.getElementById("searchbox2").value;
	var newURL = "https://www.shodan.io/search?query="+value;
	//console.log(value);
	chrome.tabs.create({ url: newURL });
	
})

document.getElementById("g").addEventListener("click",function(){
	if(document.getElementById("g").classList.contains('is-active')){
		document.getElementById("s").classList.remove('is-active')
		document.getElementById("shodan").style.display = "none";
	}else{
		document.getElementById("g").classList.add('is-active')
		document.getElementById("s").classList.remove('is-active')
		
		document.getElementById("google").style.display = "block";
        // Hide Shodan content
        document.getElementById("shodan").style.display = "none";
	}
})

document.getElementById("s").addEventListener("click",function(){
	if(document.getElementById("s").classList.contains('is-active')){
		document.getElementById("g").classList.remove('is-active')
		document.getElementById("shodan").style.display = "none";
	}else{
		document.getElementById("s").classList.add('is-active')
		document.getElementById("g").classList.remove('is-active')
		
		document.getElementById("shodan").style.display = "block";
        // Hide Google content
        document.getElementById("google").style.display = "none";
		
	}
})

