---
name: git-version-control-expert
description: Master Git workflows, branching strategies (Trunk-based vs GitFlow), conventional commit standards, interactive rebase, merge conflict resolution, and PR review hygiene.
---

# Git & Version Control Workflow Expert Skill

## Branching Strategies

### Trunk-Based Development (Recommended for CI/CD)
- Developers commit small, frequent changes directly to \`main\` or short-lived feature branches (< 1-2 days).
- Protect production with Feature Flags / Feature Toggles.
- Minimizes long merge conflicts and enables continuous deployment.

### GitFlow (For scheduled release cycles)
- Branches: \`main\` (production), \`develop\` (staging), \`feature/*\`, \`release/*\`, \`hotfix/*\`.
- Suitable for mobile apps or enterprise software with strict quarterly release cadences.

## Conventional Commits Protocol
Format: \`<type>(<optional scope>): <description>\`
- \`feat\`: A new feature for the user
- \`fix\`: A bug fix
- \`docs\`: Documentation only changes
- \`style\`: Code formatting, missing semi-colons (no code change)
- \`refactor\`: Refactoring code without fixing bugs or adding features
- \`test\`: Adding or refactoring tests
- \`chore\`: Build tools, dependencies, or maintenance

## Essential Terminal Commands
\`\`\`bash
# Interactive rebase of last 3 commits
git rebase -i HEAD~3

# Stash uncommitted changes including untracked files
git stash -u

# Amend latest commit without changing commit message
git commit --amend --no-edit

# Restore a specific file from main branch
git checkout main -- path/to/file
\`\`\`
