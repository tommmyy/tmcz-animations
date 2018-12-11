V tomto cvičení se seznámíme se základním CSS animacemi v React. Z větší části použijeme knihovnu `styled-components` pro rychlejší vývoj.

## Zadání

1. Seznamte se s projektem. Prohlédněte si `package.json` a komponenty.
2. Přepište komponentu ProgressBar pomocí styled-components a zbavte se tak `ProgressBar.css`.
3. Upravte komponentu `ProgressBar`:
	- Přidejte boolean property `intermediate`. Ve chvíli, kdy bude nastavena na `true`, přepneme ProgressBar do režimu, ve kterém není dopředu známá hodnota `value`.
	- V módu `intermediate` se bude komponeta chovat podobně jako [ProgressBar](https://material-ui.com/demos/progress/#linear-indeterminate) z Material-ui. 

## Tipy
- ProgressBar v režimu `intermediate` bude používat CSS animaci. [Jak na to ve styled-componenents?](https://www.styled-components.com/docs/basics#animations)
