const normalizePizza = item => {
  for (const dough of item.dough) {
    if (dough.name === 'Тонкое') {
      dough.nameEng = 'light';
    }
    if (dough.name === 'Толстое') {
      dough.nameEng = 'large';
    }
  }

  for (const size of item.sizes) {
    if (size.name === '23 см') {
      size.nameEng = 'small';
    }
    if (size.name === '32 см') {
      size.nameEng = 'normal';
    }
    if (size.name === '45 см') {
      size.nameEng = 'big';
    }
  }

  for (const sauce of item.sauces) {
    if (sauce.name === 'Томатный') {
      sauce.nameEng = 'tomato';
    }
    if (sauce.name === 'Сливочный') {
      sauce.nameEng = 'creamy';
    }
  }

  for (const ingredient of item.ingredients) {
    switch (ingredient.name) {
    case 'Грибы':
      ingredient.nameEng = 'mushrooms';
      break;
    case 'Чеддер':
      ingredient.nameEng = 'cheddar';
      break;
    case 'Салями':
      ingredient.nameEng = 'salami';
      break;
    case 'Ветчина':
      ingredient.nameEng = 'ham';
      break;
    case 'Ананас':
      ingredient.nameEng = 'ananas';
      break;
    case 'Бекон':
      ingredient.nameEng = 'bacon';
      break;
    case 'Лук':
      ingredient.nameEng = 'onion';
      break;
    case 'Чили':
      ingredient.nameEng = 'chile';
      break;
    case 'Халапеньо':
      ingredient.nameEng = 'jalapeno';
      break;
    case 'Маслины':
      ingredient.nameEng = 'olives';
      break;
    case 'Томаты':
      ingredient.nameEng = 'tomatoes';
      break;
    case 'Лосось':
      ingredient.nameEng = 'salmon';
      break;
    case 'Моцарелла':
      ingredient.nameEng = 'mozzarella';
      break;
    case 'Пармезан':
      ingredient.nameEng = 'parmesan';
      break;
    case 'Блю чиз':
      ingredient.nameEng = 'blue_cheese';
      break;
    }
  }

  return item;
};

const normalizeDataCart = items => {
  const cloneItems = JSON.parse(JSON.stringify(items));

  for (const item of cloneItems) {
    if (item.dough === 'light') {
      item.dough = 'тонком';
    }
    if (item.dough === 'large') {
      item.dough = 'толстом';
    }

    if (item.sauce === 'tomato') {
      item.sauce = 'томатный';
    }
    if (item.sauce === 'creamy') {
      item.sauce = 'сливочный';
    }

    if (item.diameter === 'small') {
      item.diameter = '23';
    }
    if (item.diameter === 'normal') {
      item.diameter = '32';
    }
    if (item.diameter === 'big') {
      item.diameter = '45';
    }

    for (const ingredient of item.ingridients) {
      switch (ingredient.name) {
      case 'mushrooms':
        ingredient.name = 'грибы';
        break;
      case 'cheddar':
        ingredient.name = 'чеддер';
        break;
      case 'salami':
        ingredient.name = 'салями';
        break;
      case 'ham':
        ingredient.name = 'ветчина';
        break;
      case 'ananas':
        ingredient.name = 'ананас';
        break;
      case 'bacon':
        ingredient.name = 'бекон';
        break;
      case 'onion':
        ingredient.name = 'лук';
        break;
      case 'chile':
        ingredient.name = 'чили';
        break;
      case 'jalapeno':
        ingredient.name = 'халапеньо';
        break;
      case 'olives':
        ingredient.name = 'маслины';
        break;
      case 'tomatoes':
        ingredient.name = 'томаты';
        break;
      case 'salmon':
        ingredient.name = 'лосось';
        break;
      case 'mozzarella':
        ingredient.name = 'моцарелла';
        break;
      case 'parmesan':
        ingredient.name = 'пармезан';
        break;
      case 'blue_cheese':
        ingredient.name = 'блю чиз';
        break;
      }
    }
    const textIng = [];
    for (const ingredient of item.ingridients) {
      textIng.push(ingredient.name);
    }

    item.ingridients = textIng.join(', ');
  }

  return cloneItems;
};

export { normalizePizza, normalizeDataCart };
