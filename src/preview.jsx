import { createRoot } from 'react-dom/client'
import PreviewHost from './PreviewHost.jsx'
import { LandingPreview } from './App.jsx'
import { SITE } from './site.js'
import './styles.css'

createRoot(document.getElementById('root')).render(<PreviewHost site={SITE} Landing={LandingPreview} />)
