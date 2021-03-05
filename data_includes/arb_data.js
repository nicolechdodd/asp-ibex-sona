var shuffleSequence = seq("intro", "intro2", "intro3", "setcounter", // shows intro pages & updates Latin Square immediately
                      sepWith("sep", // separate with sep defined default
                      seq("practice", rshuffle("src", "orc", "f-hf", "f-lf"))), // all items that are NOT sep
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

var rn = String("شكرا لمشاركتك! رمز الإكمال الخاص بك هو " +
  '100D1459' + ". يرجى العودة إلى Prolific وإدخال رمزك للحصول على جائزتك المالية.");
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

    ["intro3", "Form", {
        html: { include: "intro3.html" },
    } ],

    ["outro", "Form", {
      html: { include: "outro.html" }
    } ],

    //
    // Practice items
    //

    ["practice", "RLDashedSentence", {s: "ذهب الرجل إلى السينما مع زوجته وأولاده."}],
    ["practice", "RLDashedSentence", {s: "شيماء انتقلت إلى بيت جديد لأن المطبخ في شقتها كان صغيراً جداً."},
                 "Question", {hasCorrect: 1, randomOrder: false, // 0 = No is correct, 1 = Yes is correct
                              q: "هل شيماء انتقلت إلى بيت جديد؟"}],

    //
    // Stimuli
    //

    [["src",1], "RLDashedSentence", {s: "البنت التي أيقظت الوالدة أزعجتها بشأن الرحلة إلى الشاطئ."},
               "Question",       {hasCorrect: 1, q: "هل البنت أيقظت الوالدة؟"}],
    [["orc",1], "RLDashedSentence", {s: "البنت التي أيقظتها الوالدة أزعجتها بشأن الرحلة إلى الشاطئ."},
               "Question",       {hasCorrect: 1, q: "هل الوالدة أيقظت البنت؟"}],

    [["src",2], "RLDashedSentence", {s: "سائق الحافلة الذي تبع الطفل تساءل عن موقع الفندق."},
               "Question",       {hasCorrect: 1, q: "هل سائق الحافلة تبع الطفل؟"}],
    [["orc",2], "RLDashedSentence", {s: "سائق الحافلة الذي تبعه الطفل تساءل عن موقع الفندق."},
               "Question",       {hasCorrect: 1, q: "هل الطفل تبع سائق الحافلة؟"}],

    [["src",4], "RLDashedSentence", {s: "القاضية التي خاطبت الشاهدة لاحظت محامي الدفاع."},
                "Question",       {hasCorrect: 1, q: "هل القاضية خاطبت الشاهدة؟"}],
    [["orc",4], "RLDashedSentence", {s: "القاضية التي خاطبتها الشاهدة لاحظت محامي الدفاع."},
                "Question",       {hasCorrect: 1, q: "هل الشاهدة خاطبت القاضية؟"}],

    [["src",5], "RLDashedSentence", {s: "المدير الذي زار الرئيس تذكر بعض الحقائق غير المريحة."},
                "Question",       {hasCorrect: 1, q: "هل المدير زار الرئيس؟"}],
    [["orc",5], "RLDashedSentence", {s: "المدير الذي زاره الرئيس تذكر بعض الحقائق غير المريحة."},
                "Question",       {hasCorrect: 1, q: "هل الرئيس زار المدير؟"}],

    [["src",6], "RLDashedSentence", {s: "الجارة التي لاحظت السمسارة اشترت المنزل القديم."},
                "Question",       {hasCorrect: 1, q: "هل الجارة لاحظت السمسارة؟"}],
    [["orc",6], "RLDashedSentence", {s: "الجارة التي لاحظتها السمسارة اشترت المنزل القديم."},
                "Question",       {hasCorrect: 1, q: "هل السمسارة لاحظت الجارة؟"}],

    [["src",7], "RLDashedSentence", {s: "الطيار الذي أخّر الطاقم الأرضي بقي على المدرج لفترة طويلة."},
                "Question",       {hasCorrect: 1, q: "هل الطيار أخّر الطاقم الأرضي؟"}],
    [["orc",7], "RLDashedSentence", {s: "الطيار الذي أخّره الطاقم الأرضي بقي على المدرج لفترة طويلة."},
                "Question",       {hasCorrect: 1, q: "هل الطاقم الأرضي أخّر الطيار؟"}],

    [["src",8], "RLDashedSentence", {s: "المتحدثة التي استضافت الاقتصادية توقعت سنة جيدة لهذه الصناعة."},
                "Question",       {hasCorrect: 0, q: "هل استقبل الخبير الاقتصادي المتحدث؟"}],
    [["orc",8], "RLDashedSentence", {s: "المتحدثة التي استضافتها الاقتصادية توقعت سنة جيدة لهذ الصناعة."},
                "Question",       {hasCorrect: 0, q: "هل استقبل المتحدث الخبير الاقتصادي؟"}],

    [["src",9], "RLDashedSentence", {s: "الجندي الذي أعجب المدرب هزم أعظم منافسيه."},
                "Question",       {hasCorrect: 0, q: "هل الاقتصادية استضافت المتحدثة؟"}],
    [["orc",9], "RLDashedSentence", {s: "الجندي الذي أعجبه المدرب هزم أعظم منافسيه."},
                "Question",       {hasCorrect: 0, q: "هل المتحدثة استضافت الاقتصادية؟"}],

    [["src",10], "RLDashedSentence", {s: "الزائر الذي قدّم الطالب مشى عبر الحرم الجامعي."},
                "Question",       {hasCorrect: 0, q: "هل الطالب قدّم الزائر؟"}],
    [["orc",10], "RLDashedSentence", {s: "الزائر الذي قدّمه الطالب مشى عبر الحرم الجامعي."},
                "Question",       {hasCorrect: 0, q: "هل الزائر قدّم الطالب؟"}],

    [["src",11], "RLDashedSentence", {s: "المصرفي الذي أغضب المحامي لعب التنس كل يوم سبت."},
                "Question",       {hasCorrect: 0, q: "هل المحامي أغضب المصرفي؟"}],
    [["orc",11], "RLDashedSentence", {s: "المصرفي الذي أغضبه المحامي لعب التنس كل يوم سبت."},
                "Question",       {hasCorrect: 0, q: "هل المصرفي أغضب المحامي؟"}],

    [["src",13], "RLDashedSentence", {s: "الطبيبة التي تجاهلت الممرضة قادت سيارة حمراء."},
                "Question",       {hasCorrect: 0, q: "هل الممرضة تجاهلت الطبيبة؟"}],
    [["orc",13], "RLDashedSentence", {s: "الطبيبة التي تجاهلتها الممرضة قادت سيارة حمراء."},
                "Question",       {hasCorrect: 0, q: "هل الطبيبة تجاهلت الممرضة؟"}],

    [["src",14], "RLDashedSentence", {s: "السجين الذي هاجم الحارس أثار الشغب."},
                "Question",       {hasCorrect: 1, q: "هل السجين أثار الشغب؟"}],
    [["orc",14], "RLDashedSentence", {s: "السجين الذي هاجمه الحارس أثار الشغب."},
                "Question",       {hasCorrect: 1, q: "هل السجين أثار الشغب؟"}],

    [["src",15], "RLDashedSentence", {s: "المتجول الذي تجاوز الصياد ضاع وكان يجب إنقاذه."},
                "Question",       {hasCorrect: 1, q: "هل المتجول ضاع؟"}],
    [["orc",15], "RLDashedSentence", {s: "المتجول الذي تجاوزه الصياد ضاع وكان يجب إنقاذه."},
                "Question",       {hasCorrect: 1, q: "هل المتجول ضاع؟"}],

    [["src",16], "RLDashedSentence", {s: "المستأجرة التي احتقرت المالكة اتصلت بالصحيفة لتقديم شكوى."},
                "Question",       {hasCorrect: 1, q: "هل المستأجرة اتصلت بالصحيفة؟"}],
    [["orc",16], "RLDashedSentence", {s: "المستأجرة التي احتقرتها المالكة اتصلت بالصحيفة لتقديم شكوى."},
                "Question",       {hasCorrect: 1, q: "هل المستأجرة اتصلت بالصحيفة؟"}],

    [["src",18], "RLDashedSentence", {s: "الأستاذة التي انتقدت الطالبة خجلت وابتعدت."},
                "Question",       {hasCorrect: 1, q: "هل الأستاذة خجلت؟"}],
    [["orc",18], "RLDashedSentence", {s: "الأستاذة التي انتقدتها الطالبة خجلت وابتعدت."},
                "Question",       {hasCorrect: 1, q: "هل الأستاذة خجلت؟"}],

    [["src",19], "RLDashedSentence", {s: "العميلة التي واجهت عالمة النفس هاجمتها في الليل."},
                "Question",       {hasCorrect: 0, q: "هل العميلة اتصلت بعالمة النفس في الليل؟"}],
    [["orc",19], "RLDashedSentence", {s: "العميلة التي واجهتها عالمة النفس هاجمتها في الليل."},
                "Question",       {hasCorrect: 0, q: "هل العميلة اتصلت بعالمة النفس في الليل؟"}],

    [["src",20], "RLDashedSentence", {s: "المؤرخة التي انتقدت مديرة المتحف غادرت المتحف فجأة."},
                "Question",       {hasCorrect: 0, q: "هل المؤرخة رسمت المتحف؟"}],
    [["orc",20], "RLDashedSentence", {s: "المؤرخة التي انتقدتها مديرة المتحف غادرت المتحف فجأة."},
                "Question",       {hasCorrect: 0, q: "هل المؤرخة رسمت المتحف؟"}],

    [["src",21], "RLDashedSentence", {s: "الممرضة التي عيّنتْ المساعدة درست في جامعة كامبريدج."},
                "Question",       {hasCorrect: 0, q: "هل الممرضة درست في المركز التجاري؟"}],
    [["orc",21], "RLDashedSentence", {s: "الممرضة التي عيّنتها المساعدة درست في جامعة كامبريدج."},
                "Question",       {hasCorrect: 0, q: "هل الممرضة درست في المركز التجاري؟"}],

    [["src",22], "RLDashedSentence", {s: "المهندس المعماري الذي أحب رجل الإطفاء سيطر على المحادثة بينما كانت المباراة على شاشة التلفزيون."},
                "Question",       {hasCorrect: 0, q: "هل المهندس المعماري سيطر في المطبخ؟"}],
    [["orc",22], "RLDashedSentence", {s: "المهندس المعماري الذي أحبه رجل الإطفاء سيطر على المحادثة بينما كانت المباراة على شاشة التلفزيون."},
                "Question",       {hasCorrect: 0, q: "هل المهندس المعماري سيطر في المطبخ؟"}],

    [["src",23], "RLDashedSentence", {s: "المصرفية التي امتدحت المحللة تسلّقت الجبل قبل أن يتساقط الثلج."},
                "Question",       {hasCorrect: 0, q: "هل المصرفية ذهبت إلى الشاطئ؟"}],
    [["orc",23], "RLDashedSentence", {s: "المصرفية التي امتدحتها المحللة تسلّقت الجبل قبل أن يتساقط الثلج."},
                "Question",       {hasCorrect: 0, q: "هل المصرفية ذهبت إلى الشاطئ؟"}],

    [["src",24], "RLDashedSentence", {s: "الشاعرة التي صادقت الكاتبة كتبت سيرة ذاتية بعد أن أصبحت صداقتهما معروفة جيداً."},
                "Question",       {hasCorrect: 1, q: "هل الشاعرة صادقت الكاتبة؟"}],
    [["orc",24], "RLDashedSentence", {s: "الشاعرة التي صادقتها الكاتبة كتبت سيرة ذاتية بعد أن أصبحت صداقتهما معروفة جيداً."},
                "Question",       {hasCorrect: 1, q: "هل الكاتبة صادقت الشاعرة؟"}],

    [["src",25], "RLDashedSentence", {s: "الخياط الذي وصف العميل عمِل في متجر صغير بالقرب من محطة الحافلات."},
                "Question",       {hasCorrect: 1, q: "هل الخياط وصف العميل؟"}],
    [["orc",25], "RLDashedSentence", {s: "الخياط الذي وصفه العميل عمِل في متجر صغير بالقرب من محطة الحافلات."},
                "Question",       {hasCorrect: 1, q: "هل العميل وصف الخياط؟"}],

    [["src",27], "RLDashedSentence", {s: "المدرب الذي انتقد الحكم تحدث علنا عن الحادثة بعد المباراة."},
                "Question",       {hasCorrect: 1, q: "هل المدرب انتقد الحكم؟"}],
    [["orc",27], "RLDashedSentence", {s: "المدرب الذي انتقده الحكم تحدث علنا عن الحادثة بعد المباراة."},
                "Question",       {hasCorrect: 1, q: "هل الحكم انتقد المدرب؟"}],

    [["src",28], "RLDashedSentence", {s: "المعيدة التي كرهت المعلمة قامت بتقليص قراءة الأسبوع."},
                "Question",       {hasCorrect: 1, q: "هل المعيدة كرهت المعلمة؟"}],
    [["orc",28], "RLDashedSentence", {s: "المعيدة التي كرهتها المعلمة قامت بتقليص قراءة الأسبوع."},
                "Question",       {hasCorrect: 1, q: "هل المعلمة كرهت المعيدة؟"}],

    [["src",29], "RLDashedSentence", {s: "الراقص الذي أحب الجمهور تجاهل بعض المبادئ الأساسية."},
                "Question",       {hasCorrect: 0, q: "هل الجمهور أحب الراقص؟"}],
    [["orc",29], "RLDashedSentence", {s: "الراقص الذي أحبه الجمهور تجاهل بعض المبادئ الأساسية."},
                "Question",       {hasCorrect: 0, q: "هل الراقص أحب الجمهور؟"}],

    [["src",30], "RLDashedSentence", {s: "الموظف الذي لاحظ رجل الإطفاء سارع عبر الحقول المفتوحة."},
                "Question",       {hasCorrect: 0, q: "هل رجل الإطفاء لاحظ الموظف؟"}],
    [["orc",30], "RLDashedSentence", {s: "الموظف الذي لاحظه رجل الإطفاء سارع عبر الحقول المفتوحة."},
                "Question",       {hasCorrect: 0, q: "هل الموظف لاحظ رجل الإطفاء؟"}],

    [["src",31], "RLDashedSentence", {s: "الفلاح الذي قابل الزبون رفع الدجاج من حظيرته."},
                "Question",       {hasCorrect: 0, q: "هل الزبون قابل الفلاح؟"}],
    [["orc",31], "RLDashedSentence", {s: "الفلاح الذي قابله الزبون رفع الدجاج من حظيرته."},
                "Question",       {hasCorrect: 0, q: "هل الفلاح قابل الزبون؟"}],

    [["src",32], "RLDashedSentence", {s: "عالم الرياضيات الذي زار رئيس مجلس الإدارة ابتكر حلاً لمشكلة معروفة."},
                "Question",       {hasCorrect: 0, q: "هل رئيس مجلس الإدارة زار عالم الرياضيات؟"}],
    [["orc",32], "RLDashedSentence", {s: "عالم الرياضيات الذي زاره رئيس مجلس الإدارة ابتكر حلاً لمشكلة معروفة."},
                "Question",       {hasCorrect: 0, q: "هل عالم الرياضيات زار رئيس مجلس الإدارة؟"}],

    [["src",33], "RLDashedSentence", {s: "الممثلة المشهورة التي زارت المُنظِّمَة اقترحت جائزة سنوية."},
                "Question",       {hasCorrect: 0, q: "هل المُنظِّمَة زارت الممثلة المشهورة؟"}],
    [["orc",33], "RLDashedSentence", {s: "الممثلة المشهورة التي زارتها المُنظِّمَة اقترحت جائزة سنوية."},
                "Question",       {hasCorrect: 0, q: "هل الممثلة المشهورة زارت المُنظِّمَة؟"}],

    [["src",34], "RLDashedSentence", {s: "الفتاة التي شاهدت الأم غيرت جزءا مهماً من القصة."},
                "Question",       {hasCorrect: 1, q: "هل الفتاة غيرت جزءا مهماً من القصة؟"}],
    [["orc",34], "RLDashedSentence", {s: "الفتاة التي شاهدتها الأم غيرت جزءا مهماً من القصة."},
                "Question",       {hasCorrect: 1, q: "هل الفتاة غيرت جزءا مهماً من القصة؟"}],

    [["src",35], "RLDashedSentence", {s: "الفلاح الذي استأجر المزارع قام بتكديس البذور في صفوف طويلة."},
                "Question",       {hasCorrect: 1, q: "هل الفلاح قام بتكديس البذور؟"}],
    [["orc",35], "RLDashedSentence", {s: "الفلاح الذي استأجره المزارع قام بتكديس البذور في صفوف طويلة."},
                "Question",       {hasCorrect: 1, q: "هل الفلاح قام بتكديس البذور؟"}],

    [["src",36], "RLDashedSentence", {s: "الجندي الذي ساعد المدني تسلق الصخرة الكبيرة التي سدّت الطريق."},
                "Question",       {hasCorrect: 1, q: "هل الجندي تسلق الصخرة الكبيرة؟"}],
    [["orc",36], "RLDashedSentence", {s: "الجندي الذي ساعده المدني تسلق الصخرة الكبيرة التي سدّت الطريق."},
                "Question",       {hasCorrect: 1, q: "هل الجندي تسلق الصخرة الكبيرة؟"}],

    [["src",37], "RLDashedSentence", {s: "المدرب الذي ساعد الفارس فرك جلد الحصان."},
                "Question",       {hasCorrect: 1, q: "هل المدرب فرك جلد الحصان؟"}],
    [["orc",37], "RLDashedSentence", {s: "المدرب الذي ساعده الفارس فرك جلد الحصان."},
                "Question",       {hasCorrect: 1, q: "هل المدرب فرك جلد الحصان؟"}],

    [["src",38], "RLDashedSentence", {s: "اللاعب الذي ضرب حارس المرمى وقّع عقداً جديداً."},
                "Question",       {hasCorrect: 1, q: "هل اللاعب وقّع عقداً جديداً؟"}],
    [["orc",38], "RLDashedSentence", {s: "اللاعب الذي ضربه حارس المرمى وقّع عقداً جديداً."},
                "Question",       {hasCorrect: 1, q: "هل اللاعب وقّع عقداً جديداً؟"}],

    [["src",40], "RLDashedSentence", {s: "الكاتبة التي أغضبت المحررة كتبت مقالا احتجاجيا."},
                "Question",       {hasCorrect: 1, q: "هل الكاتبة كتبت مقالا؟"}],
    [["orc",40], "RLDashedSentence", {s: "الكاتبة التي أغضبتها المحررة كتبت مقالا احتجاجيا."},
                "Question",       {hasCorrect: 1, q: "هل الكاتبة كتبت مقالا؟"}],

    [["src",41], "RLDashedSentence", {s: "السباك الذي ساعد الكهربائي تقاعد بعد عشرين عاما في العمل."},
                "Question",       {hasCorrect: 0, q: "هل السباك قام بسد الأنابيب؟"}],
    [["orc",41], "RLDashedSentence", {s: "السباك الذي ساعده الكهربائي تقاعد بعد عشرين عاما في العمل."},
                "Question",       {hasCorrect: 0, q: "هل السباك قام بسد الأنابيب؟"}],

    [["src",42], "RLDashedSentence", {s: "الصياد الذي رأى الناشط هرب إلى الغابة."},
                "Question",       {hasCorrect: 0, q: "هل الصياد أصاب الهدف؟"}],
    [["orc",42], "RLDashedSentence", {s: "الصياد الذي رآه الناشط هرب إلى الغابة."},
                "Question",       {hasCorrect: 0, q: "هل الصياد أصاب الهدف؟"}],

    [["src",43], "RLDashedSentence", {s: "الممثل الذي زار المخرج طالب بدور البطولة في الفيلم."},
                "Question",       {hasCorrect: 0, q: "هل الممثل وقع على التوقيع؟"}],
    [["orc",43], "RLDashedSentence", {s: "الممثل الذي زاره المخرج طالب بدور البطولة في الفيلم."},
                "Question",       {hasCorrect: 0, q: "هل الممثل وقع على التوقيع؟"}],

    [["src",44], "RLDashedSentence", {s: "القاضية التي تجاهلت الطبيبة شاهدت البرنامج عن تجار المخدرات الكولومبيين على الأخبار المسائية."},
                "Question",       {hasCorrect: 0, q: "هل القاضية ضربت المطرقة؟"}],
    [["orc",44], "RLDashedSentence", {s: "القاضية التي تجاهلتها الطبيبة شاهدت البرنامج عن تجار المخدرات الكولومبيين على الأخبار المسائية."},
                "Question",       {hasCorrect: 0, q: "هل القاضية ضربت المطرقة؟"}],

    [["src",45], "RLDashedSentence", {s: "العمة التي تسلي الفتاة قامت بصنع دمى ورقية من الصحيفة."},
                "Question",       {hasCorrect: 0, q: "هل العمة خبزت فطيرة؟"}],
    [["orc",45], "RLDashedSentence", {s: "العمة التي تسليها الفتاة قامت بصنع دمى ورقية من الصحيفة."},
                "Question",       {hasCorrect: 0, q: "هل العمة خبزت فطيرة؟"}],

    //
    // Filler
    //

    ["f-hf", "RLDashedSentence", {s: "قرر الزوجان تزيين بعض الغرف في بيتهم لأنهم شعروا بالحاجة إلى التجديد."},
            "Question",         {hasCorrect: 1, q: "هل قرر الزوجان تزيين بعض الغرف؟"}],

    ["f-hf", "RLDashedSentence", {s: "تائه على الطريق السريع المترب، قرر السائق التوقف في أول  فندق للحصول على الاتجاهات."},
            "Question",         {hasCorrect: 1, q: "هل توقف السائق للاتجاهات؟"}],

    ["f-hf", "RLDashedSentence", {s: "تم اختيار الطلاب الموهوبين لتلقي دروس إضافية في المدرسة المحلية خلال عطلات نهاية الأسبوع والأعياد."},
            "Question",         {hasCorrect: 1, q: "هل تلقى الطلاب الموهوبون دروساً إضافية؟"}],

    ["f-hf", "RLDashedSentence", {s: "كان جميع الأطفال مستمتعين تماماً بالمهرجين الذين يأتون مرة في السنة إلى السيرك في قريتهم."},
            "Question",         {hasCorrect: 1, q: "هل يأتي المهرجون مرة في السنة؟"}],

    ["f-hf", "RLDashedSentence", {s: "كانت المرأة لا تُعزى بعد وفاة صديقتها ولبست فستاناً اسود في الجنازة."},
            "Question",         {hasCorrect: 1, q: "هل المرأة لبست فستان؟"}],

    ["f-hf", "RLDashedSentence", {s: "استعداداً لرحلتها الفاخرة في عطلة نهاية الأسبوع في المنتجع الصحي، اشترت فاطمة لنفسها بعض البيجامات الساتان الجديدة من البوتيك."},
            "Question",         {hasCorrect: 1, q: "هل اشترت فاطمة بيجاما جديدة؟"}],

    ["f-hf", "RLDashedSentence", {s: "استمتع الطالب بالأدب وكتابة المقالات، وتمنى الذهاب إلى الجامعة لدراسة اللغة الإنجليزية."},
            "Question",         {hasCorrect: 1, q: "هل استمتع الطالب بكتابة المقالات؟"}],

    ["f-hf", "RLDashedSentence", {s: "الموظف تمنى أن يصبح أميناً للحيوانات الغريبة في الحديقة الطبيعية لأنه تمتع بخبرة واسعة."},
            "Question",         {hasCorrect: 1, q: "هل استمتع الطالب بكتابة المقالات؟"}],

    ["f-hf", "RLDashedSentence", {s: "الآن، اكتملت أعمال البناء، وكان الجميع متحمسين لافتتاح البناية الجديدة في وسط المدينة."},
            "Question",         {hasCorrect: 0, q: "هل اشتكى الجميع عن البانيه؟"}],

    ["f-hf", "RLDashedSentence", {s: "وقد مات العديد من السكان المحليين في المعركة، وأقام المجتمع نصباً تذكارياً في ذاكرتهم."},
            "Question",         {hasCorrect: 0, q: "هل شارك العديد من السكان المحليين في موكب؟"}],

    ["f-hf", "RLDashedSentence", {s: "عندما تقدمت اللاعبة ضد لاعب أفضل في التنس، كانت تتوقع دائماً أن تعود الكرة بشكل أسرع."},
            "Question",         {hasCorrect: 0, q: "هل حطمت اللاعبة مضربها؟"}],

    ["f-hf", "RLDashedSentence", {s: "استمتع الولد بلعب كرة القدم وقضى ساعات يركل الكرة في مواجهة الحائط وترتد إليه."},
            "Question",         {hasCorrect: 0, q: "هل استمتع الولد بلعب الشطرنج؟"}],

    ["f-hf", "RLDashedSentence", {s: "كانت مشكلة الماشية أنها كانت تتجول من حين لآخر في الحقل القريب."},
            "Question",         {hasCorrect: 0, q: "هل تجولت الماشية من منحدر؟"}],

    ["f-hf", "RLDashedSentence", {s: "عند عبور المستنقات، كان من الممكن أن تصبح محاصرين في مستنقع موحل إذا كانت هناك أمطار غزيرة."}], // this sentence was too hard to write a comp question for, so I skipped it

    ["f-hf", "RLDashedSentence", {s: "احتاج الطبيب رعاية طارئة من المستشفى بعد أن أحرق المبيض عينيه."},
            "Question",         {hasCorrect: 0, q: "هل احتاج الطبيب لمزيد من النوم؟"}],

    ["f-hf", "RLDashedSentence", {s: "مع تقدمه في السن، تدهور بصره وقام بزيارة طبيب العيون للحصول على نظارات جديدة."},
            "Question",         {hasCorrect: 0, q: "هل حصل على جهاز جديد القلب؟"}],

    ["f-hf", "RLDashedSentence", {s: "التقطت ورده ملابسها من الأرض ونظفت الحمام بسرعة قبل وصول الضيوف."}],

    ["f-hf", "RLDashedSentence", {s: "استلقت معلمة الحضانة على الأريكة ومعها بيتزا وفيلم بعد أن كانت تقف على قدميها طوال اليوم."}],

    ["f-hf", "RLDashedSentence", {s: "نفد الخباز أفكاره حول كعكة زفاف العروس، وكان غاضب."}],

    ["f-hf", "RLDashedSentence", {s: "اصيبت إيمان بالفزع لأن الخميرة نفدت منها ولن يرتفع عجين الخبز الذي كانت تصنعه على العشاء."}],

    ["f-hf", "RLDashedSentence", {s: "قبل الموعد الهام، قام محمود بتنظيف أسنانه حتى تأكد أنها نظيفة تماماً."}],

    ["f-hf", "RLDashedSentence", {s: "أراد أحمد أن يترك انطباعا جيدا في المقابلة، لذلك يلمع حذائه ويجعله لامعا قدر الإمكان."}],

    ["f-hf", "RLDashedSentence", {s: "كان من الممكن أن يقضيا أسبوعاً في القلعة، ولكن قطارهم كان يغادر، لذلك اسارعوا إلى المحطة."}],

    ["f-hf", "RLDashedSentence", {s: "الاستماع للتعذيب الذي تم في القلعة جعل السائحة شارده الذهن، لذلك تركت المجموعة السياحية لتستنشق الهواء النقي."}],

    ["f-hf", "RLDashedSentence", {s: "ترك طبيب الأسنان بالصدفة السن المخلوع ينزلق من ملاقطه في فم المريض لمفاجأة متبادلة."}],

    ["f-hf", "RLDashedSentence", {s: "عندما كافح الاستاذ من أجل الإلهام، سار في مكتبه وألقت لحيته بينما كان يامل في العثور على إجابات."}],

    ["f-hf", "RLDashedSentence", {s: "اتصل الرجل العجوز بالشرطة بعد أن  ألقوا  الأطفال الحجارة على شبابيكه ودمروها."}],

    ["f-hf", "RLDashedSentence", {s: "أحببت الأسرة الدفّاءة الخاصة بهم، ولكنهم كرهه الاضطرار تنظيف المدخنة السخانه كل شهر."}],

    ["f-hf", "RLDashedSentence", {s: "بما أن مريم  وصلت متأخره، اعتقدت أن كعكة عيد الميلاد نفذت، ولكن تزال هناك قطعة صغيرة في الصندوق."}],

    ["f-hf", "RLDashedSentence", {s: "أحب الزوج تناول البسكويت في السرير، وكان حريصاً على عدم إسقاط كسرة واحدة لأن زوجته ستكون غاضبة جداً."}],

    ["f-hf", "RLDashedSentence", {s: "بسبب الازدحام الشديد على الطرق، تم نقل معظم البضائع بالقطار كلما أمكن ذلك."}],

    ["f-hf", "RLDashedSentence", {s: "سافر اللاجئون على طول القناة بالاختباء في  بارجة بطيئة الحركة."}],

    ["f-hf", "RLDashedSentence", {s: "عندما كانت المرأة بعيدة في إجازة، رتبت أن صديقتها تأتي وتسقي جميع نباتاتها."}],

    ["f-hf", "RLDashedSentence", {s: "معظم الصور من هولندا كانت عن متاحف وطواحين الهواء والحدائق المليئة بأزهار التوليب."}],

    ["f-hf", "RLDashedSentence", {s: "كانت رحلة الأولاد في عطلة نهاية الأسبوع طريقة جيدة لتعليمهم كيفية إقامة معسكر في الغابة."}],

    ["f-hf", "RLDashedSentence", {s: "سقطت طائرتهم بعيداً عن أي قرية، وكان عليهم البقاء على قيد الحياة في الغابة لحين النقاظ."}],

    ["f-hf", "RLDashedSentence", {s: "في الحفلة الموسيقية لفرقتها المفضلة، اندفعت المعجبة إلى الأمام وكانت قريبة جداً لدرجة أنها كادت أن تلمس المغنية."}],

    ["f-hf", "RLDashedSentence", {s: "بعد تسيرب  إلى الصحافة عن ديون الشركة، فقد الرئيس وظيفته."}],

    ["f-hf", "RLDashedSentence", {s: "بعد الحلوى، طلبوا بعض القهوة وأخذوها إلى البار حتى يتمكن آدم تدخين سيجارة."}],

    ["f-hf", "RLDashedSentence", {s: "لأنهم كانوا في إجازة في باريس، أنهى الزوجان وجبتهما الفاخرة مع القهوه."}],

    ["f-hf", "RLDashedSentence", {s: "رفض مدير البنك منح العميل قرضاً لأنه لم يحضر مستنداً صالحاً لتحديد الهوية."}],

    ["f-hf", "RLDashedSentence", {s: "كان المهاجر متكدآ أنه سيتم ترحيله بعد القبض عليه بجواز سفر مزور من قبل ضباط الجمارك."}],

    ["f-hf", "RLDashedSentence", {s: "أقام النجم وأصدقاء بحفله ضخمة للاحتفال بعيد ميلاده الخمسين."}],

    ["f-hf", "RLDashedSentence", {s: "بعد الحرب، من أجل الحفاظ على النظام، كان للقوات البريطانية وجود مرئي كقوات حفظ السلام."}],

    ["f-hf", "RLDashedSentence", {s: "كانت المُتَسابِقه في آخر ميل من ماراثونها وأخذت زجاجة ماء من المتفرج وشربتها."}],

    ["f-hf", "RLDashedSentence", {s: "كافح لاعب الرغبي وسط الزحمة في البار وهو يحمل أكواباً من البيرة وكيساً من رقائق البطاطس."}],

    ["f-hf", "RLDashedSentence", {s: "نشأ عمر ليكون لطيفاً مع الجميع في حياته وكان بلا شك أجمل شخص قابلته أيه على الإطلاق."}],

    ["f-hf", "RLDashedSentence", {s: "أوقف الضيف الجرسون التالي الذي رآه واشتكى من أن فاتح للشهية لم تصل بعد."}],

    ["f-hf", "RLDashedSentence", {s: "عندما احتاج الرجل إلى ملاذ من ضغوط الحياة اليومية، كان يذهب إلى الكنيسة ليجلس بمفرده ويفكر."}],

    ["f-hf", "RLDashedSentence", {s: "تم تحذير الأطفال من إلقاء الحجارة واللعب في المحجر المهجور حيث يمكن أن يصابوا بجروح خطيرة."}],

    ["f-hf", "RLDashedSentence", {s: "ترك العمال رئيسهم والموظف الساخط ليتجادلوا على انفراد."}],

    ["f-hf", "RLDashedSentence", {s: "كانوا يعلمون أن المنطقة الأخرى بها المزيد من الزيت، لكن رؤسائهم لم يسمحوا لهم بالحفر حتى تنتهي المهمة الحالية."}],

    ["f-hf", "RLDashedSentence", {s: "في المدرسة، استمتع الصبي بالرسم بضربات فرشاة جامحة وغطى كل شبر من ورقته بمسحات غير مرتبة."}],

    ["f-hf", "RLDashedSentence", {s: "كان الصوت الصادر من البيت المجاور شنيعاً، ولم يتمكن أحد من النوم بسبب الموسيقى التي استمرت طوال الليل."}],

    ["f-hf", "RLDashedSentence", {s: "بمجرد سماع صوت صفارة سيارة الإسعاف، تحركت السيارة إلى الجانب."}],

    ["f-hf", "RLDashedSentence", {s: "تعرض الطالب للإجهاد بسبب تعطل جهاز كمبيوتره قبل أن يتمكن من إرسال الدورات الدراسية إلى معلمه."}],

    ["f-hf", "RLDashedSentence", {s: "كانت الصحفية تنتهي من كتابة التقرير عندما سكبت شايها وباليت لوحة مفاتيحها."}],

    ["f-hf", "RLDashedSentence", {s: "تحدث الزوج والزوجة قبل مواجهة ابنهما عن مشاجرة في المدرسة."}],

    ["f-hf", "RLDashedSentence", {s: "لم يكن لدى المرأة أطفال، لذا اشترت ألعاباً لبنات أخيها وأبناء إخوتها."}],

    ["f-lf", "RLDashedSentence", {s: "جاءت العاصفة بشكل غير متوقع، وكان لابد من شد  المشمع لتوفير لحاف للجميع."},
            "Question",         {hasCorrect: 1, q: "هل يوفر مشمع لحافاً للجميع؟"}],

    ["f-lf", "RLDashedSentence", {s: "جاءت العاصفة بشكل غير متوقع، وكان لابد من شد  المشمع لتوفير لحاف للجميع."},
            "Question",         {hasCorrect: 1, q: "هل قاموا بشراء غطاء وملاءات جديدة؟"}],

    ["f-lf", "RLDashedSentence", {s: "لم يُسمح للسائح بدخول النمسا لمشاهدة فريق كرة القدم المفضل لديه لأنه مجرم معروف ومثير للمشاكل."},
            "Question",         {hasCorrect: 0, q: "هل دخل السائح النمسا؟"}],

    ["f-lf", "RLDashedSentence", {s: "حصلت امل على شهادة في المحاسبة، وتأمل أن تصبح طبيبة وتعيش في لندن."},
            "Question",         {hasCorrect: 0, q: "هل كانت امل تأمل أن تصبح معلمة؟"}],

    ["f-lf", "RLDashedSentence", {s: "عندما قامت بتكديس كل ملابسها في الغسالة، تجاهلت حقيقة أنها يمكن أن تنفجر لأنها تجاوظت سعتها."},
            "Question",         {hasCorrect: 0, q: "هل هي تجاوظت سلة المهملات؟"}],

    ["f-lf", "RLDashedSentence", {s: "اسرع الجيولوجيون إلى الابتعاد عن البركان لأن قياساتهم تشير إلى أنه قد ينكسر في أي لحظة."}],

    ["f-lf", "RLDashedSentence", {s: "في حديقة الحيوانات، كان الأطفال يتطلعون إلى رؤية الزرافة والنزهة."}],

    ["f-lf", "RLDashedSentence", {s: "أراد جميع الشبان الالتحاق بالجيش، ولكن لحين وصول لسن الالتحاق، تطوعوا  في القوات المحلية."}],

    ["f-lf", "RLDashedSentence", {s: "كان الصبي يواجه مشكلة في واجباته، وطلب من عمه الذي كان سباكاً مساعدته في المهمة."}],

    ["f-lf", "RLDashedSentence", {s: "تعطلت غلاية المرأة فجأة، لكن لحسن الحظ كان والد جارها مدرساً وعرض عليها المساعدة."}],

    ["f-lf", "RLDashedSentence", {s: "أحب الطفل القصة قال والده عن رعاة البقر وجروه الأمين ومغامرات لديهم معا."}],

    ["f-lf", "RLDashedSentence", {s: "كانت الفتاة تتمنى حيواناً أليفاً في كل عيد الميلاد، وكان قلبها يقفز عندما رأت حصاناً جميلاً في الخارج ينتظر في الحظيرة."}],

    ["f-lf", "RLDashedSentence", {s: "أثناء جلوسه في الخارج في حفل شوائه، سُكر جورج لدرجة أنه كاد يسقط من فناء منزله وكان محرجاً للغاية."}],

    ["f-lf", "RLDashedSentence", {s: "كطفل في الصيف، الصبي قضى أيامه يلعب في الحديقة وقضى الليالي على كرسي جده يقرأ القصص المصورة."}],

    ["f-lf", "RLDashedSentence", {s: "كان من الصعب ترتيب الطاولات في المقهى لأن بعضها مستطيل والبعض الآخر مطلي بالكروم، كما أنها تختلف في الارتفاع."}],

    ["f-lf", "RLDashedSentence", {s: "أحب المستأجرون شكل غرفة نومهم الجديدة لأن التركيبات كانت مربعة وتتناسب مع التصميم الحديث للمنزل."}],

    ["f-lf", "RLDashedSentence", {s: "كانت مطاردة الموطن الرئيسي المشتبه به في السرقات سببت غضباً شعبياً عارما."}],

    ["f-lf", "RLDashedSentence", {s: "نصح السكان المحليون بإغلاق جميع الأبواب وخاصة شبابيكهم حيث وردت تقارير عن القتل في المدينة."}],

    ["f-lf", "RLDashedSentence", {s: "لم يكون الأطفال في المنزل، وكان آباؤهم يأملون أن يكونوا في المنزل عند غروب الشمس لأنهم كانوا قلقين."}],

    ["f-lf", "RLDashedSentence", {s: "العيش على الساحل يعني أنه يمكن للزوجين الاستمتاع بعشاء جميل قبل الذهاب في نزهة على طول الشاطئ."}]
];
