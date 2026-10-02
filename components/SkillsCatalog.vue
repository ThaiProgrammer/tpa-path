<template>
  <div class="skills-catalog-container">
    <!-- Search & Filter Controls -->
    <div class="catalog-controls">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="ค้นหา Skill เช่น RAG, TDD, TypeScript, Azure, DevOps, Career..." 
          class="search-input"
        />
        <button 
          v-if="searchQuery" 
          type="button" 
          class="clear-search-btn" 
          @click="searchQuery = ''"
        >
          ✕
        </button>
      </div>

      <div class="categories-bar">
        <button 
          v-for="cat in categories" 
          :key="cat"
          type="button" 
          class="category-pill" 
          :class="{ active: selectedCategory === cat }"
          @click="selectedCategory = cat"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Results Stats -->
    <div class="catalog-stats">
      <span>พบ <strong>{{ filteredSkills.length }}</strong> Agent Skills ที่พร้อมดาวน์โหลดและนำไปใช้งาน</span>
      <span v-if="selectedCategory !== 'ทั้งหมด' || searchQuery" class="reset-filter-link" @click="resetFilters">
        รีเซ็ตตัวกรอง
      </span>
    </div>

    <!-- Skills List -->
    <div v-if="filteredSkills.length" class="skills-grid">
      <SkillCard 
        v-for="skill in filteredSkills" 
        :key="skill.id" 
        :id="skill.id"
      />
    </div>

    <div v-else class="skills-empty-state">
      <div class="empty-icon">🔎</div>
      <h3>ไม่พบ Skill ที่ตรงกับคำค้นหา</h3>
      <p>ลองค้นหาด้วยคำอื่น หรือคลิก "รีเซ็ตตัวกรอง" เพื่อดูรายการทั้งหมด</p>
      <button type="button" class="empty-reset-btn" @click="resetFilters">ดู Skills ทั้งหมด</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { skillsData } from './skillsData'
import SkillCard from './SkillCard.vue'

const searchQuery = ref('')
const selectedCategory = ref('ทั้งหมด')

const categories = [
  'ทั้งหมด',
  'Career & Fundamentals',
  'Engineering & Practices',
  'AI & Data',
  'Web & Mobile',
  'Languages & Frameworks',
  'Cloud & DevOps',
  'Security & Governance',
  'Community & Sharing'
]

const allSkills = computed(() => Object.values(skillsData))

const filteredSkills = computed(() => {
  return allSkills.value.filter((item) => {
    // Category match
    const categoryMatch = selectedCategory.value === 'ทั้งหมด' || item.category === selectedCategory.value

    // Search query match
    if (!searchQuery.value.trim()) return categoryMatch

    const q = searchQuery.value.toLowerCase().trim()
    const titleMatch = item.title.toLowerCase().includes(q)
    const idMatch = item.id.toLowerCase().includes(q)
    const descMatch = item.description.toLowerCase().includes(q)
    const tagsMatch = item.tags.some(tag => tag.toLowerCase().includes(q))

    return categoryMatch && (titleMatch || idMatch || descMatch || tagsMatch)
  })
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'ทั้งหมด'
}
</script>

<style scoped>
.skills-catalog-container {
  margin: 1.5rem 0;
}

.catalog-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 1rem;
  font-size: 1rem;
  pointer-events: none;
  opacity: 0.6;
}

.search-input {
  width: 100%;
  padding: 0.85rem 2.5rem 0.85rem 2.8rem;
  border-radius: 10px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s ease;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px var(--vp-c-brand-soft);
  background: var(--vp-c-bg);
}

.clear-search-btn {
  position: absolute;
  right: 0.85rem;
  background: transparent;
  border: none;
  color: var(--vp-c-text-3);
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
}

.clear-search-btn:hover {
  color: var(--vp-c-text-1);
}

.categories-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.category-pill {
  padding: 0.4rem 0.85rem;
  border-radius: 9999px;
  font-size: 0.825rem;
  font-weight: 500;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-pill:hover {
  border-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.category-pill.active {
  background: var(--vp-c-brand-1);
  color: #fff;
  border-color: var(--vp-c-brand-1);
}

.catalog-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.25rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.reset-filter-link {
  color: var(--vp-c-brand-1);
  cursor: pointer;
  font-weight: 600;
}

.reset-filter-link:hover {
  text-decoration: underline;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.skills-empty-state {
  text-align: center;
  padding: 3rem 1rem;
  background: var(--vp-c-bg-alt);
  border-radius: 12px;
  border: 1px dashed var(--vp-c-divider);
}

.empty-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.empty-reset-btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand-1);
  color: #fff;
  border-radius: 6px;
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
}
</style>
