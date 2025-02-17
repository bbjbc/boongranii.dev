import Script from 'next/script';

interface GoogleAnalyticsProps {
  gaId: string;
}

const GoogleAnalytics = ({ gaId }: GoogleAnalyticsProps) => {
  const googleAnalyticsScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{ __html: googleAnalyticsScript }}
      />
    </>
  );
};

export default GoogleAnalytics;
