fx_version 'cerulean'
game 'gta5'


server_scripts {
	'@mysql-async/lib/MySQL.lua',
	'@es_extended/locale.lua',
	'locales/br.lua',
	'locales/de.lua',
	'locales/en.lua',
	'locales/ru.lua',
	'locales/fi.lua',
	'locales/fr.lua',
	'locales/es.lua',
	'locales/sv.lua',
	'locales/pl.lua',
	'config.lua',
	'server/main.lua'
}

client_scripts {
	'@es_extended/locale.lua',
	'locales/br.lua',
	'locales/de.lua',
	'locales/en.lua',
	'locales/ru.lua',
	'locales/fi.lua',
	'locales/fr.lua',
	'locales/es.lua',
	'locales/sv.lua',
	'locales/pl.lua',
	'config.lua',
	'client/main.lua',
	'client/menu.lua'
}

ui_page "nui/ui.html"

files {
	"nui/ui.html",
	"nui/ui.js",
	"nui/ui.css",
	'nui/img/*.png',
	'nui/img/*.jpg',
	'nui/img/corbatas/*.jpg',
	'nui/img/mask/*.jpg',
	'nui/img/pants/*.jpg',
	'nui/img/mochilas/*.jpg',
	'nui/img/manos/*.jpg',
	'nui/img/brazaletes/*.jpg',
	'nui/img/relojes/*.jpg',
	'nui/img/orejas/*.jpg',
	'nui/img/lentes/*.jpg',
	'nui/img/sombreros/*.jpg',
	'nui/img/zapatos/*.jpg',
	'nui/img/chalecos/*.jpg',
	'nui/img/chaquetas/*.jpg',
	'nui/img/blusas/*.jpg',
}

dependencies {
	'es_extended',
	--'skincreator'
	'esx_skin',
}
