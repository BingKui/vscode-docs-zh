(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{234:function(e,t,o){"use strict";o.r(t);var n=o(0),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"your-first-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#your-first-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Your First Extension")]),e._v(" "),o("p",[e._v("In this topic, we'll teach you the fundamental concepts for building extensions. Make sure you have "),o("a",{attrs:{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),o("OutboundLink")],1),e._v(" installed, then install "),o("a",{attrs:{href:"http://yeoman.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yeoman"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"https://www.npmjs.com/package/generator-code",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code Extension Generator"),o("OutboundLink")],1),e._v(" with:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" -g yo generator-code\n")])])]),o("p",[e._v("The generator scaffolds a project ready for development. Run the generator and fill out a few fields:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("yo code\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ? What type of extension do you want to create? New Extension (TypeScript)")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ? What's the name of your extension? HelloWorld")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("### Press <Enter> to choose default for all options below ###")]),e._v("\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ? What's the identifier of your extension? helloworld")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ? What's the description of your extension? LEAVE BLANK")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ? Initialize a git repository? Yes")]),e._v("\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ? Which package manager to use? npm")]),e._v("\n\ncode ./helloworld\n")])])]),o("p",[e._v("Then, inside the editor, press "),o("code",[e._v("kb(workbench.action.debug.start)")]),e._v(". This will compile and run the extension in a new "),o("strong",[e._v("Extension Development Host")]),e._v(" window.")]),e._v(" "),o("p",[e._v("Run the "),o("code",[e._v("Hello World")]),e._v(" command from the Command Palette ("),o("code",[e._v("kb(workbench.action.showCommands)")]),e._v(") in the new window:")]),e._v(" "),o("video",{attrs:{autoplay:"",loop:"",muted:"",playsinline:"",controls:"",title:"Launch your first VS Code extension video"},domProps:{muted:!0}},[o("source",{attrs:{src:"/api/get-started/your-first-extension/launch.mp4",type:"video/mp4"}})]),e._v(" "),o("p",[e._v("You should see the "),o("code",[e._v("Hello World")]),e._v(" notification showing up. Success!")]),e._v(" "),o("h2",{attrs:{id:"developing-the-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#developing-the-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Developing the extension")]),e._v(" "),o("p",[e._v("Let's make a change to the message:")]),e._v(" "),o("ul",[o("li",[e._v("Change the message from "),o("code",[e._v("Hello World")]),e._v(" to "),o("code",[e._v("Hello VS Code")]),e._v(" in "),o("code",[e._v("extension.ts")])]),e._v(" "),o("li",[e._v("Run "),o("code",[e._v("Reload Window")]),e._v(" in the new window")]),e._v(" "),o("li",[e._v("Run the command "),o("code",[e._v("Hello World")]),e._v(" again")])]),e._v(" "),o("p",[e._v("You should see the updated message showing up.")]),e._v(" "),o("video",{attrs:{autoplay:"",loop:"",muted:"",playsinline:"",controls:"",title:"Reload VS Code extension video"},domProps:{muted:!0}},[o("source",{attrs:{src:"/api/get-started/your-first-extension/reload.mp4",type:"video/mp4"}})]),e._v(" "),o("p",[e._v("Here are some ideas for you to try:")]),e._v(" "),o("ul",[o("li",[e._v("Give the "),o("code",[e._v("Hello World")]),e._v(" command a new name in the Command Palette.")]),e._v(" "),o("li",[o("a",{attrs:{href:"/api/references/contribution-points"}},[e._v("Contribute")]),e._v(" another command that displays current time in an information message.")]),e._v(" "),o("li",[e._v("Replace the "),o("code",[e._v("vscode.window.showInformationMessage")]),e._v(" with another "),o("a",{attrs:{href:"/api/references/vscode-api"}},[e._v("VS Code API")]),e._v(" call to show a warning message.")])]),e._v(" "),o("h2",{attrs:{id:"debugging-the-extension"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#debugging-the-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Debugging the extension")]),e._v(" "),o("p",[e._v("VS Code's built-in debugging functionality makes it easy to debug extensions. Set a breakpoint by clicking the gutter next to a line, and VS Code will hit the breakpoint. You can hover over variables in the editor or use the Debug View in the left to check a variable's value. The Debug Console allows you to evaluate expressions.")]),e._v(" "),o("video",{attrs:{autoplay:"",loop:"",muted:"",playsinline:"",controls:"",title:"Debug VS Code extension video"},domProps:{muted:!0}},[o("source",{attrs:{src:"/api/get-started/your-first-extension/debug.mp4",type:"video/mp4"}})]),e._v(" "),o("p",[e._v("You can learn more about debugging Node.js apps in VS Code in the "),o("a",{attrs:{href:"/docs/nodejs/nodejs-debugging"}},[e._v("Node.js Debugging Topic")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"next-steps"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#next-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),o("p",[e._v("In the next topic, "),o("a",{attrs:{href:"/api/get-started/extension-anatomy"}},[e._v("Extension Anatomy")]),e._v(", we'll take a closer look at the source code of the "),o("code",[e._v("Hello World")]),e._v(" sample and explain key concepts.")]),e._v(" "),o("p",[e._v("You can find the source code of this tutorial at: https://github.com/Microsoft/vscode-extension-samples/tree/master/helloworld-sample. The "),o("a",{attrs:{href:"/api/extension-guides/overview"}},[e._v("Extension Guides")]),e._v(" topic contains other samples, each illustrating a different VS Code API or Contribution Point.")]),e._v(" "),o("h3",{attrs:{id:"using-javascript"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#using-javascript","aria-hidden":"true"}},[e._v("#")]),e._v(" Using JavaScript")]),e._v(" "),o("p",[e._v("In this guide, we mainly describe how to develop VS Code extension with TypeScript because we believe TypeScript offers the best experience for developing VS Code extensions. However, if you prefer JavaScript, you can still follow along using "),o("a",{attrs:{href:"https://github.com/Microsoft/vscode-extension-samples/tree/master/helloworld-minimal-sample",target:"_blank",rel:"noopener noreferrer"}},[e._v("helloworld-minimal-sample"),o("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);