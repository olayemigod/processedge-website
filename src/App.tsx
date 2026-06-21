import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Main pages
import Home       from './pages/Home'
import Products   from './pages/Products'
import Services   from './pages/Services'
import Solutions  from './pages/Solutions'
import Industries from './pages/Industries'
import Pricing    from './pages/Pricing'
import Resources  from './pages/Resources'
import Company    from './pages/Company'
import Contact    from './pages/Contact'
import Privacy    from './pages/Privacy'
import Terms      from './pages/Terms'

// Product pages
import EduEdge         from './pages/products/EduEdge'
import VetEdge         from './pages/products/VetEdge'
import HotelEdge       from './pages/products/HotelEdge'
import CoopEdge        from './pages/products/CoopEdge'
import ChurchEdge      from './pages/products/ChurchEdge'
import CoreEdge from './pages/products/CoreEdge'
import ClinicEdge        from './pages/products/ClinicEdge'
import AgricEdge         from './pages/products/AgricEdge'
import RetailEdge        from './pages/products/RetailEdge'
import EdgePay           from './pages/products/EdgePay'
import EdgeFinder        from './pages/products/EdgeFinder'

// Service pages
import ERPImplementation     from './pages/services/ERPImplementation'
import AccountingSolutions   from './pages/services/AccountingSolutions'
import RetailSalesAutomation from './pages/services/RetailSalesAutomation'
import TrainingSupport       from './pages/services/TrainingSupport'

// Resource article pages
import ERPImplementationChecklist    from './pages/resources/ERPImplementationChecklist'
import BusinessProcessOptimization   from './pages/resources/BusinessProcessOptimization'
import AccountingControlForSMEs      from './pages/resources/AccountingControlForSMEs'
import SchoolManagementCBT           from './pages/resources/SchoolManagementCBT'
import CBTQuestionBankResultSync     from './pages/resources/CBTQuestionBankResultSync'
import VeterinaryClinicManagement    from './pages/resources/VeterinaryClinicManagement'
import HotelManagementSystem         from './pages/resources/HotelManagementSystem'
import CooperativeManagementSystem   from './pages/resources/CooperativeManagementSystem'
import ChurchManagementSystem        from './pages/resources/ChurchManagementSystem'
import RetailSalesAutomationArticle  from './pages/resources/RetailSalesAutomation'
import SoftwareTrainingAndAdoption   from './pages/resources/SoftwareTrainingAndAdoption'
import ClinicManagementSystem       from './pages/resources/ClinicManagementSystem'
import AgricultureManagementSystem  from './pages/resources/AgricultureManagementSystem'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, paddingTop: 72 }}>
      <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2rem', color: '#0056A6' }}>404 — Page Not Found</h1>
      <p style={{ color: '#6C757D' }}>The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-primary">Go Home</a>
    </div>
  )
}

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Main */}
          <Route path="/"           element={<Home />}       />
          <Route path="/products"   element={<Products />}   />
          <Route path="/services"   element={<Services />}   />
          <Route path="/solutions"  element={<Solutions />}  />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing"    element={<Pricing />}    />
          <Route path="/resources"  element={<Resources />}  />
          <Route path="/company"    element={<Company />}    />
          <Route path="/about"      element={<Company />}    />
          <Route path="/contact"    element={<Contact />}    />

          {/* Legal */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms"   element={<Terms />}   />

          {/* Products */}
          <Route path="/products/eduedge"    element={<EduEdge />}         />
          <Route path="/products/vetedge"    element={<VetEdge />}         />
          <Route path="/products/hoteledge"  element={<HotelEdge />}       />
          <Route path="/products/coopedge"   element={<CoopEdge />}        />
          <Route path="/products/churchedge" element={<ChurchEdge />}      />
          <Route path="/products/core"          element={<CoreEdge />} />
          <Route path="/products/processedge-core" element={<CoreEdge />} />
          <Route path="/products/clinicedge"       element={<ClinicEdge />}        />
          <Route path="/products/agricedge"        element={<AgricEdge />}         />
          <Route path="/products/retailedge"       element={<RetailEdge />}        />
          <Route path="/products/edgepay"          element={<EdgePay />}           />
          <Route path="/products/edgefinder"       element={<EdgeFinder />}        />

          {/* Services */}
          <Route path="/services/erp-implementation"      element={<ERPImplementation />}     />
          <Route path="/services/accounting-solutions"    element={<AccountingSolutions />}   />
          <Route path="/services/retail-sales-automation" element={<RetailSalesAutomation />} />
          <Route path="/services/training-support"        element={<TrainingSupport />}       />

          {/* Resource articles */}
          <Route path="/resources/erp-implementation-checklist"  element={<ERPImplementationChecklist />}  />
          <Route path="/resources/business-process-optimization"  element={<BusinessProcessOptimization />} />
          <Route path="/resources/accounting-control-for-smes"    element={<AccountingControlForSMEs />}    />
          <Route path="/resources/school-management-cbt"          element={<SchoolManagementCBT />}         />
          <Route path="/resources/cbt-question-bank-result-sync"  element={<CBTQuestionBankResultSync />}   />
          <Route path="/resources/veterinary-clinic-management"   element={<VeterinaryClinicManagement />}  />
          <Route path="/resources/hotel-management-system"        element={<HotelManagementSystem />}       />
          <Route path="/resources/cooperative-management-system"  element={<CooperativeManagementSystem />} />
          <Route path="/resources/church-management-system"       element={<ChurchManagementSystem />}      />
          <Route path="/resources/retail-sales-automation"        element={<RetailSalesAutomationArticle />}/>
          <Route path="/resources/software-training-and-adoption" element={<SoftwareTrainingAndAdoption />} />
          <Route path="/resources/clinic-management-system"         element={<ClinicManagementSystem />}      />
          <Route path="/resources/agriculture-management-system"    element={<AgricultureManagementSystem />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
    </HelmetProvider>
  )
}
