import "@/styles/global.css"
import "@/styles/variables.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <head />
      <body>{children}</body>
    </html>
  )
}
