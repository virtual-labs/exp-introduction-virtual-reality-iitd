
// var l1 =0;
// var b1 =0;
// var d1 =0;

// var a1 =0;
// var i1 =0;

// var el1 =0;
// var den1 =0;
// var vn =0;
// var freq1 =0;

function navNext1()

{
        document.getElementById("canvas0").style.visibility="hidden";

        document.getElementById("canvas1").style.visibility="visible";     
}


function navNext1a()

{
        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas1a").style.visibility="visible";     
}

function sel1()

{
        document.getElementById("tick1").style.visibility="visible";
        document.getElementById("arwnext_show1").style.visibility="visible";
        document.getElementById("nextCan_Btn1").style.visibility="visible";
        document.getElementById("tick2").style.visibility="hidden";     
}

function sel1x()

{
        document.getElementById("tick2").style.visibility="visible";
        document.getElementById("tick1").style.visibility="hidden";
        document.getElementById("arwnext_show1").style.visibility="hidden";
        document.getElementById("nextCan_Btn1").style.visibility="hidden";     
}

function navNext2a()

{
        document.getElementById("canvas1a").style.visibility="hidden";

        document.getElementById("canvas5").style.visibility="visible";//canvas2      
}

function sel2()

{
        document.getElementById("tick3").style.visibility="visible";

        document.getElementById("arwnext_show2").style.visibility="visible";
        document.getElementById("nextCan_Btn2").style.visibility="visible";//canvas2

        document.getElementById("tick4").style.visibility="hidden";      
}

function sel2x()

{
        document.getElementById("tick4").style.visibility="visible";

        document.getElementById("arwnext_show2").style.visibility="hidden";
        document.getElementById("nextCan_Btn2").style.visibility="hidden";//canvas2

        document.getElementById("tick3").style.visibility="hidden";     
}


function sel3()

{
        document.getElementById("tick5").style.visibility="visible";

        document.getElementById("arwnext_show14").style.visibility="hidden";
        document.getElementById("nextCan_Btn14").style.visibility="hidden";//canvas2

        document.getElementById("tick6").style.visibility="hidden";      
}

function sel3x()

{
        document.getElementById("tick6").style.visibility="visible";

        document.getElementById("arwnext_show14").style.visibility="visible";
        document.getElementById("nextCan_Btn14").style.visibility="visible";//canvas2

        document.getElementById("tick5").style.visibility="hidden";     
}

function navNext2()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";//canvas3

        document.getElementById("arrowcube1").style.visibility="visible";

}



function navNext3()

{

        document.getElementById("canvas3").style.visibility="hidden";

        document.getElementById("canvas4").style.visibility="visible";

        //Month Print
//document.getElementById("demo01").innerHTML = logo.getMonth() + 1;
//Date Print
//document.getElementById("demo02").innerHTML = logo.getDate();
//Year Print
//document.getElementById("demo03").innerHTML = logo.getFullYear();

        //document.getElementById("cubedatehidden1").style.visibility="visible";

}



function navNext4()

{

        document.getElementById("canvas4").style.visibility="hidden";

        document.getElementById("canvas5").style.visibility="visible";

        // document.getElementById("arrowcubox5").style.visibility="visible";
        
        //document.getElementById("cubedatehidden").style.visibility="visible";
}

function navNext5()

{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";
}

function navNextx5()

{

        document.getElementById("canvas5").style.visibility="hidden";

        document.getElementById("canvas6").style.visibility="visible";


        // document.getElementById("arrow6").style.visibility="visible";

        /*Countdown Timer Animation Code Start*  
        function animateValue(id, start, end, duration) {
                var range = end - start;
                var current = start;
                var increment = end > start? 1 : -1;
                var stepTime = Math.abs(Math.floor(duration / range));
                var obj = document.getElementById(id);
                var timer = setInterval(function() 
                {
                    current += increment;
                    obj.innerHTML = current;
                    if (current == end) 
                    {
                        clearInterval(timer);
                    }
                }, stepTime);
        }

        animateValue("value", 0, 250, 7000);
        /*Countdown Timer Animation Code End*/

}


function navNext6()

{

        document.getElementById("canvas6").style.visibility="hidden";

        document.getElementById("canvas7").style.visibility="visible";

}

 
function navNext7()

{

        document.getElementById("canvas7").style.visibility="hidden";

        document.getElementById("canvas8").style.visibility="visible";

        // document.getElementById("larrow6").style.visibility="visible";

}
function navNext8()
{

        document.getElementById("canvas8").style.visibility="hidden";

        document.getElementById("canvas9").style.visibility="visible";

        

    // if (size == 500)//numbox == 2.33 && size == 10)
    // {
    //     document.getElementById("abox").innerHTML = 120; 
    // }
    // else if (size == 700)//numbox == 5.25 && size == 15)
    // {
    //     document.getElementById("abox").innerHTML = 190;
    // }
    // else
    // {
    //     alert("Wrong");
    // }

}

function navNext9()
{

        document.getElementById("canvas9").style.visibility="hidden";

        document.getElementById("canvas10").style.visibility="visible";




        // document.getElementById("rarrow6").style.visibility="visible";
 
}


function navNext10()
{

        document.getElementById("canvas10").style.visibility="hidden";

        document.getElementById("canvas11").style.visibility="visible";

setTimeout(function()
	{
    document.getElementById("arwnext_show11").style.visibility="visible";
    document.getElementById("nextCan_Btn11").style.visibility="visible";    
    },2000);
}



function navNext11()
{

        document.getElementById("canvas11").style.visibility="hidden";

        document.getElementById("canvas12").style.visibility="visible";

setTimeout(function()
	{
    document.getElementById("arwnext_show12").style.visibility="visible";
    document.getElementById("nextCan_Btn12").style.visibility="visible";    
    },2000);

}



function navNext12()
{

        document.getElementById("canvas12").style.visibility="hidden";

        document.getElementById("canvas13").style.visibility="visible";

setTimeout(function()
	{
    document.getElementById("arwnext_show13").style.visibility="visible";
    document.getElementById("nextCan_Btn13").style.visibility="visible";    
    },2000);
}



function navNext13()
{

        document.getElementById("canvas13").style.visibility="hidden";

        document.getElementById("canvas14").style.visibility="visible";

setTimeout(function()
	{
    document.getElementById("arwnext_show14").style.visibility="visible";
    document.getElementById("nextCan_Btn14").style.visibility="visible";    
    },2000);
}



function navNext14()
{

        document.getElementById("canvas14").style.visibility="hidden";

        document.getElementById("canvas15").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("measu_tb8").style.visibility="visible";
            document.getElementById("measure_tape15").style.visibility="visible";
            // document.getElementById("measure_tapeup8").style.visibility="visible";
            document.getElementById("measure_tape16").style.visibility="visible";
        },1000);

}

function navNext15()
{

        document.getElementById("canvas15").style.visibility="hidden";

        document.getElementById("canvas16").style.visibility="visible";
 
setTimeout(function()
    {
	    document.getElementById("arwnext_show16").style.visibility="visible";
	    document.getElementById("nextCan_Btn16").style.visibility="visible";
    },1000);
}

function navNext16()
{

        document.getElementById("canvas16").style.visibility="hidden";

        document.getElementById("canvas17").style.visibility="visible";

setTimeout(function()

    {
		document.getElementById("arwnext_show17").style.visibility="visible";
		document.getElementById("nextCan_Btn17").style.visibility="visible";
    },1000);
}


function navNext17()
{

        document.getElementById("canvas17").style.visibility="hidden";

        document.getElementById("canvas18").style.visibility="visible";

// document.getElementById("arwnext_show16").style.visibility="visible";
// document.getElementById("nextCan_Btn16").style.visibility="visible";

        // document.getElementById("rarrow6").style.visibility="visible";
setTimeout(function()

    {

    document.getElementById("arrowrestart").style.visibility="visible";

    document.getElementById("resetbutton").style.visibility="visible";

    document.getElementById("thanku").style.visibility="visible";
    
    },2000);
}

function startpressure2()
{
    document.getElementById("pressure_tb2").style.visibility="hidden";
    // document.getElementById("arrowpressurein2").style.visibility="hidden";

document.getElementById("jackhandle2").style.animation="movejackhandle1 2s 3 linear";

    document.getElementById("movehammer2").style.animation="hammeranim21 4s forwards linear";
    setTimeout(function()
    {
       document.getElementById("aperatus11").style.visibility="hidden";
       document.getElementById("aperatus21").style.visibility="visible";
       document.getElementById("aperatus21").style.animation="hammeranim22 2s forwards linear";

       // setTimeout(function()
       //  {
       //     document.getElementById("aperatus2").style.visibility="hidden";
       //     document.getElementById("aperatus3").style.visibility="visible";
       //     document.getElementById("aperatus3").style.animation="hammeranim3 3s forwards linear";
       //  },2000);

       setTimeout(function()
        {
            document.getElementById("movehammer2").style.animation="hammeranimreturn21 4s forwards linear";

            setTimeout(function()
            {
                document.getElementById("arrownext10").style.visibility="visible";
                document.getElementById("nextButton10").style.visibility="visible";
            //     document.getElementById("aperatus3").style.animation="removetomachine 4s forwards linear";
            },4500);

        },7000);

    },2000);

}


function start_load()
{
	// document.getElementById("strt_mac").style.visibility="hidden";
        document.getElementById("pressure_tb2").style.visibility="hidden";
        document.getElementById("arrowpressurein2").style.visibility="hidden";

	document.getElementById("machine_btn").style.background="#09e409";

        document.getElementById("jackhandle2").style.animation="movejackhandle1 2.5s 3 linear";

	setTimeout(function()
    {        
        document.getElementById("prs1").style.visibility="visible";
        document.getElementById("prs2").style.visibility="visible";
        document.getElementById("movepin1").style.animation="move_pin1 5s forwards";
	
	document.getElementById("loadp").style.visibility="visible";
	
    },1000);

// $("#crek1").fadeOut(2000);
setTimeout(function()
    {
        // document.getElementById("crek1").style.visibility="visible";
        $("#crek1").fadeIn(2000);
        // document.getElementById("arrowcubox6").style.visibility="visible";
        // document.getElementById("nextButton6").style.visibility="visible";
        setTimeout(function()
        {
        document.getElementById("prs1").style.visibility="hidden";
        document.getElementById("prs2").style.visibility="hidden";

        document.getElementById("movepin1").style.animation="move_pin2 5s forwards";
        
        document.getElementById("arwnext_show10").style.visibility="visible";
        document.getElementById("nextCan_Btn10").style.visibility="visible";
        },1000);
    },6000);
}


function navNext9a()
{

        document.getElementById("canvas9a").style.visibility="hidden";

        document.getElementById("canvas10").style.visibility="visible";

        document.getElementById("rarrow6").style.visibility="visible";

}

function navNexxt10()
{

        document.getElementById("canvas10").style.visibility="hidden";

        document.getElementById("canvas11").style.visibility="visible";

        

        // if (size == 500)//numbox == 2.33 && size == 10)
        // {
        //     document.getElementById("bbox").innerHTML = 99; 
        // }
        // else if (size == 700)//numbox == 5.25 && size == 15)
        // {
        //     document.getElementById("bbox").innerHTML = 148;
        // }
        // else
        // {
        //     alert("Wrong");
        // }

}

function navNexttt11()
{

        document.getElementById("canvas11").style.visibility="hidden";

        document.getElementById("canvas12").style.visibility="visible";

        document.getElementById("get1").innerHTML = l1;
        document.getElementById("get2").innerHTML = l2;
        document.getElementById("get3").innerHTML = l3;
        document.getElementById("get4").innerHTML = freq1;
        document.getElementById("get5").innerHTML = freq2;
        document.getElementById("get6").innerHTML = freq3;


        document.getElementById("sarrow6").style.visibility="visible";

}

function navNextt12()
{

        document.getElementById("canvas12").style.visibility="hidden";

        document.getElementById("canvas13").style.visibility="visible";

        document.getElementById("get11").innerHTML = el1;
        document.getElementById("get22").innerHTML = el2;
        document.getElementById("get33").innerHTML = el3;
        document.getElementById("get44").innerHTML = freq1;
        document.getElementById("get55").innerHTML = freq2;
        document.getElementById("get66").innerHTML = freq3;
        

}

function reset()
{
    location.reload();
}






////////////===========   Specimen 1  =================//////////



var l1 =0;
var t1 =0;
var d1 =0;
var p1 =0;

var el1 =0;


var vn =0;
var freq1 =0;


function agesizeIn()

{

	// document.getElementById("submit11").style.visibility="hidden";


    l1 = document.getElementById("length").value;

	t1 = document.getElementById("thck1").value;
    p1 = document.getElementById("poi1").value;

    // d1 = document.getElementById("dep1").value; 
    // el1 = document.getElementById("el1").value;

	// a1 = document.getElementById("area1").value;
    // i1 = document.getElementById("moment1").value;

if (l1 !== "" && t1 !== "" && p1 !== "")
    {
    	document.getElementById("arrowcubox3").style.visibility="visible";
		document.getElementById("nextButton3").style.visibility="visible";
        document.getElementById("fillBox").innerHTML = "&nbsp;";
    }

else
    {
        document.getElementById("fillBox").innerHTML = "Please Enter all Values";
    }

}


function ageIn()

{


    el1 = document.getElementById("ele1").value;
    d1 = document.getElementById("den1").value;
    // el1 = document.getElementById("ele1").value;
	// den1 = document.getElementById("den1").value;
    vn = document.getElementById("nv").value;


if (el1 !== "" && d1 !== "" && vn !== "")
{

    document.getElementById("submit12").style.visibility="hidden";

    document.getElementById("arrgerowcubox4").style.visibility="visible";

    document.getElementById("nextButton4").style.visibility="visible";

    document.getElementById("Box1").innerHTML = "&nbsp;";

}
else
{
    document.getElementById("Box1").innerHTML = "Please Enter all Values"; 
}

    

}

function frequency()
{
    //var etcub = youngs*thickns*thickns*thickns;
    var etcub = el1*t1*t1*t1;
    //var psqr= poisns*poisns;
    // var psqr= p1*p1;
    var sub = 1-(p1*p1);
    var dee = etcub/sub/12;
    //var sq = Math.sqrt(dee/density/thickns);
    // var sq = Math.sqrt(dee/d1/t1);
    var sq = Math.sqrt(dee/d1/t1);

    if (vn == 11) 
    {
        var matsqr = 1*1;
        var natsqr = 1*1;
        document.getElementById("showgif").style.visibility="visible";
        document.getElementById("showgif").src="images/gif1.gif";
    }
    else if (vn == 12) 
    {
        var matsqr = 1*1;
        var natsqr = 2*2;
        document.getElementById("showgif").style.visibility="visible";
        document.getElementById("showgif").src="images/gif2.gif";
    }
    else if (vn == 21) 
    {
        var matsqr = 2*2;
        var natsqr = 1*1;
        document.getElementById("showgif").style.visibility="visible";
        document.getElementById("showgif").src="images/gif3.gif";
    }
    else if (vn == 22) 
    {
        var matsqr = 2*2;
        var natsqr = 2*2;
        document.getElementById("showgif").style.visibility="visible";
        document.getElementById("showgif").src="images/gif4.gif";
    }
    else 
    {
        alert("Wrong");
    }
    
    var add = matsqr+natsqr;
    var A = Math.PI*add/2/l1/l1;
    x2= A*sq;
    freq1 = x2.toFixed(2);
    document.getElementById("freqprint").innerHTML = freq1;

    document.getElementById("arrowcubox5").style.visibility="visible";

    document.getElementById("nextButton5").style.visibility="visible";

    document.getElementById("repeat1").style.visibility="visible";

}


////////////===========   Specimen 2  =================//////////



var l2 =0;
var t2 =0;
var d2 =0;
var p2 =0;

var el2 =0;


var vn2 =0;
var freq2 =0;


function agesizeIn2()

{

    // document.getElementById("submit11").style.visibility="hidden";


    l2 = document.getElementById("length2").value;

    t2 = document.getElementById("thck2").value;
    p2 = document.getElementById("poi2").value;

    // d1 = document.getElementById("dep1").value; 
    // el1 = document.getElementById("el1").value;

    // a1 = document.getElementById("area1").value;
    // i1 = document.getElementById("moment1").value;

if (l2 !== "" && t2 !== "" && p2 !== "")
    {
        document.getElementById("arrowcubox6a").style.visibility="visible";
        document.getElementById("nextButton6a").style.visibility="visible";
        document.getElementById("fillBox2").innerHTML = "&nbsp;";
    }

else
    {
        document.getElementById("fillBox2").innerHTML = "Please Enter all Values";
    }

}


function ageIn2()

{


    el2 = document.getElementById("ele2").value;
    d2 = document.getElementById("den2").value;
    // el1 = document.getElementById("ele1").value;
    // den1 = document.getElementById("den1").value;
    vn2 = document.getElementById("nv2").value;


if (el2 !== "" && d2 !== "" && vn2 !== "")
{

    document.getElementById("submit13").style.visibility="hidden";

    document.getElementById("arrowcubox7").style.visibility="visible";

    document.getElementById("nextButton7").style.visibility="visible";

    document.getElementById("Box2").innerHTML = "&nbsp;";

}
else
{
    document.getElementById("Box2").innerHTML = "Please Enter all Values"; 
}

    

}

function frequency2()
{
    //var etcub = youngs*thickns*thickns*thickns;
    var etcub = el2*t2*t2*t2;
    //var psqr= poisns*poisns;
    // var psqr= p1*p1;
    var sub = 1-(p2*p2);
    var dee = etcub/sub/12;
    //var sq = Math.sqrt(dee/density/thickns);
    // var sq = Math.sqrt(dee/d1/t1);
    var sq = Math.sqrt(dee/d2/t2);

    if (vn2 == 11) 
    {
        var matsqr = 1*1;
        var natsqr = 1*1;
        document.getElementById("showgif2").style.visibility="visible";
        document.getElementById("showgif2").src="images/gif1.gif";
    }
    else if (vn2 == 12) 
    {
        var matsqr = 1*1;
        var natsqr = 2*2;
        document.getElementById("showgif2").style.visibility="visible";
        document.getElementById("showgif2").src="images/gif2.gif";
    }
    else if (vn2 == 21) 
    {
        var matsqr = 2*2;
        var natsqr = 1*1;
        document.getElementById("showgif2").style.visibility="visible";
        document.getElementById("showgif2").src="images/gif3.gif";
    }
    else if (vn2 == 22) 
    {
        var matsqr = 2*2;
        var natsqr = 2*2;
        document.getElementById("showgif2").style.visibility="visible";
        document.getElementById("showgif2").src="images/gif4.gif";
    }
    else 
    {
        alert("Wrong");
    }
    
    var add = matsqr+natsqr;
    var A = Math.PI*add/2/l2/l2;
    x2= A*sq;
    freq2 = x2.toFixed(2);
    document.getElementById("freqprint2").innerHTML = freq2;

    document.getElementById("arrowcubox8").style.visibility="visible";

    document.getElementById("nextButton8").style.visibility="visible";

    document.getElementById("repeat2").style.visibility="visible";

}


////////////===========   Specimen 3  =================//////////



var l3 =0;
var t3 =0;
var d3 =0;
var p3 =0;

var el3 =0;


var vn3 =0;
var freq3 =0;


function agesizeIn3()

{

    // document.getElementById("submit11").style.visibility="hidden";


    l3 = document.getElementById("length3").value;

    t3 = document.getElementById("thck3").value;
    p3 = document.getElementById("poi3").value;

    // d1 = document.getElementById("dep1").value; 
    // el1 = document.getElementById("el1").value;

    // a1 = document.getElementById("area1").value;
    // i1 = document.getElementById("moment1").value;

if (l3 !== "" && t3 !== "" && p3 !== "")
    {
        document.getElementById("arrowcubox9a").style.visibility="visible";
        document.getElementById("nextButton9a").style.visibility="visible";
        document.getElementById("fillBox3").innerHTML = "&nbsp;";
    }

else
    {
        document.getElementById("fillBox3").innerHTML = "Please Enter all Values";
    }

}


function ageIn3()

{


    el3 = document.getElementById("ele3").value;
    d3 = document.getElementById("den3").value;
    // el1 = document.getElementById("ele1").value;
    // den1 = document.getElementById("den1").value;
    vn3 = document.getElementById("nv3").value;


if (el3 !== "" && d3 !== "" && vn3 !== "")
{

    document.getElementById("submit13").style.visibility="hidden";

    document.getElementById("arrowcubox10").style.visibility="visible";

    document.getElementById("nextButton10").style.visibility="visible";

    document.getElementById("Box3").innerHTML = "&nbsp;";

}
else
{
    document.getElementById("Box3").innerHTML = "Please Enter all Values"; 
}

    

}

function frequency3()
{
    //var etcub = youngs*thickns*thickns*thickns;
    var etcub = el3*t3*t3*t3;
    //var psqr= poisns*poisns;
    // var psqr= p1*p1;
    var sub = 1-(p3*p3);
    var dee = etcub/sub/12;
    //var sq = Math.sqrt(dee/density/thickns);
    // var sq = Math.sqrt(dee/d1/t1);
    var sq = Math.sqrt(dee/d3/t3);

    if (vn3 == 11) 
    {
        var matsqr = 1*1;
        var natsqr = 1*1;
        document.getElementById("showgif3").style.visibility="visible";
        document.getElementById("showgif3").src="images/gif1.gif";
    }
    else if (vn3 == 12) 
    {
        var matsqr = 1*1;
        var natsqr = 2*2;
        document.getElementById("showgif3").style.visibility="visible";
        document.getElementById("showgif3").src="images/gif2.gif";
    }
    else if (vn3 == 21) 
    {
        var matsqr = 2*2;
        var natsqr = 1*1;
        document.getElementById("showgif3").style.visibility="visible";
        document.getElementById("showgif3").src="images/gif3.gif";
    }
    else if (vn3 == 22) 
    {
        var matsqr = 2*2;
        var natsqr = 2*2;
        document.getElementById("showgif3").style.visibility="visible";
        document.getElementById("showgif3").src="images/gif4.gif";
    }
    else 
    {
        alert("Wrong");
    }
    
    var add = matsqr+natsqr;
    var A = Math.PI*add/2/l3/l3;
    x2= A*sq;
    freq3 = x2.toFixed(2);
    document.getElementById("freqprint3").innerHTML = freq3;

    document.getElementById("arrowcubox11").style.visibility="visible";

    document.getElementById("nextButton11").style.visibility="visible";

    // document.getElementById("repeat3").style.visibility="visible";

}
/*
function frequency1()
    {
    
    if(b1 !== "" && d1 !== "")  
    {
    // alert("naveen");
    a1 = b1 * d1;
    i1 = a1*d1*d1/12;

        var j1 = den1*a1;

        var sq1 = Math.sqrt(el1*i1/j1);

        var AA1 = Math.PI*vn*vn/2/l1/l1;

        var x1 = sq1*AA1;
freq1 = x1.toFixed(2);
        document.getElementById("freqprint").innerHTML = freq1;
// alert(vn);
        // switch(vn)
        if (vn == 1) 
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif1.gif";
            } 
        else if (vn == 2)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif2.gif";
            }
        else if (vn == 3)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif3.gif";
            }
        else if (vn == 4)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif4.gif";
            }
        else if (vn == 5)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }
            
            document.getElementById("arrowcubox5").style.visibility="visible";

            document.getElementById("nextButton5").style.visibility="visible";

            document.getElementById("repeat1").style.visibility="visible";
        
    }

    else if(a1 !== "" && i1 !== "")  
    {

        var j1 = den1*a1;

        var sq1 = Math.sqrt(el1*i1/j1);

        var AA1 = Math.PI*vn*vn/2/l1/l1;

        var x1 = sq1*AA1;
freq1 = x1.toFixed(2);
        document.getElementById("freqprint").innerHTML = freq1;

        if (vn == 1) 
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif1.gif";
            } 
        else if (vn == 2)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif2.gif";
            }
        else if (vn == 3)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif3.gif";
            }
        else if (vn == 4)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif4.gif";
            }
        else if (vn == 5)
            {
                document.getElementById("showgif").style.visibility="visible";
                document.getElementById("showgif").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }

            document.getElementById("arrowcubox5").style.visibility="visible";

            document.getElementById("nextButton5").style.visibility="visible";

            document.getElementById("repeat1").style.visibility="visible";
    // alert("akshat");
    }

    else
    {
        alert("Wrong")
   
    }


}

////////////===========   Specimen 2  =================//////////



var l2 =0;
var b2 =0;
var d2 =0;

var a2 =0;
var i2 =0;

var el2 =0;
var den2 =0;
var vn2 =0;
var freq2 =0;



function agesizeIn2()

{
    l2 = document.getElementById("length2").value;

    b2 = document.getElementById("bred2").value;
    d2 = document.getElementById("dep2").value;//  
    
    a2 = document.getElementById("area2").value;
    i2 = document.getElementById("moment2").value;

if (l2 !== "" && b2 !== "" && d2 !== "")
    {

        document.getElementById("sizec11").innerHTML= l2 + "m";
        document.getElementById("sizec22").innerHTML= b2 + "m";
        document.getElementById("sizec33").innerHTML= d2 + "m";

        document.getElementById("bm2").style.visibility="visible";
        document.getElementById("notepad2").style.visibility="hidden";

        
        document.getElementById("arrowcubox6").style.visibility="visible";
        document.getElementById("nextButton6").style.visibility="visible";

        document.getElementById("fillBox2").innerHTML = "&nbsp;";


    }
else if  (l2 !== "" && a2 !== "" && i2 !== "") 
{
        document.getElementById("sizec11").innerHTML= l2 + "m";
        

        document.getElementById("bm2").style.visibility="visible";
        document.getElementById("notepad2").style.visibility="hidden";
     
        document.getElementById("arrowcubox6").style.visibility="visible";
        document.getElementById("nextButton6").style.visibility="visible";
 
        document.getElementById("fillBox2").innerHTML = "&nbsp;";

        // document.getElementById("fillBox2").innerHTML = "&nbsp;";
}

    else
    {
        document.getElementById("fillBox2").innerHTML = "Please Enter all Values";
        
        
    }

    

}


function ageIn2()

{

    el2 = document.getElementById("ele2").value;
    den2 = document.getElementById("den2").value;
    vn2 = document.getElementById("nv2").value;  
 
    

if (el2 !== "" && den2 !== "" && vn2 !== "")
    {

    document.getElementById("submit22").style.visibility="hidden";
    
    document.getElementById("notepads2").style.visibility="hidden";

    document.getElementById("arrowcubox7").style.visibility="visible";

    document.getElementById("nextButton7").style.visibility="visible";

    document.getElementById("Box2").innerHTML = "&nbsp;";
  
    }
    else
    {
        document.getElementById("Box2").innerHTML = "Please Enter all Values";
         // alert("Wrong");
        
    }

    

}




function frequency2()
{
    
    if(b2 !== "" && d2 !== "")  
    {
    // alert("naveen");
    a2 = b2 * d2;
    i2 = a2*d2*d2/12;

        var j2 = den2*a2;

        var sq2 = Math.sqrt(el2*i2/j2);

        var AA2 = Math.PI*vn2*vn2/2/l2/l2;

        var x2 = sq2*AA2;
freq2 = x2.toFixed(2);
        document.getElementById("freqprint2").innerHTML = freq2;
// alert(vn2);
        if (vn2 == 1) 
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif1.gif";
            } 
        else if (vn2 == 2)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif2.gif";
            }
        else if (vn2 == 3)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif3.gif";
            }
        else if (vn2 == 4)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif4.gif";
            }
        else if (vn2 == 5)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }
            
            document.getElementById("arrowcubox8").style.visibility="visible";

            document.getElementById("nextButton8").style.visibility="visible";

            document.getElementById("repeat2").style.visibility="visible";
        
    }

    else if(a2 !== "" && i2 !== "")  
    {

        var j2 = den2*a2;

        var sq2 = Math.sqrt(el2*i2/j2);

        var AA2 = Math.PI*vn2*vn2/2/l2/l2;

        var x2 = sq2*AA2;
freq2 = x2.toFixed(2);
        document.getElementById("freqprint2").innerHTML = freq2;
// alert(vn2);
        if (vn2 == 1) 
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif1.gif";
            } 
        else if (vn2 == 2)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif2.gif";
            }
        else if (vn2 == 3)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif3.gif";
            }
        else if (vn2 == 4)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif4.gif";
            }
        else if (vn2 == 5)
            {
                document.getElementById("showgif2").style.visibility="visible";
                document.getElementById("showgif2").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }

            
            document.getElementById("arrowcubox8").style.visibility="visible";

            document.getElementById("nextButton8").style.visibility="visible";

            document.getElementById("repeat2").style.visibility="visible";
    // alert("akshat");
    }

    else
    {
        alert("Wrong")
   
    }

}



////////////===========   Specimen 3  =================//////////




var l3 =0;
var b3 =0;
var d3 =0;

var a3 =0;
var i3 =0;

var el3 =0;
var den3 =0;
var vn3 =0;
var freq3 =0;



function agesizeIn3()

{
    l3 = document.getElementById("length3").value;

    b3 = document.getElementById("bred3").value;
    d3 = document.getElementById("dep3").value;//  
    
    a3 = document.getElementById("area3").value;
    i3 = document.getElementById("moment3").value;

if (l3 !== "" && b3 !== "" && d3 !== "")
    {

        document.getElementById("sizec111").innerHTML= l3 + "m";
        document.getElementById("sizec222").innerHTML= b3 + "m";
        document.getElementById("sizec333").innerHTML= d3 + "m";

        document.getElementById("bm3").style.visibility="visible";
        document.getElementById("notepad3").style.visibility="hidden";

        
        document.getElementById("arrowcubox9").style.visibility="visible";
        document.getElementById("nextButton9").style.visibility="visible";

        document.getElementById("fillBox3").innerHTML = "&nbsp;";


    }
else if  (l3 !== "" && a3 !== "" && i3 !== "") 
{
        document.getElementById("sizec111").innerHTML= l3 + "m";
        

        document.getElementById("bm3").style.visibility="visible";
        document.getElementById("notepad3").style.visibility="hidden";
     
        document.getElementById("arrowcubox9").style.visibility="visible";
        document.getElementById("nextButton9").style.visibility="visible";
 
        document.getElementById("fillBox3").innerHTML = "&nbsp;";

        // document.getElementById("fillBox2").innerHTML = "&nbsp;";
}

    else
    {
        document.getElementById("fillBox3").innerHTML = "Please Enter all Values";
         // alert("Wrong");
        
    }

    

}


function ageIn3()

{

    el3 = document.getElementById("ele3").value;
    den3 = document.getElementById("den3").value;
    vn3 = document.getElementById("nv3").value;  
 
    

if (el3 !== "" && den3 !== "" && vn3 !== "")
    {

    document.getElementById("submit32").style.visibility="hidden";
    
    document.getElementById("notepads3").style.visibility="hidden";

    document.getElementById("arrowcubox10").style.visibility="visible";

    document.getElementById("nextButton10").style.visibility="visible";

    document.getElementById("Box3").innerHTML = "&nbsp;";
  
    }
    else
    {
        document.getElementById("Box3").innerHTML = "Please Enter all Values";
         // alert("Wrong");
        
    }

    

}


*

function frequency3()
{
    
    if(b3 !== "" && d3 !== "")  
    {
    // alert("naveen");
    a3 = b3 * d3;
    i3 = a3*d3*d3/12;

        var j3 = den3*a3;

        var sq3 = Math.sqrt(el3*i3/j3);

        var AA3 = Math.PI*vn3*vn3/2/l3/l3;

        var x3 = sq3*AA3;
 freq3 = x3.toFixed(2);
        document.getElementById("freqprint3").innerHTML = freq3;
// alert(vn3);
        if (vn3 == 1) 
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif1.gif";
            } 
        else if (vn3 == 2)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif2.gif";
            }
        else if (vn3 == 3)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif3.gif";
            }
        else if (vn3 == 4)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif4.gif";
            }
        else if (vn3 == 5)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }
            
            
    document.getElementById("arrowcubox11").style.visibility="visible";

    document.getElementById("nextButton11").style.visibility="visible";

            document.getElementById("repeat2").style.visibility="visible";
        
    }

    else if(a3 !== "" && i3 !== "")  
    {

        var j3 = den3*a3;

        var sq3 = Math.sqrt(el3*i3/j3);

        var AA3 = Math.PI*vn3*vn3/2/l3/l3;

         var x3 = sq3*AA3;
 
 freq3 = x3.toFixed(2);
 
        document.getElementById("freqprint3").innerHTML = freq3;
// alert(vn3);
        if (vn3 == 1) 
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif1.gif";
            } 
        else if (vn3 == 2)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif2.gif";
            }
        else if (vn3 == 3)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif3.gif";
            }
        else if (vn3 == 4)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif4.gif";
            }
        else if (vn3 == 5)
            {
                document.getElementById("showgif3").style.visibility="visible";
                document.getElementById("showgif3").src="images/gif5.gif";
            }
        else
            {
                alert("wrong");
            }

            
            
    document.getElementById("arrowcubox11").style.visibility="visible";

    document.getElementById("nextButton11").style.visibility="visible";

            document.getElementById("repeat2").style.visibility="visible";
    // alert("akshat");
    }

    else
    {
        alert("Wrong")
   
    }

}

*/





//////////////////////////////////////////////////////////////////////////////





function tunnu()

{
    //var ctext = Click Next ;
    var numbox = document.getElementById("quantity").value;
    //alert(size);
    //alert(numbox);
    if (numbox == 4.00 && size == 500)
    {
        
        document.getElementById("numoutnext").innerHTML = "Click Next";
        document.getElementById("arrow5").style.visibility="visible";
        document.getElementById("nextButton5").style.visibility="visible";
    }
    
    else if (numbox == 1.80 && size == 700)
    {
        
        document.getElementById("numoutnext").innerHTML = "Click Next";
        document.getElementById("arrow5").style.visibility="visible";
        document.getElementById("nextButton5").style.visibility="visible";
    }
    else
    {
        document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>4.00 for<br>100X100X500mm<br>speciman<br><br>1.80 for<br>150X150X700mm<br>speciman";
        
    }
}










function submit11()
{

    
  

}
// =====================Specimen 1===================

function addpiler1(){

   
// document.getElementById("reber1").style.visibility="visible";
// document.getElementById("sizetext1").style.visibility="visible";
// document.getElementById("size1").style.visibility="visible";
// document.getElementById("sizetext11").style.visibility="visible";
// document.getElementById("weight2").style.visibility="visible";
// document.getElementById("weighttext1").style.visibility="visible";
// document.getElementById("rebertb1").style.visibility="visible";
// document.getElementById("sizetext2").style.visibility="visible";
// document.getElementById("size2").style.visibility="visible";
// document.getElementById("sizetext22").style.visibility="visible";
// document.getElementById("reber3").style.visibility="visible";
// document.getElementById("sizetext3").style.visibility="visible";
// document.getElementById("size3").style.visibility="visible";
// document.getElementById("sizetext33").style.visibility="visible";
    // document.getElementById("piler2").style.animation="addpiler21 2s forwards";
    // document.getElementById("piler2").style.visibility="visible";
    
    document.getElementById("arrowbeam1").style.visibility="visible";
    // document.getElementById("arrowpiler1").style.visibility="hidden";

    setTimeout(function()

    {

    // document.getElementById("step2a").style.visibility="hidden";
    // document.getElementById("step2b").style.visibility="visible";    
    // document.getElementById("addbeam1").style.visibility="visible";
    
    
    },2000);


}


function movereber()
{
    document.getElementById("arrowpiler1").style.visibility="hidden";
    document.getElementById("addpiler1").style.visibility="hidden";


    document.getElementById("table1").style.visibility="visible";
    document.getElementById("table2").style.visibility="visible";
    document.getElementById("table3").style.visibility="visible";
    document.getElementById("table4").style.visibility="visible";
    document.getElementById("table5").style.visibility="visible";
    document.getElementById("table6").style.visibility="visible";
    document.getElementById("table7").style.visibility="visible";
    document.getElementById("table8").style.visibility="visible";
    document.getElementById("table9").style.visibility="visible";


setTimeout(function()

    {
        document.getElementById("arrowcubox2").style.visibility="visible";
        document.getElementById("nextButton2").style.visibility="visible";

    },1000);

}

function addvarniar1(){

    document.getElementById("varniar1").style.animation="move_vc1 2s forwards";
    document.getElementById("varniar1").style.visibility="visible";

    document.getElementById("addvc_arrow1").style.visibility="hidden";
    document.getElementById("addvc1").style.visibility="hidden";
    setTimeout(function()

    {
    document.getElementById("varniar3").style.visibility="visible";
    document.getElementById("varniar4").style.visibility="visible";
    document.getElementById("varniar1").style.visibility="hidden";
    document.getElementById("varniar4").style.animation="move_vc2 2s forwards";
    // document.getElementById("step2b").style.visibility="hidden";
    // document.getElementById("step2c").style.visibility="visible";    
    // document.getElementById("transpiler2").style.visibility="visible";
    // document.getElementById("arrowtrans2").style.visibility="visible";
    setTimeout(function()

    {
        document.getElementById("varniar2").style.visibility="visible";
        document.getElementById("dash1").style.visibility="visible";
        document.getElementById("varniar3").style.visibility="hidden";
        document.getElementById("varniar4").style.visibility="hidden";

        document.getElementById("sizetable").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("varniar2").style.animation="move_vc3 20s forwards";
            // document.getElementById("dash2").style.visibility="visible";
            setTimeout(function()
            {
               document.getElementById("dash2").style.visibility="visible"; 
            },1000);
            setTimeout(function()
            {
               document.getElementById("dash3").style.visibility="visible"; 
            },2000);
            setTimeout(function()
            {
               document.getElementById("dash4").style.visibility="visible"; 
            },3000);
            setTimeout(function()
            {
               document.getElementById("dash5").style.visibility="visible"; 
            },4000);
            setTimeout(function()
            {
               document.getElementById("dash6").style.visibility="visible"; 
            },5000);
            setTimeout(function()
            {
               document.getElementById("dash7").style.visibility="visible"; 
            },6000);
            setTimeout(function()
            {
               document.getElementById("dash8").style.visibility="visible"; 
            },7000);
            setTimeout(function()
            {
               document.getElementById("dash9").style.visibility="visible"; 
            },8000);
            setTimeout(function()
            {
               document.getElementById("dash10").style.visibility="visible"; 
            },9000);
            setTimeout(function()
            {
               document.getElementById("dash11").style.visibility="visible"; 
            },10000);
            setTimeout(function()
            {
               document.getElementById("dash12").style.visibility="visible"; 
            },11000);
            setTimeout(function()
            {
               document.getElementById("dash13").style.visibility="visible"; 
            },12000);
            setTimeout(function()
            {
               document.getElementById("dash14").style.visibility="visible"; 
            },13000);
            setTimeout(function()
            {
               document.getElementById("dash15").style.visibility="visible"; 
            },14000);
            setTimeout(function()
            {
               document.getElementById("dash16").style.visibility="visible"; 
            },15000);
            setTimeout(function()
            {
               document.getElementById("dash17").style.visibility="visible"; 
            },16000);
            setTimeout(function()
            {
               document.getElementById("dash18").style.visibility="visible"; 
            },17000);
            setTimeout(function()
            {
               document.getElementById("dash19").style.visibility="visible"; 
            },18000);
            setTimeout(function()
            {
               document.getElementById("dash20").style.visibility="visible"; 
            },19000);

            setTimeout(function()
            {
                document.getElementById("varniar2").style.visibility="hidden";
                document.getElementById("varniar5").style.visibility="visible";
                document.getElementById("varniar5").style.animation="move_vc4 2s forwards";

                document.getElementById("arrowcubox3").style.visibility="visible";
                document.getElementById("nextButton3").style.visibility="visible";
            },20000);




        },2000);




    },2000);
    },2000);


}


function addgrip1()
{
    document.getElementById("grip_mac").style.visibility="visible";
    document.getElementById("grip_mac").style.animation="move_grip2 2s forwards";
    document.getElementById("addgrip1").style.visibility="hidden";
    document.getElementById("addrebergrip1").style.visibility="visible";

    setTimeout(function()
    {
        document.getElementById("gaugesize").style.visibility="visible";
        document.getElementById("gaugesize2").style.visibility="visible";
    },2000);
}

function addreber()
{
    document.getElementById("grip_reber").style.visibility="visible";
    document.getElementById("grip_reber").style.animation="move_gripreber2 2s forwards";
    
    setTimeout(function()
            {
                document.getElementById("grip_reber_tb").style.visibility="visible";
                document.getElementById("fitmachine_arrow2").style.visibility="visible";

                document.getElementById("gaugesize").style.visibility="hidden";
                document.getElementById("gaugesize2").style.visibility="hidden";

            },2000);

    document.getElementById("addvc_arrow2").style.visibility="hidden";
    document.getElementById("addrebergrip1").style.visibility="hidden";
}

function fitmachine()
{
    document.getElementById("fitmachine_arrow2").style.visibility="hidden";
    document.getElementById("grip_reber_tb").style.visibility="hidden";
    document.getElementById("grip_mac").style.visibility="visible";
    document.getElementById("grip_mac").style.animation="move_gripwithrod1 4s forwards";
    document.getElementById("grip_reber").style.visibility="visible";
    document.getElementById("grip_reber").style.animation="move_gripwithrod2 4s forwards";
    
    setTimeout(function()
    {
        document.getElementById("arrowcubox4").style.visibility="visible";
        document.getElementById("nextButton4").style.visibility="visible";
    },3000);
}


function movepiler1(){

    document.getElementById("piler1").style.animation="movepiler11 2s forwards";
    document.getElementById("transpiler1").style.visibility="hidden";
    document.getElementById("arrowtrans1").style.visibility="hidden";
    setTimeout(function()

    {   
    document.getElementById("step2c").style.visibility="hidden";
    document.getElementById("step2d").style.visibility="visible";
     document.getElementById("transbeam1").style.visibility="visible";
    document.getElementById("arrowtrans3").style.visibility="visible";
    },2000);


}


function movepiler2(){

    document.getElementById("piler2").style.animation="movepiler21 2s forwards";
    document.getElementById("transpiler2").style.visibility="hidden";
    document.getElementById("arrowtrans2").style.visibility="hidden";
    setTimeout(function()

    {   
        
   document.getElementById("transpiler1").style.visibility="visible";
    document.getElementById("arrowtrans1").style.visibility="visible";
    },2000);


}

function movebeam1(){

    document.getElementById("beam1").style.animation="movebeam11 2s forwards";
    document.getElementById("transbeam1").style.visibility="hidden";
    document.getElementById("arrowtrans3").style.visibility="hidden";
    setTimeout(function()

    {  
    document.getElementById("arrowcubox3").style.visibility="visible";
    document.getElementById("nextButton3").style.visibility="visible";
    },2000);


}

// =====================Specimen 2===================

function addpiler2(){

    document.getElementById("piler1s2").style.animation="addpiler11 2s forwards";
    document.getElementById("piler1s2").style.visibility="visible";
    document.getElementById("piler2s2").style.animation="addpiler21 2s forwards";
    document.getElementById("piler2s2").style.visibility="visible";
    document.getElementById("addpiler1s2").style.visibility="hidden";
    document.getElementById("arrowpiler1s2").style.visibility="hidden";

    setTimeout(function()

    {

    document.getElementById("step6a").style.visibility="hidden";
    document.getElementById("step6b").style.visibility="visible";    
    document.getElementById("addbeam1s2").style.visibility="visible";
    document.getElementById("arrowbeam1s2").style.visibility="visible";
    
    },2000);


}

function addbeam2(){

    document.getElementById("beam1s2").style.animation="addbeam11 2s forwards";
    document.getElementById("beam1s2").style.visibility="visible";
    document.getElementById("addbeam1s2").style.visibility="hidden";
    document.getElementById("arrowbeam1s2").style.visibility="hidden";
    setTimeout(function()

    {
    document.getElementById("transpiler2s2").style.visibility="visible";
    document.getElementById("arrowtrans2s2").style.visibility="visible";
    },2000);


}


function movepiler1s2(){

    document.getElementById("piler1s2").style.animation="movepiler11 2s forwards";
    document.getElementById("transpiler1s2").style.visibility="hidden";
    document.getElementById("arrowtrans1s2").style.visibility="hidden";
    setTimeout(function()

    {   
    
    document.getElementById("step6c").style.visibility="hidden";
    document.getElementById("step6d").style.visibility="visible";    
    document.getElementById("transbeam1s2").style.visibility="visible";
    document.getElementById("arrowtrans3s2").style.visibility="visible";
    
    },2000);


}


function movepiler2s2(){

    document.getElementById("piler2s2").style.animation="movepiler21 2s forwards";
    document.getElementById("transpiler2s2").style.visibility="hidden";
    document.getElementById("arrowtrans2s2").style.visibility="hidden";
    setTimeout(function()

    {   
    
    
    document.getElementById("step6b").style.visibility="hidden";
    document.getElementById("step6c").style.visibility="visible";    
    document.getElementById("transpiler1s2").style.visibility="visible";
    document.getElementById("arrowtrans1s2").style.visibility="visible";
    },2000);


}

function movebeam2(){

    document.getElementById("beam1s2").style.animation="movebeam11 2s forwards";
    document.getElementById("transbeam1s2").style.visibility="hidden";
    document.getElementById("arrowtrans3s2").style.visibility="hidden";
    setTimeout(function()

    {  
    document.getElementById("arrowcubox6a").style.visibility="visible";
    document.getElementById("nextButton6a").style.visibility="visible";
    },2000);


}


// =====================Specimen 3===================

function addpiler3(){

    document.getElementById("piler1s3").style.animation="addpiler11 2s forwards";
    document.getElementById("piler1s3").style.visibility="visible";
    document.getElementById("piler2s3").style.animation="addpiler21 2s forwards";
    document.getElementById("piler2s3").style.visibility="visible";
    document.getElementById("addpiler1s3").style.visibility="hidden";
    document.getElementById("arrowpiler1s3").style.visibility="hidden";

    setTimeout(function()

    {

    document.getElementById("step9a").style.visibility="hidden";
    document.getElementById("step9b").style.visibility="visible";    
    document.getElementById("addbeam1s3").style.visibility="visible";
    document.getElementById("arrowbeam1s3").style.visibility="visible";
    
    },2000);


}

function addbeam3(){

    document.getElementById("beam1s3").style.animation="addbeam11 2s forwards";
    document.getElementById("beam1s3").style.visibility="visible";
    document.getElementById("addbeam1s3").style.visibility="hidden";
    document.getElementById("arrowbeam1s3").style.visibility="hidden";
    setTimeout(function()

    {
    document.getElementById("step9b").style.visibility="hidden";
    document.getElementById("step9c").style.visibility="visible";    
    document.getElementById("transpiler2s3").style.visibility="visible";
    document.getElementById("arrowtrans2s3").style.visibility="visible";
    },2000);


}


function movepiler1s3(){

    document.getElementById("piler1s3").style.animation="movepiler11 2s forwards";
    document.getElementById("transpiler1s3").style.visibility="hidden";
    document.getElementById("arrowtrans1s3").style.visibility="hidden";
    setTimeout(function()

    {   
    document.getElementById("step9c").style.visibility="hidden";
    document.getElementById("step9d").style.visibility="visible";    
    document.getElementById("transbeam1s3").style.visibility="visible";
    document.getElementById("arrowtrans3s3").style.visibility="visible";
    
    
    },2000);


}


function movepiler2s3(){

    document.getElementById("piler2s3").style.animation="movepiler21 2s forwards";
    document.getElementById("transpiler2s3").style.visibility="hidden";
    document.getElementById("arrowtrans2s3").style.visibility="hidden";
    setTimeout(function()

    {   
    
    document.getElementById("transpiler1s3").style.visibility="visible";
    document.getElementById("arrowtrans1s3").style.visibility="visible";
    },2000);


}

function movebeam3(){

    document.getElementById("beam1s3").style.animation="movebeam11 2s forwards";
    document.getElementById("transbeam1s3").style.visibility="hidden";
    document.getElementById("arrowtrans3s3").style.visibility="hidden";
    setTimeout(function()

    {  
    document.getElementById("arrowcubox9a").style.visibility="visible";
    document.getElementById("nextButton9a").style.visibility="visible";
    },2000);


}

function measurelength()
{

    document.getElementById("measure_tb1").style.visibility="hidden";

    document.getElementById("measure_tapeup1").style.animation="mesure111 5s linear forwards";
    document.getElementById("measure_tape2").style.animation="mesure11 5s linear forwards";

    setTimeout(function()

        {
            document.getElementById("valuemes1").style.visibility="visible";
            document.getElementById("valuemes2").style.visibility="visible";

            document.getElementById("arwnext_show6").style.visibility="visible";
            document.getElementById("nextCan_Btn6").style.visibility="visible";
        },5500);

}


function measurelength1()
{

    document.getElementById("measure_tb2").style.visibility="hidden";

    document.getElementById("measure_tapeup2").style.animation="mesure222 3s linear forwards";
    document.getElementById("measure_tape4").style.animation="mesure22 3s linear forwards";

    setTimeout(function()

        {
            document.getElementById("valuemes3").style.visibility="visible";
            document.getElementById("valuemes4").style.visibility="visible";

            document.getElementById("arwnext_show7").style.visibility="visible";
            document.getElementById("nextCan_Btn7").style.visibility="visible";

        },3500);

}


function measurelength2()
{

    document.getElementById("measure_tb3").style.visibility="hidden";

    document.getElementById("measure_tapeup3").style.animation="mesure333 3s linear forwards";
    document.getElementById("measure_tape6").style.animation="mesure33 3s linear forwards";

    setTimeout(function()

        {
            document.getElementById("valuemes5").style.visibility="visible";
            document.getElementById("valuemes6").style.visibility="visible";

            document.getElementById("arwnext_show8").style.visibility="visible";
            document.getElementById("nextCan_Btn8").style.visibility="visible";
        },3500);

}

function measurelength3()
{

    document.getElementById("measure_tb4").style.visibility="hidden";

    document.getElementById("measure_tapeup4").style.animation="mesure444 5s linear forwards";
    document.getElementById("measure_tape8").style.animation="mesure44 5s linear forwards";

    setTimeout(function()
        {
            document.getElementById("valuemes7").style.visibility="visible";
            document.getElementById("valuemes8").style.visibility="visible";
        },5000);

    setTimeout(function()
        {
            document.getElementById("measure_tape7").style.visibility="hidden";
            document.getElementById("measure_tapeup4").style.visibility="hidden";
            document.getElementById("measure_tape8").style.visibility="hidden";
        },6000);

    setTimeout(function()
        {
            document.getElementById("measure_tb5").style.visibility="visible";
            document.getElementById("measure_tape9").style.visibility="visible";
            document.getElementById("measure_tapeup5").style.visibility="visible";
            document.getElementById("measure_tape10").style.visibility="visible";
            document.getElementById("shw1").style.visibility="visible";
        },7000);

}


function measurelength4()
{

    document.getElementById("measure_tb5").style.visibility="hidden";

    document.getElementById("measure_tapeup5").style.animation="mesure555 3s linear forwards";
    document.getElementById("measure_tape10").style.animation="mesure55 3s linear forwards";

            document.getElementById("valuemes7").style.visibility="hidden";
            document.getElementById("valuemes8").style.visibility="hidden";
 

    setTimeout(function()
        {
            document.getElementById("valuemes9").style.visibility="visible";
            document.getElementById("valuemes10").style.visibility="visible";
        },4000);

    setTimeout(function()
        {
            document.getElementById("measure_tape9").style.visibility="hidden";
            document.getElementById("measure_tapeup5").style.visibility="hidden";
            document.getElementById("measure_tape10").style.visibility="hidden";
        },5000);

    setTimeout(function()
        {
            document.getElementById("measure_tb6").style.visibility="visible";
            document.getElementById("measure_tape11").style.visibility="visible";
            document.getElementById("measure_tapeup6").style.visibility="visible";
            document.getElementById("measure_tape12").style.visibility="visible";
            document.getElementById("shw2").style.visibility="visible";
        },6000);


}


function measurelength5()
{

    document.getElementById("measure_tb6").style.visibility="hidden";

    document.getElementById("measure_tapeup6").style.animation="mesure666 3s linear forwards";
    document.getElementById("measure_tape12").style.animation="mesure66 3s linear forwards";
 
            document.getElementById("valuemes9").style.visibility="hidden";
            document.getElementById("valuemes10").style.visibility="hidden";

    setTimeout(function()
        {
            document.getElementById("valuemes11").style.visibility="visible";
            document.getElementById("valuemes12").style.visibility="visible";
        },4000);

    setTimeout(function()
        {
            document.getElementById("measure_tape11").style.visibility="hidden";
            document.getElementById("measure_tapeup6").style.visibility="hidden";
            document.getElementById("measure_tape12").style.visibility="hidden";
        },5000);

    setTimeout(function()
        {
            document.getElementById("measure_tb7").style.visibility="visible";
            document.getElementById("measure_tape13").style.visibility="visible";
            document.getElementById("measure_tapeup7").style.visibility="visible";
            document.getElementById("measure_tape14").style.visibility="visible";
            document.getElementById("shw3").style.visibility="visible";
        },6000);
}

function measurelength6()
{

    document.getElementById("measure_tb7").style.visibility="hidden";

    document.getElementById("measure_tapeup7").style.animation="mesure777 3s linear forwards";
    document.getElementById("measure_tape14").style.animation="mesure77 3s linear forwards";

            document.getElementById("valuemes11").style.visibility="hidden";
            document.getElementById("valuemes12").style.visibility="hidden";

    setTimeout(function()
        {
            document.getElementById("valuemes13").style.visibility="visible";
            document.getElementById("valuemes14").style.visibility="visible";


            document.getElementById("arwnext_show9").style.visibility="visible";
            document.getElementById("nextCan_Btn9").style.visibility="visible";
        },4000);

    setTimeout(function()
        {
            // document.getElementById("measure_tb8").style.visibility="visible";

            document.getElementById("measure_tape13").style.visibility="hidden";
            document.getElementById("measure_tapeup7").style.visibility="hidden";
            document.getElementById("measure_tape14").style.visibility="hidden";
            document.getElementById("shw4").style.visibility="visible";
        },5000);

}

function measurelength7()
{

    document.getElementById("measure_tb4").style.visibility="hidden";

    document.getElementById("measure_tapeup4").style.animation="mesure444 5s linear forwards";
    document.getElementById("measure_tape8").style.animation="mesure44 5s linear forwards";

    setTimeout(function()

        {
            // document.getElementById("valuemes7").style.visibility="visible";
            // document.getElementById("valuemes8").style.visibility="visible";
        },5500);

}

function measurelength8()
{

    document.getElementById("measu_tb8").style.visibility="hidden";
 
    // document.getElementById("measure_tapeup8").style.animation="mesure888 5s linear forwards";
    document.getElementById("measure_tape16").style.animation="mesure88 3s linear forwards";
    document.getElementById("measure_tape15").style.animation="mesure888 3s linear forwards";
    
    setTimeout(function()
        {	
        	document.getElementById("valuemes15").style.visibility="visible";
            document.getElementById("valuemes16").style.visibility="visible";
            // document.getElementById("measure_tape17").style.visibility="visible";
            // document.getElementById("measure_tape18").style.visibility="visible";
            // document.getElementById("measu_tb9").style.visibility="visible";
        },3000);
    
    setTimeout(function()
        {	
        	document.getElementById("measure_tape15").style.visibility="hidden";
            document.getElementById("measure_tape16").style.visibility="hidden";

            document.getElementById("measure_tape17").style.visibility="visible";
            document.getElementById("measure_tape18").style.visibility="visible";
            document.getElementById("measu_tb9").style.visibility="visible";
        },4500);
}

function measurelength9()
{

    document.getElementById("measu_tb9").style.visibility="hidden";
 
    // document.getElementById("measure_tapeup8").style.animation="mesure888 5s linear forwards";
    document.getElementById("measure_tape18").style.animation="mesure99 5s linear forwards";
    document.getElementById("measure_tape17").style.animation="mesure999 5s linear forwards";
    
    setTimeout(function()

        {
        	document.getElementById("valuemes17").style.visibility="visible";
            document.getElementById("valuemes18").style.visibility="visible";

            document.getElementById("arwnext_show15").style.visibility="visible";
            document.getElementById("nextCan_Btn15").style.visibility="visible";
        },5000);

}
//======================================================

function submit12(){

    
    setTimeout(function()

    {


    
    },1000);

}


function showgif(){

    document.getElementById("calculate1").style.visibility="hidden";
    
    document.getElementById("gif11").style.visibility="visible";
    setTimeout(function()

    {

    
    },1000);

}





function submit21(){

    document.getElementById("submit21").style.visibility="hidden";
    
    setTimeout(function()

    {

    document.getElementById("arrowcubox6").style.visibility="visible";

    document.getElementById("nextButton6").style.visibility="visible";

    
    },1000);

}


function submit22(){

    document.getElementById("submit22").style.visibility="hidden";
    
    setTimeout(function()

    {

    document.getElementById("arrowcubox7").style.visibility="visible";

    document.getElementById("nextButton7").style.visibility="visible";

    
    },1000);

}




function showif2(){

    document.getElementById("calculate2").style.visibility="hidden";
    
    document.getElementById("gif121").style.visibility="visible";
    setTimeout(function()

    {

    document.getElementById("arrowcubox8").style.visibility="visible";

    document.getElementById("nextButton8").style.visibility="visible";

    document.getElementById("repeat2").style.visibility="visible";
    },1000);

}



function submit31(){

    document.getElementById("submit31").style.visibility="hidden";
    
    setTimeout(function()

    {

    document.getElementById("arrowcubox9").style.visibility="visible";

    document.getElementById("nextButton9").style.visibility="visible";

    
    },1000);

}


function submit32(){

    document.getElementById("submit32").style.visibility="hidden";
    
    setTimeout(function()

    {

    document.getElementById("arrowcubox10").style.visibility="visible";

    document.getElementById("nextButton10").style.visibility="visible";

    
    },1000);

}











function showgif3(){

    document.getElementById("calculate3").style.visibility="hidden";
    
    document.getElementById("gif131").style.visibility="visible";
    setTimeout(function()

    {

    document.getElementById("arrowcubox11").style.visibility="visible";

    document.getElementById("nextButton11").style.visibility="visible";

    
    },1000);

}



function showgraph1(){

    document.getElementById("submit121").style.visibility="hidden";


    new Chartist.Line('.ct-chart', {
  labels: [l1, l2, l3],
  series: [
    [freq1, freq2, freq3]
    // [0, 2.5, 9.88, 2, 3],
    // [1, 2, 2.5, 3.5, 4]
  ]
}, {
  width: 500,
  height: 300
});

 /*   
    
 google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      //data.addColumn('number', 'Day');
      data.addColumn('number', 'Frequency');
      data.addColumn('number', 'Length');
      // data.addColumn('number', 'Y');

      data.addRows([
        [   
            l1,
            freq1
        ],
        [   
            l2,
            freq2
        ],
        [   
            l3,
            freq3
        ]
      ]);

      var options = {
        chart: {
          // title: 'Box Office Earnings in First Two Weeks of Opening',
          // subtitle: 'in millions of dollars (USD)'
        },
        width: 500,
        height: 350,
        axes: {
          x: {
            0: {side: 'bottom'}
          }
        }
      };

      var chart = new google.charts.Line(document.getElementById('line_top_x'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }*/
/*
var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2",
    title:{
        text: "Simple Line Chart"
    },
    axisY:{
        includeZero: false
    },
    data: [{        
        type: "line",
        indexLabelFontSize: 16,
        dataPoints: [
            {
                x: l1,
                y: freq1 
            },
            {
                x: l2,
                y: freq2
            },
            {
                x: l3,
                y: freq3
            },
            
            // {
            //  x:190,
            //  y: 450
            // },
            // { y: 500 },
            // { y: 480 },
            // { y: 480 },
            // { y: 410 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
            // { y: 500 },
            // { y: 480 },
            // { y: 510 }
        ]
    }]
});
chart.render();


*/











    // document.getElementById("gif131").style.visibility="visible";
    setTimeout(function()

    {

    document.getElementById("arrowcubox12").style.visibility="visible";

    document.getElementById("nextButton12").style.visibility="visible";

    
    },1000);

}

function showgraph2(){

    document.getElementById("submit131").style.visibility="hidden";
    
    new Chartist.Line('.ct-chart2', {
  labels: [el1, el2, el3],
  series: [
    [freq1, freq2, freq3]
    // [0, 2.5, 9.88, 2, 3],
    // [1, 2, 2.5, 3.5, 4]
  ]
}, {
  width: 500,
  height: 300
});
/*
    google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      //data.addColumn('number', 'Day');
      data.addColumn('number', 'Frequency');
      data.addColumn('number', 'Elasticity');
      // data.addColumn('number', 'Y');

      data.addRows([
        [   
            el1,
            freq1
        ],
        [   
            el2,
            freq2
        ],
        [   
            el3,
            freq3
        ]
      ]);

      var options = {
        chart: {
          // title: 'Box Office Earnings in First Two Weeks of Opening',
          // subtitle: 'in millions of dollars (USD)'
        },
        width: 500,
        height: 350,
        axes: {
          x: {
            0: {side: 'bottom'}
          }
        }
      };

      var chart = new google.charts.Line(document.getElementById('xline_top_x'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }*/



    setTimeout(function()

    {

    document.getElementById("arrowrestart").style.visibility="visible";

    document.getElementById("resetbutton").style.visibility="visible";

    // document.getElementById("thanku").style.visibility="visible";
    
    },1500);

}































// function isInputNumber(evt)

// {

//     var ch = String.fromCharCode(evt.which);



//     if(!(/[0-9]/.test(ch))){

//         evt.preventDefault();

//     }

// }

// function showmoveclk()
// {
//     document.getElementById("strtbtn").style.visibility="hidden";
//     document.getElementById("arrow7").style.visibility="hidden";
//     setTimeout(function()
//     {
//        if (size == 500)//numbox == 2.33 && size == 10)
//         {
        
//         document.getElementById("pin1").style.animation="clockpin10 4.20s forwards";
//         document.getElementById("pin2").style.animation="clockpin210 4.00s forwards";

//         /*Countdown Timer Animation Code Start*/  
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("value", 0, 103, 2000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("press1").style.visibility="visible";
//         document.getElementById("press2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("stopstep").style.visibility="visible";
//             document.getElementById("arrow8").style.visibility="visible";
//             document.getElementById("stopbtn").style.visibility="visible";
//             },3000); 
        
//         //document.getElementById("stopstep").style.visibility="visible";
//         //document.getElementById("arrow8").style.visibility="visible";
//         //document.getElementById("stopbtn").style.visibility="visible";
//         }
    
//         else if (size == 700)//numbox == 5.25 && size == 15)
//         {
        
//         document.getElementById("pin1").style.animation="clockpin15 4.20s forwards";
//         document.getElementById("pin2").style.animation="clockpin215 4.00s forwards";

//         /*Countdown Timer Animation Code Start*/  
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("value", 0, 138, 3000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("press1").style.visibility="visible";
//         document.getElementById("press2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("stopstep").style.visibility="visible";
//             document.getElementById("arrow8").style.visibility="visible";
//             document.getElementById("stopbtn").style.visibility="visible";
//             },3000); 
        
//         }
//         else
//         {
//         //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
//         alert("Wrong");
//         } 
        


//         document.getElementById("okcube").style.visibility="hidden";

//             setTimeout(function()
//             {
//             document.getElementById("crekl").style.animation="crek1 1.20s forwards";
//             document.getElementById("crekr").style.animation="crek2 1.20s forwards";
//             document.getElementById("press1").style.visibility="hidden";
//             document.getElementById("press2").style.visibility="hidden";
//             },1750);    
//     //img.setAttribute('style','transform:rotate(180deg)');
//     },1850);

// }


// function stopmoveclk()
// {
//     document.getElementById("arrow8").style.visibility="hidden";
//     document.getElementById("stopbtn").style.visibility="hidden";
//     if (size == 500)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("loadfail").innerHTML = "242";
//     document.getElementById("lfstep").style.visibility="visible";
//     document.getElementById("arrow9").style.visibility="visible";
//     document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else if (size == 700)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("loadfail").innerHTML = "727";
//     document.getElementById("lfstep").style.visibility="visible";
//     document.getElementById("arrow9").style.visibility="visible";
//     document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
    

// }

// /*scene 6 code end*/


// /*scene 8 code start*/
// function lshowbigclk()
// {

//     document.getElementById("larrow6").style.visibility="hidden";

//     //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

//     document.getElementById("lbigclock").style.visibility="visible";
//     document.getElementById("lpin1").style.visibility="visible";
//     document.getElementById("lpin2").style.visibility="visible";
//     document.getElementById("lclkdot").style.visibility="visible";

//     document.getElementById("larrow7").style.visibility="visible";
//     document.getElementById("lstrtbtn").style.visibility="visible";
//     document.getElementById("lstartstep").style.visibility="visible";
//     document.getElementById("lclktable").style.visibility="visible";
// }
    
// function lshowmoveclk()
// {
//     document.getElementById("lstrtbtn").style.visibility="hidden";
//     document.getElementById("larrow7").style.visibility="hidden";
//     setTimeout(function()
//     {
//        if (size == 500)//numbox == 2.33 && size == 10)
//         {
        
//         document.getElementById("lpin1").style.animation="lclockpin10 4.20s forwards";
//         document.getElementById("lpin2").style.animation="lclockpin210 4.00s forwards";

//         /*Countdown Timer Animation Code Start */ 
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("lvalue", 0, 103, 2000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("lpress1").style.visibility="visible";
//         document.getElementById("lpress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("lstopstep").style.visibility="visible";
//             document.getElementById("larrow8").style.visibility="visible";
//             document.getElementById("lstopbtn").style.visibility="visible";
//             },3000); 
        
//         //document.getElementById("stopstep").style.visibility="visible";
//         //document.getElementById("arrow8").style.visibility="visible";
//         //document.getElementById("stopbtn").style.visibility="visible";
//         }
    
//         else if (size == 700)//numbox == 5.25 && size == 15)
//         {
        
//         document.getElementById("lpin1").style.animation="lclockpin15 4.20s forwards";
//         document.getElementById("lpin2").style.animation="lclockpin215 4.00s forwards";

//         /*Countdown Timer Animation Code Start */ 
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("lvalue", 0, 138, 3000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("lpress1").style.visibility="visible";
//         document.getElementById("lpress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("lstopstep").style.visibility="visible";
//             document.getElementById("larrow8").style.visibility="visible";
//             document.getElementById("lstopbtn").style.visibility="visible";
//             },3000); 
        
//         }
//         else
//         {
//         //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
//         alert("Wrong");
//         } 
        


//         document.getElementById("lokcube").style.visibility="hidden";

//             setTimeout(function()
//             {
//             document.getElementById("lcrekl").style.animation="lcrek1 1.20s forwards";
//             document.getElementById("lcrekr").style.animation="lcrek2 1.20s forwards";
//             document.getElementById("lpress1").style.visibility="hidden";
//             document.getElementById("lpress2").style.visibility="hidden";
//             },1750);    
//     //img.setAttribute('style','transform:rotate(180deg)');
//     },1850);

// }


// function lstopmoveclk()
// {
//     document.getElementById("larrow8").style.visibility="hidden";
//     document.getElementById("lstopbtn").style.visibility="hidden";
//     if (size == 500)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("lloadfail").innerHTML = "242";
//     document.getElementById("llfstep").style.visibility="visible";
//     document.getElementById("larrow9").style.visibility="visible";
//     document.getElementById("nextButton8").style.visibility="visible";
//     }
//     else if (size == 700)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("lloadfail").innerHTML = "727";
//     document.getElementById("llfstep").style.visibility="visible";
//     document.getElementById("larrow9").style.visibility="visible";
//     document.getElementById("nextButton8").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
    

// }

// /*scene 8 code end*/


// /*scene 10 code start*/
// function rshowbigclk()
// {

//     document.getElementById("rarrow6").style.visibility="hidden";

//     //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

//     document.getElementById("rbigclock").style.visibility="visible";
//     document.getElementById("rpin1").style.visibility="visible";
//     document.getElementById("rpin2").style.visibility="visible";
//     document.getElementById("rclkdot").style.visibility="visible";

//     document.getElementById("rarrow7").style.visibility="visible";
//     document.getElementById("rstrtbtn").style.visibility="visible";
//     document.getElementById("rstartstep").style.visibility="visible";
//     document.getElementById("rclktable").style.visibility="visible";
// }
    
// function rshowmoveclk()
// {
//     document.getElementById("rstrtbtn").style.visibility="hidden";
//     document.getElementById("rarrow7").style.visibility="hidden";
//     setTimeout(function()
//     {
//        if (size == 500)//numbox == 2.33 && size == 10)
//         {
        
//         document.getElementById("rpin1").style.animation="rclockpin10 4.20s forwards";
//         document.getElementById("rpin2").style.animation="rclockpin210 4.00s forwards";

//         /*Countdown Timer Animation Code Start */ 
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("rvalue", 0, 103, 2000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("rpress1").style.visibility="visible";
//         document.getElementById("rpress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("rstopstep").style.visibility="visible";
//             document.getElementById("rarrow8").style.visibility="visible";
//             document.getElementById("rstopbtn").style.visibility="visible";
//             },3000); 
        
//         //document.getElementById("stopstep").style.visibility="visible";
//         //document.getElementById("arrow8").style.visibility="visible";
//         //document.getElementById("stopbtn").style.visibility="visible";
//         }
    
//         else if (size == 700)//numbox == 5.25 && size == 15)
//         {
        
//         document.getElementById("rpin1").style.animation="rclockpin15 4.20s forwards";
//         document.getElementById("rpin2").style.animation="rclockpin215 4.00s forwards";

//         /*Countdown Timer Animation Code Start */ 
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("rvalue", 0, 138, 3000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("rpress1").style.visibility="visible";
//         document.getElementById("rpress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("rstopstep").style.visibility="visible";
//             document.getElementById("rarrow8").style.visibility="visible";
//             document.getElementById("rstopbtn").style.visibility="visible";
//             },3000); 
        
//         }
//         else
//         {
//         //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
//         alert("Wrong");
//         } 
        


//         document.getElementById("rokcube").style.visibility="hidden";

//             setTimeout(function()
//             {
//             document.getElementById("rcrekl").style.animation="rcrek1 1.20s forwards";
//             document.getElementById("rcrekr").style.animation="rcrek2 1.20s forwards";
//             document.getElementById("rpress1").style.visibility="hidden";
//             document.getElementById("rpress2").style.visibility="hidden";
//             },1750);    
//     //img.setAttribute('style','transform:rotate(180deg)');
//     },1850);

// }


// function rstopmoveclk()
// {
//     document.getElementById("rarrow8").style.visibility="hidden";
//     document.getElementById("rstopbtn").style.visibility="hidden";
//     if (size == 500)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("rloadfail").innerHTML = "242";
//     document.getElementById("rlfstep").style.visibility="visible";
//     document.getElementById("rarrow9").style.visibility="visible";
//     document.getElementById("nextButton10").style.visibility="visible";
//     }
//     else if (size == 700)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("rloadfail").innerHTML = "727";
//     document.getElementById("rlfstep").style.visibility="visible";
//     document.getElementById("rarrow9").style.visibility="visible";
//     document.getElementById("nextButton10").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
    

// }

// /*scene 10 code end*/


// /*scene 12 code start*/
// function sshowbigclk()
// {

//     document.getElementById("sarrow6").style.visibility="hidden";

//     //document.getElementById("transnumbox1").style.animation="cubeFromCuringTank 2s forwards";

//     document.getElementById("sbigclock").style.visibility="visible";
//     document.getElementById("spin1").style.visibility="visible";
//     document.getElementById("spin2").style.visibility="visible";
//     document.getElementById("sclkdot").style.visibility="visible";

//     document.getElementById("sarrow7").style.visibility="visible";
//     document.getElementById("sstrtbtn").style.visibility="visible";
//     document.getElementById("sstartstep").style.visibility="visible";
//     document.getElementById("sclktable").style.visibility="visible";
// }
    
// function sshowmoveclk()
// {
//     document.getElementById("sstrtbtn").style.visibility="hidden";
//     document.getElementById("sarrow7").style.visibility="hidden";
//     setTimeout(function()
//     {
//        if (size == 500)//numbox == 2.33 && size == 10)
//         {
        
//         document.getElementById("spin1").style.animation="sclockpin10 4.20s forwards";
//         document.getElementById("spin2").style.animation="sclockpin210 4.00s forwards";

//         /*Countdown Timer Animation Code Start*/  
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("svalue", 0, 103, 2000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("spress1").style.visibility="visible";
//         document.getElementById("spress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("sstopstep").style.visibility="visible";
//             document.getElementById("sarrow8").style.visibility="visible";
//             document.getElementById("sstopbtn").style.visibility="visible";
//             },3000); 
        
//         //document.getElementById("stopstep").style.visibility="visible";
//         //document.getElementById("arrow8").style.visibility="visible";
//         //document.getElementById("stopbtn").style.visibility="visible";
//         }
    
//         else if (size == 700)//numbox == 5.25 && size == 15)
//         {
        
//         document.getElementById("spin1").style.animation="sclockpin15 4.20s forwards";
//         document.getElementById("spin2").style.animation="sclockpin215 4.00s forwards";

//         /*Countdown Timer Animation Code Start*/  
//         function animateValue(id, start, end, duration) {
//                 var range = end - start;
//                 var current = start;
//                 var increment = end > start? 1 : -1;
//                 var stepTime = Math.abs(Math.floor(duration / range));
//                 var obj = document.getElementById(id);
//                 var timer = setInterval(function() 
//                 {
//                     current += increment;
//                     obj.innerHTML = current;
//                     if (current == end) 
//                     {
//                         clearInterval(timer);
//                     }
//                 }, stepTime);
//         }

//         animateValue("svalue", 0, 138, 3000);
//         /*Countdown Timer Animation Code End*/
//         document.getElementById("spress1").style.visibility="visible";
//         document.getElementById("spress2").style.visibility="visible";

//             setTimeout(function()
//             {
//             document.getElementById("sstopstep").style.visibility="visible";
//             document.getElementById("sarrow8").style.visibility="visible";
//             document.getElementById("sstopbtn").style.visibility="visible";
//             },3000); 
        
//         }
//         else
//         {
//         //document.getElementById("numoutnext").innerHTML = "Incorrect<br>Enter Correct Value:<br><br>233.33 for 10cm speciman<br><br>525.00 for 15cm speciman";
//         alert("Wrong");
//         } 
        


//         document.getElementById("sokcube").style.visibility="hidden";

//             setTimeout(function()
//             {
//             document.getElementById("screkl").style.animation="screk1 1.20s forwards";
//             document.getElementById("screkr").style.animation="screk2 1.20s forwards";
//             document.getElementById("spress1").style.visibility="hidden";
//             document.getElementById("spress2").style.visibility="hidden";
//             },1750);    
//     //img.setAttribute('style','transform:rotate(180deg)');
//     },1850);

// }


// function sstopmoveclk()
// {
//     document.getElementById("sarrow8").style.visibility="hidden";
//     document.getElementById("sstopbtn").style.visibility="hidden";
//     if (size == 500)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("sloadfail").innerHTML = "242";
//     document.getElementById("slfstep").style.visibility="visible";
//     document.getElementById("sarrow9").style.visibility="visible";
//     document.getElementById("nextButton12").style.visibility="visible";
//     }
//     else if (size == 700)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("sloadfail").innerHTML = "727";
//     document.getElementById("slfstep").style.visibility="visible";
//     document.getElementById("sarrow9").style.visibility="visible";
//     document.getElementById("nextButton12").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
    

// }

// /*scene 12 code end*/


// function soneIn()

// {

//     sone = document.getElementById("oneIn").value;

// if (sone == "A") 
//     {
//         //alert("Correct");
//         document.getElementById("nextButton7").style.visibility="visible";
//         document.getElementById("fi1arrow10").style.visibility="visible";
//         document.getElementById("fibox1").innerHTML = "&nbsp;";
//         document.getElementById("su1").style.visibility="hidden";
//     } 
// else if(sone == "B")
//     {
// document.getElementById("fibox1").innerHTML = "Select Correct Type";
//     }
// else if(sone == "C")
//     {
// document.getElementById("fibox1").innerHTML = "Select Correct Type";
//     }
// else 
//     {
// document.getElementById("fibox1").innerHTML = "Select Type";
//     }
//     //size = document.getElementById("sizeIn").value;
// /*
// if (sone !== "")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
//     {
//         document.getElementById("nextButton7").style.visibility="visible";
//         document.getElementById("fi1arrow10").style.visibility="visible";
//         document.getElementById("fibox1").innerHTML = "&nbsp;";
//     }
    
//     else
//     {
//         document.getElementById("fibox1").innerHTML = "Select Type"; 
//     }
// */
// }


// function stwoIn()

// {

//     stwo = document.getElementById("twoIn").value;

//     //size = document.getElementById("sizeIn").value;


// /**/
// if (stwo == "B")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
//     {
//         document.getElementById("nextButton7").style.visibility="visible";
//         document.getElementById("fi2arrow10").style.visibility="visible";
//         document.getElementById("fibox2").innerHTML = "&nbsp;";
//         document.getElementById("nextButton9").style.visibility="visible";
//         document.getElementById("su2").style.visibility="hidden";
//     }
// else if(stwo == "A")
//     {
//         document.getElementById("fibox2").innerHTML = "Select Correct Type";
//     }
// else if(stwo == "C")
//     {
//         document.getElementById("fibox2").innerHTML = "Select Correct Type";
//     }   
//     else
//     {
//         document.getElementById("fibox2").innerHTML = "Select Type"; 
//     }

// }


// function sthreeIn()

// {

//     sthree = document.getElementById("threeIn").value;

//     //size = document.getElementById("sizeIn").value;

// if (sthree == "C")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
//     {
//         document.getElementById("nextButton7").style.visibility="visible";
//         //document.getElementById("fi3arrow10").style.visibility="visible";
//         document.getElementById("fibox3").innerHTML = "&nbsp;";
//         document.getElementById("nextButton11").style.visibility="visible";
//         document.getElementById("su3").style.visibility="hidden";
//     }
// else if(sthree == "A")
//     {
//         document.getElementById("fibox3").innerHTML = "Select Correct Type";
//     }
// else if(sthree == "B")
//     {
//         document.getElementById("fibox3").innerHTML = "Select Correct Type";
//     }     
// else
//     {
//         document.getElementById("fibox3").innerHTML = "Select Type"; 
//     }

// }


// function sfourIn()

// {

//     sfour = document.getElementById("fourIn").value;

//     //size = document.getElementById("sizeIn").value;

// if (sfour == "A")//(oneIn == A or oneIn == B)//(oneIn !== "") && size > 0)
//     {
//         document.getElementById("nextButton7").style.visibility="visible";
//         document.getElementById("fi4arrow10").style.visibility="visible";
//         document.getElementById("fibox4").innerHTML = "&nbsp;";
//         document.getElementById("nextButton13").style.visibility="visible";
//     }
// else if(sthree == "B")
//     {
//         document.getElementById("fibox4").innerHTML = "Select Correct Type";
//     }
// else if(sthree == "C")
//     {
//         document.getElementById("fibox4").innerHTML = "Select Correct Type";
//     }     
   
//     else
//     {
//         document.getElementById("fibox4").innerHTML = "Select Type"; 
//     }

// }

// function ShowLF()
// {
//     if (size == 500)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("ty1").innerHTML = sone;
//     document.getElementById("ty2").innerHTML = stwo;
//     document.getElementById("ty3").innerHTML = sthree;


//     document.getElementById("lf1").innerHTML = "242";
//     document.getElementById("lf2").innerHTML = "323";
//     document.getElementById("lf3").innerHTML = "295";

//     document.getElementById("csf1").innerHTML = "N/A";
//     document.getElementById("csf2").innerHTML = "N/A";
//     document.getElementById("csf3").innerHTML = "N/A";
    
//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton14").style.visibility="visible";
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else if (size == 700)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("ty1").innerHTML = sone;
//     document.getElementById("ty2").innerHTML = stwo;
//     document.getElementById("ty3").innerHTML = sthree;

//     document.getElementById("lf1").innerHTML = "727";
//     document.getElementById("lf2").innerHTML = "865";
//     document.getElementById("lf3").innerHTML = "540"; 

//     document.getElementById("csf1").innerHTML = "N/A";
//     document.getElementById("csf2").innerHTML = "N/A";
//     document.getElementById("csf3").innerHTML = "N/A";   
//     //document.getElementById("loadfail").innerHTML = "727";
//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton14").style.visibility="visible";
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
// }

// function Showres()
// {
//     document.getElementById("res1").innerHTML = "N/A";
//     document.getElementById("res2").innerHTML = "N/A";
//     document.getElementById("res3").innerHTML = "N/A";
//     document.getElementById("resall").innerHTML = "N/A";
//     document.getElementById("arrow12").style.visibility="visible";
//     document.getElementById("nextButton15").style.visibility="visible";
// }

// function Showrep()
// {

//     //Global Variable Print Date in Cube

// //logo = new Date(date1);

// var xx = new Date();
//  logo = xx.getDate()+'-'+(xx.getMonth()+1)+'-'+xx.getFullYear();

// //Month Print
// //document.getElementById("demo").innerHTML = logo.getMonth() + 1;
// //Date Print
// //document.getElementById("demo2").innerHTML = logo.getDate();
// //Year Print
// //document.getElementById("demo3").innerHTML = logo.getFullYear();

//     //var genrep = new Date();
// //alert(logo);
// if (size == 500)
// {
// document.getElementById("sos1").innerHTML= 100+"x"+100+"x"+size+" mm";
// } else 
// {
// document.getElementById("sos1").innerHTML= 100+"x"+100+"x"+size+" mm";    
// }

// document.getElementById("cc1").innerHTML= "N/A";
// document.getElementById("cg1").innerHTML= "N/A";

// document.getElementById("im1").innerHTML= "N/A";
// document.getElementById("ad1").innerHTML= z;
// document.getElementById("td1").innerHTML = logo;
// document.getElementById("ml1").innerHTML= "N/A";
// document.getElementById("ft1").innerHTML= sone;
// document.getElementById("v1").innerHTML= "N/A";
// document.getElementById("fs1").innerHTML= "N/A";
// document.getElementById("av1").innerHTML= "N/A";

// document.getElementById("im2").innerHTML= "N/A";
// document.getElementById("ad2").innerHTML= z;
// document.getElementById("td2").innerHTML = logo;
// document.getElementById("ml2").innerHTML= "N/A";
// document.getElementById("ft2").innerHTML= stwo;
// document.getElementById("v2").innerHTML= "N/A";
// document.getElementById("fs2").innerHTML= "N/A";
// document.getElementById("av2").innerHTML= "N/A";

// document.getElementById("im3").innerHTML= "N/A";
// document.getElementById("ad3").innerHTML= z;
// document.getElementById("td3").innerHTML = logo;
// document.getElementById("ml3").innerHTML= "N/A";
// document.getElementById("ft3").innerHTML= sthree;
// document.getElementById("v3").innerHTML= "N/A";
// document.getElementById("fs3").innerHTML= "N/A";
// document.getElementById("av3").innerHTML= "N/A";
// //document.getElementById("cubedatehidden").style.visibility="visible";
//     /*document.getElementById("res1").innerHTML = "N/A";
//     document.getElementById("res2").innerHTML = "N/A";
//     document.getElementById("res3").innerHTML = "N/A";
//     document.getElementById("resall").innerHTML = "N/A";
//     document.getElementById("arrow12").style.visibility="visible";*/
//     document.getElementById("nextButton15").style.visibility="visible";
// }
// /*
// function reset()
// {
//     location.reload();
// }
// */
// function ShowLoadRes()
// {
//     if (size == 10)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("csft1").innerHTML = "24.2";
//     document.getElementById("csft2").innerHTML = "32.3";
//     document.getElementById("csft3").innerHTML = "29.5";
//     document.getElementById("avg1").innerHTML = "28.66";
//     document.getElementById("csft4").innerHTML = "24.36/32.96";
//     document.getElementById("csft5").innerHTML = "Not Ok";
//     document.getElementById("csft6").innerHTML = "Ok";
//     document.getElementById("csft7").innerHTML = "Ok";
//     document.getElementById("csfres1").innerHTML = "Invalid Test";
//     document.getElementById("rlfstep").style.visibility="visible"; 
//     document.getElementById("nextButton8").style.visibility="visible";   
//     /*document.getElementById("csf1").innerHTML = "24.2";
//     document.getElementById("csf2").innerHTML = "32.3";
//     document.getElementById("csf3").innerHTML = "29.5";
//     csft7
// avg1

//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton7").style.visibility="visible";
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";*/
//     }
//     else if (size == 15)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("csft1").innerHTML = "32.3";
//     document.getElementById("csft2").innerHTML = "29.5";
//     document.getElementById("csft3").innerHTML = "24.0";
//     document.getElementById("avg1").innerHTML = "28.6";
//     document.getElementById("csft4").innerHTML = "24.31/32.89";    
//     document.getElementById("csft5").innerHTML = "Ok";
//     document.getElementById("csft6").innerHTML = "Ok";
//     document.getElementById("csft7").innerHTML = "Not Ok";
//     document.getElementById("csfres1").innerHTML = "Invalid Test";
//     document.getElementById("rlfstep").style.visibility="visible";
//     document.getElementById("nextButton8").style.visibility="visible";
//     /*document.getElementById("lf1").innerHTML = "727";
//     document.getElementById("lf2").innerHTML = "865";
//     document.getElementById("lf3").innerHTML = "540"; 

//     document.getElementById("csf1").innerHTML = "32.3";
//     document.getElementById("csf2").innerHTML = "29.5";
//     document.getElementById("csf3").innerHTML = "24.0";   
//     //document.getElementById("loadfail").innerHTML = "727";
//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton7").style.visibility="visible";*/
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
// }


// function ShowLFinalRes()
// {
//     if (size == 10)//numbox == 2.33 && size == 10)
//     {
//     document.getElementById("fcsft1").innerHTML = "28.4";
//     document.getElementById("fcsft2").innerHTML = "29.9";
//     document.getElementById("fcsft3").innerHTML = "31.2";
//     document.getElementById("avg2").innerHTML = "29.83";
//     document.getElementById("fcsft4").innerHTML = "25.35/34.31";
//     document.getElementById("fcsft5").innerHTML = "Ok";
//     document.getElementById("fcsft6").innerHTML = "Ok";
//     document.getElementById("fcsft7").innerHTML = "Ok";
//     document.getElementById("csfres2").innerHTML = "Valid Test";
//     document.getElementById("flfstep").style.visibility="visible";
//     //document.getElementById("nextButton9").style.visibility="visible";
//     /*document.getElementById("csf1").innerHTML = "24.2";
//     document.getElementById("csf2").innerHTML = "32.3";
//     document.getElementById("csf3").innerHTML = "29.5";
//     csft7
// avg1

//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton7").style.visibility="visible";
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";*/
//     }
//     else if (size == 15)//numbox == 5.25 && size == 15)
//     {
//     document.getElementById("fcsft1").innerHTML = "28.4";
//     document.getElementById("fcsft2").innerHTML = "29.9";
//     document.getElementById("fcsft3").innerHTML = "31.2";
//     document.getElementById("avg2").innerHTML = "29.83";
//     document.getElementById("fcsft4").innerHTML = "25.35/34.31";
//     document.getElementById("fcsft5").innerHTML = "Ok";
//     document.getElementById("fcsft6").innerHTML = "Ok";
//     document.getElementById("fcsft7").innerHTML = "Ok";
//     document.getElementById("csfres2").innerHTML = "Valid Test";
//     document.getElementById("flfstep").style.visibility="visible";
//     //document.getElementById("nextButton9").style.visibility="visible";
//     /*document.getElementById("lf1").innerHTML = "727";
//     document.getElementById("lf2").innerHTML = "865";
//     document.getElementById("lf3").innerHTML = "540"; 

//     document.getElementById("csf1").innerHTML = "32.3";
//     document.getElementById("csf2").innerHTML = "29.5";
//     document.getElementById("csf3").innerHTML = "24.0";   
//     //document.getElementById("loadfail").innerHTML = "727";
//     document.getElementById("arrow10").style.visibility="visible";
//     document.getElementById("nextButton7").style.visibility="visible";*/
//     //document.getElementById("arrow9").style.visibility="visible";
//     //document.getElementById("nextButton6").style.visibility="visible";
//     }
//     else
//     {
//         alert("Wrong");
//     }
// }
/*
function movecube2(){

    //document.getElementById("arrow1").style.visibility="hidden";

setTimeout(function()

    {

    document.getElementById("cubefromctm").src="fitmachine.png";

    },1750);

document.getElementById("cubefromctm").style.animation="cubeFromctm 2s forwards";

}*/
/* Mouse Click Event
Clicking on the specified symbol instance executes a function in which you can add your own custom code.

Instructions:
1. Add your custom code on a new line after the line that says "// Start your custom code" below.
The code will execute when the symbol instance is clicked.

var nstext : String;/



/*
/* 
    
    if (navlist == 10)
    {
        //trace("Correct");
        //showtext = "242";
        viewttext = "24.2";
        //showtext2 = "323";
        viewttext2 = "32.3";
        //showtext3 = "295";
        viewttext3 = "29.5";
        viewttext4 = "28.66";
        viewttext5 = "24.36/32.96";
        viewttext6 = "Not Ok";
        viewttext7 = "Ok";
        viewttext8 = "Ok";
        viewttext9 = "Invalid Test";
        viewttext10 = "Click Next to Repeat Test with New Specimen";
        //viewttext4 = "28.66";
        
        //op = display.text;
        //op = ".";
        //display.text = op;
        trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        vbox1.text = viewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        vbox2.text =  viewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        vbox3.text =  viewttext3 ;
        //vbox4.text =  'Axat' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        vbox4.text = viewttext4 ;
        vbox5.text = viewttext5 ;
        vbox6.text = viewttext6 ;
        vbox7.text = viewttext7 ;
        vbox8.text = viewttext8 ;
        vbox9.text = viewttext9 ;
        vbox10.text = viewttext10 ;
        
    }
    
    //else if (navlist == 15)
    else
    {
        //trace("Correct");
        //showtext = "727";
        viewttext = "32.3";
        //showtext2 = "865";
        viewttext2 = "29.5";
        //showtext3 = "540";
        viewttext3 = "24.0";
        viewttext4 = "28.6";
        viewttext5 = "24.31/32.89";
        viewttext6 = "Ok";
        viewttext7 = "Ok";
        viewttext8 = "Not Ok";
        viewttext9 = "Invalid Test";
        viewttext10 = "Click Next to Repeat Test with New Specimen";
        //viewttext4 = "28.6";
        //op = display.text;
        //op = ".";
        //display.text = op;
        //trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        vbox1.text = viewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        vbox2.text =  viewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        vbox3.text =  viewttext3 ;
        //vbox4.text =  'Naveen' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        vbox4.text = viewttext4 ;
        vbox5.text = viewttext5 ;
        vbox6.text = viewttext6 ;
        vbox7.text = viewttext7 ;
        vbox8.text = viewttext8 ;
        vbox9.text = viewttext9 ;
        vbox10.text = viewttext10 ;
    }
    
    //{
        //trace("Incorrect");
        //itext = "Enter Correct Value:\n\n2.33 KN/s for 10cm speciman\n\n5.25 KN/s for 15cm speciman";
        //printci.text = itext;
        //display.text = (display.text + ".");
    //}
}
---------------------------------------------------------
/* Mouse Click Event
Clicking on the specified symbol instance executes a function in which you can add your own custom code.

Instructions:
1. Add your custom code on a new line after the line that says "// Start your custom code" below.
The code will execute when the symbol instance is clicked.

var nstext : String;*/

//var showtext : String;
/*var showtext2 : String;
var showtext3 : String;
/
var reviewttext : String;
var reviewttext2 : String;
var reviewttext3 : String;
//var axat:Number = 28.66;
//var nav11:Number = 28.6;
var reviewttext4 : String;
var reviewttext5 : String;
var reviewttext6 : String;
var reviewttext7 : String;
var reviewttext8 : String;
var reviewttext9 : String;
var reviewttext10 : String;
//var valtext : String;


//var itext : String;
//var nstext:Number;
//stop();button_obs
reviewbtn.addEventListener(MouseEvent.CLICK, revr_MouseClickHandler);

function revr_MouseClickHandler(event:MouseEvent):void
{
    //nstext = display.text;
    // Start your custom code
    // This example code displays the words "Mouse clicked" in the Output panel.
    //trace("Mouse clicked");
    //trace(nstext);
    //if(nstext == 2.333)
    //{
    // End your custom code
    if (navlist == 10)
    {
        //trace("Correct");
        //showtext = "242";
        reviewttext = "30.4";
        //showtext2 = "323";
        reviewttext2 = "29.6";
        //showtext3 = "295";
        reviewttext3 = "32.2";
        reviewttext4 = "30.73";
        reviewttext5 = "26.12/35.34";
        reviewttext6 = "Ok";
        reviewttext7 = "Ok";
        reviewttext8 = "Ok";
        reviewttext9 = "Valid Test";
        reviewttext10 = "Click Next to Generate Report";
        //viewttext4 = "28.66";
        
        //op = display.text;
        //op = ".";
        //display.text = op;
        //trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        rvbox1.text = reviewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        rvbox2.text =  reviewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        rvbox3.text =  reviewttext3 ;
        //vbox4.text =  'Axat' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        rvbox4.text = reviewttext4 ;
        rvbox5.text = reviewttext5 ;
        rvbox6.text = reviewttext6 ;
        rvbox7.text = reviewttext7 ;
        rvbox8.text = reviewttext8 ;
        rvbox9.text = reviewttext9 ;
        rvbox10.text = reviewttext10 ;
        
    }
    
    //else if (navlist == 15)
    else
    {
        //trace("Correct");
        //showtext = "727";
        reviewttext = "28.4";
        //showtext2 = "865";
        reviewttext2 = "29.9";
        //showtext3 = "540";
        reviewttext3 = "31.2";
        reviewttext4 = "29.83";
        reviewttext5 = "25.35/34.31";
        reviewttext6 = "Ok";
        reviewttext7 = "Ok";
        reviewttext8 = "Ok";
        reviewttext9 = "Valid Test";
        reviewttext10 = "Click Next to Generate Report";
        //viewttext4 = "28.6";
        //op = display.text;
        //op = ".";
        //display.text = op;
        trace(viewttext);
        //cube1.text = 'Load Failure: ' + showtext + ' KN';
        rvbox1.text = reviewttext;
        //cube2.text = 'Load Failure: ' + showtext2 + ' KN';
        rvbox2.text =  reviewttext2 ;
        ///cube3.text = 'Load Failure: ' + showtext3 + ' KN';
        rvbox3.text =  reviewttext3 ;
        //vbox4.text =  'Naveen' ;
        //vtext.text = 'Not Ok';
        //vtext2.text = 'Ok';
        //vtext3.text = 'Ok';
        rvbox4.text = reviewttext4 ;
        rvbox5.text = reviewttext5 ;
        rvbox6.text = reviewttext6 ;
        rvbox7.text = reviewttext7 ;
        rvbox8.text = reviewttext8 ;
        rvbox9.text = reviewttext9 ;
        rvbox10.text = reviewttext10 ;
    }
    //gotoAndPlay(333);
    //{
        //trace("Incorrect");
        //itext = "Enter Correct Value:\n\n2.33 KN/s for 10cm speciman\n\n5.25 KN/s for 15cm speciman";
        //printci.text = itext;
        //display.text = (display.text + ".");
    //}
}
*/
