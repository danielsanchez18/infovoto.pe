"use client";

import { Profile } from "./components/profile/Profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Proposals } from "./components/proposals/Proposals";
import { WorkExperience } from "./components/work-experience/WorkExperience";
import { Posts } from "./components/posts/Posts";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/config/api";

export interface CandidateData {
  id: number;
  fullName: string;
  office: string;
  biography: string;
  photoUrl: string;
  birthDate: string | null;
  birthPlace: string | null;
  nationality: string;
  civilStatus: string | null;
  documentType: string | null;
  documentNumber: string | null;
  websiteUrl: string | null;
  facebookUrl: string | null;
  twitterUrl: string | null;
  instagramUrl: string | null;
  linkedinUrl: string | null;
  youtubeUrl: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  politicalGroup: {
    id: number;
    name: string;
    shortName: string;
    logoUrl: string;
    description: string;
    governmentPlans: Array<{
      id: number;
      title: string;
      description: string;
      documentUrl: string;
      fromYear: number;
      toYear: number;
      sections: Array<{
        id: number;
        sector: string;
        title: string;
        content: string;
        problemIdentified: string;
        strategicObjective: string;
        indicators: string;
        goals: string;
        order: number;
      }>;
    }>;
  };
  workExperience: Array<{
    id: number;
    position: string;
    company: string;
    startYear: number;
    endYear: number | null;
    isCurrent: boolean;
    description: string;
    order: number;
  }>;
  education: Array<{
    id: number;
    level: string;
    degree: string;
    institution: string;
    graduationYear: number;
    fieldOfStudy: string;
    order: number;
  }>;
  assetDeclarations: Array<{
    id: number;
    year: number;
    declaredIncome: string;
    currency: string;
    source: string;
    description: string;
    salaryIncome: string | null;
    rentalIncome: string | null;
    dividendIncome: string | null;
    otherIncome: string | null;
  }>;
  investigations: Array<{
    id: number;
    type: string;
    description: string;
    institution: string;
    status: string;
    filingDate: string | null;
    resolutionDate: string | null;
    outcome: string | null;
    sourceUrl: string | null;
  }>;
  posts: Array<{
    id: number;
    title: string;
    content: string;
    status: string;
    authorId: number;
    candidateId: number;
    createdAt: string;
    updatedAt: string;
  }>;
}

export default function CandidatoIdPage() {
  const params = useParams();
  const id = params.id as string;
  
  const [candidate, setCandidate] = useState<CandidateData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchCandidate();
    }
  }, [id]);

  const fetchCandidate = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const response = await fetch(`${API_BASE_URL}/candidates/${id}`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      const result = await response.json();
      
      if (result.success && result.data) {
        setCandidate(result.data);
      }
    } catch (error) {
      console.error('Error fetching candidate:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Cargando información del candidato...</div>;
  }

  if (!candidate) {
    return <div className="text-center py-10">No se encontró el candidato</div>;
  }

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-5 gap-x-10 py-10">
      <div className="relative">
        <div className="sticky top-5">
          <Profile candidate={candidate} />
        </div>
      </div>

      <div className="overflow-y-auto">
        {/* Tabs */}
        <Tabs className="flex flex-col gap-10" defaultValue="proposals">
          <div className="flex w-full items-center justify-between">
            <TabsList className="flex items-center gap-2 bg-white">
              <TabsTrigger
                value="proposals"
                className="text-xs px-3 h-6 md:text-sm md:px-4 md:h-9 bg-primary/60 cursor-pointer text-white rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Propuestas
              </TabsTrigger>
              <TabsTrigger
                value="work-experience"
                className="text-xs px-3 h-6 md:text-sm md:px-4 md:h-9 bg-primary/60 cursor-pointer text-white rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Hoja de vida
              </TabsTrigger>
              <TabsTrigger
                value="posts"
                className="text-xs px-3 h-6 md:text-sm md:px-4 md:h-9 bg-primary/60 cursor-pointer text-white rounded-md data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Publicaciones
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="proposals">
            <Proposals governmentPlans={candidate.politicalGroup.governmentPlans} />
          </TabsContent>
          <TabsContent value="work-experience">
            <WorkExperience 
              workExperience={candidate.workExperience}
              education={candidate.education}
              assetDeclarations={candidate.assetDeclarations}
            />
          </TabsContent>
          <TabsContent value="posts">
            <Posts posts={candidate.posts} candidateData={candidate} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
