import Link from 'next/link'

/**
 * The shared header component.
 */
export default function Header() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <h1 className="text-2xl no-underline text-grey-darkest hover:text-blue-dark">
          Dashboard
        </h1>
      </div>
    </nav>
  )
}
