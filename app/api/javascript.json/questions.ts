import { type QuestionWithoutId } from '@/types';

export const questions: QuestionWithoutId[] = [
	{
		title: 'Почему JavaScript называют скриптовым языком?',
		answer:
			'В отличие от языков вроде C++ или Java, которые компилируются в машинный код перед запуском, JavaScript выполняется интерпретатором (например, движком V8 в Chrome или SpiderMonkey в Firefox) прямо во время выполнения.',
	},
	{
		title: 'Объясните делегирование событий.',
		answer:
			'Всплытие событий позволяет реализовать один из самых важных приёмов разработки - делегирование. Он заключается в том, что если у нас есть много элементов, события на которых нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому - мы ставим один обработчик на их общего предка. Из него можно получить целевой элемент event.target, понять на каком потомке произошло событие и обработать его.',
		lists: [
			{
				title: 'Алгоритм:',
				items: [
					'Вешаем обработчик на контейнер.',
					'В обработчике: получаем event.target.',
					'В обработчике: если event.target или один из его родителей в контейнере (this) – интересующий нас элемент – обрабатываем его.',
				],
				type: 'numbers',
			},
			{
				title: 'Зачем использовать:',
				items: [
					'Упрощает инициализацию и экономит память: не нужно вешать много обработчиков.',
					'Меньше кода: при добавлении и удалении элементов не нужно ставить или снимать обработчики.',
					'Удобство изменений: можно массово добавлять или удалять элементы путём изменения innerHTML.',
				],
			},
		],
	},
	{
		title: 'Объясните, как this работает в JavaScript.',
		answer: `Использование this гарантирует, что функция работает именно с тем объектом, в контексте которого вызвана, если это не стрелочная функция. У стрелочных функций контекст this определяется в момент создания функции. Значение this называется контекстом вызова и будет определено в момент вызова функции. Значением this является объект перед точкой, в контексте которого вызван метод.`,
	},
	{
		title: 'Объясните, как this работает в JavaScript.',
		answer: `Использование this гарантирует, что функция работает именно с тем объектом, в контексте которого вызвана, если это не стрелочная функция. У стрелочных функций контекст this определяется в момент создания функции. Значение this называется контекстом вызова и будет определено в момент вызова функции. Значением this является объект перед точкой, в контексте которого вызван метод.`,
	},
	{
		title: 'Расскажите, как работает прототипное наследование.',
		answer: `Прототипом объекта А называется объект B, свойства и методы которого доступны для объекта A как собственные.`,
		lists: [
			{
				items: [
					'У любого объекта есть прототип, на который указывает его свойство __proto__ и который также является объектом.',
					'У любой функции есть ассоциированный с ней объект, на который в контексте функции указывает свойство prototype. В него как в контейнер обычно складывают свойства и методы для работы с определенным классом объектов.',
					'Такой контейнер автоматически становится прототипом объектов, создаваемых функциями-конструкторами',
					'Для редактирования прототипной ссылки объекта используют метод Object.create() - он перезаписывает объект заново и выставляет в нем ссылку на нужный прототип.',
					'Ссылки связанных друг с другом объектов образуют прототипную цепочку, которая лежит в основе прототипного наследования. Ярким примером такого наследования является цепочка узлов DOM модели.',
				],
			},
		],
		code: {
			title: 'Пример',
			code: `let animal = {
	eats: true,
};
let rabbit = {
	jumps: true,
};

rabbit.__proto__ = animal; // (*)

// теперь мы можем найти оба свойства в rabbit:
alert(rabbit.eats); // true (**)
alert(rabbit.jumps); // true`,
		},
	},
	{
		title:
			'Что вы думаете о AMD(асинхронное определение модуля, англ. asynchronous module definition) против CommonJS?',
		answer: `CommonJS и AMD являются спецификациями (или форматами) о том, как модули и их зависимости должны быть объявлены в приложениях javascript. AMD начинала разработку как подпроект спецификации формата в списке CommonJs, так как эти две группы в итоге имели разные планы, дальнейшая разработка формата AMD была перенесена в amdjs group. CommonJS охватывает более широкий круг проблем и он лучше подходит для развития на стороне сервера с учетом его синхронного характера, а AMD лучше подходит для развития клиентской стороны (браузера) учитывая его асинхронный характер.`,
	},
	{
		title:
			'В чём различие между переменными, значение которых: null, undefined и не объявлено?',
		answer: `Для проверки можно использовать console.log() и typeof. Основное различие в том, что:`,
		lists: [
			{
				items: [
					'undefined - это переменная, которая была объявлена, но у нее нет значения.',
					'null - значение переменной.',
					'undeclared - переменная, объявленная без ключевого слова "var".',
					'undefined - это переменная, которая была объявлена, но у нее нет значения.',
				],
			},
		],
	},
	{
		title: 'Что такое замыкание и как/для чего его используют?',
		answer:
			'Если одна функция определена внутри другой, то внутренняя имеет доступ к ОВ внешней. Это называется замыканием (а также "лексической ОВ" или "статическая". При выполнении функции используется та область видимости переменных, которая существовала на момент объявления этой функции. Это лексическая область видимости.',
	},
	{
		title:
			'Можете ли вы описать основное различие между циклом forEach и циклом .map()? И в каких случаях каждый из них используется?',
		answer:
			'forEach — для перебора и side-эффектов. map() — для преобразования данных в новый массив. Выбор зависит от задачи: нужен ли вам новый массив или просто действие над элементами.',
	},
	{
		title: 'В чём разница между host-объектами и нативными объектами?',
		answer: 'Основные различия заключаются в:',
		lists: [
			{
				items: [
					'Собственные объекты: Object (конструктор), Date, Math, parseInt, eval, строковые методы, такие как indexOf и replace, методы массивов и т.д. - основные предопределённые объекты, всегда доступные в JavaScript.',
					'Объекты хоста (при условии среды браузера): window, document, location, history, XMLHttpRequest, setTimeout, getElementsByTagName, querySelectorAll и т.д. - Они отличаются от встроенных объектов, потому что не все окружения будут иметь одни и те же объекты хоста.',
				],
			},
		],
	},
	{
		title:
			'В чем разница между: function Person(){}, var person = Person(), и var person = new Person()?',
		answer: 'Основные различия заключаются в:',
		lists: [
			{
				items: [
					'function Person(){} - Мы создаем функцию с именем Person.',
					'var person = Person() - Мы вызываем функцию Person и результат сохраняем в переменную person.',
					'var person = new Person() - Мы создаем новый объект, используя функцию-конструктор Person.',
				],
			},
		],
	},
	{
		title: 'В чем разница между .call и .apply?',
		answer:
			'Сходство заключается в том, что и .call, и .apply используются для вызова функций, а также первый параметр будет использоваться как значение this внутри функции. А разница в том, что .call в качестве следующих аргументов принимает аргументы, разделенные запятыми, в то время как .apply в качестве следующих аргументов принимает массив аргументов.',
		code: `function add(a, b) {
	return a + b;
}
console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3`,
	},
	{
		title:
			'В чём разница между feature detection (определение возможностей), feature inference (предположение возможностей) и анализом строки user-agent?',
		answer: 'Основные различия:',
		lists: [
			{
				title: 'Feature detection (определение возможностей)',
				items: [
					'Определение возможностей браузера заключается в определении, поддерживает ли браузер определенный блок кода — и если нет, то будет выполняться другой код, так что браузер всегда сможет обеспечить работоспособность и предотвратить сбои/ошибки в некоторых браузерах. Например:',
				],
				code: `if ('geolocation' in navigator) {
	// Можно использовать navigator.geolocation
} else {
	// Обработка отсутствия возможности
}`,
			},
			{
				title: 'Feature inference (предположение возможностей)',
				items: [
					'Предположение возможностей проверяет на наличие определённых возможностей, как и предыдущий подход, но использует другую функцию, которая предполагает, что определённая возможность уже существует (Этот подход не рекомендуеся. Первый подход более надёжен.), например:',
				],
				code: `if (document.getElementsByTagName) {
	element = document.getElementById(id);
}`,
			},
			{
				title: 'Строка User Agent',
				items: [
					'Это строка, сообщаемая браузером, которая позволяет узлам сетевого протокола определить тип приложения, операционную систему, поставщика программного обеспечения или версию программного обеспечения пользователя, от которого исходит запрос. Доступ к ней можно получить через navigator.userAgent. Тем не менее строка User Agent сложна для обработки и может быть подделана. Например, браузер Chrome идентифицируется как Chrome и как Safari, нужно проверить на наличие строки Safari и отсутствие строки Chrome. Следует избегать этот метод.',
				],
			},
		],
	},
];
