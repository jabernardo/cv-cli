const jquery = require("jquery");
const terminal = require("jquery.terminal");

const $ = (window.$ = window.jQuery = terminal(this, jquery));

class Projects {
  get() {
    if (typeof window._jabernardo_term_projects == "object") {
      return window._jabernardo_term_projects;
    }

    var resp = null;

    $.ajax({
      url: "https://api.github.com/users/jabernardo/repos",
      method: "get",
      async: false,
      success: data => {
        resp = data;
      }
    });

    window._jabernardo_term_projects = resp;

    return resp;
  }
}

export default Projects;
