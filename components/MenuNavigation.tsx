import { HomeIcon, PresentationChartLineIcon, UsersIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Link from 'next/link';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: HomeIcon },
  { name: 'Indicadores', href: '/admin/indicators', icon: PresentationChartLineIcon },
  { name: 'Usuários', href: '/admin/users', icon: UsersIcon },
]

type Props = {
  current: string | null;
}

export function MenuNavigation({ current }: Props) {
  return (
    <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={clsx(
            item.href === current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
            'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
          )}
        >
          <item.icon
            className={clsx(
              item.href === current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
              'mr-3 flex-shrink-0 h-6 w-6'
            )}
            aria-hidden="true"
          />
          {item.name}
        </Link>
      ))}
    </nav>
  )
}
