class CV {
  constructor() {
    this.HomeMessage = `
    ____
  < Hello >
    -----
           \\   ^__^ 
            \\  (oo)\\_______
               (__)\\       )\\/\\
                   ||----w |
                   ||     ||
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
      `
    };
  }

  getHomeScreen() {
    return this.HomeMessage;
  }

  getInfo(keyword) {
    if (typeof this.Commands[keyword] !== "undefined") {
      return this.Commands[keyword].replace(/##(.*)##/g, "").trim();
    }

    return null;
  }

  getHelp() {
    var help = "";

    Object.keys(this.Commands).forEach(cmd => {
      var preview = "";
      var tokens = this.Commands[cmd].match(/##(.*)##/g);

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
