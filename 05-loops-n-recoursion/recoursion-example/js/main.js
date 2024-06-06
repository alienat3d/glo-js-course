const data = {
	'Электроника': {
		'Телефоны': {
			'Apple': {
				'iphone7': 'iPhone 7',
				'iphone8': 'iPhone 8',
				'iphoneX': {
					'iphoneX': 'iPhone X',
					'iphoneXr': 'iPhone Xr',
				},
				'iphone11': 'iPhone 11',
				'iphone12': 'iPhone 12',
				'iphone13': 'iPhone 13',
			},
			'Samsung': {
				'galaxys22ultra': 'galaxy s22 ultra',
				'alaxys21ultra': 'galaxy s21 ultra',
				'alaxys18ultra': 'galaxy s18'
			},
			'Xiaomi': {
				'xiaomi17': 'Xiaomi 17',
				'xiaomi18': 'Xiaomi 18',
			}
		}
	},
	'Одежда': {
		'Штаны': {
			'Спортивные': {
				'adidas': 'Adidas',
				'nike': 'Nike',
				'puma': 'Puma'
			},
			'Джинсы': {
				'Классика': {
					'levis': "levi's",
					'lee': 'Lee'
				},
				'Короткие': {
					'1': 'Бренд 1',
					'2': 'Бренд 2',
					'3': 'Бренд 3'
				}
			}
		}
	},
}

function createTree(data) {
	const ul = document.createElement('ul');

	for (const [key, value] of Object.entries(data)) {
		const li = document.createElement('li');
		if (typeof value == 'object') {
			li.textContent = key;
			li.classList.add('parent')

			li.addEventListener('click', function (event) {
				event.stopPropagation()
				if (event.target.classList.contains('parent')) {
					li.classList.toggle('open')
				}

			}, { capture: false })

			li.appendChild(createTree(value));
		} else {
			li.textContent = value;
		}

		ul.appendChild(li);
	}

	return ul;
}


document.querySelector('#list').appendChild(createTree(data));
