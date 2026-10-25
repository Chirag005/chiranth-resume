/** Project summaries (no Markdown bodies), ordered for listings and the NEXT MOVE chain. */
export function useProjects() {
  return useAsyncData(
    'project-summaries',
    () =>
      queryCollection('projects')
        .select(...projectSummaryFields)
        .order('order', 'ASC')
        .all(),
    { default: () => [] as ProjectSummary[] },
  )
}
