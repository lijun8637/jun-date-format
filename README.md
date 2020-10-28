
### jun-date-format

npm install jun-date-format


## description 
my dateFormat

将日期对象格式化为字符串

## Formatting dates as strings
import dateFormat from 'jun-date-format';
dateFormat.format([String,[Date]])
dateFormat.format() //defaults to ISO8601 format and current date.
dateFormat.format('YYYY-MM-DD HH:mm:ss',new Date())


## get current month length
import dateFormat from 'jun-date-format';
dateFormat.getMonthLength([year,[month,[day]]])
dateFormat.getMonthLength()
dateFormat.getMonthLength(date.getFullYear(),date.getMonth()+1,date.getDate())


## Get two time differences
import dateFormat from 'jun-date-format';
dateFormat.parse([Date,[Date]])
dateFormat.parse()
dateFormat.parse(new Date('2020/01/01 00:00:00'),new Date())

dateFormat.parseDay([Date,[Date]]);
dateFormat.parseDay();
dateFormat.parseDay(new Date('2020/01/01 00:00:00'),new Date())


## Set date
import dateFormat from 'jun-date-format';
dateFormat.setDate([Date,[Number]]);
dateFormat.setDate();
dateFormat.setDate(new Date(),-1);