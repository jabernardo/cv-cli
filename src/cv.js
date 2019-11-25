import Projects from "./projects.js";

class CV {
  constructor() {
    this.HomeMessage = `                                       
e   e  e eeee e     eeee eeeee eeeeeee eeee 
8   8  8 8    8     8  8 8  88 8  8  8 8    
8e  8  8 8eee 8e    8e   8   8 8e 8  8 8eee 
88  8  8 88   88    88   8   8 88 8  8 88   
88ee8ee8 88ee 88eee 88e8 8eee8 88 8  8 88ee 

Hi there! I'm John Aldrich Bernardo ✋😁
Just type "help" for the list of commands 🤟
  `;

    this.Commands = {
      education: `
## View my educational background ##

🎓 Bachelor of Science in Computer Science
  - 📅 2011-2015
  - 🏬 College of Mary Immaculate
  - 📍 Pandi, Bulacan
      `,

      work: `
## Know where I work ##

💼 U.S. Auto Parts Network (Philippines) Corp.
  - 💻 Associate Lead-Developer
  - 📅 2015-Present
  - 📍 Mandaluyong, Metro Manila

💼 Bachelor of Science in Computer Science
  - 💻 Part-time Instructor
  - 📅 2019-Present
  - 🏬 College of Mary Immaculate
  - 📍 Pandi, Bulacan
      `,

      awards: `
## Some awards ##
🏆 Mr. Programmer
  - 📅 Computer Science Day 2015
  - 🏬 College of Mary Immaculate

🏆 I.T. Genius Award
  - 📅 Computer Science Day 2015
  - 🏬 College of Mary Immaculate

🏅 Departmental Awardee
  - 📅 Computer Science Department \`Batch 2015, March 2015
  - 🏬 College of Mary Immaculate
      `,

      contact: `
## Know where to contact me ##
Hey! Just e-mail me at 📨 4ldrich@protonmail.com. Have a good day! 
`,

      projects(use_descriptions = false) {
        if (use_descriptions) return `## My Personal projects ##`;
        var screen = "";

        const proj = new Projects();
        this.Projects = proj.get();

        this.Projects.forEach(data => {
          screen += `
🐣 ${data.name} (${data.html_url})
  - ${data.description}
`;
        });

        return screen;
      }
    };
  }

  getHomeScreen() {
    return this.HomeMessage;
  }

  getInfo(keyword) {
    if (
      typeof this.Commands[keyword] !== "undefined" &&
      typeof this.Commands[keyword] === "string"
    ) {
      return this.Commands[keyword].replace(/##(.*)##/g, "").trim();
    } else if (
      typeof this.Commands[keyword] !== "undefined" &&
      typeof this.Commands[keyword] === "function"
    ) {
      return this.Commands[keyword]();
    }

    return null;
  }

  getHelp() {
    var help = "";

    Object.keys(this.Commands).forEach(cmd => {
      var preview = "";
      var tokens =
        typeof this.Commands[cmd] === "function"
          ? this.Commands[cmd](true).match(/##(.*)##/g)
          : this.Commands[cmd].match(/##(.*)##/g);

      // console.log(typeof tokens);
      if (tokens != null) {
        preview = tokens
          .join("")
          .replace(/#/g, "")
          .trim();
      }

      help += `\t${cmd.padEnd(15)}${preview}\n`;
    });

    return help;
  }
}

export default CV;
