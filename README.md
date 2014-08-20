# tardis.js

Library to mock and work with the Date object. Allows you to travel in time.

## Usage

```javascript
new Date();
// => Tue Aug 19 2014 18:59:02 GMT-0500 (Central Daylight Time)

tardis.travelToFuture(24 * 60 * 60 * 1000);
new Date();
// => Thu Aug 21 2014 17:59:02 GMT-0500 (Central Daylight Time)

tardis.travelToPast(60 * 60 * 1000);
new Date();
// => Thu Aug 21 2014 16:59:02 GMT-0500 (Central Daylight Time) 

tardis.restoreTime();
new Date();
// => Tue Aug 19 2014 18:59:02 GMT-0500 (Central Daylight Time) 
```

## Notes

1. `new Date()` will create a Date value with the shifted value by the offset of how you travelled from the present.
2. `Date.now()` will have the same offset.
3. `new Date(Number)` will not present this offset -- you're created a fixed point in time, regardless of where you travelled.
