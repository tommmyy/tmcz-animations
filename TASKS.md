## Zadání

1. Zapouzřete animační logiku v kompnentě `Collapsible` do vlastní komponenty `Fade`
	- Vytvořte i vlastní CSS soubor
2. Místo `<Button>` použijte vlastní styled komponentu Triangle (viz Typy).
	- Triangle by měl příjmat property `direction`, která může nabývat hodnot: `top` nebo `bottom`. Property určuje, kam bude trojúhelník směřovat.
	- Přidejte animaci otočení šipky, pokud se property `direction` změní.
	- Umístěte šipku doprava.
3. Doplňte styly:
	- Nastavte marginy a paddingy tak, aby Collapsible vypadala slušně.
	- Opravte kurzor tak, aby se šipka tvářila jako klikatelná.
4. Všimněte si, že i když při zobrazení/skrytí obsahu `Collapsible funguje animace nad průhledností (díky `Fade`), obsah (resp. jehé výšká) nepěkně poskakuje.
	- Připravte další komponetu podobnou `Fade`. Bude se jmenovat `Collapse`. Tato komponenta bude mít za úkol animovat výšku komponenty. Použijte společně komponenty `Fade` a `Collapse` v komponentě `Collapsible`. Viz tipy pro kompoziní animace.


## Tipy
	- [Jak vytvořit CSS only trojúhelník?](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_shapes_triangle-down)
	- [Jak animovat výšku?](https://codepen.io/LFeh/pen/ICkwe)
	- [Jak kombinovat animace?](https://reactcommunity.org/react-transition-group/css-transition) - Viz referenční příklad `CSSTransition` komponenty. 
