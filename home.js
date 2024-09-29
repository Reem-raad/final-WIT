window.onload = function() {
    // تعيين مجموعة D لتكون مرئية عند تحميل الصفحة
    document.querySelector(".group-D").style.display = "inline-block";
    document.querySelector(".group-E").style.display = "none";
    document.querySelector(".group-D-skills").style.display = "block";
    document.querySelector(".group-E-skills").style.display = "none";
};

function btn1() {
    document.querySelector(".group-D").style.display = "none";
    document.querySelector(".group-E").style.display = "inline-block";
    
    // إخفاء المهارات المكتسبة لمجموعة D وإظهار مجموعة E
    document.querySelector(".group-D-skills").style.display = "none";
    document.querySelector(".group-E-skills").style.display = "block";
}

function btn2() {
    document.querySelector(".group-E").style.display = "none";
    document.querySelector(".group-D").style.display = "inline-block";
    
    // إخفاء المهارات المكتسبة لمجموعة E وإظهار مجموعة D
    document.querySelector(".group-E-skills").style.display = "none";
    document.querySelector(".group-D-skills").style.display = "block";
}