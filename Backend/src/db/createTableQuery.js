
const adminTableQuery = `CREATE TABLE Admins (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('superadmin', 'admin', 'moderator')),
    canRead BOOLEAN DEFAULT TRUE,
    canWrite BOOLEAN DEFAULT FALSE,
    canDelete BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`;

const userTableQuery = `CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
    password VARCHAR(255) NOT NULL CHECK (LENGTH(password) >= 8),
    phone VARCHAR(20) NOT NULL UNIQUE CHECK (phone ~* '^\\+?\\d{10,15}$'),
    
    -- Role and preferences
    role VARCHAR(20) NOT NULL DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
    preferred_villa_type VARCHAR(20) DEFAULT 'standard' CHECK (preferred_villa_type IN ('luxury', 'standard', 'budget')),
    newsletter_subscribed BOOLEAN DEFAULT TRUE,
    
    -- Timestamps and status
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    email_verified BOOLEAN DEFAULT FALSE,
    phone_verified BOOLEAN DEFAULT FALSE
);
`;

const userAddressTable = `CREATE TABLE Addresses (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL UNIQUE REFERENCES Users(id) ON DELETE CASCADE,  -- One-to-one relationship
    street VARCHAR(255),
    city VARCHAR(255),
    state VARCHAR(255),
    postal_code VARCHAR(20),
    country VARCHAR(100)
);
`;

const userBookingTable = `CREATE TABLE Booking_History (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
    booking_id INT NOT NULL,  -- Replace this with an actual reference to Booking table
    villa_id INT NOT NULL,    -- Replace this with an actual reference to Villa table
    booking_date TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled'))
);
`;


const villaDetails = `CREATE TABLE Villas (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price_per_night NUMERIC(10, 2) NOT NULL CHECK (price_per_night >= 0),
    description TEXT,
    amenities TEXT[],  -- Store the list of amenities as an array of strings
    images TEXT[],     -- Store the list of image URLs as an array of strings
    availability BOOLEAN DEFAULT TRUE,
    max_guests INT NOT NULL CHECK (max_guests >= 1),
    bedrooms INT NOT NULL CHECK (bedrooms >= 1),
    bathrooms INT NOT NULL CHECK (bathrooms >= 1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    -- Owner information (embedded structure in Mongoose)
    owner_name VARCHAR(255) NOT NULL,
    owner_email VARCHAR(255) NOT NULL CHECK (owner_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
    owner_phone VARCHAR(20) NOT NULL CHECK (owner_phone ~* '^\\d{10}$')
);
`;

const villaAddressTable = `CREATE TABLE Villa_Locations (
    id SERIAL PRIMARY KEY,
    villa_id INT NOT NULL UNIQUE REFERENCES Villas(id) ON DELETE CASCADE,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    lat NUMERIC(9, 6) NOT NULL,   -- Latitude with precision up to 6 decimal places
    lng NUMERIC(9, 6) NOT NULL    -- Longitude with precision up to 6 decimal places
);
`;

const villaBookingTable = `CREATE TABLE Villa_Bookings (
    id SERIAL PRIMARY KEY,
    villa_id INT NOT NULL REFERENCES Villas(id) ON DELETE CASCADE,
    guest_name VARCHAR(255) NOT NULL,
    check_in_date TIMESTAMP NOT NULL,
    check_out_date TIMESTAMP NOT NULL,
    guests INT NOT NULL CHECK (guests >= 1)
);
`;


const listingProperttable = `CREATE TABLE Property_Submissions (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
    contact_number VARCHAR(15) NOT NULL CHECK (contact_number ~* '^\\d{10,15}$'),
    property_location VARCHAR(255) NOT NULL,
    property_type VARCHAR(50) NOT NULL CHECK (property_type IN ('villa', 'camp', 'trek')),
    rooms INT CHECK (rooms >= 0),
    heard_from TEXT DEFAULT '',
    photos_website_link VARCHAR(255) CHECK (photos_website_link ~* '^https?://[^\s]+$'),
    description TEXT DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`

const trekParticipentsTable = `CREATE TABLE Trek_Participants (
    id SERIAL PRIMARY KEY,
    trek_id INT NOT NULL REFERENCES Treks(id) ON DELETE CASCADE,
    participant_name VARCHAR(255) NOT NULL,
    age INT NOT NULL CHECK (age >= 18),
    contact_email VARCHAR(255) NOT NULL CHECK (contact_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
    contact_phone VARCHAR(15) NOT NULL CHECK (contact_phone ~* '^\\d{10}$'),
    emergency_contact_name VARCHAR(255) NOT NULL,
    emergency_contact_phone VARCHAR(15) NOT NULL CHECK (emergency_contact_phone ~* '^\\d{10}$')
);
`;

const trekGuideTable = `CREATE TABLE Trek_Guides (
    id SERIAL PRIMARY KEY,
    trek_id INT NOT NULL REFERENCES Treks(id) ON DELETE CASCADE,
    guide_name VARCHAR(255) NOT NULL,
    guide_email VARCHAR(255) NOT NULL CHECK (guide_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
    guide_phone VARCHAR(15) NOT NULL CHECK (guide_phone ~* '^\\d{10}$'),
    experience_years INT NOT NULL CHECK (experience_years >= 0)
);
`;

const trekLocationTable = `CREATE TABLE Trek_Locations (
    id SERIAL PRIMARY KEY,
    trek_id INT NOT NULL REFERENCES Treks(id) ON DELETE CASCADE,
    trail_name VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    lat NUMERIC(9, 6) NOT NULL,
    lng NUMERIC(9, 6) NOT NULL
);
`;

const trekDetailsTable = `CREATE TABLE Treks (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    difficulty_level VARCHAR(50) NOT NULL CHECK (difficulty_level IN ('Easy', 'Moderate', 'Challenging', 'Hard', 'Expert')),
    price_per_person NUMERIC(10, 2) NOT NULL CHECK (price_per_person >= 0),
    duration_days INT NOT NULL CHECK (duration_days >= 1),
    duration_nights INT NOT NULL CHECK (duration_nights >= 0),
    description TEXT,
    max_group_size INT NOT NULL CHECK (max_group_size >= 1),
    available_slots INT NOT NULL CHECK (available_slots >= 0),
    packing_list TEXT[],  -- List of items to bring as an array
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;



// Camping 

const campingParticipentTable = `CREATE TABLE Camping_Participants (
    id SERIAL PRIMARY KEY,
    camping_registration_id INT NOT NULL REFERENCES Camping_Registrations(id) ON DELETE CASCADE,
    participant_name VARCHAR(255) NOT NULL,
    age INT NOT NULL CHECK (age >= 18),
    contact_email VARCHAR(255) NOT NULL CHECK (contact_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
    contact_phone VARCHAR(15) NOT NULL CHECK (contact_phone ~* '^\\d{10}$'),
    emergency_contact_name VARCHAR(255) NOT NULL,
    emergency_contact_phone VARCHAR(15) NOT NULL CHECK (emergency_contact_phone ~* '^\\d{10}$')
);
`;

const campingGuideTable = `CREATE TABLE Camping_Guides (
    id SERIAL PRIMARY KEY,
    camping_registration_id INT NOT NULL REFERENCES Camping_Registrations(id) ON DELETE CASCADE,
    guide_name VARCHAR(255) NOT NULL,
    guide_email VARCHAR(255) NOT NULL CHECK (guide_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$'),
    guide_phone VARCHAR(15) NOT NULL CHECK (guide_phone ~* '^\\d{10}$'),
    experience_years INT NOT NULL CHECK (experience_years >= 0)
);
`;

const campingLacationTable = `CREATE TABLE Camping_Locations (
    id SERIAL PRIMARY KEY,
    camping_registration_id INT NOT NULL REFERENCES Camping_Registrations(id) ON DELETE CASCADE,
    camp_site_name VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    lat NUMERIC(9, 6) NOT NULL,
    lng NUMERIC(9, 6) NOT NULL
);
`;

const campingDetailsTable = `CREATE TABLE Camping_Registrations (
    id SERIAL PRIMARY KEY,
    camp_name VARCHAR(255) NOT NULL,
    price_per_person NUMERIC(10, 2) NOT NULL CHECK (price_per_person >= 0),
    duration_days INT NOT NULL CHECK (duration_days >= 1),
    duration_nights INT NOT NULL CHECK (duration_nights >= 0),
    max_group_size INT NOT NULL CHECK (max_group_size >= 1),
    available_slots INT NOT NULL CHECK (available_slots >= 0),
    amenities TEXT[],  -- List of amenities as an array
    packing_list TEXT[],  -- Packing list as an array
    special_instructions TEXT,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;





