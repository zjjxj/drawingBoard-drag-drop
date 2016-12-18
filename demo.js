var colors=Array.prototype.slice.call(document.getElementById("choice1").getElementsByTagName("div"),0);
var shapes=Array.prototype.slice.call(document.getElementById("choice2").getElementsByTagName("div"),0);
colors.map(function (value) {
    value.style.backgroundColor=value.id;
});
colors.map(function (value) {
    EventUtil.addHandler(value,"dragstart",function (e) {
        e.dataTransfer.setData("text",EventUtil.getTarget(e).id);
        e.dataTransfer.effectAllowed="move";
        var elem=document.createElement("div");
        elem.style.width="100px";
        elem.style.height="200px";
        elem.style.backgroundColor="red";

    });
    EventUtil.addHandler(value,"drag",function (e) {
        EventUtil.preventDefault(e);
    });
});
shapes.map(function (value) {
    EventUtil.addHandler(value,"dragstart",function (e) {
        e.dataTransfer.setData("text",EventUtil.getTarget(e).id);
    });
    EventUtil.addHandler(value,"drag",function (e) {
        EventUtil.preventDefault(e);
    });
});

EventUtil.addHandler(document.getElementById("show"),"dragover",function (e) {
    EventUtil.preventDefault(e);
});

// var x1,y1;
EventUtil.addHandler(document.getElementById("show"),"mouse",function (e) {
    x1=e.clientX
    y1=e.clientX
    console.log(x1,y1);

});
EventUtil.addHandler(document.getElementById("show"),"drop",function (e) {
    var id=e.dataTransfer.getData("text");
    var elem=document.getElementById(id).cloneNode(true);
    document.getElementById("show").appendChild(elem);
    // console.log(x1,y1);
    // document.getElementById("show").lastElementChild.style.top=x1;
    // document.getElementById("show").lastElementChild.style.left=y1;
    var targets=Array.prototype.slice.call(document.getElementById("show").getElementsByTagName("div"),0);
    targets.map(function (value) {
        EventUtil.addHandler(value,"dragover",function (e) {
            EventUtil.preventDefault(e);
        });
        EventUtil.addHandler(value,"drop",function (e) {
            var id=e.dataTransfer.getData("text");
            var color=document.getElementById(id).style.backgroundColor;
            if(EventUtil.getTarget(e).id=="shape4"||EventUtil.getTarget(e).id=="shape5"){
                EventUtil.getTarget(e).style.borderTopColor=color;
                EventUtil.getTarget(e).style.borderLeftColor=color;
            }else{
                EventUtil.getTarget(e).style.backgroundColor=color;
            }
        })
    })
})