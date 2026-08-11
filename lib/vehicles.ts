export type Vehicle = {
  id: string
  brand: string
  model: string
  year: number
  transmission: string
  mileage: string
  fuel: string
  price: string
  category: 'Sedan' | 'SUV' | 'Coupe' | 'Pickup'
  image: string
}

export const vehicles: Vehicle[] = [
  {
    id: 'm4',
    brand: 'BMW',
    model: 'M4 Competition',
    year: 2024,
    transmission: 'Automatic',
    mileage: '12,000 km',
    fuel: 'Xăng',
    price: '2.9 tỷ',
    category: 'Coupe',
    image: '/cars/car-coupe-1.png',
  },
  {
    id: 's-class',
    brand: 'Mercedes-Benz',
    model: 'S 450 Luxury',
    year: 2023,
    transmission: 'Automatic',
    mileage: '18,500 km',
    fuel: 'Xăng',
    price: '4.2 tỷ',
    category: 'Sedan',
    image: '/cars/car-sedan-1.png',
  },
  {
    id: 'gle',
    brand: 'Mercedes-Benz',
    model: 'GLE 450 4MATIC',
    year: 2024,
    transmission: 'Automatic',
    mileage: '8,900 km',
    fuel: 'Xăng',
    price: '3.6 tỷ',
    category: 'SUV',
    image: '/cars/car-suv-1.png',
  },
  {
    id: 'ranger',
    brand: 'Ford',
    model: 'Ranger Raptor',
    year: 2023,
    transmission: 'Automatic',
    mileage: '24,000 km',
    fuel: 'Dầu',
    price: '1.35 tỷ',
    category: 'Pickup',
    image: '/cars/car-pickup-1.png',
  },
  {
    id: 'gt',
    brand: 'Porsche',
    model: '911 Carrera GTS',
    year: 2024,
    transmission: 'PDK',
    mileage: '5,200 km',
    fuel: 'Xăng',
    price: '8.9 tỷ',
    category: 'Coupe',
    image: '/cars/car-coupe-2.png',
  },
  {
    id: 'cayenne',
    brand: 'Porsche',
    model: 'Cayenne Coupé',
    year: 2023,
    transmission: 'Automatic',
    mileage: '15,700 km',
    fuel: 'Xăng',
    price: '5.4 tỷ',
    category: 'SUV',
    image: '/cars/car-suv-2.png',
  },
]

export const categories = ['All', 'Sedan', 'SUV', 'Coupe', 'Pickup'] as const
