import { useEffect } from 'react';

export default function PrivacyPolicy() {
    useEffect(() => {
        window.location.replace('https://apps.srmakes.co.uk/quick-teams/privacy-policy');
    }, []);

    return <p><a href="https://apps.srmakes.co.uk/quick-teams/privacy-policy">Continue to the Quick Teams privacy policy</a></p>;
}
