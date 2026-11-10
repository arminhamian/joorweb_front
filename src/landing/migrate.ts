export const MIGRATE_EVENT = 'joorweb-migrate'

export function requestMigration(): void {
  window.dispatchEvent(new Event(MIGRATE_EVENT))
}
