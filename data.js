const applyUrl = "https://secured-forms.com/reply-to/family-properties";

const cities = [
  {
    id: "toronto",
    name: "Toronto",
    note: "Urban apartments and townhomes",
    status: "Buildings listed",
  },
  {
    id: "oshawa",
    name: "Oshawa",
    note: "Durham Region rentals",
    status: "Building listed",
  },
  {
    id: "penetanguishene",
    name: "Penetanguishene",
    note: "Quiet residential setting",
    status: "Building listed",
  },
  {
    id: "sault-ste-marie",
    name: "Sault Ste. Marie",
    note: "Apartments and townhomes",
    status: "Buildings listed",
  },
  {
    id: "lindsay",
    name: "Lindsay",
    note: "Contact for current availability",
    status: "Ask leasing",
  },
  {
    id: "guelph",
    name: "Guelph",
    note: "Contact for current availability",
    status: "Ask leasing",
  },
  {
    id: "london",
    name: "London",
    note: "Contact for current availability",
    status: "Ask leasing",
  },
  {
    id: "kitchener",
    name: "Kitchener",
    note: "Contact for current availability",
    status: "Ask leasing",
  },
  {
    id: "cambridge",
    name: "Cambridge",
    note: "Contact for current availability",
    status: "Ask leasing",
  },
  {
    id: "hamilton",
    name: "Hamilton",
    note: "Multiple active listings",
    status: "Buildings listed",
  },
];

const buildings = [
  {
    id: "oconnor",
    city: "toronto",
    bedrooms: ["1", "2"],
    name: "O'Connor Apartments",
    address: "994 O'Connor Drive, East York, ON",
    price: "From $1,640",
    summary:
      "Renovated apartments with access to shops, parks, restaurants, and public transit.",
    features: ["Heat + water", "Laundry", "Transit nearby", "Parks nearby"],
    suites: [
      {
        name: "1 Bedroom",
        price: "$1,640 monthly",
        status: "Available now",
      },
    ],
    link: "https://www.familyproperties.ca/properties/o-connor-apartments",
  },
  {
    id: "bansley",
    city: "toronto",
    bedrooms: ["bachelor", "1"],
    name: "Bansley Apartments",
    address: "1A Bansley Ave, Toronto, ON",
    price: "From $1,425",
    summary:
      "Midtown low-rise offering bachelor and one-bedroom apartments near transit and daily amenities.",
    features: ["Heat + water", "Laundry", "Parks nearby", "Shopping nearby"],
    suites: [
      {
        name: "Bachelor",
        price: "$1,425 monthly",
        status: "Available now",
      },
    ],
    link: "https://www.familyproperties.ca/properties/bansley-apartments",
  },
  {
    id: "dawes",
    city: "toronto",
    bedrooms: ["2"],
    name: "Dawes Apartments",
    address: "508 Dawes Road, East York, ON",
    price: "Contact leasing",
    summary:
      "Updated East York building with renovated suites, transit access, balconies, and local amenities nearby.",
    features: ["Balconies", "Laundry", "Elevator", "Video surveillance"],
    suites: [
      {
        name: "2 Bedroom",
        price: "Contact leasing",
        status: "Ask about current availability",
      },
    ],
    link: "https://www.familyproperties.ca/apartments/dawes-apartments",
  },
  {
    id: "driftwood",
    city: "toronto",
    bedrooms: ["1", "2"],
    name: "Driftwood Apartments",
    address: "101 Driftwood Ave, Toronto, ON",
    price: "Contact leasing",
    summary:
      "North York apartments with transit access, green space, balconies, and highway connections.",
    features: ["Balconies", "Laundry", "Transit nearby", "Green space"],
    suites: [
      {
        name: "Apartment suites",
        price: "Contact leasing",
        status: "Ask about availability",
      },
    ],
    link: "https://www.familyproperties.ca/apartments/driftwood-apartments",
  },
  {
    id: "torbolton",
    city: "toronto",
    bedrooms: ["townhouse"],
    name: "Torbolton Townhouse",
    address: "2 Torbolton Drive, Toronto, ON",
    price: "Contact leasing",
    summary:
      "Townhouse living with convenient highway access, schools, parks, shops, and TTC nearby.",
    features: ["Townhouse", "Transit nearby", "Parks nearby", "Shopping nearby"],
    suites: [
      {
        name: "Townhouse",
        price: "Contact leasing",
        status: "Ask about availability",
      },
    ],
    link: "https://www.familyproperties.ca/apartments/torbolton-townhouse",
  },
  {
    id: "keele",
    city: "toronto",
    bedrooms: ["bachelor"],
    name: "3250 Keele Apartments",
    address: "3250 Keele Street, Toronto, ON",
    price: "From $1,400",
    summary:
      "Updated Toronto apartment building with practical suites, transit access, and local conveniences.",
    features: ["Water", "Elevator", "Laundry", "Parking"],
    suites: [
      {
        name: "Bachelor",
        price: "$1,400 monthly",
        status: "Available now",
      },
    ],
    link: "https://www.familyproperties.ca/properties/keele-apartments",
  },
  {
    id: "grange",
    city: "toronto",
    bedrooms: ["1"],
    name: "Grange Apartments",
    address: "164-168 Grange Avenue, Toronto, ON",
    price: "Contact leasing",
    summary:
      "Downtown Toronto apartments near Kensington Market, transit, hospitals, and universities.",
    features: ["Power + heat + water", "Laundry", "Transit nearby", "Walkable"],
    suites: [
      {
        name: "Apartment suites",
        price: "Contact leasing",
        status: "Ask about availability",
      },
    ],
    link: "https://www.familyproperties.ca/properties/grange-apartments",
  },
  {
    id: "buena-vista",
    city: "oshawa",
    bedrooms: ["1", "2"],
    name: "Buena Vista",
    address: "305 Buena Vista Avenue, Oshawa, ON",
    price: "From $1,699",
    summary:
      "Family-friendly Oshawa apartments with in-suite laundry and access to Durham Region amenities.",
    features: ["In-suite laundry", "Family friendly", "Durham Region", "Transit access"],
    suites: [
      {
        name: "Apartment suites",
        price: "From $1,699",
        status: "Ask about current availability",
      },
    ],
    link: "https://www.familyproperties.ca/apartments/cities/oshawa?view=static",
  },
  {
    id: "owen",
    city: "penetanguishene",
    bedrooms: ["1", "2"],
    name: "Owen Apartments",
    address: "51 Owen Street, Penetanguishene, ON",
    price: "From $1,699",
    summary:
      "Renovated suites in a quiet residential setting near parks, local amenities, and the waterfront.",
    features: ["Heat", "Balconies", "Laundry", "Parking available"],
    suites: [
      {
        name: "Renovated 1 Bedroom",
        price: "$1,699 monthly",
        status: "Available now",
      },
      {
        name: "2 Bedroom with Balcony",
        price: "$1,949 monthly",
        status: "Available now",
      },
    ],
    link: "https://www.familyproperties.ca/properties/owen-apartments",
  },
  {
    id: "crystal-apartments",
    city: "sault-ste-marie",
    bedrooms: ["1", "2"],
    name: "Crystal Heights Apartments",
    address: "24 Clearview Drive, Sault Ste. Marie, ON",
    price: "From $1,350",
    summary:
      "Pet-friendly apartment community with green space, transit access, and renovated suites.",
    features: ["Water", "Laundry", "Pet friendly", "Green space"],
    suites: [
      {
        name: "Renovated 1 Bedroom",
        price: "$1,350 monthly",
        status: "Available now",
      },
      {
        name: "2 Bedroom",
        price: "$1,449 monthly",
        status: "Available now",
      },
    ],
    link: "https://www.familyproperties.ca/apartments/crystal-heights-ssm-inc",
  },
  {
    id: "crystal-townhouses",
    city: "sault-ste-marie",
    bedrooms: ["townhouse"],
    name: "Crystal Heights Townhouses",
    address: "24 Clearview Drive, Sault Ste. Marie, ON",
    price: "Contact leasing",
    summary:
      "Pet-friendly townhouses with private yards, in-suite laundry, green space, and nearby shopping.",
    features: ["Townhouse", "Washer + dryer", "Private yard", "Pet friendly"],
    suites: [
      {
        name: "Townhouse",
        price: "Contact leasing",
        status: "Ask about availability",
      },
    ],
    link: "https://www.familyproperties.ca/apartments/crystal-heights-townhouses",
  },
  {
    id: "melvin-221",
    city: "hamilton",
    bedrooms: ["1", "2"],
    name: "Melvin Apartments",
    address: "221 Melvin Avenue, Hamilton, ON",
    price: "From $1,440",
    summary:
      "Revitalized Hamilton building with renovated suites, balconies, laundry, transit access, and parking.",
    features: ["Heat + water", "Balconies", "Laundry", "Parking"],
    suites: [
      {
        name: "1 Bedroom",
        price: "From $1,440",
        status: "Ask about availability",
      },
      {
        name: "2 Bedroom",
        price: "Contact leasing",
        status: "Ask about availability",
      },
    ],
    link: "https://www.familyproperties.ca/properties/melvin-apartments",
  },
  {
    id: "melvin-285",
    city: "hamilton",
    bedrooms: ["1"],
    name: "285 Melvin Apartments",
    address: "285 Melvin Ave, Hamilton, ON",
    price: "From $1,440",
    summary:
      "Boutique Hamilton building with high ceilings, large windows, balconies, elevator, laundry, and parking.",
    features: ["Heat + water", "Elevator", "Balconies", "Laundry"],
    suites: [
      {
        name: "1 Bedroom",
        price: "From $1,440",
        status: "Ask about availability",
      },
    ],
    link: "https://www.familyproperties.ca/properties/285-melvin-apartments",
  },
  {
    id: "bold",
    city: "hamilton",
    bedrooms: ["bachelor"],
    name: "Bold Street Apartments",
    address: "123-125 Bold Street, Hamilton, ON",
    price: "From $1,125",
    summary:
      "Classic Art Deco building in downtown Hamilton near Hess Village, transit, shops, and services.",
    features: ["Heat + water", "Elevator", "Laundry", "Downtown"],
    suites: [
      {
        name: "Bachelor",
        price: "From $1,125",
        status: "Available now",
      },
      {
        name: "Large Bachelor",
        price: "Contact leasing",
        status: "Ask about availability",
      },
    ],
    link: "https://www.familyproperties.ca/properties/bold-street-apartments",
  },
  {
    id: "melvin-375",
    city: "hamilton",
    bedrooms: ["1", "2"],
    name: "375 Melvin Apartments",
    address: "375 Melvin Ave, Hamilton, ON",
    price: "From $1,450",
    summary:
      "Hamilton rental building near other Melvin Avenue properties with practical apartment layouts.",
    features: ["Hamilton", "Transit access", "Residential area", "Contact leasing"],
    suites: [
      {
        name: "Apartment suites",
        price: "From $1,450",
        status: "Ask about current availability",
      },
    ],
    link: "https://www.familyproperties.ca/apartments/cities/hamilton?view=static",
  },
];
