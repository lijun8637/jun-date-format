module.exports = {
    format:function(format = 'YYYYMMDDHHmmss', date = new Date()){
        var o = {
            "Y+": date.getFullYear(),
            "M+": date.getMonth() + 1, //月份
            "D+": date.getDate(), //日
            "H+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        for (var k in o){
          if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1 || RegExp.$1.length == 4) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)) );
          }
        }
        return format;
    },
    parseDay:function(start = new Date(),end = new Date()){
        var  startDate = Date.parse(start);
        var  endDate = Date.parse(end);
        var days = (endDate - startDate)/(1*24*60*60*1000);
        return  days;
    },
    parse:function(start = new Date(),end = new Date()){
        var  startTime = Date.parse(start);
        var  endTime = Date.parse(end);
        return endTime - startTime;
    },
    //获取月份天数
    getMonthLength:function(y = new Date().getFullYear(), m = new Date().getMonth()+1, d=1){
        var myDate= new Date();
        myDate.setFullYear(y,m-1,d);
        //设置某个月份的最后一天
        myDate.setMonth(m,0);
        var dates = myDate.getDate();
        return dates;
    },
    setDate:function(date = new Date(),num = 0){
        date = new Date(date);
        res = new Date(date.setDate(date.getDate()+num))
        return res;
    }
}
  