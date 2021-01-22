var shuffleSequence = seq("intro", "intro2", "setcounter", // shows intro pages & updates Latin Square immediately
                      sepWith("sep", // separate with sep defined default
                      seq("practice", rshuffle("src", "orc", "f"))), // all items that are NOT sep
                      "outro"); // collects comments (completion message displayed separately)

var practiceItemTypes = ["practice"];
var practiceItemMessage = "Practice"; // TODO translate

var pageTitle = "Experiment"; // TODO translate
var showProgressBar = false;

var defaults = [
    "Separator", {
        transfer: "keypress",
        normalMessage: "Press any key to continue.", // TODO translate
        errorMessage: "Wrong. Press any key to continue." // TODO translate
    },
    "RLDashedSentence", {
        mode: "self-paced reading"
    },
    "Question", {
        as: ["نعم","لا"], // TODO translate; hopefully this fixes right-to-left problem
        randomOrder: false,
        presentHorizontally: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueMessage: "Click here to continue", // continueOnReturn ?
        saveReactionTime: true
    }
];

var randomnumber = String(Math.floor(Math.random()*10001));
var rn = String("Thank you for participating! Your completion code is ASP" + randomnumber + ". Please return to Mechanical Turk and input your code for credit."); // TODO translate
var completionMessage = rn;

var items = [

    // New in Ibex 0.3-beta-9. You can now add a '__SendResults__' controller in your shuffle
    // sequence to send results before the experiment has finished. This is NOT intended to allow
    // for incremental sending of results -- you should send results exactly once per experiment.
    // However, it does permit additional messages to be displayed to participants once the
    // experiment itself is over. If you are manually inserting a '__SendResults__' controller into
    // the shuffle sequence, you must set the 'manualSendResults' configuration variable to 'true', since
    // otherwise, results are automatically sent at the end of the experiment.
    //

    ["sr", "__SendResults__", { }],

    ["sep", "Separator", { }],

    // New in Ibex 0.3-beta19. You can now determine the point in the experiment at which the counter
    // for latin square designs will be updated. (Previously, this was always updated upon completion
    // of the experiment.) To do this, insert the special '__SetCounter__' controller at the desired
    // point in your running order. If given no options, the counter is incremented by one. If given
    // an 'inc' option, the counter is incremented by the specified amount. If given a 'set' option,
    // the counter is set to the given number. (E.g., { set: 100 }, { inc: -1 })
    //

    ["setcounter", "__SetCounter__", { }],

    ["intro", "Form", {
        html: { include: "intro.html" },
    } ],

    ["intro2", "Form", {
        html: { include: "intro2.html" },
    } ],

    ["outro", "Form", {
      html: { include: "outro.html" }
    } ],

    //
    // Three practice items for self-paced reading (one with a comprehension question).
    //
    ["practice", "RLDashedSentence", {s: "This is a practice sentence to get you used to reading sentences like this."}],
    ["practice", "RLDashedSentence", {s: "This is another practice sentence with a practice question following it."},
                 "Question", {hasCorrect: 1, randomOrder: false, // 0 = True is correct, 1 = False is correct
                              q: "How would you like to answer this question?"}],

    //
    // Two "real" (i.e. non-filler) self-paced reading items.
    // There are two conditions.
    //

    [["src",1], "RLDashedSentence", {s: "The journalist interviewed an actress who he knew to be shy of publicity after meeting on a previous occasion."},
               "Question",       {hasCorrect: 1, q: "The actress was:"}],
    [["orc",1], "RLDashedSentence", {s: "The journalist interviewed an actress who after meeting on a previous occasion he knew to be shy of publicity."},
               "Question",       {hasCorrect: 0, q: "The actress was:"}],

    [["src",2], "RLDashedSentence", {s: "The teacher helped struggling students who he encouraged to succeed without treating like idiots."},
               "Question",       {hasCorrect: 1, q: "What did the teacher do?"}],
    [["orc",2], "RLDashedSentence", {s: "The teacher helped struggling students who without treating like idiots he encouraged to succeed."},
               "Question",       {hasCorrect: 0, q: "What did the teacher do?"}],

    //
    // 10 self-paced-reading filler sentences.
    //

    ["f", "RLDashedSentence", {s: "The foreign spy that encoded the top-secret messages was given a new mission that required going to Japan."}],

    ["f", "RLDashedSentence", {s: "The receptionist that the real estate company just hired immediately familiarized herself with all the phone numbers of their clients."}],

    ["f", "RLDashedSentence", {s: "Only two specialized surgeons that work in the hospital could do this operation."}],

    ["f", "RLDashedSentence", {s: "The gangsters that the local police officers tracked for years were represented by an inexperienced lawyer."}],

    ["f", "RLDashedSentence", {s: "The woman that John had seen in the subway bought herself a pair of stunning shoes that cost a fortune."}],

    ["f", "RLDashedSentence", {s: "If the award-winning chef had entered this competition, he surely would have won first prize."}],

    ["f", "RLDashedSentence", {s: "If the organized secretary had filed the documents when she first received them, they would have been easy to find."}],

    ["f", "RLDashedSentence", {s: "If the homemade beer had been left to ferment more, it would have been drinkable."}],

    ["f", "RLDashedSentence", {s: "The cowboy that the bulls tried to trample injured himself getting off a horse."}],

    ["f", "RLDashedSentence", {s: "The patient that was admitted to the hospital last month still suffers severe pain in his left leg."}]
];
