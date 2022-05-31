var list = ["p01", "p02", "p03", "p04", "p05", "p06", "p07", "p08", "p09", "p10", "sat11", "sat12", "sat13", "judge01"];
var ans = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "Y"];

function genNewTime() {
    var newTime = lastTime + Math.floor((Math.random() * 1.5 + 1.5) * 1000);
    lastTime = newTime;
    return newTime;
}
ntms.widget._AutoTimer.prototype._static.setInterval(0);
var lastTime = new Date().getTime() - 60000;
var clicks = {
    "_boot_": lastTime
};
for (var i = 0; i < list.length; i++) {
    $("input[name='" + list[i] + "'][value='" + ans[i] + "']").click();
    clicks[list[i]] = genNewTime();
}
ntms.widget._AutoTimer.prototype._static.clicks = clicks;

function xhrWrapper(payload, cb) {
    dojo.xhrPost({
        url: "/ntms/service/res.do",
        handleAs: "json-comment-optional",
        headers: [],
        contentType: "application/json",
        load: function(data) {
            cb(data)
        },
        sync: true,
        postData: dojo.toJson(payload),
    });
}

function setUID(result) {
    uid = result.userId;
    var payload = {
        "tag": "student_sch_dept",
        "branch": "default",
        "params": {
            "schId": result.defRes.school,
            "deptId": result.defRes.department,
            "egrade": null,
            "adcId": result.defRes.adcId
        }
    };
    xhrWrapper(payload, searchName);
}

function searchName(result) {
    result.value.forEach(function(i) {
        nameList.push(i.name)
    });
    console.log(nameList);
    var pattern1 = $("#puzzle_1").innerHTML;
    var pattern2 = $("#puzzle_2").innerHTML;
    var pattern = "^" + pattern1 + "(.)" + pattern2 + "$";
    var regex = new RegExp(pattern);
    nameList.forEach(function(i) {
        var res = regex.exec(i);
        if (res != null) {
            console.log(res);
            document.getElementById("dijit_form_TextBox_0").value = res[1];
        }
    })
}
var nameList = [];
var uid;
dojo.xhrPost({
    url: "/ntms/action/getCurrentUserInfo.do",
    handleAs: "json-comment-optional",
    load: function(data) {
        setUID(data)
    },
    sync: true
});