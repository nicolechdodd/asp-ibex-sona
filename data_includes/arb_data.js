var shuffleSequence = seq("intro", "intro2", "setcounter", // shows intro pages & updates Latin Square immediately
                      sepWith("sep", // separate with sep defined default
                      seq("practice", rshuffle("src", "orc", "f"))), // all items that are NOT sep
                      "outro"); // collects comments (completion message displayed separately)

var practiceItemTypes = ["practice"];
var practiceItemMessage = "ممارسة"; // TODO fix - still in English

var pageTitle = "تجربة"; // Experiment
var showProgressBar = false;

var defaults = [
    "Separator", {
        transfer: 1000,
        normalMessage: "من فضلك انتظر الجملة التالية.", // Please wait for next sentence.
        errorMessage: "خطأ. من فضلك انتظر الجملة التالية." // Wrong. Please wait for next sentence.
    },
    "RLDashedSentence", {
        mode: "self-paced reading"
    },
    "Question", {
        as: ["لا", "نعم"], // shows up in correct order in experiment
        randomOrder: false,
        presentHorizontally: true
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueMessage: "اضغط هنا للاستمرار", // Click here to continue
        saveReactionTime: true
    }
];

var randomnumber = String(Math.floor(Math.random()*10001));
var rn = String("شكرا لمشاركتك! رمز الإكمال الخاص بك هو ASP" + randomnumber + ". يرجى العودة إلى Mechanical Turk وإدخال رمزك للحصول على جائزتك المالية.");
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
    ["practice", "RLDashedSentence", {s: "جرت الأم إلى الفضاء الخارجي برقم حمام السباحة"}],
    ["practice", "RLDashedSentence", {s: "بكت السمكة للشجرة بصوت مرتفع عبر طريق المشاة"},
                 "Question", {hasCorrect: 1, randomOrder: false, // 0 = True is correct, 1 = False is correct
                              q: "هل الطفل أيقظ الأم؟"}],

    //
    // Two "real" (i.e. non-filler) self-paced reading items.
    // There are two conditions.
    //

    [["src",1], "RLDashedSentence", {s: "البنت التي أيقظت الوالدة أزعجتها بشأن الرحلة إلى الشاطئ."},
               "Question",       {hasCorrect: 0, q: "هل الطفل أيقظ الأم؟"}],
    [["orc",1], "RLDashedSentence", {s: "البنت التي أيقظتها الوالدة أزعجتها بشأن الرحلة إلى الشاطئ."},
               "Question",       {hasCorrect: 0, q: "هل الأم أيقظت الطفل؟"}],

    [["src",2], "RLDashedSentence", {s: "سائق الحافلة الذي تبع الطفل تساءل عن موقع الفندق."},
               "Question",       {hasCorrect: 0, q: "هل اتبع سائق الحافلة الطفل؟"}],
    [["orc",2], "RLDashedSentence", {s: "سائق الحافلة الذي تبعه الطفل تساءل عن موقع الفندق."},
               "Question",       {hasCorrect: 0, q: "هل اتبع الطفل سائق الحافلة؟"}],

    [["src",4], "RLDashedSentence", {s: "القاضية التي خاطبت الشاهدة لاحظت محامي الدفاع."},
                "Question",       {hasCorrect: 0, q: "هل القاضي خاطب الشاهد؟"}],
    [["orc",4], "RLDashedSentence", {s: "القاضية التي خاطبتها الشاهدة لاحظت محامي الدفاع."},
                "Question",       {hasCorrect: 0, q: "هل الشاهد خاطب القاضي؟"}],

    [["src",5], "RLDashedSentence", {s: "المدير الذي زار الرئيس تذكر بعض الحقائق غير المريحة."},
                "Question",       {hasCorrect: 0, q: "هل قام المدير بزيارة الرئيس؟"}],
    [["orc",5], "RLDashedSentence", {s: "المدير الذي زاره الرئيس تذكر بعض الحقائق غير المريحة."},
                "Question",       {hasCorrect: 0, q: "هل قام الرئيس بزيارة المدير؟؟"}],

    [["src",6], "RLDashedSentence", {s: "الجارة التي لاحظت السمسارة اشترت المنزل القديم."},
                "Question",       {hasCorrect: 0, q: "هل لاحظ الجار سمسار العقارات؟"}],
    [["orc",6], "RLDashedSentence", {s: "الجارة التي لاحظتها السمسارة اشترت المنزل القديم."},
                "Question",       {hasCorrect: 0, q: "هل سمسار العقارات لاحظ الجار؟"}],

    [["src",7], "RLDashedSentence", {s: "الطيار الذي أخّر الطاقم الأرضي بقي على المدرج لفترة طويلة."},
                "Question",       {hasCorrect: 0, q: "هل قام الطيار بتأخير الطاقم الأرضي؟"}],
    [["orc",7], "RLDashedSentence", {s: "الطيار الذي أخّره الطاقم الأرضي بقي على المدرج لفترة طويلة."},
                "Question",       {hasCorrect: 0, q: "هل قام الطاقم الأرضي بتأخير الطيار؟"}],


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
