<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@antv/dw-random](./dw-random.md) &gt; [DateTimeRandom](./dw-random.datetimerandom.md) &gt; [weekday](./dw-random.datetimerandom.weekday.md)

## DateTimeRandom.weekday() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

return a random weekday

<b>Signature:</b>

```typescript
weekday(options?: WeekDayOptions): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | [WeekDayOptions](./dw-random.weekdayoptions.md) | the params |

<b>Returns:</b>

string

## Example


```javascript
new DateTimeRandom().weekday({ locale: 'zh-CN' }) // 星期一
new DateTimeRandom().weekday({ abbr: true }) // Mon.

```

