'use client'
import { useState } from 'react';

const ThemeSwitcher: React.FC = () => {
    const [isLight, setIsLight] = useState<boolean>(true);

    return (
        <div className="flex items-center">
            {/* Toggle */}
            <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <div className="w-14 h-8 bg-gray-300 rounded-full shadow-inner"></div>
                    <div className={`absolute w-6 h-6 bg-white rounded-full shadow inset-y-1 left-1 transform transition-transform duration-300 ease-in-out ${isLight ? '' : 'translate-x-6'}`}>
                    </div>
                </div>
                <input
                    id="theme-toggle"
                    type="checkbox"
                    className="hidden"
                    checked={!isLight}
                    onChange={() => setIsLight(!isLight)}
                    aria-labelledby="theme-toggle-label"
                />
            </label>
            {/* Label */}
            <div className="ml-3 text-sm font-medium" id="theme-toggle-label">
                {isLight ? 'Light' : 'Dark'}
            </div>
        </div>
    );
};

export default ThemeSwitcher;
