<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Idle alarm</title>
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
    <style>
      .hidden {
        display: none;
      }
    </style>
  </head>
  <body>
    <h1>IDLE ALARM!</h1>
    <p>
      <ul>
        <li>Play a sound when the computer was idle for a specific time, auto stop once users interact with the computer (presskey, moving the mouse)</li>
        <li>For person who want to lying down while working, but don't want to overslept</li>
      </ul>

      <ul>
        <li>Click Stop when you want to stop checking</li>
      </ul>
    </p>

    <input id="idleTime" placeholder="Idle time (second)" type="number" value="5" /> (seconds) 

    <button id="btnStart">Start</button> 
    <button id="btnPause">Stop</button>

    <audio id="sound" class="hidden" controls loop>
      <source src="mixkit-alarm-tone-996.wav" type="audio/wav">
    </audio>

    <script>
      require('./view.js');
    </script>
  </body>
</html>