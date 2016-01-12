function clrtest() {

   try {
      var canvas = document.getElementById('svgCanvas');

      var ctx = canvas.getContext('2d');

      var data = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100" style="border: 2px solid red">' +
                 '<style type="text/css">@font-face{font-family:"colorfontsupport";src:url(data:font/truetype;base64,AAEAAAASAQAABAAgQ09MUgASAFgAAAfYAAAANkNQQUwAAAAQAAAIEAAAABJPUy8yLvEnTgAAAagAAABgU1ZHINMp07IAAAgkAAAEe2NtYXAAY+odAAACNAAAAJhjdnQgABUAAAAABEQAAAAGZnBnbZJB2voAAALMAAABYWdhc3AAFgAhAAAHyAAAABBnbHlmHRXr8AAABGgAAAB8aGVhZAiDv5QAAAEsAAAANmhoZWEIAQQJAAABZAAAACRobXR4CAAAAAAAAggAAAAqbG9jYQCdALwAAARMAAAAHG1heHACGQAeAAABiAAAACBuYW1l3y6QjgAABOQAAAJicG9zdIx/8v4AAAdIAAAAgHByZXAXLpU/AAAEMAAAABFzYml46xuFdQAADKAAAAVvAAEAAAABAAA/7jQaXw889QAbBAAAAAAA0qACEAAAAADStXiHAAAAAAQABAAAAAAIAAIAAAAAAAAAAQAABAAAAAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAgAAQAAAA0ABQABAAAAAAABAAAAAAAKAAACAAAYAAAAAAAEBAABkAAFAAACmQLMAAAAjwKZAswAAAHrADMBCQAAAAAAAAAAAAAAAAAAAAEQAAAAAAAAAAAAAAAgICAgAMAAAOkEBAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAACAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAMAAAAcAAEAAAAAAEwAAwABAAAAHAAEADAAAAAIAAgAAgAAAAEAIOkE//8AAAAAACDpAP//AAH/4xcIAAEAAAAAAAAAAAAGAEwAAAAAACEAAQACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOwACxLsAlQWLEBAY5ZuAH/hbBEHbEJA19eLbABLCAgRWlEsAFgLbACLLABKiEtsAMsIEawAyVGUlgjWSCKIIpJZIogRiBoYWSwBCVGIGhhZFJYI2WKWS8gsABTWGkgsABUWCGwQFkbaSCwAFRYIbBAZVlZOi2wBCwgRrAEJUZSWCOKWSBGIGphZLAEJUYgamFkUlgjilkv/S2wBSxLILADJlBYUViwgEQbsEBEWRshISBFsMBQWLDARBshWVktsAYsICBFaUSwAWAgIEV9aRhEsAFgLbAHLLAGKi2wCCxLILADJlNYsEAbsABZioogsAMmU1gjIbCAioobiiNZILADJlNYIyGwwIqKG4ojWSCwAyZTWCMhuAEAioobiiNZILADJlNYIyG4AUCKihuKI1kgsAMmU1iwAyVFuAGAUFgjIbgBgCMhG7ADJUUjISMhWRshWUQtsAksS1NYRUQbISFZLQAAALAAKwCyAQEHK7AAIEV9aRhEAAAAABUAAAAAAAAAAAAAAAAAAAAAAAgAEAAYAC8ALwAvAC8ALwA+AAEAAAAAAAAAAAABAAAxMQABAAAAAAAAAAAAAQAAMTEAAQAAAAAAAAAAAAEAADExAAEAAAAABAAEAAADABOwACsAsABFWLACLxuxAgE+WTAxESERIQQA/AAEAPwAAAABAAAAAAQABAAABAAAESERIREEAPwABAD8AAQAAAAAABAAxgABAAAAAAABABIAAAABAAAAAAACAAcAEgABAAAAAAADAC0AGQABAAAAAAAEABIAAAABAAAAAAAFAAsARgABAAAAAAAGABIAUQABAAAAAAAKABsAYwADAAEECQABACQAfgADAAEECQACAA4AogADAAEECQADAFoAsAADAAEECQAEACQAfgADAAEECQAFABYBCgADAAEECQAGACQBIAADAAEECQAKADYBRAADAAEECQAQABgBegADAAEECQARAAoBklBpeGVsQW1iYWNodCBDb2xvclJlZ3VsYXIxLjAwMDs7UGl4ZWxBbWJhY2h0LUNvbG9yOzIwMTU7VFI0LTQuMC4xLjUwOTVWZXJzaW9uIDEuMFBpeGVsQW1iYWNodC1Db2xvckZvbnQgdG8gdGVzdCBjb2xvciBzdXBwb3J0LgBQAGkAeABlAGwAQQBtAGIAYQBjAGgAdAAgAEMAbwBsAG8AcgBSAGUAZwB1AGwAYQByADEALgAwADAAMAA7ADsAUABpAHgAZQBsAEEAbQBiAGEAYwBoAHQALQBDAG8AbABvAHIAOwAyADAAMQA1ADsAVABSADQALQA0AC4AMAAuADEALgA1ADAAOQA1AFYAZQByAHMAaQBvAG4AIAAxAC4AMABQAGkAeABlAGwAQQBtAGIAYQBjAGgAdAAtAEMAbwBsAG8AcgBGAG8AbgB0ACAAdABvACAAdABlAHMAdAAg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);}</style> '+
                 '<text x="0" y="50" fill="black" font-family="colorfontsupport" font-size="40">&#xe900;&#xe901;&#xe902;&#xe903;&#xe904;</text>' +
                 '</svg>';

      var img = new Image();

      img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(data);

      img.onload = function () {
        ctx.drawImage(img, 0, 0);
      }
   }
   catch (ex) {
      console.log(ex);
      return false;
   }
}

window.onload = function() {
  console.log ( clrtest() );
  console.log ( "test done." );
}

