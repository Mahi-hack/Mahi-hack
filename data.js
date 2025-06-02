// Salon data
const salons = [
  {
    id: '1',
    name: 'Glamour & Style Salon',
    image: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: '123 Main Street',
    city: 'New York',
    rating: 4.8,
    reviewCount: 245,
    priceRange: '$$$',
    description: 'A premium salon offering a wide range of hair and beauty services with experienced stylists using top-quality products.',
    services: [
      { id: 's1', name: 'Haircut & Styling', description: 'Professional haircut and styling', price: 75, duration: 60, category: 'Hair' },
      { id: 's2', name: 'Color & Highlights', description: 'Full hair coloring service', price: 120, duration: 120, category: 'Hair' },
      { id: 's3', name: 'Manicure', description: 'Classic manicure treatment', price: 35, duration: 45, category: 'Nails' },
      { id: 's4', name: 'Facial', description: 'Rejuvenating facial treatment', price: 90, duration: 60, category: 'Skin' }
    ],
    openingHours: {
      monday: '9:00 AM - 7:00 PM',
      tuesday: '9:00 AM - 7:00 PM',
      wednesday: '9:00 AM - 7:00 PM',
      thursday: '9:00 AM - 7:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: 'Closed'
    },
    featured: true
  },
  {
    id: '2',
    name: 'Elite Hair Studio',
    image: 'https://images.pexels.com/photos/705255/pexels-photo-705255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: '456 Park Avenue',
    city: 'New York',
    rating: 4.6,
    reviewCount: 187,
    priceRange: '$$',
    description: 'Trendy hair studio specializing in modern cuts, color techniques, and hair treatments for all hair types.',
    services: [
      { id: 's1', name: 'Precision Haircut', description: 'Tailored haircut for your face shape', price: 65, duration: 45, category: 'Hair' },
      { id: 's2', name: 'Balayage', description: 'Hand-painted highlights', price: 150, duration: 150, category: 'Hair' },
      { id: 's3', name: 'Blowout', description: 'Professional blow dry styling', price: 45, duration: 30, category: 'Hair' },
      { id: 's4', name: 'Deep Conditioning', description: 'Intensive hair treatment', price: 40, duration: 30, category: 'Hair' }
    ],
    openingHours: {
      monday: '10:00 AM - 7:00 PM',
      tuesday: '10:00 AM - 7:00 PM',
      wednesday: '10:00 AM - 7:00 PM',
      thursday: '10:00 AM - 7:00 PM',
      friday: '10:00 AM - 8:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: '11:00 AM - 5:00 PM'
    }
  },
  {
    id: '3',
    name: 'Serenity Spa & Salon',
    image: 'https://images.pexels.com/photos/3997385/pexels-photo-3997385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: '789 Wellness Way',
    city: 'Los Angeles',
    rating: 4.9,
    reviewCount: 312,
    priceRange: '$$$$',
    description: 'Luxury spa and salon offering a complete range of beauty and wellness services in a tranquil environment.',
    services: [
      { id: 's1', name: 'Signature Massage', description: '90-minute full body massage', price: 120, duration: 90, category: 'Spa' },
      { id: 's2', name: 'Premium Haircut', description: 'Consultation, cut and style', price: 85, duration: 60, category: 'Hair' },
      { id: 's3', name: 'Spa Manicure & Pedicure', description: 'Deluxe treatment for hands and feet', price: 95, duration: 90, category: 'Nails' },
      { id: 's4', name: 'Anti-Aging Facial', description: 'Rejuvenating skin treatment', price: 110, duration: 75, category: 'Skin' }
    ],
    openingHours: {
      monday: '9:00 AM - 8:00 PM',
      tuesday: '9:00 AM - 8:00 PM',
      wednesday: '9:00 AM - 8:00 PM',
      thursday: '9:00 AM - 8:00 PM',
      friday: '9:00 AM - 9:00 PM',
      saturday: '9:00 AM - 9:00 PM',
      sunday: '10:00 AM - 6:00 PM'
    },
    featured: true
  },
  {
    id: '4',
    name: 'Modern Cuts',
    image: 'https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: '321 Fashion Street',
    city: 'Chicago',
    rating: 4.5,
    reviewCount: 156,
    priceRange: '$$',
    description: 'Contemporary salon focused on latest cutting techniques and trends with a team of passionate stylists.',
    services: [
      { id: 's1', name: 'Trendy Haircut', description: 'Modern cut with styling', price: 55, duration: 45, category: 'Hair' },
      { id: 's2', name: 'Color Refresh', description: 'Single process color', price: 75, duration: 90, category: 'Hair' },
      { id: 's3', name: 'Beard Trim', description: 'Professional beard grooming', price: 25, duration: 20, category: 'Grooming' },
      { id: 's4', name: 'Express Styling', description: 'Quick styling for special events', price: 40, duration: 30, category: 'Hair' }
    ],
    openingHours: {
      monday: '10:00 AM - 7:00 PM',
      tuesday: '10:00 AM - 7:00 PM',
      wednesday: '10:00 AM - 7:00 PM',
      thursday: '10:00 AM - 8:00 PM',
      friday: '10:00 AM - 8:00 PM',
      saturday: '9:00 AM - 6:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: '5',
    name: 'Pure Beauty Lounge',
    image: 'https://images.pexels.com/photos/3992855/pexels-photo-3992855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: '555 Glam Boulevard',
    city: 'Miami',
    rating: 4.7,
    reviewCount: 203,
    priceRange: '$$$',
    description: 'Upscale beauty lounge offering personalized services from highly trained professionals in a relaxing atmosphere.',
    services: [
      { id: 's1', name: 'Celebrity Haircut', description: 'Premium cut with head massage', price: 90, duration: 60, category: 'Hair' },
      { id: 's2', name: 'Full Highlights', description: 'Multi-dimensional color', price: 160, duration: 150, category: 'Hair' },
      { id: 's3', name: 'Gel Manicure', description: 'Long-lasting nail treatment', price: 45, duration: 45, category: 'Nails' },
      { id: 's4', name: 'Makeup Application', description: 'Professional makeup for any occasion', price: 75, duration: 60, category: 'Makeup' }
    ],
    openingHours: {
      monday: '9:00 AM - 7:00 PM',
      tuesday: '9:00 AM - 7:00 PM',
      wednesday: '9:00 AM - 7:00 PM',
      thursday: '9:00 AM - 8:00 PM',
      friday: '9:00 AM - 8:00 PM',
      saturday: '9:00 AM - 7:00 PM',
      sunday: '11:00 AM - 5:00 PM'
    }
  },
  {
    id: '6',
    name: 'Urban Style Co.',
    image: 'https://images.pexels.com/photos/3993305/pexels-photo-3993305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    address: '789 Downtown Ave',
    city: 'San Francisco',
    rating: 4.6,
    reviewCount: 178,
    priceRange: '$$$',
    description: 'Hip, urban salon known for creative color work and edgy styles in a vibrant atmosphere.',
    services: [
      { id: 's1', name: 'Creative Cut', description: 'Artistic haircut and style', price: 80, duration: 60, category: 'Hair' },
      { id: 's2', name: 'Fashion Color', description: 'Vibrant, trendy colors', price: 150, duration: 180, category: 'Hair' },
      { id: 's3', name: 'Brow Sculpting', description: 'Precision brow shaping', price: 35, duration: 30, category: 'Brows' },
      { id: 's4', name: 'Men\'s Grooming', description: 'Haircut and beard styling', price: 65, duration: 45, category: 'Grooming' }
    ],
    openingHours: {
      monday: 'Closed',
      tuesday: '11:00 AM - 8:00 PM',
      wednesday: '11:00 AM - 8:00 PM',
      thursday: '11:00 AM - 8:00 PM',
      friday: '11:00 AM - 9:00 PM',
      saturday: '10:00 AM - 7:00 PM',
      sunday: '12:00 PM - 6:00 PM'
    }
  }
];

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Miami',
  'San Francisco',
  'Seattle',
  'Boston',
  'Dallas',
  'Denver',
  'Atlanta',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Diego',
  'Portland'
];