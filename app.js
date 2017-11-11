var app = angular.module("contactApp", []);

app.controller("ContactCtrl", ContactCtrl);

app.controller("HeaderCtrl", HeaderCtrl);

app.controller("FooterCtrl", FooterCtrl);

app.value("message", "Contact Application");

function ContactCtrl() {
	this.contacts = [
      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"anton",
            "last":"waara"
         },
         "location":{  
            "street":"4004 mannerheimintie",
            "city":"närpes",
            "state":"northern savonia",
            "postcode":91714
         },
         "email":"anton.waara@example.com",
         "login":{  
            "username":"goldenfish349",
            "password":"90210",
            "salt":"6az3e3sC",
            "md5":"aca6063c1f641ebce11e13641dadbf4f",
            "sha1":"e5d664d755b3df9ae985bd0b25bf5691174541f7",
            "sha256":"f85ca7a7a9a74013d54c5a42ed87500e6d44eb2a8cc7dccc53c21ffd6520a752"
         },
         "dob":"1978-08-08 02:27:24",
         "registered":"2007-09-24 11:36:33",
         "phone":"04-000-108",
         "cell":"043-152-77-42",
         "id":{  
            "name":"HETU",
            "value":"978-279C"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/1.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/1.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/1.jpg"
         },
         "nat":"FI"
      },

      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"edwin",
            "last":"lawrence"
         },
         "location":{  
            "street":"4628 prospect rd",
            "city":"rockhampton",
            "state":"victoria",
            "postcode":5848
         },
         "email":"edwin.lawrence@example.com",
         "login":{  
            "username":"greenfish126",
            "password":"spam",
            "salt":"ESsWrgJd",
            "md5":"ae1f9047cc098ac6b890dc9f5f06f00d",
            "sha1":"a157078466136f48d609950b9138802a980c0cf8",
            "sha256":"42839b3902fcaf910ed1eeb676f2a4bfd0354371b4a2fc5fa24135bc692bd3e4"
         },
         "dob":"1958-10-16 09:00:53",
         "registered":"2013-11-07 22:27:01",
         "phone":"00-8511-1138",
         "cell":"0408-379-478",
         "id":{  
            "name":"TFN",
            "value":"815435696"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/16.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/16.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/16.jpg"
         },
         "nat":"AU"
      },

      {  
         "gender":"female",
         "name":{  
            "title":"mrs",
            "first":"sharon",
            "last":"adams"
         },
         "location":{  
            "street":"2784 st. john’s road",
            "city":"winchester",
            "state":"surrey",
            "postcode":"ZM84 9AS"
         },
         "email":"sharon.adams@example.com",
         "login":{  
            "username":"blueswan189",
            "password":"joanne",
            "salt":"w0ph3a92",
            "md5":"75777313cc063b2f4046a26421937a51",
            "sha1":"eb8b8b567895f153ee2a0efe9dafa71d10ded652",
            "sha256":"e73bfa7223c6c8791142d11095703c75a392231939594d3802861980a2f7be59"
         },
         "dob":"1960-11-06 01:20:50",
         "registered":"2002-05-28 17:05:24",
         "phone":"017687 51688",
         "cell":"0789-705-071",
         "id":{  
            "name":"NINO",
            "value":"MP 21 91 22 K"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/women/13.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/13.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/13.jpg"
         },
         "nat":"GB"
      },

      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"hauke",
            "last":"gerlach"
         },
         "location":{  
            "street":"7472 lessingstraße",
            "city":"bitburg-prüm",
            "state":"nordrhein-westfalen",
            "postcode":74258
         },
         "email":"hauke.gerlach@example.com",
         "login":{  
            "username":"yellowsnake708",
            "password":"root",
            "salt":"WXjhW7ch",
            "md5":"e4f3fda386784798340b5d1fe3477f2f",
            "sha1":"e7fc375d277e398742d7576eef4ed8049ba4acd2",
            "sha256":"7786d489a11c87007b3bba1994b3c5e21e2e79f32a1c7f831bedab912284a507"
         },
         "dob":"1972-05-09 10:48:37",
         "registered":"2003-09-23 17:24:05",
         "phone":"0920-2153801",
         "cell":"0174-0161399",
         "id":{  
            "name":"",
            "value":null
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/86.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/86.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/86.jpg"
         },
         "nat":"DE"
      },

      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"julius",
            "last":"tikkanen"
         },
         "location":{  
            "street":"7452 reijolankatu",
            "city":"kumlinge",
            "state":"finland proper",
            "postcode":30823
         },
         "email":"julius.tikkanen@example.com",
         "login":{  
            "username":"yellowswan804",
            "password":"tartar",
            "salt":"E2xgqF8V",
            "md5":"a16d24c93b73efa3f1dc2a921133afc6",
            "sha1":"5f939e118e7446ee1ebb0b810c2507b01e019ef8",
            "sha256":"bfaba48bf5538d15f39296bb99d66e19cf8ecd1843f37c31d8eaa2278157aae3"
         },
         "dob":"1982-08-01 13:09:42",
         "registered":"2003-08-14 15:01:48",
         "phone":"08-566-124",
         "cell":"045-573-34-13",
         "id":{  
            "name":"HETU",
            "value":"782-513B"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/14.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/14.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/14.jpg"
         },
         "nat":"FI"
      },

      {  
         "gender":"female",
         "name":{  
            "title":"ms",
            "first":"sophie",
            "last":"moore"
         },
         "location":{  
            "street":"8341 whakatu drive",
            "city":"lower hutt",
            "state":"canterbury",
            "postcode":77540
         },
         "email":"sophie.moore@example.com",
         "login":{  
            "username":"redcat621",
            "password":"ventura",
            "salt":"5NwF7lVg",
            "md5":"a599527c9ee6c95d18882347087c4c65",
            "sha1":"8b1202888dd773b02abbf8565eff18e98f67c40d",
            "sha256":"fea5469d4240833c6990cdd628e0ba1771b5dba3354060142f28c128436e9b64"
         },
         "dob":"1959-09-14 16:54:33",
         "registered":"2005-10-27 11:21:34",
         "phone":"(516)-438-0623",
         "cell":"(619)-745-5890",
         "id":{  
            "name":"",
            "value":null
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/women/29.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/29.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/29.jpg"
         },
         "nat":"NZ"
      },

      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"ray",
            "last":"smith"
         },
         "location":{  
            "street":"6755 dane st",
            "city":"geraldton",
            "state":"south australia",
            "postcode":3045
         },
         "email":"ray.smith@example.com",
         "login":{  
            "username":"yellowswan424",
            "password":"japanees",
            "salt":"CQeJQPtH",
            "md5":"a6b639ade2b6a5ef91dc30b83ffa9d2a",
            "sha1":"086cc7dbd5883eaa0e65ce5927cc7dd6531b4cf1",
            "sha256":"ac807298108572edc52b3ef70e7d9af09365f9b17df50adf948f8998f4080d7f"
         },
         "dob":"1992-07-23 19:41:28",
         "registered":"2006-11-18 23:41:51",
         "phone":"08-5104-0020",
         "cell":"0472-958-305",
         "id":{  
            "name":"TFN",
            "value":"758163100"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/27.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/27.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/27.jpg"
         },
         "nat":"AU"
      },

      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"david",
            "last":"parra"
         },
         "location":{  
            "street":"5460 avenida de andalucía",
            "city":"parla",
            "state":"castilla la mancha",
            "postcode":28527
         },
         "email":"david.parra@example.com",
         "login":{  
            "username":"bluesnake180",
            "password":"oyster",
            "salt":"2Wy6YyAp",
            "md5":"8732db24e34747c0800006ac994da20e",
            "sha1":"246d3d3077eed9eb806c3e393cb6469477eb93c3",
            "sha256":"19753a8d1994635c037d4a9366ba2497e4d964992b474376ae36a8bece6027b2"
         },
         "dob":"1961-12-11 04:22:03",
         "registered":"2006-12-02 20:59:58",
         "phone":"956-618-305",
         "cell":"621-149-356",
         "id":{  
            "name":"DNI",
            "value":"37157413-J"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/64.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/64.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/64.jpg"
         },
         "nat":"ES"
      },

      {  
         "gender":"female",
         "name":{  
            "title":"miss",
            "first":"anna",
            "last":"arias"
         },
         "location":{  
            "street":"7170 calle de atocha",
            "city":"santander",
            "state":"aragón",
            "postcode":19004
         },
         "email":"anna.arias@example.com",
         "login":{  
            "username":"heavybird664",
            "password":"vanhalen",
            "salt":"iCsARaw2",
            "md5":"3318202a3d9de96b5955c895303dda23",
            "sha1":"666c1fc056c0c4d5439e47a280fb78cb30e84aef",
            "sha256":"584d18c8937b7c00be219a7ee73c0f7705bdcecd5beb1237df9808fa38e4198d"
         },
         "dob":"1956-03-24 05:33:43",
         "registered":"2009-02-20 19:26:26",
         "phone":"935-668-687",
         "cell":"640-319-822",
         "id":{  
            "name":"DNI",
            "value":"68757294-N"
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/women/72.jpg",
            "medium":"https://randomuser.me/api/portraits/med/women/72.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/women/72.jpg"
         },
         "nat":"ES"
      },

      {  
         "gender":"male",
         "name":{  
            "title":"mr",
            "first":"عرشيا",
            "last":"رضاییان"
         },
         "location":{  
            "street":"1247 آیت‌الله مدنی",
            "city":"مشهد",
            "state":"لرستان",
            "postcode":62790
         },
         "email":"عرشيا.رضاییان@example.com",
         "login":{  
            "username":"greenbird648",
            "password":"blackdog",
            "salt":"4vXzrjQ1",
            "md5":"69db6ee4a5bb76723d4e1ce4476f4857",
            "sha1":"3db65df72d1a4aace2347209fdc09c8e09f49d03",
            "sha256":"b8ad8528a0ba2765cf9db3eacd0fcbb1f25895a4fbbc0d712164579db910cd66"
         },
         "dob":"1961-12-26 08:22:14",
         "registered":"2011-04-07 05:44:32",
         "phone":"002-35644987",
         "cell":"0970-202-1312",
         "id":{  
            "name":"",
            "value":null
         },
         "picture":{  
            "large":"https://randomuser.me/api/portraits/men/30.jpg",
            "medium":"https://randomuser.me/api/portraits/med/men/30.jpg",
            "thumbnail":"https://randomuser.me/api/portraits/thumb/men/30.jpg"
         },
         "nat":"IR"
      },

	];


	this.selectContact = function(index) {
		this.selectedContact = this.contacts[index];
	}
}

function HeaderCtrl(message) {
	this.msg = message;
}

function FooterCtrl(message) {
	this.msg = message;
}