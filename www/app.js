/* taamulat fi al-din wal-hayat — REFLECTIONS ON RELIGION & LIFE — app.js v1.0 */
/* Based on "Ta'ammulat fi al-Din wal-Hayat" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'تأملات في الدين والحياة',
    splashSub: 'تأملات إيمانية للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة آل عمران ١٩١',
    tabHome: 'الرئيسية', tabCards: 'التأملات', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    cardsTitle: 'تأملات في الدين والحياة',
    cardsDesc: '١٥ تأملاً من كتاب الشيخ محمد الغزالي — كل تأمل بآية وحديث وتطبيق عملي',
    quizTitle: '🏆 من سيصبح متأملاً؟',
    quizDesc: 'اختبر معلوماتك عن التأملات الإيمانية — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي التأملية',
    progressDesc: 'تقدمك وإنجازاتك في رحلة التأمل',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية التأمل والتدبر',
    dailyLabel: '✨ تأمل اليوم',
    searchPlaceholder: 'ابحث في التأملات...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحديث',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ تأملاً إيمانياً من كتاب تأملات في الدين والحياة',
      'مسابقة "من سيصبح متأملاً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Reflections on Religion & Life',
    splashSub: 'Faith reflections for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al Imran 3:191',
    tabHome: 'Home', tabCards: 'Reflections', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    cardsTitle: 'Reflections on Religion & Life',
    cardsDesc: '15 reflections from Sheikh al-Ghazali — each with a verse, hadith, and practical application',
    quizTitle: '🏆 Who Wants to Be a Thinker?',
    quizDesc: 'Test your knowledge of faith reflections — 4 choices per question',
    progressTitle: 'My Reflection Journey',
    progressDesc: 'Your progress and achievements in the reflection journey',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Reflection',
    dailyLabel: "✨ Today's Reflection",
    searchPlaceholder: 'Search reflections...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Hadith',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 faith reflections from Reflections on Religion & Life',
      '"Who Wants to Be a Thinker?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Reflexions sur la Religion et la Vie',
    splashSub: 'Reflexions de foi pour les jeunes',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al Imran 3:191',
    tabHome: 'Accueil', tabCards: 'Reflexions', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    cardsTitle: 'Reflexions sur la Religion et la Vie',
    cardsDesc: '15 reflexions du livre du Sheikh al-Ghazali — chacune avec un verset, un hadith et une application pratique',
    quizTitle: '🏆 Qui Veut Devenir Penseur ?',
    quizDesc: 'Testez vos connaissances sur les reflexions de foi — 4 choix par question',
    progressTitle: 'Mon Parcours de Reflexion',
    progressDesc: 'Vos progres et realisations dans le parcours de reflexion',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas de Reflexion',
    dailyLabel: '✨ Reflexion du Jour',
    searchPlaceholder: 'Rechercher les reflexions...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Hadith',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 reflexions de foi du livre Reflexions sur la Religion et la Vie',
      'Quiz "Qui Veut Devenir Penseur ?" avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 REFLECTION CARDS DATA ═══════════════
const CARDS = [
  {
    id:1, emoji:'🌟',
    ar:{title:'الغاية من الحياة',desc:'تأملات الغزالي في الدين والحياة مدرسة للتفكر العميق. يربط بين آيات الكون وآيات القرآن ليخرج المسلم من السطحية إلى عمق الإيمان الحي. خُلقنا لنعبد الله ونعمر الأرض — والحياة اختبار عظيم لا عبث.',verse:'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ',verseRef:'الذاريات ٥٦',hadith:'كن في الدنيا كأنك غريب أو عابر سبيل — رواه البخاري',action:'اسأل نفسك اليوم: لماذا أنا هنا؟ واكتب هدفاً واحداً يقربك من الله',young:'هل تعرف لماذا خلقنا الله؟ لنعبده ونكون أشخاصاً طيبين! كل يوم فرصة جديدة لفعل الخير 🌟'},
    en:{title:'Purpose of Life',desc:'Al-Ghazali reflects in "Reflections on Religion and Life": We were created to worship God and build the earth. Life is not random but a great test. Every moment is an opportunity to draw closer to God and do good. Whoever neglects this truth wastes their life on trivialities.',verse:'And I did not create the jinn and mankind except to worship Me',verseRef:'Adh-Dhariyat 56',hadith:'Be in this world as though you were a stranger or a traveler — Bukhari',action:'Ask yourself today: why am I here? Write one goal that brings you closer to God',young:'Do you know why God created us? To worship Him and be good people! Every day is a new chance to do good 🌟'},
    fr:{title:'Le But de la Vie',desc:'Al-Ghazali médite dans "Réflexions sur la Religion et la Vie": Nous avons ete crees pour adorer Dieu et construire la terre. La vie est un grand test. Chaque moment est une occasion de se rapprocher de Dieu et de faire le bien.',verse:"Je n'ai cree les djinns et les humains que pour qu'ils M'adorent",verseRef:'Adh-Dhariyat 56',hadith:'Sois dans ce monde comme si tu etais un etranger ou un voyageur — Bukhari',action:"Demandez-vous aujourd'hui : pourquoi suis-je ici ? Ecrivez un objectif qui vous rapproche de Dieu",young:'Sais-tu pourquoi Dieu nous a crees ? Pour L\'adorer et etre de bonnes personnes ! Chaque jour est une nouvelle chance 🌟'}
  },
  {
    id:2, emoji:'🕯️',
    ar:{title:'الموت والآخرة',desc:'يتأمل الغزالي في "تأملات في الدين والحياة": الموت ليس نهاية بل بداية حياة أبدية. من تذكر الموت أحسن عمله وقلّ طمعه. الدنيا مزرعة الآخرة — ما تزرعه اليوم تحصده غداً.',verse:'كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ وَإِنَّمَا تُوَفَّوْنَ أُجُورَكُمْ يَوْمَ الْقِيَامَةِ',verseRef:'آل عمران ١٨٥',hadith:'أكثروا ذكر هادم اللذات — رواه الترمذي',action:'تذكر أن كل يوم قد يكون الأخير — فأحسن عملك وسامح من أخطأ في حقك',young:'الحياة مثل الاختبار — نعمل خيراً هنا لنفوز بالجنة هناك! كل عمل طيب يُكتب لك 🕯️'},
    en:{title:'Death and the Afterlife',desc:'Al-Ghazali reflects in "Reflections on Religion and Life": Death is not an end but the beginning of eternal life. Whoever remembers death improves their deeds and reduces their greed. This world is the farm of the hereafter — what you plant today you harvest tomorrow.',verse:'Every soul will taste death, and you will only be given your full reward on the Day of Resurrection',verseRef:'Al Imran 185',hadith:'Remember often the destroyer of pleasures — Tirmidhi',action:'Remember that any day could be your last — so do your best and forgive those who wronged you',young:'Life is like a test — we do good here to win Paradise there! Every good deed is written for you 🕯️'},
    fr:{title:'La Mort et l\'Au-dela',desc:'Al-Ghazali médite: La mort n\'est pas une fin mais le debut de la vie eternelle. Celui qui se souvient de la mort ameliore ses actes. Ce monde est la ferme de l\'au-dela.',verse:'Toute ame goutera la mort, et vous ne recevrez vos pleines recompenses que le Jour de la Resurrection',verseRef:'Al Imran 185',hadith:'Rappelez-vous souvent le destructeur des plaisirs — Tirmidhi',action:'Rappelez-vous que chaque jour pourrait etre le dernier — faites de votre mieux et pardonnez',young:'La vie est comme un examen — on fait le bien ici pour gagner le Paradis ! Chaque bonne action est ecrite 🕯️'}
  },
  {
    id:3, emoji:'😊',
    ar:{title:'السعادة الحقيقية',desc:'يتأمل الغزالي في "تأملات في الدين والحياة": السعادة ليست في المال والشهرة بل في راحة القلب والضمير. من عرف الله وجد السعادة في أبسط الأشياء. القلب لا يطمئن إلا بذكر الله.',verse:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',verseRef:'الرعد ٢٨',hadith:'ليس الغنى عن كثرة العرض ولكن الغنى غنى النفس — متفق عليه',action:'اجلس خمس دقائق اليوم في هدوء واذكر الله — ستشعر بسكينة عجيبة',young:'السعادة الحقيقية ليست في الألعاب والحلوى — بل في قلب راضٍ يذكر الله ويحب الخير 😊'},
    en:{title:'True Happiness',desc:'Al-Ghazali reflects in "Reflections on Religion and Life": Happiness is not in money and fame but in peace of heart and conscience. Whoever knows God finds happiness in the simplest things. The heart finds no rest except in the remembrance of God.',verse:'Verily, in the remembrance of Allah do hearts find rest',verseRef:'Ar-Ra\'d 28',hadith:'Richness is not about having many possessions, but richness is self-contentment — Agreed upon',action:'Sit for five minutes today in quiet and remember God — you will feel an amazing tranquility',young:'Real happiness is not in toys and candy — it is in a peaceful heart that remembers Allah and loves goodness 😊'},
    fr:{title:'Le Vrai Bonheur',desc:'Al-Ghazali médite dans "Réflexions sur la Religion et la Vie": Le bonheur n\'est pas dans l\'argent et la gloire mais dans la paix du coeur et de la conscience. Celui qui connait Dieu trouve le bonheur dans les choses les plus simples.',verse:'N\'est-ce pas par le rappel d\'Allah que les coeurs se tranquillisent',verseRef:'Ar-Ra\'d 28',hadith:'La richesse ne vient pas de l\'abondance des biens, mais la vraie richesse est celle de l\'ame — Unanimement reconnu',action:'Asseyez-vous cinq minutes aujourd\'hui en silence et rappelez-vous Dieu',young:'Le vrai bonheur n\'est pas dans les jouets — c\'est dans un coeur en paix qui se souvient d\'Allah 😊'}
  },
  {
    id:4, emoji:'🌧️',
    ar:{title:'الابتلاء والحكمة',desc:'يتأمل الغزالي في "تأملات في الدين والحياة": المصائب ليست عقوبة دائماً بل قد تكون رحمة مقنّعة. الله يبتلي من يحب ليرفع درجته. الشدائد تصقل النفس كما تصقل النار الذهب.',verse:'وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ وَنَقْصٍ مِنَ الْأَمْوَالِ وَالْأَنْفُسِ وَالثَّمَرَاتِ وَبَشِّرِ الصَّابِرِينَ',verseRef:'البقرة ١٥٥',hadith:'عجباً لأمر المؤمن إن أمره كله خير — رواه مسلم',action:'عندما تواجه صعوبة اليوم، قل: لعل فيها خيراً لا أراه — وكن صبوراً',young:'حتى الأيام الصعبة فيها خير! مثل المطر — يبدو مزعجاً لكنه يسقي الزهور والأشجار 🌧️'},
    en:{title:'Suffering and Wisdom',desc:'Al-Ghazali reflects in "Reflections on Religion and Life": Hardships are not always punishment but can be a disguised mercy. God tests those He loves to raise their status. Difficulties refine the soul just as fire refines gold.',verse:'And We will surely test you with something of fear, hunger, loss of wealth, lives and fruits — but give good tidings to the patient',verseRef:'Al-Baqarah 155',hadith:'How wonderful is the affair of the believer, for all of it is good — Muslim',action:'When you face a difficulty today, say: perhaps there is good in it I cannot see — and be patient',young:'Even hard days have good in them! Like rain — it seems annoying but it waters flowers and trees 🌧️'},
    fr:{title:'L\'Epreuve et la Sagesse',desc:'Al-Ghazali médite: Les difficultes ne sont pas toujours une punition mais peuvent etre une misericorde deguisee. Dieu eprouve ceux qu\'Il aime pour elever leur rang.',verse:'Nous vous eprouverons par un peu de peur, de faim, de perte de biens, de vies et de fruits — annoncez la bonne nouvelle aux patients',verseRef:'Al-Baqarah 155',hadith:'Comme l\'affaire du croyant est merveilleuse, car tout est bon pour lui — Muslim',action:'Quand vous faites face a une difficulte, dites : peut-etre y a-t-il du bien que je ne vois pas',young:'Meme les jours difficiles ont du bon ! Comme la pluie — elle semble ennuyeuse mais elle arrose les fleurs 🌧️'}
  },
  {
    id:5, emoji:'🌿',
    ar:{title:'الطبيعة آية',desc:'يتأمل الغزالي في "تأملات في الدين والحياة": كل شيء في الكون يدل على عظمة الخالق. الجبال والبحار والنجوم والأزهار كلها تسبح بحمد الله. من تأمل في الطبيعة ازداد إيماناً.',verse:'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ',verseRef:'آل عمران ١٩٠',hadith:'تفكروا في آلاء الله ولا تفكروا في ذاته — رواه الطبراني',action:'اخرج اليوم وانظر إلى السماء والأشجار — وقل: سبحان الله العظيم',young:'انظر إلى السماء والأشجار والبحر — كلها تقول: سبحان الله! الطبيعة كتاب مفتوح يحكي عن عظمة الله 🌿'},
    en:{title:'Nature as a Sign',desc:'Al-Ghazali reflects in "Reflections on Religion and Life": Everything in the universe points to the greatness of the Creator. Mountains, seas, stars, and flowers all glorify God. Whoever contemplates nature increases in faith.',verse:'Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding',verseRef:'Al Imran 190',hadith:'Reflect on the creations of God, and do not reflect on His essence — Tabarani',action:'Go outside today and look at the sky and trees — and say: Glory be to God the Magnificent',young:'Look at the sky, trees, and sea — they all say: Glory be to Allah! Nature is an open book about God\'s greatness 🌿'},
    fr:{title:'La Nature comme Signe',desc:'Al-Ghazali médite dans "Réflexions sur la Religion et la Vie": Tout dans l\'univers pointe vers la grandeur du Createur. Les montagnes, les mers, les etoiles et les fleurs glorifient toutes Dieu.',verse:'Dans la creation des cieux et de la terre et l\'alternance de la nuit et du jour, il y a des signes pour les doues d\'intelligence',verseRef:'Al Imran 190',hadith:'Reflechissez aux creations de Dieu, et ne reflechissez pas a Son essence — Tabarani',action:'Sortez aujourd\'hui et regardez le ciel et les arbres — dites : Gloire a Dieu le Magnifique',young:'Regarde le ciel, les arbres et la mer — ils disent tous : Gloire a Allah ! La nature est un livre ouvert 🌿'}
  },
  {
    id:6, emoji:'🕌',
    ar:{title:'معنى العبادة',desc:'يتأمل الغزالي في "تأملات في الدين والحياة": العبادة ليست صلاة وصياماً فقط بل هي كل عمل صالح يُقصد به وجه الله. الابتسامة عبادة، والعمل الصادق عبادة، وبر الوالدين عبادة. الحياة كلها يمكن أن تكون عبادة.',verse:'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',verseRef:'الأنعام ١٦٢',hadith:'إن الله يحب إذا عمل أحدكم عملاً أن يتقنه — رواه البيهقي',action:'حوّل عملاً عادياً اليوم إلى عبادة — انوِ الخير فيه واتقنه لوجه الله',young:'كل شيء طيب تفعله هو عبادة! الابتسامة عبادة، مساعدة ماما عبادة، حتى الدراسة عبادة 🕌'},
    en:{title:'Meaning of Worship',desc:'Al-Ghazali reflects in "Reflections on Religion and Life": Worship is not just prayer and fasting but every good deed intended for God. A smile is worship, honest work is worship, honoring parents is worship. All of life can be worship.',verse:'Say: Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds',verseRef:'Al-An\'am 162',hadith:'God loves that when any of you does a task, they perfect it — Bayhaqi',action:'Turn an ordinary task today into worship — intend good in it and perfect it for the sake of God',young:'Every good thing you do is worship! Smiling is worship, helping mom is worship, even studying is worship 🕌'},
    fr:{title:'Le Sens de l\'Adoration',desc:'Al-Ghazali médite: L\'adoration n\'est pas seulement la priere et le jeune mais toute bonne action destinee a Dieu. Un sourire est une adoration, un travail honnete est une adoration.',verse:'Dis : Ma priere, mes sacrifices, ma vie et ma mort appartiennent a Allah, Seigneur des mondes',verseRef:'Al-An\'am 162',hadith:'Dieu aime que lorsque l\'un de vous fait une tache, il la perfectionne — Bayhaqi',action:'Transformez une tache ordinaire aujourd\'hui en adoration — ayez l\'intention du bien et perfectionnez-la',young:'Tout ce que tu fais de bien est une adoration ! Sourire, aider maman, meme etudier, c\'est de l\'adoration 🕌'}
  },
  {
    id:7, emoji:'🌻',
    ar:{title:'الشكر والامتنان',desc:'يتأمل الغزالي: الشكر مفتاح الزيادة والبركة. من شكر الله على نعمه زاده الله. والشكر ليس بالقول فقط بل بالعمل — استعمال النعم في طاعة الله ونفع الخلق.',verse:'لَئِنْ شَكَرْتُمْ لَأَزِيدَنَّكُمْ',verseRef:'إبراهيم ٧',hadith:'من لا يشكر الناس لا يشكر الله — رواه الترمذي',action:'اكتب خمس نعم في حياتك الآن وقل الحمد لله على كل واحدة منها',young:'قل الحمد لله كل يوم! عندك عينان ترى بهما، ويدان تلعب بهما، وأهل يحبونك — نعم كثيرة! 🌻'},
    en:{title:'Gratitude',desc:'Al-Ghazali reflects: Gratitude is the key to increase and blessings. Whoever thanks God for His blessings, God increases them. Gratitude is not just words but actions — using blessings to obey God and benefit creation.',verse:'If you are grateful, I will surely increase you',verseRef:'Ibrahim 7',hadith:'Whoever does not thank people does not thank God — Tirmidhi',action:'Write five blessings in your life now and say Alhamdulillah for each one of them',young:'Say Alhamdulillah every day! You have two eyes to see, two hands to play, and a family who loves you — so many blessings! 🌻'},
    fr:{title:'La Gratitude',desc:'Al-Ghazali médite dans "Réflexions sur la Religion et la Vie": La gratitude est la cle de l\'augmentation et des benedictions. Celui qui remercie Dieu pour Ses bienfaits, Dieu les augmente. La gratitude n\'est pas seulement des mots mais des actions.',verse:'Si vous etes reconnaissants, Je vous augmenterai certainement',verseRef:'Ibrahim 7',hadith:'Celui qui ne remercie pas les gens ne remercie pas Dieu — Tirmidhi',action:'Ecrivez cinq bienfaits dans votre vie maintenant et dites Alhamdulillah pour chacun',young:'Dis Alhamdulillah chaque jour ! Tu as des yeux pour voir, des mains pour jouer, et une famille qui t\'aime ! 🌻'}
  },
  {
    id:8, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'الروابط الأسرية',desc:'يتأمل الغزالي: الأسرة نواة المجتمع وحصنه. بر الوالدين من أعظم العبادات وصلة الرحم من أهم الواجبات. المجتمع القوي يبدأ من بيت سعيد.',verse:'وَقَضَى رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا',verseRef:'الإسراء ٢٣',hadith:'من أحب أن يُبسط له في رزقه ويُنسأ له في أثره فليصل رحمه — متفق عليه',action:'اتصل بأحد أقاربك اليوم واسأل عن حاله — أو قدم خدمة لوالديك',young:'أحبّ عائلتك! ساعد ماما وبابا، والعب مع إخوتك، وزُر جدك وجدتك — هذا يفرح الله 👨‍👩‍👧‍👦'},
    en:{title:'Family Bonds',desc:'Al-Ghazali reflects: The family is the nucleus and fortress of society. Honoring parents is among the greatest acts of worship and maintaining family ties is among the most important duties. A strong society starts with a happy home.',verse:'And your Lord has decreed that you worship none but Him, and that you be dutiful to your parents',verseRef:'Al-Isra 23',hadith:'Whoever loves to have their provision expanded and life extended, let them maintain family ties — Agreed upon',action:'Call a relative today and ask how they are — or do a service for your parents',young:'Love your family! Help mom and dad, play with your siblings, and visit grandma and grandpa — this pleases Allah 👨‍👩‍👧‍👦'},
    fr:{title:'Les Liens Familiaux',desc:'Al-Ghazali médite dans "Réflexions sur la Religion et la Vie": La famille est le noyau et la forteresse de la societe. Honorer les parents est parmi les plus grands actes d\'adoration. Une societe forte commence par un foyer heureux.',verse:'Et ton Seigneur a decrete que vous n\'adoriez que Lui et que vous soyez bons envers vos parents',verseRef:'Al-Isra 23',hadith:'Celui qui aime que sa subsistance soit elargie, qu\'il entretienne les liens de parente — Unanimement reconnu',action:'Appelez un proche aujourd\'hui et demandez de ses nouvelles — ou rendez service a vos parents',young:'Aime ta famille ! Aide maman et papa, joue avec tes freres et soeurs, et visite tes grands-parents 👨‍👩‍👧‍👦'}
  },
  {
    id:9, emoji:'📚',
    ar:{title:'طلب العلم',desc:'العلم نور والجهل ظلام. المسلم يطلب العلم من المهد إلى اللحد. ليس العلم حفظ المعلومات فقط بل فهمها وتطبيقها في الحياة.',verse:'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ',verseRef:'الزمر ٩',hadith:'من سلك طريقاً يلتمس فيه علماً سهل الله له طريقاً إلى الجنة — رواه مسلم',action:'تعلم شيئاً جديداً اليوم — اقرأ صفحة من كتاب أو استمع لدرس مفيد',young:'تعلم كل يوم شيئاً جديداً! القراءة مغامرة رائعة — كل كتاب عالم جديد 📚'},
    en:{title:'Seeking Knowledge',desc:'Knowledge is light and ignorance is darkness. A Muslim seeks knowledge from the cradle to the grave. Knowledge is not just memorizing information but understanding and applying it in life.',verse:'Say: Are those who know equal to those who do not know?',verseRef:'Az-Zumar 9',hadith:'Whoever follows a path seeking knowledge, Allah will make easy for them a path to Paradise — Muslim',action:'Learn something new today — read a page from a book or listen to a useful lesson',young:'Learn something new every day! Reading is a great adventure — every book is a new world 📚'},
    fr:{title:'La Quete du Savoir',desc:'Al-Ghazali médite dans "Réflexions sur la Religion et la Vie": Le savoir est lumiere et l\'ignorance est tenebres. Le musulman cherche le savoir du berceau a la tombe. Le savoir n\'est pas seulement memoriser mais comprendre et appliquer.',verse:'Dis : Sont-ils egaux, ceux qui savent et ceux qui ne savent pas ?',verseRef:'Az-Zumar 9',hadith:'Quiconque emprunte un chemin a la recherche du savoir, Allah lui facilitera un chemin vers le Paradis — Muslim',action:'Apprenez quelque chose de nouveau aujourd\'hui — lisez une page ou ecoutez un cours utile',young:'Apprends quelque chose de nouveau chaque jour ! La lecture est une aventure — chaque livre est un nouveau monde 📚'}
  },
  {
    id:10, emoji:'⚖️',
    ar:{title:'التوازن في الحياة',desc:'الإسلام دين الوسطية والتوازن. لا إفراط ولا تفريط. توازن بين الدنيا والآخرة، بين العمل والراحة، بين الجسد والروح. المتطرف يضر نفسه والآخرين.',verse:'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا',verseRef:'البقرة ١٤٣',hadith:'إن لبدنك عليك حقاً وإن لعينك عليك حقاً وإن لزوجك عليك حقاً — رواه البخاري',action:'وازن بين واجباتك اليوم: ادرس ثم ارتح، اعبد الله ثم تسلَّ، اعمل ثم نم',young:'وازن حياتك مثل الميزان! وقت للدراسة ووقت للعب ووقت للعبادة ووقت للنوم ⚖️'},
    en:{title:'Balance in Life',desc:'Islam is the religion of moderation and balance. No excess and no neglect. Balance between this world and the hereafter, between work and rest, between body and soul. The extremist harms themselves and others.',verse:'And thus We have made you a just community',verseRef:'Al-Baqarah 143',hadith:'Your body has a right over you, your eyes have a right over you, and your family has a right over you — Bukhari',action:'Balance your duties today: study then rest, worship God then have fun, work then sleep',young:'Balance your life like a scale! Time for studying, time for playing, time for worship, and time for sleeping ⚖️'},
    fr:{title:'L\'Equilibre dans la Vie',desc:'L\'Islam est la religion de la moderation et de l\'equilibre. Pas d\'exces ni de negligence. Equilibre entre ce monde et l\'au-dela, entre travail et repos.',verse:'Et ainsi, Nous avons fait de vous une communaute juste',verseRef:'Al-Baqarah 143',hadith:'Votre corps a un droit sur vous, vos yeux ont un droit sur vous, et votre famille a un droit sur vous — Bukhari',action:'Equilibrez vos devoirs aujourd\'hui : etudiez puis reposez-vous, adorez Dieu puis amusez-vous',young:'Equilibre ta vie comme une balance ! Du temps pour etudier, jouer, prier et dormir ⚖️'}
  },
  {
    id:11, emoji:'🏔️',
    ar:{title:'الصبر',desc:'الصبر ليس ضعفاً بل قوة هائلة. المسلم يصبر على البلاء ويصبر على الطاعة ويصبر عن المعصية. الصبر مفتاح الفرج ودليل الإيمان.',verse:'إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ',verseRef:'الزمر ١٠',hadith:'ما أُعطي أحد عطاءً خيراً وأوسع من الصبر — متفق عليه',action:'عندما تواجه أمراً صعباً اليوم، خذ نفساً عميقاً وقل: إنا لله وإنا إليه راجعون',young:'الصبر قوة خارقة! مثل الجبل — لا تهزه الرياح. كن صبوراً وستفوز في النهاية 🏔️'},
    en:{title:'Patience',desc:'Patience is not weakness but immense strength. A Muslim is patient in trials, patient in obedience, and patient in avoiding sin. Patience is the key to relief and proof of faith.',verse:'The patient will be given their reward without measure',verseRef:'Az-Zumar 10',hadith:'No one has been given a gift better and more comprehensive than patience — Agreed upon',action:'When you face something difficult today, take a deep breath and say: To God we belong and to Him we return',young:'Patience is a superpower! Like a mountain — the wind cannot shake it. Be patient and you will win in the end 🏔️'},
    fr:{title:'La Patience',desc:'La patience n\'est pas de la faiblesse mais une force immense. Le musulman est patient dans les epreuves, dans l\'obeissance et dans l\'evitement du peche.',verse:'Les patients recevront leur recompense sans mesure',verseRef:'Az-Zumar 10',hadith:'Personne n\'a recu un don meilleur et plus vaste que la patience — Unanimement reconnu',action:'Quand vous faites face a une difficulte, respirez profondement et dites : A Dieu nous appartenons',young:'La patience est un super-pouvoir ! Comme une montagne — le vent ne peut la secouer 🏔️'}
  },
  {
    id:12, emoji:'💚',
    ar:{title:'القناعة',desc:'القناعة كنز لا يفنى. الراضي بما قسم الله له أغنى الناس. الطمع يحرق صاحبه ولا يشبعه. المسلم يسعى للأفضل لكن يرضى بما عنده.',verse:'وَلَا تَمُدَّنَّ عَيْنَيْكَ إِلَى مَا مَتَّعْنَا بِهِ أَزْوَاجًا مِنْهُمْ',verseRef:'طه ١٣١',hadith:'انظروا إلى من هو أسفل منكم ولا تنظروا إلى من هو فوقكم — متفق عليه',action:'توقف عن مقارنة نفسك بالآخرين اليوم — واشكر الله على ما عندك',young:'كن راضياً بما عندك! لا تنظر لما عند غيرك — انظر لنعم الله عليك واشكره 💚'},
    en:{title:'Contentment',desc:'Contentment is a treasure that never runs out. Whoever is satisfied with what God has given them is the richest of people. Greed burns its owner without satisfying them.',verse:'And do not extend your eyes toward that by which We have given enjoyment to some of them',verseRef:'Ta-Ha 131',hadith:'Look at those below you and do not look at those above you — Agreed upon',action:'Stop comparing yourself to others today — and thank God for what you have',young:'Be happy with what you have! Do not look at what others have — look at God\'s blessings on you and be thankful 💚'},
    fr:{title:'Le Contentement',desc:'Le contentement est un tresor inepuisable. Celui qui est satisfait de ce que Dieu lui a donne est le plus riche des gens.',verse:'Et ne tends pas tes yeux vers ce dont Nous avons donne jouissance a certains d\'entre eux',verseRef:'Ta-Ha 131',hadith:'Regardez ceux qui sont en dessous de vous et non ceux qui sont au-dessus — Unanimement reconnu',action:'Arretez de vous comparer aux autres aujourd\'hui — remerciez Dieu pour ce que vous avez',young:'Sois content de ce que tu as ! Ne regarde pas ce que les autres ont — regarde les bienfaits d\'Allah sur toi 💚'}
  },
  {
    id:13, emoji:'⏳',
    ar:{title:'قيمة الوقت',desc:'الوقت أغلى ما يملكه الإنسان. كل ثانية تمضي لا تعود أبداً. المسلم يحفظ وقته من الضياع ويملأه بالعلم والعمل والعبادة.',verse:'وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ',verseRef:'العصر ١-٢',hadith:'نعمتان مغبون فيهما كثير من الناس: الصحة والفراغ — رواه البخاري',action:'خطط ليومك اليوم: خصص وقتاً للعبادة والدراسة والعمل والترفيه — ولا تضيع دقيقة',young:'الوقت مثل الذهب — لا تضيعه! خطط ليومك: وقت للدراسة ووقت للعب ووقت للعبادة ⏳'},
    en:{title:'Value of Time',desc:'Time is the most precious thing a person owns. Every second that passes never returns. A Muslim guards their time from waste and fills it with knowledge, work, and worship.',verse:'By time, indeed mankind is in loss',verseRef:'Al-Asr 1-2',hadith:'There are two blessings which many people waste: health and free time — Bukhari',action:'Plan your day today: set time for worship, study, work, and recreation — do not waste a single minute',young:'Time is like gold — do not waste it! Plan your day: time for studying, time for playing, and time for worship ⏳'},
    fr:{title:'La Valeur du Temps',desc:'Le temps est la chose la plus precieuse qu\'une personne possede. Chaque seconde qui passe ne revient jamais.',verse:'Par le temps, l\'homme est certes en perdition',verseRef:'Al-Asr 1-2',hadith:'Il y a deux bienfaits que beaucoup de gens gaspillent : la sante et le temps libre — Bukhari',action:'Planifiez votre journee : du temps pour l\'adoration, les etudes, le travail et les loisirs',young:'Le temps est comme de l\'or — ne le gaspille pas ! Planifie ta journee : etudes, jeu et adoration ⏳'}
  },
  {
    id:14, emoji:'💎',
    ar:{title:'الإخلاص',desc:'الإخلاص أن تعمل لله وحده دون رياء ولا سمعة. العمل بلا إخلاص كالجسد بلا روح — لا حياة فيه. الله ينظر إلى قلوبكم لا إلى أجسامكم.',verse:'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ',verseRef:'البينة ٥',hadith:'إنما الأعمال بالنيات — متفق عليه',action:'جدد نيتك اليوم قبل كل عمل: أنا أفعل هذا لله وحده',young:'افعل الخير لأجل الله! لا تفعل الأشياء الطيبة لكي يمدحك الناس — بل لأن الله يراك ويحبك 💎'},
    en:{title:'Sincerity',desc:'Sincerity means doing everything for God alone without showing off or seeking reputation. A deed without sincerity is like a body without a soul — it has no life. God looks at your hearts, not at your bodies.',verse:'They were only commanded to worship Allah with sincerity in religion',verseRef:'Al-Bayyinah 5',hadith:'Actions are but by intentions — Agreed upon',action:'Renew your intention today before every deed: I am doing this for God alone',young:'Do good for the sake of Allah! Do not do nice things so people will praise you — but because Allah sees you and loves you 💎'},
    fr:{title:'La Sincerite',desc:'La sincerite c\'est faire tout pour Dieu seul sans ostentation. Une action sans sincerite est comme un corps sans ame. Dieu regarde vos coeurs, pas vos corps.',verse:'Ils n\'ont ete commandes que d\'adorer Allah en Lui vouant un culte sincere',verseRef:'Al-Bayyinah 5',hadith:'Les actes ne valent que par les intentions — Unanimement reconnu',action:'Renouvelez votre intention aujourd\'hui avant chaque acte : je fais ceci pour Dieu seul',young:'Fais le bien pour Allah ! Ne fais pas de bonnes choses pour que les gens te felicitent — mais parce qu\'Allah te voit 💎'}
  },
  {
    id:15, emoji:'🌅',
    ar:{title:'حسن الخاتمة',desc:'حسن الخاتمة أن يختم الله لك بعمل صالح. كل لحظة هي فرصة أخيرة لتصحيح المسار. المسلم يعيش كل يوم وكأنه آخر أيامه — يعبد الله ويحسن للناس.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُونَ',verseRef:'آل عمران ١٠٢',hadith:'إذا أردت أن تعمل عملاً فتدبر عاقبته — حديث حسن',action:'اختم يومك بعمل صالح: صلِّ ركعتين، أو تصدق، أو ادعُ الله بحسن الخاتمة',young:'اجعل آخر شيء كل يوم شيئاً طيباً! صلِّ لله، وقل دعاءً جميلاً، ونم وأنت سعيد 🌅'},
    en:{title:'A Good Ending',desc:'A good ending means that God seals your life with a righteous deed. Every moment is a last chance to correct your path. A Muslim lives each day as if it were their last — worshipping God and being good to people.',verse:'O you who believe, fear Allah as He should be feared and do not die except as Muslims',verseRef:'Al Imran 102',hadith:'If you intend to do a deed, consider its outcome — Hasan hadith',action:'End your day with a good deed: pray two units of prayer, give charity, or ask God for a good ending',young:'Make the last thing you do every day something good! Pray to God, say a beautiful dua, and sleep happy 🌅'},
    fr:{title:'Une Bonne Fin',desc:'Une bonne fin signifie que Dieu scelle votre vie avec un acte pieux. Chaque moment est une derniere chance de corriger votre chemin.',verse:'O vous qui croyez, craignez Allah comme Il doit etre craint et ne mourez qu\'en etant musulmans',verseRef:'Al Imran 102',hadith:'Si vous avez l\'intention de faire une action, considerez son resultat — Hadith Hasan',action:'Terminez votre journee par une bonne action : priez, donnez en charite, ou demandez a Dieu une bonne fin',young:'Fais de la derniere chose chaque jour quelque chose de bien ! Prie, dis une belle invocation, et dors heureux 🌅'}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Thinker?) ═══════════════
const QUIZ = [
  {
    ar:{q:'أكمل الآية: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ ..."',opts:['الأرواح','النفوس','القلوب','الأبدان'],correct:2,hint:'هذه الآية في سورة الرعد عن السكينة',quran:'الرعد ٢٨'},
    en:{q:'Complete the verse: "Verily, in the remembrance of Allah do ... find rest"',opts:['Souls','Spirits','Hearts','Bodies'],correct:2,hint:'This verse from Surah Ar-Ra\'d is about tranquility',quran:'Ar-Ra\'d 28'},
    fr:{q:'Completez le verset : "N\'est-ce pas par le rappel d\'Allah que les ... se tranquillisent"',opts:['Ames','Esprits','Coeurs','Corps'],correct:2,hint:'Ce verset de la sourate Ar-Ra\'d parle de la tranquillite',quran:'Ar-Ra\'d 28'}
  },
  {
    ar:{q:'في أي سورة وردت آية "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنْسَ إِلَّا لِيَعْبُدُونِ"؟',opts:['الذاريات','البقرة','الأنعام','يس'],correct:0,hint:'هذه السورة تبدأ بالقسم بالرياح',quran:'الذاريات ٥٦'},
    en:{q:'In which surah does "I did not create the jinn and mankind except to worship Me" appear?',opts:['Adh-Dhariyat','Al-Baqarah','Al-An\'am','Ya-Sin'],correct:0,hint:'This surah begins with an oath by the winds',quran:'Adh-Dhariyat 56'},
    fr:{q:'Dans quelle sourate apparait "Je n\'ai cree les djinns et les humains que pour qu\'ils M\'adorent" ?',opts:['Adh-Dhariyat','Al-Baqarah','Al-An\'am','Ya-Sin'],correct:0,hint:'Cette sourate commence par un serment par les vents',quran:'Adh-Dhariyat 56'}
  },
  {
    ar:{q:'ما الحديث الذي يُشبّه المؤمنين بالطيور في التوكل؟',opts:['حديث التوكل','حديث الأخوة','حديث الصبر','حديث العلم'],correct:0,hint:'لو توكلون على الله حق توكله...',quran:'الملك ١٩'},
    en:{q:'Which hadith compares believers to birds in trust?',opts:['Trust in God hadith','Brotherhood hadith','Patience hadith','Knowledge hadith'],correct:0,hint:'If you truly trusted in Allah...',quran:'Al-Mulk 19'},
    fr:{q:'Quel hadith compare les croyants aux oiseaux dans la confiance ?',opts:['Hadith de la confiance','Hadith de la fraternite','Hadith de la patience','Hadith du savoir'],correct:0,hint:'Si vous mettiez vraiment votre confiance en Allah...',quran:'Al-Mulk 19'}
  },
  {
    ar:{q:'أكمل الحديث: "نعمتان مغبون فيهما كثير من الناس: الصحة و..."',opts:['المال','الفراغ','العلم','الشباب'],correct:1,hint:'هذا الحديث عن تضييع الوقت',quran:'العصر ١'},
    en:{q:'Complete the hadith: "Two blessings which many people waste: health and..."',opts:['Wealth','Free time','Knowledge','Youth'],correct:1,hint:'This hadith is about wasting time',quran:'Al-Asr 1'},
    fr:{q:'Completez le hadith : "Deux bienfaits que beaucoup gaspillent : la sante et..."',opts:['La richesse','Le temps libre','Le savoir','La jeunesse'],correct:1,hint:'Ce hadith parle du gaspillage du temps',quran:'Al-Asr 1'}
  },
  {
    ar:{q:'ما السورة التي يُقسم فيها الله بالوقت؟',opts:['الفجر','الضحى','العصر','الليل'],correct:2,hint:'هذه أقصر سورة تتحدث عن الخسارة',quran:'العصر ١-٣'},
    en:{q:'Which surah does God swear by time?',opts:['Al-Fajr','Ad-Duha','Al-Asr','Al-Layl'],correct:2,hint:'This is the shortest surah about loss',quran:'Al-Asr 1-3'},
    fr:{q:'Dans quelle sourate Dieu jure-t-Il par le temps ?',opts:['Al-Fajr','Ad-Duha','Al-Asr','Al-Layl'],correct:2,hint:'C\'est la sourate la plus courte sur la perte',quran:'Al-Asr 1-3'}
  },
  {
    ar:{q:'أكمل الحديث: "إنما الأعمال ب..."',opts:['الصبر','النتائج','النيات','الأقوال'],correct:2,hint:'هذا أول حديث في صحيح البخاري',quran:'البينة ٥'},
    en:{q:'Complete the hadith: "Actions are but by..."',opts:['Patience','Results','Intentions','Words'],correct:2,hint:'This is the first hadith in Sahih Bukhari',quran:'Al-Bayyinah 5'},
    fr:{q:'Completez le hadith : "Les actes ne valent que par les..."',opts:['La patience','Les resultats','Les intentions','Les paroles'],correct:2,hint:'C\'est le premier hadith dans Sahih Bukhari',quran:'Al-Bayyinah 5'}
  },
  {
    ar:{q:'ما الآية التي تربط الشكر بالزيادة من الله؟',opts:['لئن شكرتم لأزيدنكم','فاذكروني أذكركم','ادعوني أستجب لكم','اشكروا لي ولا تكفرون'],correct:0,hint:'هذه الآية في سورة إبراهيم',quran:'إبراهيم ٧'},
    en:{q:'Which verse connects gratitude with increase from God?',opts:['If you are grateful I will increase you','Remember Me and I will remember you','Call upon Me and I will respond','Be grateful to Me and do not deny'],correct:0,hint:'This verse is in Surah Ibrahim',quran:'Ibrahim 7'},
    fr:{q:'Quel verset relie la gratitude a l\'augmentation de Dieu ?',opts:['Si vous etes reconnaissants Je vous augmenterai','Rappelez-vous de Moi Je Me rappellerai de vous','Invoquez-Moi Je vous repondrai','Soyez reconnaissants et ne soyez pas ingrats'],correct:0,hint:'Ce verset est dans la sourate Ibrahim',quran:'Ibrahim 7'}
  },
  {
    ar:{q:'ما معنى أن الإسلام دين "الوسطية"؟',opts:['دين السهولة','دين التوازن والاعتدال','دين الزهد','دين القوة'],correct:1,hint:'وكذلك جعلناكم أمة...',quran:'البقرة ١٤٣'},
    en:{q:'What does it mean that Islam is a religion of "moderation"?',opts:['Religion of ease','Religion of balance and moderation','Religion of asceticism','Religion of strength'],correct:1,hint:'And thus We have made you a community...',quran:'Al-Baqarah 143'},
    fr:{q:'Que signifie que l\'Islam est une religion de "moderation" ?',opts:['Religion de facilite','Religion d\'equilibre et moderation','Religion d\'ascetisme','Religion de force'],correct:1,hint:'Et ainsi Nous avons fait de vous une communaute...',quran:'Al-Baqarah 143'}
  },
  {
    ar:{q:'ما أعظم حق أمر الله به بعد عبادته؟',opts:['الصلاة','الصيام','بر الوالدين','الجهاد'],correct:2,hint:'وقضى ربك ألا تعبدوا إلا إياه و...',quran:'الإسراء ٢٣'},
    en:{q:'What is the greatest right God commanded after worshipping Him?',opts:['Prayer','Fasting','Honoring parents','Struggling'],correct:2,hint:'And your Lord has decreed that you worship none but Him and...',quran:'Al-Isra 23'},
    fr:{q:'Quel est le plus grand droit que Dieu a ordonne apres Son adoration ?',opts:['La priere','Le jeune','Honorer les parents','Le combat'],correct:2,hint:'Et ton Seigneur a decrete que vous n\'adoriez que Lui et...',quran:'Al-Isra 23'}
  },
  {
    ar:{q:'ما الذي يُحوّل العمل العادي إلى عبادة عند المسلم؟',opts:['مكان العمل','النية الصالحة','كثرة العمل','إتقان العمل فقط'],correct:1,hint:'إنما الأعمال...',quran:'الأنعام ١٦٢'},
    en:{q:'What turns an ordinary deed into worship for a Muslim?',opts:['The place of work','A righteous intention','Quantity of work','Perfection alone'],correct:1,hint:'Actions are but by...',quran:'Al-An\'am 162'},
    fr:{q:'Qu\'est-ce qui transforme un acte ordinaire en adoration pour un musulman ?',opts:['Le lieu de travail','Une intention pieuse','La quantite de travail','La perfection seule'],correct:1,hint:'Les actes ne valent que par...',quran:'Al-An\'am 162'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء التدبر',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا',tr:'رواه الترمذي'},
    en:{label:'Dua for Reflection',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا',tr:'O Allah, benefit me from what You taught me, teach me what will benefit me, and increase me in knowledge — Tirmidhi'},
    fr:{label:'Dua de Reflexion',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا',tr:'O Allah, fais-moi profiter de ce que Tu m\'as enseigne, enseigne-moi ce qui me sera utile — Tirmidhi'} },
  { ar:{label:'دعاء حسن الخاتمة',text:'اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ',tr:'حديث حسن'},
    en:{label:'Dua for Good Ending',text:'اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ',tr:'O Allah, make the best of my life its end, the best of my deeds the last of them, and the best of my days the day I meet You'},
    fr:{label:'Dua pour une Bonne Fin',text:'اللَّهُمَّ اجْعَلْ خَيْرَ عُمُرِي آخِرَهُ وَخَيْرَ عَمَلِي خَوَاتِمَهُ وَخَيْرَ أَيَّامِي يَوْمَ أَلْقَاكَ',tr:'O Allah, fais que le meilleur de ma vie soit sa fin, le meilleur de mes actes les derniers'} },
  { ar:{label:'دعاء الصبر',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'البقرة ٢٥٠'},
    en:{label:'Dua for Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Our Lord, pour upon us patience and plant firmly our feet — Al-Baqarah 250'},
    fr:{label:'Dua pour la Patience',text:'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا',tr:'Notre Seigneur, deverse sur nous la patience et affermis nos pas — Al-Baqarah 250'} },
  { ar:{label:'دعاء الشكر',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ',tr:'النمل ١٩'},
    en:{label:'Dua of Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ',tr:'My Lord, enable me to be grateful for Your favor upon me and my parents — An-Naml 19'},
    fr:{label:'Dua de Gratitude',text:'رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ الَّتِي أَنْعَمْتَ عَلَيَّ وَعَلَى وَالِدَيَّ',tr:'Mon Seigneur, permets-moi de Te remercier pour Tes bienfaits sur moi et mes parents — An-Naml 19'} },
  { ar:{label:'دعاء التوكل',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'التوبة ١٢٩'},
    en:{label:'Dua of Trust',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah is sufficient for me; there is no god except Him. I rely upon Him — At-Tawbah 129'},
    fr:{label:'Dua de Confiance',text:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ',tr:'Allah me suffit ; il n\'y a de dieu que Lui. Je m\'en remets a Lui — At-Tawbah 129'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'taamulat-xp';
const BADGES_KEY = 'taamulat-badges';
const READ_KEY = 'taamulat-read';
const STREAK_KEY = 'taamulat-streak';
const MODE_KEY = 'taamulat-mode';
const QUIZ_BEST_KEY = 'taamulat-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'متأمل', en:'Thinker', fr:'Penseur' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadCards() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markCardRead(id) {
  const read = getReadCards();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentCardIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabCards'); if(_e) _e.textContent=t.tabCards; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=document.getElementById('cardsTitle'); if(_e) _e.textContent=t.cardsTitle; }
  { const _e=document.getElementById('cardsDesc'); if(_e) _e.textContent=t.cardsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  renderHome();
  renderCards();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const card = CARDS[dayIdx];
  const d = card[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${card.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('cards');toggleCard('card-${card.id}')">${t.readMore} &#8594;</div>`;
  (document.getElementById('homeGrid')||{}).innerHTML= CARDS.map(c => {
    const dd = c[lang];
    return `<div class="home-card" onclick="switchTab('cards');toggleCard('card-${c.id}')">
      <span class="hc-icon">${c.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const readCards = getReadCards();
  const container = document.getElementById('cardsContainer');
  if (!container) return;
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="cardsSearch" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"></div>`;
  container.innerHTML = searchHTML + CARDS.map(c => {
    const d = c[lang];
    const isRead = readCards.includes(c.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="card-${c.id}">
      <div class="trait-head" onclick="toggleCard('card-${c.id}');markCardRead(${c.id})">
        <span class="trait-num">${c.id}</span>
        <span class="trait-emoji">${c.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareCard(${c.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterCards(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareCard(id) {
  const card = CARDS.find(c => c.id === id);
  if (!card) return;
  const d = card[lang];
  const text = `${card.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) { showQuizResult(); return; }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20);
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'متأمل حقيقي!':lang==='fr'?'Un vrai penseur !':'A True Thinker!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التأمل!':lang==='fr'?'Continuez a reflechir !':'Keep Reflecting!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readCards = getReadCards();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readCards.length}</span><span class="stat-label">${lang==='ar'?'تأمل مقروء':lang==='fr'?'Reflexions lues':'Reflections Read'}</span><span class="stat-total">/ ${CARDS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بأديب الدعوة. ألّف أكثر من ٩٤ كتاباً. درس في الأزهر الشريف، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل العالمية.',
      bookTitle: 'عن الكتاب',
      bookDesc: 'تأملات في الدين والحياة كتاب فكري إيماني يتناول قضايا الوجود والإنسان والعلاقة بالله. يربط الشيخ الغزالي بين الإيمان والحياة اليومية بأسلوب فلسفي عميق وبسيط في آن واحد.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب تأملات في الدين والحياة — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','سنن الترمذي وأبي داود'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner.',
      bookTitle: 'About the Book',
      bookDesc: '"Reflections on Religion and Life" is an intellectual faith book addressing questions of existence, humanity, and the relationship with God. Sheikh al-Ghazali connects faith with daily life in a deep yet simple philosophical style.',
      sourcesTitle: 'Sources',
      sources: ['"Reflections on Religion and Life" — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sunan at-Tirmidhi and Abu Dawud'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie).',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Reflexions sur la Religion et la Vie" est un livre intellectuel de foi qui aborde les questions de l\'existence et de la relation avec Dieu. Le Sheikh al-Ghazali relie la foi a la vie quotidienne dans un style philosophique profond et simple.',
      sourcesTitle: 'Sources',
      sources: ['"Reflexions sur la Religion et la Vie" — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Sunan at-Tirmidhi et Abu Dawud'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب تأملات في الدين والحياة للشيخ محمد الغزالي، القرآن الكريم، السنة النبوية.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ تأملاً، مسابقة تفاعلية، نظام نقاط وشارات.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وأحاديث وتحليل.'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.'},
      {title:'📚 Sources',body:'"Reflections on Religion and Life" by Sheikh al-Ghazali, the Holy Quran, Prophetic Sunnah.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 reflections, interactive quiz, XP and badges system.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, hadiths, and analysis.'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.'},
      {title:'📚 Sources',body:'"Reflexions sur la Religion et la Vie" par Sheikh al-Ghazali, le Saint Coran, la Sunnah.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 reflexions, quiz interactif, systeme XP et badges.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, hadiths et analyse.'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ تأملاً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء والتدبر','⭐ أكمل ١٥ تأملاً لتصبح خبيراً'],
    en: ['📖 Read a new reflection every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget duas and reflection','⭐ Complete all 15 reflections to become an Expert'],
    fr: ['📖 Lisez une nouvelle reflexion chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas et la reflexion','⭐ Completez les 15 reflexions pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-cards');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentCardIdx = Math.max(0, Math.min(cards.length-1, currentCardIdx+dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#2E7D32','#4CAF50','#81C784','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','cards','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.toggle('young-mode', ageMode === 'young');
  updateStreak();
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
