- **How does a browser works ?**

The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content. The location of the resource is specified by the user using a URI (Uniform Resource Identifier).

- **What are the high-level components of a browser?**

**The user interface** : this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

**The browser engine** : marshals actions between the UI and the rendering engine.

**The rendering engine** : responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

**Networking** : for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

**UI backend** : used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

**JavaScript interpreter**. Used to parse and execute JavaScript code.

Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

![High level components](./exercise%201.1/img/high.png)

- **Rendering engine**

The responsibility of the rendering engine is to display the requested contents on the browser screen.

The different steps of the rendering engine

1. **Parce HTML and create a dom tree** : The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree".

2. **Create render tree from dom tree** : While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

3. **Layout the render tree** : When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow. HTML uses a flow-based layout. The layout is a recursive process. It begins at the root renderer, which corresponds to the \\<html\\> element of the HTML document. The layout continues recursively through some or all of the frame hierarchy.

4. **Painting** : In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. The painting uses the UI infrastructure component.

- **DOM Tree**

First, parse the bytes received from the server and generate characters, who are in charge to perform that process is called Tokenizer.

The Tokenizing starts to parse each Start Tags and the End tags and convert to Nodes until it will end up creating the entire Document Objects Models(DOM). The DOM is the full representation of the HTML markers, each individual Node contains all the properties related and needed to represent it.

- **CSS Object Model (CSSOM**)

The CSS Object model creation it's generated like the DOM but with some differences.

when the rendering engine is constructing the dom from the HTML file it encounters a link tag referring to the CSS stylesheet, Once the construction of the Dom tree is completed, CSS is mentioned in all the sources i.e external, inline,user-agent etc. is read by the engine.

Each node in the custom tree refers to a style element that is applied to a dom element. A browser also contains its user agent stylesheet, whenever CSS object model is created, first CSS properties for dom element is created by overriding its user agent stylesheet, If the CSS property of an HTML element is not defined in both the stylesheet of the developer and browser, then it inherits the property of its parent element.

- **Render Tree**

The final render is constructed by merging both the DOM and CSSOM tree. Render tree contains all the information of the visible content including their CSS style information. The render tree does not include script, meta tags etc. as they are not included in the render output. The dom elements which are hidden through the CSS property are also excluded from the render tree, such as elements with display: none property. But the elements with property visibility: none or opacity:0 will be added on the render tree and will also take space on the screen. For every node, a matching custom property is applied. The final render tree has then proceeded to the layout stage.

- **Render blocking**

Render blocking resources are static files, such as fonts, HTML, CSS, and JavaScript files, that are vital to the process of rendering a web page. When the browser encounters a render blocking resource, it stops downloading the rest of the resources until these critical files are processed. In the meantime, the entire rendering process is put on hold.

By default, CSS is treated as a render blocking resource, which means that the browser won't render any processed content until the CSSOM is constructed.

![HOW-rendering-works](./exercise%201.1/img/how-rendering-works.png)

- **Parsing**

Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

Parsing can be separated into two sub processes: lexical analysis and syntax analysis.

Lexical analysis is the process of breaking the input into tokens. Tokens are the language vocabulary: the collection of valid building blocks.

Parsers usually divide the work between two components: the **lexer** (sometimes called tokenizer) that is responsible for breaking the input into valid tokens, and the parse that is responsible for constructing the parse tree by analyzing the document structure according to the language syntax rules.

The parsing process is iterative. The parser will usually ask the lexer for a new token and try to match the token with one of the syntax rules. If a rule is matched, a node corresponding to the token will be added to the parse tree and the parser will ask for another token.

If no rule matches, the parser will store the token internally, and keep asking for tokens until a rule matching all the internally stored tokens is found. If no rule is found then the parser will raise an exception. This means the document was not valid and contained syntax errors.

- **The tokenization algorithm**

The algorithm's output is an HTML token. The algorithm is expressed as a state machine. Each state consumes one or more characters of the input stream and updates the next state according to those characters. The decision is influenced by the current tokenization state and by the tree construction state.

**Parsing HTML** : conventional parser topics do not apply to HTML.HTML cannot easily be defined by a context-free grammar that parsers need. There is a formal format for defining HTML - DTD (Document Type Definition) - but it is not context-free grammar.

**Parsing CSS** : WebKit uses Flex and Bison parser generators to create parsers automatically from the CSS grammar files **.**

- **Order of script processing**

**Script** : The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a \\<script\\> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched.

**stylesheet** : Style sheets on the other hand have a different model. Conceptually it seems that since style sheets don't change the DOM tree, there is no reason to wait for them and stop the document parsing. There is an issue, though, of scripts asking for style information during the document parsing stage. If the style is not loaded and parsed yet, the script will get wrong answers and apparently this caused lots of problems.

- **defer attribute in script tag**

The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads "in the background", and then runs when the DOM is fully built.

- **async attribute in script tag**

The async attribute is somewhat like defer. It also makes the script non-blocking. But it has important differences in the behavior.

The async attribute means that a script is completely independent:

- The browser doesn't block on async scripts (like defer).

- Other scripts don't wait for async scripts, and async scripts don't wait for them.

async scripts load in the background and run when ready. The DOM and other scripts don't wait for them, and they don't wait for anything.

In practice, defer is used for scripts that need the whole DOM and/or their relative execution order is important.

And async is used for independent scripts, like counters or ads. And their relative execution order does not matter.
