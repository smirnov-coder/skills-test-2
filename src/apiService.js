
const data = [
'Аари',
'Абазинский язык',
'Абенаки',
'Абхазский язык',
'Авадхи',
'Аварский язык',
'Авестийский язык',
'Агульский язык',
'Аджа',
'Аджа', // дубль
'Адыгейский язык',
'Азербайджанский язык',
'Аймарский язык',
'Айнский язык',
'Акан',
'Аккадский язык',
'Алабамский язык',
'Албанский язык',
'Алгонквинский язык',
'Алеманнский язык',
'Алеутский язык',
'Алтайский язык',
'Алтайский язык', // дубль
'Алуне',
'Древнесаксонский язык',
'Алюторский язык',
'Амбонезский язык',
'Амхарский язык',
'Ангика',
'Английский язык',
'Англо-шотландский язык',
'Андийский язык',
'Арабский язык',
'Аравакский язык',
'Арагонский язык',
'Арамейский язык',
'Арапахо',
'Арауканский язык',
'Аргуни',
'Армянский язык',
'Арумынский язык',
'Арчинский язык',
'Ассамский язык',
'Ассанский язык',
'Ассирийский язык',
'Астурийский язык',
'Ауджила',
'Афарский язык',
'Африкаанс',
'Ахвахский язык',
'Ачехский язык',
'Баварский диалект',
'Багвалинский язык',
'Бактрийский язык',
'Балийский язык',
'Бамбара',
'Банджарский язык',
'Баскский язык',
'Бацбийский язык',
'Башкирский язык',
'Бежтинский язык',
'Белорусский язык',
'Белуджский язык',
'Бемба',
'Бенгальский язык',
'Берберский язык',
'Бикольский язык',
'Билин',
'Бирманский язык',
'Биса',
'Бислама',
'Бишнуприя-манипури',
'Бо',
'Болгарский язык',
'Боснийский язык',
'Ботлихский язык',
'Брауи',
'Бретонский язык',
'Бугийский язык',
'Будухский язык',
'Букмол',
'Булгарский язык',
'Бундели',
'Бурятский язык',
'Бухидский язык',
'Бходжпури',
'Ваи',
'Валлийский язык',
'Валлонский язык',
'Варайский язык',
'Венгерский язык',
'Венда',
'Венетский язык',
'Венетский язык', // дубль
'Вепсский язык',
'Верхнелужицкий язык',
'Вилямовский язык',
'Водский язык',
'Волапюк',
'Волоф',
'Восточнобонтокский язык',
'Восточнофризский язык',
'Выруский язык',
'Вьетнамский язык',
'Гавайский язык',
'Гагаузский язык',
'Гаитянский креольский язык',
'Галисийский язык',
'Гань',
'Генуэзский диалект',
'Геэз',
'Гинухский язык',
'Годоберинский язык',
'Гонгду',
'Горани',
'Горномарийский язык',
'Готский язык',
'Гренландский язык',
'Греческий язык',
'Грузинский язык',
'Гуаньхуа',
'Гуарани',
'Гуджарати',
'Гунзибский язык',
'Гхадамесский язык',
'Гэльский (шотландский) язык',
'Даргинский язык',
'Дари',
'Датский язык',
'Дзонг-кэ',
'Дивехи',
'Диери',
'Догри',
'Долганский язык',
'Древнеанглийский язык',
'Древнеармянский язык',
'Древнебретонский язык',
'Древневерхненемецкий язык',
'Древнегреческий язык',
'Древнееврейский язык',
'Древнеисландский язык',
'Древненидерландский язык',
'Древнеперсидский язык',
'Древнепрусский язык',
'Древнерусский язык',
'Древнескандинавский язык',
'Древнетюркский язык',
'Дунганский язык',
'Египетский язык',
'Жемайтский язык',
'Зазаки',
'Западнофламандский язык',
'Зулу',
'Ибанский язык',
'Ибанский язык', // дубль
'Иврит',
'Игбо',
'Идиш',
'Идо',
'Ижорский язык',
'Илоканский язык',
'Инари-саамский язык',
'Ингушский язык',
'Индонезийский язык',
'Интерлингва',
'Интерлингве',
'Инуктитут',
'Инупиак',
'Ирландский язык',
'Исландский язык',
'Испанский язык',
'Истророманский язык',
'Итальянский язык',
'Ительменский язык',
'Йоруба',
'Кабардино-черкесский язык',
'Кабийе',
'Кабильский язык',
'Кабувердьяну',
'Казахский язык',
'Калмыцкий язык',
'Каннада',
'Капампанганский язык',
'Караимский язык',
'Каракалпакский язык',
'Каратинский язык',
'Карачаево-балкарский язык',
'Карельский язык',
'Каталанский язык',
'Кашмири',
'Кашубский язык',
'Кваньяма',
'Квенский язык',
'Квенья',
'Кемак',
'Кетский язык',
'Кечуа',
'Киконго',
'Кикуйю',
'Киньяруанда',
'Киргизский язык',
'Кирибатский язык',
'Кирунди',
'Китайский язык',
'Китуба',
'Классический науатль',
'Клингонский язык',
'Кокборок',
'Колтта-саамский язык',
'Коми',
'Коми-зырянский язык',
'Коми-пермяцкий язык',
'Конкани',
'Коптский язык',
'Корейский язык',
'Корнский язык',
'Корсиканский язык',
'Корякский язык',
'Коса',
'Кри',
'Крызский язык',
'Крымскотатарский язык',
'Крымчакский язык',
'Кумыкский язык',
'Курдский язык',
'Курманджи',
'Кхмерский язык',
'Къхонг',
'Ладинский язык',
'Лазский язык',
'Лакота',
'Лакский язык',
'Лаосский язык',
'Латгальский язык',
'Латинский язык',
'Латышский язык',
'Лезгинский язык',
'Ливский язык',
'Ликийский язык',
'Лимбургский язык',
'Лингала',
'Литовский язык',
'Ложбан',
'Ломбардский язык',
'Лувийский язык',
'Луганда',
'Люксембургский язык',
'Магахи',
'Мадурский язык',
'Мазендеранский язык',
'Макасарский язык',
'Македонский язык',
'Малагасийский язык',
'Малайский язык',
'Малаялам',
'Мальтийский язык',
'Мамбай',
'Мангаревский язык', // дубль
'Мандинго',
'Мандинка',
'Мансийский язык',
'Маньчжурский язык',
'Маори',
'Маратхи',
'Марийский язык',
'Маршалльский язык',
'Масайский язык',
'Мегрельский язык',
'Меру',
'Микенский язык',
'Микмак',
'Минангкабау',
'Минь-дун',
'Мирандский язык',
'Могаукский язык',
'Мокшанский язык',
'Молдавский язык',
'Монгольский язык',
'Море (язык)',
'Мэнский язык',
'Навахо',
'Нанайский язык',
'Науатль',
'Науру',
'Нгаджу',
'Нганасанский язык',
'Ндонга',
'Неаполитанский язык',
'Неварский язык',
'Негидальский язык',
'Немецкий язык',
'Ненецкий язык',
'Непальский язык',
'Нивхский язык',
'Нидерландский язык',
'Нидерландский язык', // дубль
'Нижнелужицкий язык',
'Нижненемецкий язык',
'Нижнесаксонские диалекты Нидерландов',
'Ниуафооу',
'Ниуэ',
'Новиаль',
'Ногайский язык',
'Норвежский язык',
'Нормандский язык',
'Норфолкский язык',
'Носу',
'Нукуоро',
'Ньянджа',
'Нюнорск',
'Оджибва',
'Окинавский язык',
'Окситанский язык',
'Ория',
'Орокский язык',
'Оромо',
'Орочский язык',
'Осетинский язык',
'Оскский язык',
'Османский язык',
'Палау',
'Пали',
'Пангасинанский язык',
'Панджаби',
'Папьяменту',
'Педи',
'Пенсильванско-немецкий язык',
'Персидский язык',
'Пикардский язык',
'Пилени',
'Полабский язык',
'Польский язык',
'Португальский язык',
'Португальский язык', // дубль
'Праиндоевропейский язык',
'Праславянский язык',
'Пушту',
'Пьемонтский язык',
'Рапануйский язык',
'Раротонга',
'Ретороманские языки',
'Рипуарский язык',
'Романшский язык',
'Румынский язык',
'Русинский язык',
'Русский язык',
'Рутульский язык',
'Саамский (кильдинский) язык',
'Самоанский язык',
'Санго',
'Санскрит',
'Сантали',
'Сардинский язык',
'Сванский язык',
'Свати',
'Себуано',
'Северносаамский язык',
'Севернофризский язык',
'Северноюкагирский язык',
'Северо-западный марийский язык',
'Селькупский язык',
'Сербохорватский язык',
'Сербский язык',
'Сесото',
'Сефардский язык',
'Сибирскотатарский язык',
'Силезский язык',
'Сингальский язык',
'Синдарин',
'Синдхи',
'Сиреникский язык',
'Сирийский язык',
'Сицилийский язык',
'Словацкий язык',
'Словенский язык',
'Словио',
'Словянски язык',
'Сога',
'Сольресоль',
'Сомалийский язык',
'Сонинке',
'Сорани',
'Сранан-тонго',
'Сранан-тонго', // дубль
'Среднеанглийский язык',
'Среднебретонский язык',
'Средневерхненемецкий язык',
'Среднефранцузский язык',
'Старославянский язык',
'Старофранцузский язык',
'Старофризский язык',
'Суахили',
'Сунданский язык',
'Табасаранский язык',
'Тагальский язык',
'Таджикский язык',
'Таитянский язык',
'Тайский язык',
'Талышский язык',
'Тамашек',
'Тамильский язык',
'Таос',
'Татарский язык',
'Татский язык',
'Телугу',
'Тетум',
'Тибетский язык',
'Тигре',
'Тигринья',
'Тиндинский язык',
'Ток-писин',
'Токелау',
'Токипона',
'Токодеде',
'Тонга',
'Тофаларский язык',
'Тсвана',
'Тсонга',
'Тувалу',
'Тувинский язык',
'Тулу',
'Тупи',
'Турецкий язык',
'Туркменский язык',
'Тхо',
'Убыхский язык',
'Угаритский язык',
'Удинский язык',
'Удмуртский язык',
'Удэгейский язык',
'Узбекский язык',
'Уйгурский язык',
'Уйгурский язык', // дубль
'Украинский язык',
'Ульчский язык',
'Умбрский язык',
'Урду',
'Урумский язык',
'Фарерский язык',
'Фиджийский хинди',
'Фиджийский язык',
'Финский язык',
'Фон (язык)',
'Французский язык',
'Фризский язык',
'Фриульский язык',
'Фула',
'Хакасский язык',
'Хакка',
'Хантыйский язык',
'Хауса',
'Хваршинский язык',
'Хеттский язык',
'Хилигайнон',
'Хиналугский язык',
'Хинди',
'Хопи',
'Хорватский язык',
'Цахурский язык',
'Цезский язык',
'Центральный уастекский науатль',
'Церковнославянский язык',
'Цыганский язык',
'Чагатайский язык',
'Чамалинский язык',
'Чамикуро',
'Чаморро',
'Чви',
'Чероки',
'Чеченский язык',
'Чешский язык',
'Чжуанский язык',
'Чиа-чиа',
'Чоктавский язык',
'Чувашский язык',
'Чукотский язык',
'Чхаттисгархи',
'Шайенский язык',
'Шауйя',
'Шведский язык',
'Шерпский язык',
'Шипибо',
'Шона',
'Шорский язык',
'Шошонский язык',
'Шумерский язык',
'Эве',
'Эвенкийский язык',
'Эвенский язык',
'Эдо',
'Эмилиано-романьольский язык',
'Энецкий язык',
'Эрзянский язык',
'Эсперанто',
'Эстонский язык',
'Эстремадурский язык',
'Этрусский язык',
'Южнокурдский язык',
'Южноминьский диалект',
'Южноюкагирский язык',
'Южноюкагирский язык', // дубль
'Юкатекский язык',
'Юэ',
'Яванский язык',
'Ягнобский язык',
'Якутский язык',
'Яо',
'Японский язык'
];

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getDataByText(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, getRandom(100, 250));
  })
  .then(() => {
    if (typeof text !== 'string' || !text) {
      return [];
    }

    return data.filter(x => x.toLocaleLowerCase().startsWith(text.toLocaleLowerCase()));
  });
}