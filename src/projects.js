const jquery = require("jquery");
const terminal = require("jquery.terminal");

const $ = (window.$ = window.jQuery = terminal(this, jquery));

class Projects {
  get() {
    var resp = null;

    $.ajax({
      url: "https://api.github.com/users/jabernardo/repos",
      method: "get",
      async: false,
      success: data => {
        resp = data;
      }
    });

    return resp;
  }
}

export default Projects;
