// function LoadJson(file,callback){
// 	var xhr=new XMLHttpRequest();
// 	xhr.overrideMimeType("application/json");
// 	xhr.open("GET",file,true);
// 	xhr.onreadystatechange=function(){
// 		if(xhr.readyState===4 && xhr.status=="200"){
// 			callback(xhr.responseText);
// 		}
// 	};
// 	xhr.send(null);
// }
// LoadJson("data.json",function(text){
// 	var data=JSON.parse(text);
// 	console.log(data);
// 	basics(data.details);
// 	careerinfo(data.career);
// 	education(data.educationalqualification);
// 	skills(data.technicalskills);
// 	achieve(data.achievements);
// })
function Loadjson(file){
	return new Promise((resolve,reject)=>{
		return fetch(file).then(response=>{
			if(response.ok){
				resolve(response.json());
			}
			else{
				reject(new Error('error'));
			}
		})
	})
}
var newfille=Loadjson("data.json");
newfille.then(data=>{
	console.log(data);
	basics(data.details);
	careerinfo(data.career);
	education(data.educationalqualification);
	skills(data.technicalskills);
	achieve(data.achievements);
})
var left=document.querySelector(".left")
function basics(det){
	var img=document.createElement("img");
	img.src=det.image;
	left.appendChild(img);
	var name1=document.createElement("h3");
	name1.textContent=det.name;
	left.appendChild(name1)
	var ph=document.createElement("h3");
	ph.textContent=det.phno;
	left.appendChild(ph);
	var email1=document.createElement("a");
	email1.href="mailto:bhavanin.reddy2000@gmail.com";
	email1.textContent=det.email;
	left.appendChild(email1);
	var add=document.createElement("h2");
	add.textContent="address";
	left.appendChild(add);
	var hr1=document.createElement("hr");
	left.appendChild(hr1);
	var add1=document.createElement("h2");
	add1.textContent=det.address;
	left.appendChild(add1);
}
var right=document.querySelector(".right")
function careerinfo(det1){
	var c1=document.createElement("h3");
	c1.textContent="career objective";
	right.appendChild(c1);
	var hr2=document.createElement("hr");
	right.appendChild(hr2);
	var c2=document.createElement("h3");
	c2.textContent=det1.info;
	right.appendChild(c2);
}
function education(det2){
	var e1=document.createElement("h4");
	e1.textContent="Educational Qualification";
	right.appendChild(e1);
	var h3=document.createElement("hr");
	right.appendChild(h3);
	var table1=document.createElement("table");
	table1.border="2";
	right.appendChild(table1);
	tabledata="";
	for(i=0;i<det2.length;i++){
		tabledata+="<tr><td>"+det2[i].qualification+"</td><td>"+det2[i].institute+"</td><td>"+det2[i].year+"</td><td>"+det2[i].percentage+"</td></tr>"
	}
	table1.innerHTML = tabledata;
}
function skills(det3){
	var c1=document.createElement("h4");
	c1.textContent="TechnicalSkills";
	right.appendChild(c1);
	var hr2=document.createElement("hr");
	right.appendChild(hr2);
	for(i=0;i<det3.length;i++)
	{
		var s=document.createElement("h3");
		s.textContent=det3[i].title;
		right.appendChild(s);
		var ul=document.createElement("ul");
		var li=document.createElement("li");
		li.textContent=det3[i].info;
		ul.appendChild(li);
		right.appendChild(ul);

	}
}
function achieve(det4){
	var a1=document.createElement("h3");
	a1.textContent="achievements";
	right.appendChild(a1);
	var hr2=document.createElement("hr");
	right.appendChild(hr2);
	for(i=0;i<det4.length;i++){
		var s=document.createElement("ul");
		var l=document.createElement("li");
		l.textContent=det4[i].title1;
		s.appendChild(l);
		right.appendChild(l);
	}

}
function openpage(){
	window.open("RESUME.html","_self",true)
}
