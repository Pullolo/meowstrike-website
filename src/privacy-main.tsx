import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrivacyApp from './PrivacyApp.tsx'
import { LanguageProvider } from './i18n/LanguageContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider metaKey="privacyMeta">
      <PrivacyApp />
    </LanguageProvider>
  </StrictMode>,
)
