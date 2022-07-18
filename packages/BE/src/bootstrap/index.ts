import expressLoader from './express'

export default async ({ expressApp }) => {
  // Load the Bootstapped Express App
  expressLoader({ app: expressApp })
}
