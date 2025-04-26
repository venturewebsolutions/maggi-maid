import _ from 'lodash'

export const url = (pathname: string) => {
  const parts: string[] = []

  const site = _.trim(import.meta.env.SITE, '/')
  const base = _.trim(import.meta.env.BASE_URL, '/')

  if (site) {
    parts.push(site)
  }

  parts.push('/')

  if (base) {
    parts.push(base)
    parts.push('/')
  }

  parts.push(_.trimStart(pathname, '/'))

  return parts.join('')
}
