export function greeting(name: string | null = null): void {
  console.log(`Hello, ${name ?? "World"}`)
}
