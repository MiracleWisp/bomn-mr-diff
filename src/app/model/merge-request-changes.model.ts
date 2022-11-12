export type MergeRequestChanges = {
  target_branch: string
  source_branch: string
  changes: MergeRequestChange[]
}

export type MergeRequestChange = { old_path: string, new_path: string }
