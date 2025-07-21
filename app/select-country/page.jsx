'use client';

import { useState } from 'react';
import { Globe } from 'lucide-react';
import { countries } from '../components/data/countries';
export default function SelectCountry() {
    const [selectedCountry, setSelectedCountry] = useState('');


    const handleChange = (e) => {
        setSelectedCountry(e.target.value);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
                    <Globe className="w-6 h-6 text-blue-500" />
                    Select Your Country
                </h2>

                <select
                    onChange={handleChange}
                    value={selectedCountry}
                    className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    <option value="" disabled>
                        -- Choose a country --
                    </option>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>

                {selectedCountry && (
                    <div className="mt-4 text-green-600 font-medium">
                        You selected: {selectedCountry}
                    </div>
                )}
            </div>
        </div>
    );
}
