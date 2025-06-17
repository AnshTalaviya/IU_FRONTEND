import React from 'react';
import Safety from './Safety';
import SafetyFeatures from './SafetyFeatures';
import SafetyGuidelines from './SafetyGuidelines';
import EmergencyContact from './EmergencyContact';
import SafetyBlog from './SafetyBlog';

const HeroSafety = () => {
    return (
        <div>
            <Safety/>
            <SafetyFeatures/>
            <SafetyGuidelines/>
            <EmergencyContact/>
            <SafetyBlog/>
        </div>
    );
}

export default HeroSafety;
