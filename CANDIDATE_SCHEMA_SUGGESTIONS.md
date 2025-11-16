# Campos Faltantes en el Modelo Candidate

Basándome en las capturas de pantalla del perfil de candidato, el schema actual le faltan los siguientes campos:

## 1. Información Personal Adicional
```prisma
model Candidate {
  // ... campos existentes ...
  
  // Datos personales
  birthDate         DateTime?
  birthPlace        String?       // lugar de nacimiento
  nationality       String?       // nacionalidad
  civilStatus       String?       // estado civil
  
  // Documento de identidad
  documentType      String?       // DNI, pasaporte, etc.
  documentNumber    String?       @unique
}
```

## 2. Experiencia Laboral
Necesitas crear un modelo nuevo para la experiencia laboral:

```prisma
model WorkExperience {
  id              Int       @id @default(autoincrement())
  candidate       Candidate @relation(fields: [candidateId], references: [id])
  candidateId     Int
  
  position        String    // cargo (ej: "GERENTE GENERAL")
  company         String    // institución/empresa
  startYear       Int
  endYear         Int?      // null si es "Presente"
  isCurrent       Boolean   @default(false)
  description     String?   // descripción de responsabilidades
  
  order           Int       // para ordenar cronológicamente
  
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
}
```

## 3. Formación Académica
Crear modelo para educación:

```prisma
enum EducationLevel {
  BACHELOR        // Licenciatura
  MASTER          // Maestría
  DOCTORATE       // Doctorado
  TECHNICAL       // Técnico
  OTHER
}

model Education {
  id              Int            @id @default(autoincrement())
  candidate       Candidate      @relation(fields: [candidateId], references: [id])
  candidateId     Int
  
  level           EducationLevel
  degree          String         // título obtenido
  institution     String         // universidad/institución
  graduationYear  Int
  fieldOfStudy    String?        // campo de estudio
  
  order           Int            // para ordenar cronológicamente
  
  createdAt       DateTime       @default(now())
  updatedAt       DateTime       @updatedAt
}
```

## 4. Bienes y Rentas Declarados
Crear modelo para declaraciones patrimoniales:

```prisma
model AssetDeclaration {
  id              Int       @id @default(autoincrement())
  candidate       Candidate @relation(fields: [candidateId], references: [id])
  candidateId     Int
  
  year            Int
  declaredIncome  Decimal   // ingresos anuales declarados
  currency        String    @default("PEN") // S/, USD, etc.
  source          String?   // fuente (ej: "JNE")
  description     String?   // incluye remuneraciones, rentas, dividendos
  
  // Desglose opcional
  salaryIncome    Decimal?
  rentalIncome    Decimal?
  dividendIncome  Decimal?
  otherIncome     Decimal?
  
  createdAt       DateTime  @default(now())
  updatedAt       DateTime  @updatedAt
  
  @@unique([candidateId, year])
}
```

## 5. Investigaciones y Procesos Judiciales
Crear modelo para tracking de investigaciones:

```prisma
enum InvestigationStatus {
  IN_PROGRESS
  ARCHIVED
  CONVICTED
  ACQUITTED
}

model Investigation {
  id              Int                  @id @default(autoincrement())
  candidate       Candidate            @relation(fields: [candidateId], references: [id])
  candidateId     Int
  
  type            String               // "Presunta colusión", etc.
  description     String
  institution     String               // "Jurado Nacional de Elecciones (JNE)"
  status          InvestigationStatus
  filingDate      DateTime?
  resolutionDate  DateTime?
  outcome         String?              // resultado del proceso
  
  sourceUrl       String?              // link a fuente oficial
  
  createdAt       DateTime             @default(now())
  updatedAt       DateTime             @updatedAt
}
```

## 6. Redes Sociales y Contacto
```prisma
model Candidate {
  // ... campos existentes ...
  
  // Redes sociales y contacto
  websiteUrl      String?
  facebookUrl     String?
  twitterUrl      String?
  instagramUrl    String?
  linkedinUrl     String?
  youtubeUrl      String?
  
  contactEmail    String?
  contactPhone    String?
}
```

## 7. Actualizar el modelo Candidate con las relaciones

```prisma
model Candidate {
  id               Int               @id @default(autoincrement())
  fullName         String
  office           CandidateOffice
  biography        String?
  photoUrl         String?

  // NUEVOS CAMPOS PERSONALES
  birthDate        DateTime?
  birthPlace       String?
  nationality      String?          @default("Peruana")
  civilStatus      String?
  documentType     String?
  documentNumber   String?          @unique
  
  // REDES SOCIALES Y CONTACTO
  websiteUrl       String?
  facebookUrl      String?
  twitterUrl       String?
  instagramUrl     String?
  linkedinUrl      String?
  youtubeUrl       String?
  contactEmail     String?
  contactPhone     String?

  politicalGroup   PoliticalGroup    @relation(fields: [politicalGroupId], references: [id])
  politicalGroupId Int

  user             User?             @relation(fields: [userId], references: [id])
  userId           Int?              @unique

  // RELACIONES EXISTENTES
  posts            Post[]
  voteIntentions   VoteIntention[]
  
  // NUEVAS RELACIONES
  workExperience   WorkExperience[]
  education        Education[]
  assetDeclarations AssetDeclaration[]
  investigations   Investigation[]
  
  createdAt        DateTime          @default(now())
  updatedAt        DateTime          @updatedAt
}
```

## Resumen de cambios necesarios:

1. ✅ **Datos personales**: birthDate, birthPlace, nationality, civilStatus, documentNumber
2. ✅ **Experiencia laboral**: Modelo `WorkExperience` con posiciones y fechas
3. ✅ **Formación académica**: Modelo `Education` con grados y universidades
4. ✅ **Bienes declarados**: Modelo `AssetDeclaration` para ingresos anuales
5. ✅ **Investigaciones**: Modelo `Investigation` para procesos judiciales
6. ✅ **Redes sociales**: URLs de redes sociales y contacto

## Migración sugerida:

```bash
# 1. Actualizar schema.prisma con los modelos nuevos
# 2. Crear migración
npx prisma migrate dev --name add_candidate_profile_info

# 3. Generar cliente actualizado
npx prisma generate
```

## Endpoints del backend que necesitarás crear/actualizar:

- `GET /candidates/:id` - Incluir todos los datos relacionados
- `POST /candidates/:id/work-experience` - Agregar experiencia laboral
- `POST /candidates/:id/education` - Agregar formación académica
- `POST /candidates/:id/asset-declarations` - Agregar declaración patrimonial
- `POST /candidates/:id/investigations` - Agregar investigación (solo admin)
