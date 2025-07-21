'use client';

import { useState } from 'react';
import { MapPin, Globe } from 'lucide-react';

const countryCityMap = {
    Nigeria: ['Lagos', 'Abuja', 'Kano', 'Port Harcourt'],
    Ghana: ['Accra', 'Kumasi', 'Tamale'],
    Kenya: ['Nairobi', 'Mombasa', 'Kisumu'],
    Egypt: ['Cairo', 'Alexandria', 'Giza'],
};

export default function CountryCitySelector() {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedCity(''); // reset city when country changes
    };

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-[#f8fafc] border border-[#dbe2ea] rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Globe className="text-blue-600" />
                    Select Location
                </h2>

                {/* Country Dropdown */}
                <label className="block mb-2 text-sm font-medium text-gray-700">
                    Country
                </label>
                <select
                    onChange={handleCountryChange}
                    value={selectedCountry}
                    className="w-full mb-4 px-4 py-3 rounded-xl bg-white border border-gray-300 shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">-- Select a country --</option>
                    {Object.keys(countryCityMap).map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>

                {/* City Dropdown (only visible when a country is selected) */}
                {selectedCountry && (
                    <>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            City
                        </label>
                        <select
                            onChange={handleCityChange}
                            value={selectedCity}
                            className="w-full mb-4 px-4 py-3 rounded-xl bg-white border border-gray-300 shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">-- Select a city --</option>
                            {countryCityMap[selectedCountry].map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </>
                )}

                {/* Display Selected */}
                {selectedCity && (
                    <div className="mt-4 text-purple-700 font-medium">
                        Selected: {selectedCity}, {selectedCountry}
                    </div>
                )}
            </div>
        </div>
    );
}
