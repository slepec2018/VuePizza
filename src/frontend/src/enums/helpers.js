const normalizeTask = (item) => {
  for (const dough of item.dough) {
    if (dough.name === `Тонкое`) {
      dough.nameEng = `light`;
    }
    if (dough.name === `Толстое`) {
      dough.nameEng = `large`;
    }
  }

  for (const size of item.sizes) {
    if (size.name === `23 см`) {
      size.nameEng = `small`;
    }
    if (size.name === `32 см`) {
      size.nameEng = `normal`;
    }
    if (size.name === `45 см`) {
      size.nameEng = `big`;
    }
  }

  for (const sauce of item.sauces) {
    if (sauce.name === `Томатный`) {
      sauce.nameEng = `tomato`;
    }
    if (sauce.name === `Сливочный`) {
      sauce.nameEng = `creamy`;
    }
  }

  for (const ingredient of item.ingredients) {
    switch (ingredient.name) {
      case `Грибы`:
        ingredient.nameEng = `mushrooms`;
        break;
      case `Чеддер`:
        ingredient.nameEng = `cheddar`;
        break;
      case `Салями`:
        ingredient.nameEng = `salami`;
        break;
      case `Ветчина`:
        ingredient.nameEng = `ham`;
        break;
      case `Ананас`:
        ingredient.nameEng = `ananas`;
        break;
      case `Бекон`:
        ingredient.nameEng = `bacon`;
        break;
      case `Лук`:
        ingredient.nameEng = `onion`;
        break;
      case `Чили`:
        ingredient.nameEng = `chile`;
        break;
      case `Халапеньо`:
        ingredient.nameEng = `jalapeno`;
        break;
      case `Маслины`:
        ingredient.nameEng = `olives`;
        break;
      case `Томаты`:
        ingredient.nameEng = `tomatoes`;
        break;
      case `Лосось`:
        ingredient.nameEng = `salmon`;
        break;
      case `Моцарелла`:
        ingredient.nameEng = `mozzarella`;
        break;
      case `Пармезан`:
        ingredient.nameEng = `parmesan`;
        break;
      case `Блю чиз`:
        ingredient.nameEng = `blue_cheese`;
        break;
    }
  }

  return item;
};

export { normalizeTask };
