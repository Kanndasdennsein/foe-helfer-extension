/*
 * **************************************************************************************
 *
 * Dateiname:                 es.js
 * Projekt:                   foe-chrome
 *
 * erstellt von:              Daniel Siekiera <daniel.siekiera@gmail.com>
 * erstellt am:	              17.12.19, 22:44 Uhr
 * zuletzt bearbeitet:       17.12.19, 22:32 Uhr
 *
 * Copyright © 2019
 *
 * **************************************************************************************
 */

let i18n = {
	"Local" : "es-ES",
	"DateTime" : "DD.MM.YYYY HH:mm [Uhr]",

	"Global" : {
		"BoxTitle": " <small><em>FoE Helper</em></small>"
	},

	"Boxes" : {
		"OwnpartCalculator" : {
			"Title": "Calculador cuota propia",
			"HelpLink": "https://foe-rechner.de/extension/index#Eigenanteilsrechner",
            "Step": "Nivel",
            "OldLevel": "Nivel viejo",
			"PatronPart": "Parte del contribuyente",
			"OwnPart": "Cuota propia",
			"LGTotalFP": "Gran Edificio FP en total",
            "OwnPartRemaining": "Faltan",
			"Done": "Listo",
			"BPs": "Plano", //Todo: Translate
			"Meds": "Meds", //Todo: Translate
			"Ext": "Ext", //Todo: Translate
			"Arc": "Arca", //Todo: Translate
			"Order": "Orden",
			"Deposit": "Ingresar",
			"CopyValues": "Copiar valores",
			"Note": "Guadar",
			"YourName": "Tu nombre",
			"IndividualName": "Nombre de gran edicio individual",
			"OutputScheme": "Esquema del output",
            "Auto": "Auto",
            "Place": "Puesto",
            "Levels": "Aumentar nivel",
            "NoPlaceSafe": "Ningun puesto asegurado"
		},

		"Calculator": {
			"Title": "Calculador de costes",
			"HelpLink": "https://foe-rechner.de/extension/index#Kostenrechner",
			"Step": "Nivel ",
			"AvailableFP": "FP disponibles",
			"FriendlyInvestment": "Inversión amistosa:", //Todo: Translate
			"ArcBonus": "Bonus del Arca",
			"Rate": "Cotizacion",
			"Up2LevelUp": "Hasta el próximo nivel",
			"FP": "FP",
			"Save": "Guardar",
			"BPs": "Plano",
			"Meds": "Meds",
			"Commitment": "Contribución",
			"Profit": "Ganancia",
			"LevelWarning": "ATENCIÓN: el Gran Edificio sube de nivel", //Todo: Translate
			"NoFPorMedsAvailable": "No hay FP o planos disponibles",
			"LGNotOpen": "El próximo nivel aún no está disponible",
			"LGNotConnected": "El edificio no está conectado a una carretera",
			"ActiveRecurringQuest": "Active recurring quest:", //Todo: Translate
			"Done": "done", //Todo: Translate
			"LevelWarningTT": "__fpcount__FP en exceso<br>Inversión máxima: __totalfp__FP", //Todo: Translate
			"NegativeProfitTT": "Puesto no asegurado. __fpcount__ FP adicionales tienen que invertirse para asegurar<br>Total para asegurar puesto: __totalfp__FP" //Todo: Translate
		},

		"LGOverviewBox": {
			"Title": "Posibles desembolsos",
			"Tooltip": {
				"FoundNew": "encontrado nuevo",
				"FoundAgain": "reconocido",
				"NoPayment": "no hay desembolsos hasta ahora",
			},
			"Building": "Edificio",
			"Level": "Nivel",
			"PayedTotal": "Ingresado / Total",
			"Rate": "Cotizacion",
			"Profit": "Ganancia",
			"NothingToGet": "Con <strong>__player__</strong> no hay nada para pillar"
		},

		"StrategyPoints" : {
			"Title" : "FP - Producciones",
			"TotalFPs": "Todos los FP de todos los edificios: ",
			"Amount": "Cantidad",
			"FPBar" : "FP en almacén: ",
			"BuyableFP" : "Adquiribles: "
		},

		"Productions" : {
			"Title" : "Vista general producción",
			"SearchInput": "Buscar edificio...",
			"Total" : "Total: ",
			"ModeGroups": "Agrupado",
			"ModeSingle": "Por separado",
			"Happiness": "Felicidad", //Todo: Translate
			"AdjacentBuildings": "Edificios colindantes", //Todo: Translate
			"Headings" : {
				"number" : "Número",
				"amount" : "Cantidad",
				"earning" : "Cosecha",
				"greatbuilding" : "Grandes Edificios",
				"production" : "Edificios de producción",
				"random_production" : "Producción aleatoria",
				"residential": "Edificios residenciales", //Todo: Translate
				"decoration": "Decoraciones",
				"street": "Carreteras",
				"goods": "Productoras de bienes",
				"culture": "Edificios culturales",
				"main_building" : "Ayuntamiento",
				"boost": "Potenciador",
				"all" : "Todos"
			}
		},

		"Neighbors" : {
			"Title" : "Producción de ",
			"ReadyProductions" : "Producción terminada",
			"OngoingProductions" : "Producción en curso"
		},

		"Outpost" : {
			"Title" : "Mercancías de los Asentamientos Culturales",
			"TitleShort" : "Resumen de mercancías - ",
			"TitleBuildings" : "Edificio",
			"TitleFree" : "Libre",
			"DescRequired" : "Necesitado",
			"DescInStock" : "Disponible",
			"DescStillMissing" : "<span style='color:#29b206'>Exceso</span> / <span style='color:#ef1616'>Fehlt</span>",
			"ExpansionsSum" : "Expansiones", // TODO: translate
			"nextTile" : "próxima expansión", // TODO: translate
			"tileNotPlanned" : "off", // TODO: translate
			"infoLine" : "__runNumber__. partidas, Probabilidad bonus x4 : __chanceX4__%", // TODO: translate
        },

        "Technologies": {
            "Title": "Coste de investigación por",
            "Resource": "Recurso",
            "DescRequired": "Necesitado",
            "DescInStock": "Disponible",
			"DescStillMissing": "<span style='color:#29b206'>Exceso</span> / <span style='color:#ef1616'>Fehlt</span>",
			"NoTechs": "Has alcanzado el final de esta era", //Todo: Translate
            "Eras": {
                1: "Edad de Piedra",
                2: "Edad de Bronce",
                3: "Edad de Hierro",
                4: "Alta Edad Media",
                5: "Plena Edad Media",
                6: "Baja Edad Media",
                7: "Edad Colonial",
                8: "Edad Industrial ",
                9: "Edad del Progreso",
                10: "Edad Moderna",
                11: "Edad PostModerna",
                12: "Edad Contemporánea",
                13: "El Mañana",
                14: "El Futuro",
                15: "Futuro Ártico",
                16: "Futuro Oceánico",
                17: "Futuro Virtual",
                18: "Edad Espacial: Marciana",
                19: "Edad Espacial: Ceres"
            }
        },

		"Campagne": {
            "Title": "Costes de conquista para ",
            "Reward": "Recompensa total ",
            "AlreadyDone": " conquistadas",
            "Resource": "Recurso",
            "DescRequired": "Requerido",
            "DescInStock": "Disponible",
            "DescStillMissing": "<span style='color:#29b206'>Excedente</span> / <span style='color:#ef1616'>Faltante</span>",
		},

		"EventList": {
			"Title": "Lista de misiones del evento: ", //Todo: Translate
			"Desc": "Misión", //Todo: Translate
			"Reward": "Recompensa", //Todo: Translate
            "Number": "No.", //Todo: Translate
			"Or": " o ", //Todo: Translate
			"And": " y ", //Todo: Translate
			"Upcoming": "PRÓXIMAS MISIONES (orden pueden variar)", //Todo: Translate
			"Waiting": "No misiones disponibles",  // Todo: Translate
		},
		
        "Negotiation": {
            "Title" : "Ayudante de negociacion",
            "WrongGoods": "Mercancia equivocada, por favor seguir a mano",
            "TryEnd": "Se terminaron los intentos",
            "Canceled": "Negociación cancelada",
            "Success": "Acierto",
			"Chance": "Probabilidad",
			"Person": "Persona",
			"Average": "Cantidad Ø", //Todo: Translate
			"Costs": "Costes:", //Todo: Translate
			"Round": "Ronda", //Todo: Translate
			"Stock": "Existencias:", //Todo: Translate
			"GoodsLow": "ATENCIÓN: existencias bajas", //Todo: Translate
			"GoodsCritical": "ATENCIÓN: existencias críticas", //Todo: Translate
			"DragDrop": "Puedes reordenar los íconos arrastrándolos y así personalizar el orden del primer intento.", //Todo: Translate
			"TableLoadError": "Error al cargar la tabla de negociaciones" //Todo: Translate
        },

		"Settings" : {
			"Title" : "Ajustes",
			"Active" : "Activo",
			"Inactive" : "Inactivo",
		},

		"Infobox" : {
			"Title" : "Infobox",
			"Filter" : "Filtro",
			"FilterGex" : "EG",
			"FilterAuction" : "Subasta",
			"FilterLevel" : "Subida nivel",
			"FilterMessage" : "Mensaje",
			"FilterGildFights" : "Batallas de gremio", //Todo: Translate
			"FilterTrade" : "Comercio",
			"ResetBox" : "Vaciar el box",
			"Messages" : {
				"GEX" : "<strong>__player__</strong> ha conseguido __points__ puntos en la EG.",
				"LevelUp" : "__player__'s __building__ acaba de subir al nivel __level__.<br>Has conseguido el puesto <strong>__rank__</strong> y has obtenido <strong>__fps__</strong> FPs.",
				"Auction" : "<strong>__player__</strong> ha pujado ahora mismo__amount__ monedas",
				"Trade" : "<strong>__player__</strong> ha aceptado tu oferta.<br>Tienes __needValue__ __need__ por __offerValue__ __offer__",
				"MsgBuilding" : "__building__ - nivel __level__",
				"GildFightOccupied": "La provincia <span style=\"color:#ffb539\">__provinceName__</span> ha sido conquistada por <span style=\"color:__attackerColor__;text-shadow: 0 1px 1px __attackerShadow__\">__attackerName__</span> y estará bloqueada hasta __untilOccupied__"   // Todo: Translate
			}
		},

		"Units" : {
			"Title": "Resumen del ejercito",
			"NextUnitsIn": "Las proximas __count__ unidades llegan <span class=\"alca-countdown\"></span> a las __harvest__ horas",
			"ReadyToLoot": "Listo para la cosecha!",
			"Proportionally": "En proporción",
			"Quantity": "Cantidad",
			"Unit": "Unidad",
			"Status": "Estado",
			"Attack": "Ataque",
			"Defend": "Defensa",
			"NotFilled": "no está lleno",
			"Bind": "Atado",
			"Unbind": "Independiente"
		},
		
		"CityMap": {
			"TitleSend": "Submit data", //Todo: Translate
			"Desc1": "Para poder planificar tu ciudad necesitamos transferir tus datos a foe-rechner.de", //Todo: Translate
			"Desc2": "<button class='btn-default' id='submit-data' onclick='CityMap.SubmitData()'>Submit</button>", //Todo: Translate
			"SubmitSuccess": "Datos transferidos... visita ", //Todo: Translate
			"WholeArea": "Área total: ",
			"FreeArea": "Área disponible: "
		},

		"Gildfights": {
			"Title": "Vista general de jugadores", //Todo: Translate
			"Player": "Jugador", //Todo: Translate
			"Negotiations": "Negociaciones", //Todo: Translate
			"Fights": "Luchas", //Todo: Translate
			"LastSnapshot": " - última captura hace __time__ ", //Todo: Translate
		},

		"HiddenRewards": {
			"Title": "Incidentes",  // Todo: Translate
			"Appears": "Aparece",  // Todo: Translate
			"Disappears": "Desaparece",  // Todo: Translate
			"NoEvents": "No hay incidentes"  // Todo: Translate
		}
	},

	"Menu" : {
		"Productions" : {
			"Title" : "Resumen de producción ",
			"Desc" : "Muestra la cantidad de las producciones actuales."
		},
		"Calculator" : {
			"Title" : "Calculador de costes",
			"Desc" : "Calcula todos los puestos para ti y determina si se pueden pillar FPs",
			"Warning": "Desactivado: métete primero en un Gran Edificio de otro jugador!"
		},
		"OwnpartCalculator" : {
			"Title" : "Calculador cuota propia",
			"Desc" : "Crear plan de pago, calcular puestos externos y copiar el valor",
			"Warning": "Desactivado: métete primero en un Gran Edificio tuyo!"
        },
        "Technologies": {
            "Title": "Tecnología",
            "Desc": "Calcular costes de investigación",
            "Warning": "Desactivado: abre primero el árbol de tecnologías!"
        },
		"Campagne": {
            "Title": "Campaña", //Todo: Translate
            "Desc": "Vista general de los recursos requeridos", //Todo: Translate
        	"Warning" : "Desactivado: abre una provincia" //Todo: Translate
		},
        "Event": {
            "Title": "Lista de misiones de evento", //Todo: Translate
            "Desc": "Vista general de las misiones actuales y próximas" //Todo: Translate
		},
        "Negotiation": {
            "Title": "Asistente de negociaciones",
			"Desc": "Te da sugerencias precisas para las negociaciones",
			"Warning": "Desactivado: empieza primero una negociación!"
        },
		"Settings" : {
			"Title" : "Ajustes",
			"Desc" : "Aquí puedes ajustar algunas cositas"
		},
		"Chat" : {
			"Title" : "Chat en vivo del gremio",
			"Desc" : "Chatea en tiempo real con todos"
		},
		"Unit" : {
			"Title" : "Ejercito",
			"Desc": "Todas tus tropas a simple vista",
			"Warning": "Abre primero 1x tu \"Gestión del Ejercito\"<br>tecla \"U\""
		},
		"Forum" : {
			"Title" : "Forum",
			"Desc" : "¿Tienes una pregunta? ¿Estas molesto por algo? O solo para hablar..."
		},
		"Ask" : {
			"Title" : "Pregunta / Respuesta",
			"Desc" : "¿No sabes cómo funciona algo?<br>Compruebalo!"
		},
		"Bugs" : {
			"Title" : "Error / Propuesta",
			"Desc" : "¿Algo no funciona como debería o tienes una idea?"
		},
		"OutP" : {
			"Title" : "Asentamientos Culturales",
            "Desc": "Resumen de los recursos necesitados",
            "DescWarningOutpostData": "<em id='outPW' class='tooltip-error'>Deactivado: empieza primero un asentamiento cultural y vuelve a cargar el juego (F5)",
			"DescWarningBuildings" : "<em id='outPW' class='tooltip-error'>Desactivado: visita primero el asentamiento cultural!<br></em>Resumen de los recursos necesitados"
		},
		"Info" : {
			"Title" : "Info Box",
			"Desc" : "Te enseña todas las cosas que pasan en el \"fondo \"<br><em>Poco a poco se llenará con información...</em>"
		},
		"HiddenRewards": {
			"Title": "Incidentes", //Todo: Translate
			"Desc": "Vista general de incidentes" //Todo: Translate
		},
		"Citymap": {
			"Title": "Vista general de tu ciudad",
			"Desc": "Te enseña la vista esquemática de tu ciudad desde arriba"
		}
	},

	"Settings" : {
		"Version": {
			"Title" : "Versión",
			"DescDebug" : "<p>Extension <strong class='text-danger'>BETA</strong></p><a target='_blank' href='https://foe-rechner.de/extension/update?v=__version__&lang=__language__'>Changelog</a>",  // Todo: Translate: Translate
			"Desc" : "Chrome Extension Version",
			"PlayerId": "Player-Id:",
			"GuildId": "Gild-Id:",
			"World": "World:"
		},
		"GlobalSend": {
			"Title" : "Transmisión a foe-rechner.de",
			"Desc" : "Si deseas realizar un seguimiento de datos con tu gremio, activa este punto.<br>Para una extensión autosuficiente, simplemente desactiva"
		},
		"SendTavernInfo": {
			"Title" : "Actividad de ayuda",
			"Desc" : "¿Quieres que sean transferidas las actividades de ayuda al iniciar?"
		},
		"SendGEXInfo": {
			"Title" : "Evaluación de EG",
			"Desc" : "Transmite los datos de la EG al hacer clic en rankings o colocaciones"
		},
		"SendGildMemberLGInfo": {
			"Title" : "Datos de Grandes Edificios de otros mienmbros del gremio",
			"Desc" : "Cuando visitas otros miembors del gremio, todos los datos de los Grandes Edificios son transferidos a foe-rechner.de, si global está activado"
		},
		"ShowNeighborsGoods": {
			"Title" : "Cosecha de la vecindad",
			"Desc" : "Mostrar lo que actualmentese se está produciendo cuando visitas la vecindad"
		},
		"SendInvestigations": {
			"Title" : "Inversiones de FP",
			"Desc" : "Al entrar en 'Ayuntamiento' > 'Novedades' > 'Grandes edificios' serán transferidas las inversiones de FP"
		},
		"ShowTavernBadge": {
			"Title" : "Mostrar placa de tabernas ",
			"Desc" : "Tan pronto como se activa un potenciador en la taberna, aparece un contador, globalmente desplazable"
		},
		"PreScanLGList": {
			"Title" : "Escanear con antelación los Grandes Edificios",
			"Desc" : "Escanea la lista de resumen de Grandes Edificios del vecino cuando se abre y, determina rellenables Grandes Edificios.<br><u>Nota:</u> Dado que los puestos finales solo se transmiten cuando se abre un edificio grande, puede que el resultado sea diferente. Sin embargo, el escaneo se guarda."
		},
		"AutomaticNegotiation": {
			"Title" : "Asistente de negociación",
			"Desc" : "¿Deseas que el asistente se abra automáticamente al iniciar una negociación y que se cierre al terminar?"
		},
		"ResetBoxPositions": {
			"Title" : "Coordenadas del box",
			"Desc" : "¿Quieres que todas las coordenadas sean restablecidas?",
			"Button" : "Borrar!"
		},
		"MenuLength": {
			"Title" : "Tamaño del menú", //Todo: Translate
			"Desc" : "¿Cúantos elementos de altura quieres que tenga el menú?<br> Vacío o \"0\" significa altura automática." //Todo: Translate
		},
		"ChangeLanguage": {
			"Title" : "Cambiar idioma",
			"Desc" : "¿Qué idioma debe usarse en lugar del reconocido?",
			"Dropdown": {
				"de": "Deutsch", // Dont translate!!!
				"en": "English", // Dont translate!!!
				"fr": "Français", // Dont translate!!!
				"es": "Español", // Dont translate!!!
				"ru": "Русский", // Dont translate!!!
				"sv": "Svenska", // Dont translate!!!
				"cs": "Český", // Dont translate!!!
				"ro": "Română" // Dont translate!!!
			}
		}
	},

	"Eras" : {
		"NoAge": "Sin era",
		"StoneAge": "Edad de Piedra",
		"BronzeAge": "Edad de Bronce",
		"IronAge": "Edad de Hierro",
		"EarlyMiddleAge": "Alta Edad Media",
		"HighMiddleAge": "Plena Edad Media",
		"LateMiddleAge": "Baja Edad Media",
		"ColonialAge": "Edad Colonial",
		"IndustrialAge": "Era Industrial",
		"ProgressiveEra": "Era del Progreso",
		"ModernEra": "Edad Moderna",
		"PostModernEra": "Edad Postmoderna",
		"ContemporaryEra": "Edad Contemporánea",
		"TomorrowEra": "Era del Mañana",
		"FutureEra": "Era del Futuro",
		"ArcticFuture": "Futuro Artico",
		"OceanicFuture": "Futuro Oceanico",
		"VirtualFuture": "Futuro Virtual",
		"SpaceAgeMars" : "Era espacial: marciana"
	},

	"API" : {
		"UpdateSuccess" : "Actualizacion realizada",
		"GEXPlayer" : "Se han actualizado los puestos de los miembros en la EG",
		"GEXChampionship" : "Se ha actualizado el puesto del gremio en la EG",
		"LGInvest" : "Tus inversiones en grandes edificios han sido transferidos",
		"LGGildMember" : "__player__'s GEs han sido transferidos"
	},

	"HiddenRewards": {
		"Positions": {
			"nature": "Naturaleza",  //Todo: Translate
			"shore": "Costa",  //Todo: Translate
			"water": "en el agua",  //Todo: Translate
			"cityRoadSmall": "carretera simple",  //Todo: Translate
			"cityRoadBig": "carretera grande",   // Todo: Translate
			"guildExpedition": "Expedición de gremio" //Todo: Translate
		},
		"Table": {
			"type": "Tipo", //Todo: Translate
			"position": "Posición", //Todo: Translate
			"expires": "Expira en" //Todo: Translate
		}
	}
};
