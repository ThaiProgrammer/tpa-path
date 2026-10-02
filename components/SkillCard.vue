<template>
  <div class="skill-card-container">
    <div class="skill-card-header">
      <div class="skill-card-badge-row">
        <span class="skill-pill-badge">{{ resolvedBadge }}</span>
        <span class="skill-id-badge">{{ id }}</span>
      </div>
      <h3 class="skill-card-title">{{ resolvedTitle }}</h3>
      <p class="skill-card-desc">{{ resolvedDescription }}</p>

      <div v-if="resolvedTags && resolvedTags.length" class="skill-tags-row">
        <span v-for="tag in resolvedTags" :key="tag" class="skill-tag">#{{ tag }}</span>
      </div>
    </div>

    <!-- Supported AI Assistants Bar -->
    <div class="skill-tools-bar">
      <span class="skill-tools-label">รองรับการใช้งานกับ:</span>
      <div class="skill-tools-list">
        <span class="tool-chip">Claude Code</span>
        <span class="tool-chip">Antigravity</span>
        <span class="tool-chip">Cursor</span>
        <span class="tool-chip">Windsurf</span>
        <span class="tool-chip">GitHub Copilot</span>
        <span class="tool-chip">ChatGPT</span>
      </div>
    </div>

    <!-- Actions Row -->
    <div class="skill-actions-row">
      <button 
        type="button" 
        class="skill-btn skill-btn-primary" 
        :class="{ 'btn-success': copied }"
        @click="copyContent"
      >
        <span v-if="!copied" class="btn-icon">📋</span>
        <span v-else class="btn-icon">✅</span>
        <span>{{ copied ? 'คัดลอก Skill แล้ว!' : 'คัดลอก SKILL.md' }}</span>
      </button>

      <button 
        type="button" 
        class="skill-btn skill-btn-secondary" 
        @click="downloadSkill"
      >
        <span class="btn-icon">⬇️</span>
        <span>ดาวน์โหลดไฟล์</span>
      </button>

      <button 
        type="button" 
        class="skill-btn skill-btn-ghost" 
        @click="showPreview = !showPreview"
      >
        <span class="btn-icon">{{ showPreview ? '🔼' : '👁️' }}</span>
        <span>{{ showPreview ? 'ซ่อนเนื้อหา' : 'ดูเนื้อหา Skill' }}</span>
      </button>

      <button 
        type="button" 
        class="skill-btn skill-btn-ghost" 
        @click="showGuide = !showGuide"
      >
        <span class="btn-icon">{{ showGuide ? '🔼' : '💡' }}</span>
        <span>วิธีติดตั้ง</span>
      </button>
    </div>

    <!-- Quick Terminal Install Command -->
    <div class="skill-cli-bar">
      <div class="skill-cli-header">
        <span class="cli-label">⚡️ ติดตั้งผ่าน Terminal ด้วย 1 คำสั่ง:</span>
        <button 
          type="button" 
          class="cli-copy-btn" 
          @click="copyCliCommand"
        >
          {{ copiedCli ? '✓ คัดลอกแล้ว' : 'คัดลอกคำสั่ง' }}
        </button>
      </div>
      <code class="skill-cli-code">{{ cliCommand }}</code>
    </div>

    <!-- Expandable Setup Guide -->
    <div v-if="showGuide" class="skill-expand-section skill-guide-box">
      <h4 class="guide-title">🚀 วิธีนำ SKILL ไปติดตั้งใน AI Coding Assistant</h4>
      
      <div class="guide-grid">
        <div class="guide-card">
          <div class="guide-agent-name">🤖 Google Antigravity / Agentic IDE</div>
          <p class="guide-text">บันทึกไฟล์เป็น:</p>
          <code>.agents/skills/{{ id }}/SKILL.md</code>
          <p class="guide-text-small">หรือใส่ในระดับ Global ที่ <code>~/.gemini/config/skills/{{ id }}/SKILL.md</code></p>
        </div>

        <div class="guide-card">
          <div class="guide-agent-name">🟣 Claude Code</div>
          <p class="guide-text">บันทึกไฟล์ไว้ที่โฟลเดอร์สกิล:</p>
          <code>.claude/skills/{{ id }}/SKILL.md</code>
          <p class="guide-text-small">หรือ Global ที่ <code>~/.claude/skills/{{ id }}/SKILL.md</code></p>
        </div>

        <div class="guide-card">
          <div class="guide-agent-name">⚡️ Cursor & Windsurf</div>
          <p class="guide-text">คัดลอกเนื้อหาไปวางใน Rules:</p>
          <code>.cursorrules</code> หรือ <code>.windsurfrules</code>
          <p class="guide-text-small">หรือวางใน Project Rules ในหน้าต่าง Settings</p>
        </div>

        <div class="guide-card">
          <div class="guide-agent-name">🐙 GitHub Copilot & ChatGPT</div>
          <p class="guide-text">เพิ่มใน Copilot Instructions:</p>
          <code>.github/copilot-instructions.md</code>
          <p class="guide-text-small">หรือวางลงใน Custom Instructions ของ ChatGPT / Claude Project</p>
        </div>
      </div>
    </div>

    <!-- Expandable Content Preview -->
    <div v-if="showPreview" class="skill-expand-section skill-preview-box">
      <div class="preview-header">
        <span class="preview-title">📄 ตัวอย่างเนื้อหา SKILL.md (YAML Frontmatter + Rules)</span>
        <button type="button" class="preview-copy-btn" @click="copyContent">
          {{ copied ? '✓ คัดลอกแล้ว' : '📋 คัดลอกทั้งหมด' }}
        </button>
      </div>
      <pre class="skill-code-block"><code>{{ resolvedContent }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { skillsData } from './skillsData'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  downloadUrl: {
    type: String,
    default: ''
  },
  tags: {
    type: Array,
    default: () => []
  },
  content: {
    type: String,
    default: ''
  }
})

const item = computed(() => skillsData[props.id] || {})
const resolvedTitle = computed(() => props.title || item.value.title || props.id)
const resolvedBadge = computed(() => props.badge || item.value.badge || '⚡️ Agent Skill')
const resolvedDescription = computed(() => props.description || item.value.description || '')
const resolvedTags = computed(() => (props.tags && props.tags.length ? props.tags : item.value.tags) || [])
const resolvedContent = computed(() => props.content || item.value.content || '')

const copied = ref(false)
const copiedCli = ref(false)
const showPreview = ref(false)
const showGuide = ref(false)

const resolvedDownloadUrl = computed(() => {
  if (props.downloadUrl) return props.downloadUrl
  return `/skills/${props.id}/SKILL.md`
})

const cliCommand = computed(() => {
  return `mkdir -p .agents/skills/${props.id} && curl -fsSL "https://roadmap.thaiprogrammer.org/skills/${props.id}/SKILL.md" -o .agents/skills/${props.id}/SKILL.md`
})

const copyToClipboard = async (text) => {
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      // fallback below
    }
  }
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  try {
    document.execCommand('copy')
    document.body.removeChild(textarea)
    return true
  } catch {
    document.body.removeChild(textarea)
    return false
  }
}

const copyContent = async () => {
  const success = await copyToClipboard(resolvedContent.value)
  if (success) {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  }
}

const copyCliCommand = async () => {
  const success = await copyToClipboard(cliCommand.value)
  if (success) {
    copiedCli.value = true
    setTimeout(() => {
      copiedCli.value = false
    }, 2500)
  }
}

const downloadSkill = () => {
  const blob = new Blob([resolvedContent.value], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'SKILL.md'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
</script>

<style scoped>
.skill-card-container {
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-brand-soft);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.25s ease;
}

.dark .skill-card-container {
  background: var(--vp-c-bg-elv);
  border-color: rgba(var(--vp-c-brand-rgb, 100, 108, 255), 0.25);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

.skill-card-badge-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.skill-pill-badge {
  display: inline-flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 9999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.skill-id-badge {
  font-family: var(--vp-font-family-mono);
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-default-soft);
  padding: 0.15rem 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
}

.skill-card-title {
  margin: 0 0 0.5rem 0 !important;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  border-top: none !important;
  padding-top: 0 !important;
}

.skill-card-desc {
  margin: 0 0 0.75rem 0 !important;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.skill-tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.skill-tag {
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-3);
}

.skill-tools-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 0.8rem;
  background: var(--vp-c-bg-alt);
  border-radius: 8px;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.skill-tools-label {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.skill-tools-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.tool-chip {
  font-size: 0.7rem;
  font-weight: 500;
  padding: 0.15rem 0.45rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  color: var(--vp-c-text-1);
}

.skill-actions-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.skill-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.skill-btn .btn-icon {
  font-size: 1rem;
  line-height: 1;
}

.skill-btn-primary {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.skill-btn-primary:hover {
  background: var(--vp-c-brand-2);
  transform: translateY(-1px);
}

.skill-btn-primary.btn-success {
  background: #10b981 !important;
  color: #fff;
}

.skill-btn-secondary {
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
}

.skill-btn-secondary:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
}

.skill-btn-ghost {
  background: transparent;
  color: var(--vp-c-text-2);
  border: 1px dashed var(--vp-c-divider);
}

.skill-btn-ghost:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-text-2);
  background: var(--vp-c-bg-mute);
}

.skill-cli-bar {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0.6rem 0.8rem;
  margin-top: 0.5rem;
}

.skill-cli-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.35rem;
}

.cli-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.cli-copy-btn {
  font-size: 0.7rem;
  color: var(--vp-c-brand-1);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0.1rem 0.3rem;
  font-weight: 600;
}

.cli-copy-btn:hover {
  text-decoration: underline;
}

.skill-cli-code {
  display: block;
  font-family: var(--vp-font-family-mono);
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  word-break: break-all;
  white-space: pre-wrap;
  padding: 0.3rem 0.5rem;
  background: var(--vp-c-bg);
  border-radius: 4px;
}

.skill-expand-section {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  animation: fadeIn 0.2s ease-in-out;
}

.guide-title {
  margin: 0 0 0.75rem 0 !important;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.guide-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 0.75rem;
}

.guide-card {
  padding: 0.75rem;
  background: var(--vp-c-bg-alt);
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
}

.guide-agent-name {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.guide-text {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.25rem 0;
}

.guide-card code {
  display: block;
  font-size: 0.7rem;
  font-family: var(--vp-font-family-mono);
  background: var(--vp-c-bg);
  padding: 0.25rem 0.4rem;
  border-radius: 4px;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.25rem;
}

.guide-text-small {
  font-size: 0.7rem;
  color: var(--vp-c-text-3);
  margin: 0;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.preview-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

.preview-copy-btn {
  font-size: 0.75rem;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  border: none;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
}

.preview-copy-btn:hover {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.skill-code-block {
  max-height: 400px;
  overflow-y: auto;
  font-family: var(--vp-font-family-mono);
  font-size: 0.75rem;
  line-height: 1.45;
  background: var(--vp-c-bg-alt);
  padding: 0.75rem;
  border-radius: 6px;
  margin: 0;
  color: var(--vp-c-text-1);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
