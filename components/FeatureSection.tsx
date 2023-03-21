import { KeyIcon, PresentationChartLineIcon, RocketLaunchIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Três operações',
    description:
      `Conheça 3 operações objetivas de negociação que já foram demonstradas publicamente e possuem alta probabilidade de acertos.
      Com essas operações, você será capaz de alcançar melhores resultados em suas negociações e aumentar seus lucros de maneira consistente.`,
    href: '#',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Acesso exclusivo',
    description:
      `Treinamento apresentando os fundamentos dos indicadores e do sistema proposto, além de acesso exclusivo aos indicadores MAT por 12 meses,
      incluindo os novos indicadores que estão em desenvolvimento`,
    href: '#',
    icon: KeyIcon,
  },
  {
    name: 'Novas experiências e conhecimento',
    description:
      `Uma metodologia inovadora e exclusiva que proporciona insights importantes para desenvolver novas estratégias e aperfeiçoar as suas habilidades como trader.`,
    href: '#',
    icon: RocketLaunchIcon,
  },
]

export default function FeatureSection() {
  return (
    <div id="features" className="bg-gray-900 py-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
