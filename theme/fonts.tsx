import { Global } from "@emotion/react"
const Fonts = () => (
	<Global
		styles={`
        @font-face {
            font-family: 'Aktiv Grotesk Corp';
            src: url('/fonts/AktivGroteskCorp-Medium.woff2') format('woff2');
            font-weight: 500;
            font-style: normal;
        }
        
        @font-face {
            font-family: 'Aktiv Grotesk Corp';
            src: url('/fonts/AktivGroteskCorp-Bold.woff2') format('woff2');
            font-weight: bold;
            font-style: normal;
        }
        
        @font-face {
            font-family: 'Aktiv Grotesk Corp';
            src: url('/fonts/AktivGroteskCorp-Italic.woff2') format('woff2');
            font-weight: normal;
            font-style: italic;
        }
        
        @font-face {
            font-family: 'Aktiv Grotesk Corp';
            src: url('/fonts/AktivGroteskCorp-LightItalic.woff2') format('woff2');
            font-weight: 300;
            font-style: italic;
        }
        
        @font-face {
            font-family: 'Aktiv Grotesk Corp';
            src: url('/fonts/AktivGroteskCorp-MediumItalic.woff2') format('woff2');
            font-weight: 500;
            font-style: italic;
        }
        
        @font-face {
            font-family: 'Aktiv Grotesk Corp';
            src: url('/fonts/AktivGroteskCorp-Light.woff2') format('woff2');
            font-weight: 300;
            font-style: normal;
        }
        
        @font-face {
            font-family: 'Aktiv Grotesk Corp';
            src: url('/fonts/AktivGroteskCorp-Regular.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
        }
        
        @font-face {
            font-family: 'Aktiv Grotesk Corp';
            src: url('/fonts/AktivGroteskCorp-BoldItalic.woff2') format('woff2');
            font-weight: bold;
            font-style: italic;
        }
        
        
      	`}
	/>
)
export default Fonts
