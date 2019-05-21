/** Load user and roles from out side the modue **/
//var username = null;
//var userroles = null;
//var username = "testGeneralUser";
//var username = "testUserGeneral";
//var userroles = "1886";
var username = "cimmAdmin";
var userroles = "634";
function loadUserName(iframe_userName) {
    console.log('outside tasks file now.... loadUserName....is ', iframe_userName);
    username = iframe_userName;
    console.log('calling ouside load username method is done');
}

function loadUserRoles(iframe_userRoles) {
    console.log('outside tasks file.... now loadUserRoles....is ', iframe_userRoles);
    console.log('tasks roles length .is ', iframe_userRoles.length);
    userroles = iframe_userRoles;
    console.log('calling outside load userroles method is done');
}

function onErrorLoad(img) {
	img.src="images/noimageCimm.png";
	$(".head h3").show();
	$(".head h3").html("Task Already Completed");
}
/** This is for Excel File download scripts **/
function datenum(v, date1904) {
	if(date1904) v+=1462;
	var epoch = Date.parse(v);
	return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

function sheet_from_array_of_arrays(data, opts) {
	var ws = {};
	var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
	for(var R = 0; R != data.length; ++R) {
		for(var C = 0; C != data[R].length; ++C) {
			if(range.s.r > R) range.s.r = R;
			if(range.s.c > C) range.s.c = C;
			if(range.e.r < R) range.e.r = R;
			if(range.e.c < C) range.e.c = C;
			var cell = {v: data[R][C] };
			if(cell.v == null) continue;
			var cell_ref = XLSX.utils.encode_cell({c:C,r:R});
			/* TEST: proper cell types and value handling */
			if(typeof cell.v === 'number') cell.t = 'n';
			else if(typeof cell.v === 'boolean') cell.t = 'b';
			else if(cell.v instanceof Date) {
				cell.t = 'n'; cell.z = XLSX.SSF._table[14];
				cell.v = datenum(cell.v);
			}
			else cell.t = 's';
			ws[cell_ref] = cell;
		}
	}
	/* TEST: proper range */
	if(range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
	return ws;
}

function Workbook() {
	if(!(this instanceof Workbook)) return new Workbook();
	this.SheetNames = [];
	this.Sheets = {};
}

function s2ab(s) {
	var buf = new ArrayBuffer(s.length);
	var view = new Uint8Array(buf);
	for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
	return buf;
}