import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicSkillsDir = path.join(rootDir, 'public', 'skills');

// Read skillsData directly from TypeScript file
const skillsDataPath = path.join(rootDir, 'components', 'skillsData.ts');
const rawTs = fs.readFileSync(skillsDataPath, 'utf-8');

// Match each skill id and content block using regex or evaluating
// Simple robust evaluation: extract JSON-like structure
const skillMatches = [...rawTs.matchAll(/"([a-z0-9-]+)":\s*\{[\s\S]*?id:\s*"([a-z0-9-]+)"[\s\S]*?content:\s*`([\s\S]*?)`\s*\n\s*\}/g)];

console.log(`Found ${skillMatches.length} skills in skillsData.ts`);

for (const match of skillMatches) {
  const skillId = match[2];
  const content = match[3].trim() + '\n';
  
  const skillDir = path.join(publicSkillsDir, skillId);
  fs.mkdirSync(skillDir, { recursive: true });
  const targetFile = path.join(skillDir, 'SKILL.md');
  fs.writeFileSync(targetFile, content, 'utf-8');
  console.log(`✓ Generated ${targetFile}`);
}

console.log('All skills generated successfully in public/skills/!');
