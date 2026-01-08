# Data Model: Physical AI & Humanoid Robotics Book

**Created**: 2025-12-18
**Feature**: 1-physical-ai-book
**Status**: Complete

## Entity Definitions

### Book
- **Description**: The complete educational resource covering Physical AI & Humanoid Robotics concepts
- **Attributes**:
  - id: string (unique identifier)
  - title: string (Physical AI & Humanoid Robotics — Embodied Intelligence in the Physical World)
  - description: string (High-level conceptual explanations of Physical AI)
  - targetAudience: string (Senior undergraduate and graduate students with CS/AI backgrounds)
  - duration: string (12-13 week quarter alignment)
  - modules: Module[] (List of 4 modules)
  - prerequisites: string[] (Required background knowledge)
  - learningOutcomes: string[] (What students will understand after completion)
  - wordCount: number (Total word count across all chapters)
  - readingLevel: string (Target Flesch-Kincaid level 8-12)
- **Relationships**:
  - Contains many Module entities
  - Associated with one Capstone entity
- **Validation Rules**:
  - title must be 10-100 characters
  - wordCount must be between 20,000 and 50,000
  - readingLevel must be between 8 and 12

### Module
- **Description**: Major content divisions that organize learning progression
- **Attributes**:
  - id: string (unique identifier, e.g., "module-1")
  - title: string (Module title)
  - description: string (Module intent/purpose)
  - position: number (Sequential order 1-4)
  - chapters: Chapter[] (List of 2-3 chapters)
  - prerequisite: Module (Previous module if applicable)
  - estimatedDuration: string (Time to complete, e.g., "3-4 weeks")
  - learningObjectives: string[] (What students will learn in this module)
  - keyConcepts: string[] (Main concepts covered in the module)
- **Relationships**:
  - Belongs to one Book entity
  - Contains many Chapter entities
  - May have one prerequisite Module entity
- **Validation Rules**:
  - position must be between 1 and 4
  - chapters must be between 2 and 3
  - estimatedDuration must be specified

### Chapter
- **Description**: Individual content units within modules focusing on specific concepts
- **Attributes**:
  - id: string (unique identifier, e.g., "module-1-chapter-1")
  - title: string (Chapter title)
  - content: string (Chapter content in MDX format)
  - position: number (Sequential order within module 1-3)
  - wordCount: number (Number of words in the chapter)
  - learningObjectives: string[] (What students will learn in this chapter)
  - module: Module (Parent module)
  - readingTime: string (Estimated reading time)
  - citations: Citation[] (List of sources cited in the chapter)
  - diagrams: Diagram[] (List of diagrams used in the chapter)
- **Relationships**:
  - Belongs to one Module entity
  - Contains many Citation entities
  - Contains many Diagram entities
- **Validation Rules**:
  - position must be between 1 and 3
  - wordCount must be between 2,000 and 5,000
  - content must follow MDX format

### Student
- **Description**: Target audience with CS/AI background seeking to learn Physical AI and robotics
- **Attributes**:
  - id: string (unique identifier)
  - background: string (CS/AI/Software Engineering)
  - level: string (Senior undergraduate or graduate)
  - prerequisites: string[] (List of assumed knowledge)
  - learningPath: Module[] (Sequential progression through modules)
  - progress: Progress[] (Tracking of completed modules/chapters)
  - readingLevel: number (Self-assessed reading comprehension level)
- **Relationships**:
  - Follows one LearningPath entity
  - Has many Progress entities
- **Validation Rules**:
  - background must be one of: "Computer Science", "AI", "Software Engineering"
  - level must be one of: "Senior Undergraduate", "Graduate"

### LearningPath
- **Description**: Sequential progression through modules aligned with academic quarter
- **Attributes**:
  - id: string (unique identifier)
  - modules: Module[] (Ordered list of modules)
  - duration: string (12-13 weeks)
  - milestones: Milestone[] (Key checkpoints)
  - capstone: Capstone (Final integration project)
  - totalEstimatedTime: string (Total time to complete the path)
- **Relationships**:
  - Contains many Module entities
  - Contains many Milestone entities
  - Contains one Capstone entity
- **Validation Rules**:
  - modules must contain exactly 4 modules
  - duration must be between 12 and 13 weeks

### Citation
- **Description**: Reference to external sources used in chapters
- **Attributes**:
  - id: string (unique identifier)
  - reference: string (Full APA citation)
  - type: string (primary|secondary)
  - url: string (Optional URL for online sources)
  - chapter: Chapter (Parent chapter)
  - title: string (Title of the source)
  - authors: string[] (List of authors)
  - publicationYear: number (Year of publication)
  - accessedDate: string (Date when source was accessed)
- **Relationships**:
  - Belongs to one Chapter entity
- **Validation Rules**:
  - reference must follow APA format
  - type must be one of: "primary", "secondary"
  - publicationYear must be a valid year

### Diagram
- **Description**: Visual representation used to explain concepts
- **Attributes**:
  - id: string (unique identifier)
  - title: string (Brief description of the diagram)
  - filename: string (File path in static/img/)
  - altText: string (Accessibility description)
  - chapter: Chapter (Parent chapter)
  - type: string (conceptual|architectural|flow|process)
  - caption: string (Optional caption for the diagram)
  - source: string (If AI-generated, note the tool used)
- **Relationships**:
  - Belongs to one Chapter entity
- **Validation Rules**:
  - altText must be provided for accessibility
  - filename must exist in static/img/ directory

### Progress
- **Description**: Tracking of student progress through modules and chapters
- **Attributes**:
  - id: string (unique identifier)
  - student: Student (The student whose progress is tracked)
  - module: Module (The module being tracked)
  - chapter: Chapter (The chapter being tracked)
  - completed: boolean (Whether the item is completed)
  - completionDate: string (Date when completed)
  - timeSpent: number (Time spent in minutes)
  - notes: string (Optional student notes)
- **Relationships**:
  - Belongs to one Student entity
  - Belongs to one Module entity
  - Belongs to one Chapter entity
- **Validation Rules**:
  - Either module or chapter must be specified (not both)
  - completionDate required when completed is true

### Milestone
- **Description**: Key checkpoints in the learning path
- **Attributes**:
  - id: string (unique identifier)
  - title: string (Milestone name)
  - description: string (What the milestone represents)
  - learningPath: LearningPath (Parent learning path)
  - position: number (Sequential order in the path)
  - criteria: string[] (What needs to be completed to reach this milestone)
  - estimatedCompletion: string (When this milestone should be reached)
- **Relationships**:
  - Belongs to one LearningPath entity
- **Validation Rules**:
  - position must be between 1 and total number of milestones
  - criteria must be non-empty

### Capstone
- **Description**: Final integration project that synthesizes all modules
- **Attributes**:
  - id: string (unique identifier)
  - title: string (Capstone project title)
  - description: string (Brief description of the capstone)
  - learningPath: LearningPath (Parent learning path)
  - objectives: string[] (What students will demonstrate)
  - integrationPoints: string[] (How it connects all modules)
  - estimatedDuration: string (Time to complete the capstone)
  - assessmentCriteria: string[] (How the capstone will be evaluated)
- **Relationships**:
  - Belongs to one LearningPath entity
  - Connected to all Module entities in the path
- **Validation Rules**:
  - integrationPoints must reference all 4 modules
  - objectives must align with overall book goals

## State Transitions

### Progress State Transitions
- **Not Started** → **In Progress**: When student begins module/chapter
- **In Progress** → **Completed**: When student finishes module/chapter
- **Completed** → **Reviewed**: When student reviews material (optional)

### Chapter State Transitions
- **Draft** → **Review**: When content is ready for review
- **Review** → **Approved**: When content passes quality checks
- **Approved** → **Published**: When content is ready for students

## Relationships Summary

```
Book (1) → (4) Module (1) → (2-3) Chapter (1) → (many) Citation
Book (1) → (1) Capstone
Student (1) → (1) LearningPath (1) → (4) Module
Chapter (1) → (many) Diagram
Student (1) → (many) Progress
LearningPath (1) → (many) Milestone
```

## Validation Constraints

### Content Quality Constraints
- All content must maintain Flesch-Kincaid reading level between 8-12
- All chapters must be between 2,000-5,000 words
- All modules must contain 2-3 chapters
- All citations must follow APA format

### Structural Constraints
- Book must contain exactly 4 modules
- Each module must have a sequential position (1-4)
- Each chapter must have a sequential position within its module (1-3)
- Capstone must integrate all 4 modules

### Accessibility Constraints
- All diagrams must have alt text
- All content must follow semantic heading structure
- All links must have descriptive text
- All interactive elements must be keyboard accessible