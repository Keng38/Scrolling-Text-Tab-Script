
    // Scrolling Text Tab Script //
      var space = " ";
      var speed = "200";
      var pos = 0;
      var msg = "K Gamble Ltd : Web Design : Home : Digital Marketing :";
      function Scroll()
      {
      document.title = msg.substring(pos, msg.length) + space + msg.substring(0,pos);
      pos++;
      if (pos > msg.length) pos = 0;
      window.setTimeout("Scroll()", speed);
      }
      Scroll();
