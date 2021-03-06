import "./styles.css";
import "jquery.terminal/css/jquery.terminal.css";

import CV from "./cv.js";

const jquery = require("jquery");
const terminal = require("jquery.terminal");

const $ = (window.$ = window.jQuery = terminal(this, jquery));

$(function($) {
  const cv = new CV();
  const term = $("#app").terminal(
    function(command, term) {
      term.pause();
      var msg = "";

      switch (command.toLowerCase()) {
        case "help":
        case "ls":
        case "ll":
          msg = cv.getHelp();
          break;
        case "home":
	case "exit":
          window.location = "/";
          break;
        default:
          var results = cv.getInfo(command);

          if (results !== null) {
            msg = results;
          } else if (command.length > 0) {
            msg = `[[;red;]Command "${command}" not found.`;
          }

          break;
      }

      term.resume();

      return msg + (msg.length ? "\n" : "");
    },
    {
      autocompleteMenu: true,
      completion: Object.keys(cv.Commands)
    }
  );

  term.clear();
  term.echo(cv.getHomeScreen());
});
