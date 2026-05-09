import { Search, PenTool, Cpu, Users, Headphones } from 'lucide-react'
import './ProcessSteps.css'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description: 'We analyze your current processes, pain points, and business goals through structured discovery sessions to understand exactly what needs to change.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description: 'We architect the right solution — mapping workflows, configuring modules, and designing system logic that fits your business model precisely.',
  },
  {
    number: '03',
    icon: Cpu,
    title: 'Implement',
    description: 'Our team deploys, configures, customizes, and integrates your system — ensuring data migration, quality checks, and seamless go-live readiness.',
  },
  {
    number: '04',
    icon: Users,
    title: 'Train',
    description: 'We train your team — from end-users to administrators — with practical sessions, documentation, and guided walkthroughs that drive real adoption.',
  },
  {
    number: '05',
    icon: Headphones,
    title: 'Support & Improve',
    description: 'We stay with you after launch. Ongoing support, performance reviews, and continuous improvements keep your systems growing with your business.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 56 }}>
          <div className="section-label">How We Work</div>
          <h2 className="section-title">Our Implementation Process</h2>
          <p className="section-subtitle">
            A structured, proven approach that delivers results — from initial discovery to ongoing improvement.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <div key={step.number} className="process-step">
              <div className="process-step__connector">
                {i < steps.length - 1 && <div className="process-step__line" />}
              </div>
              <div className="process-step__dot">
                <step.icon size={18} />
              </div>
              <div className="process-step__number">{step.number}</div>
              <div className="process-step__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
