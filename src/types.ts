export interface SongTechnicalSheet {
  code?: string;
  title?: string;
  composer?: string;
  producers?: string;
  arrangers?: string;
  performers?: string;
  publishers?: string;
  isrcCode?: string;
  iswcCode?: string;
  edaRegistration?: string;
  releaseYear?: string;
  genreDetails?: string;
  bpm?: number;
  key?: string;
  mixMaster?: string;
  rightsOwner?: string;
  notes?: string;
  status?: string;
}

export interface Song {
  id: string;
  code?: string;
  title: string;
  genre: string;
  composer?: string;
  artist?: string;
  mood: string[];
  suggestedArtists: string[];
  coverUrl: string;
  audioUrl?: string;
  history: string;
  concept: string;
  language: string;
  bpm: number;
  key: string;
  commercialPotential: string;
  lyricsSnippet: string;
  registrationStatus: string;
  iswcCode?: string;
  featured?: boolean;
  audioFrequencyProfile?: number[];
  demoType?: 'Trap' | 'TrapSoul' | 'DarkTrap' | 'HipHop';
  customAudioName?: string;
  hasCustomAudio?: boolean;
  technicalSheet?: SongTechnicalSheet;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
  iconName: string;
}

export interface PressKitItem {
  id: string;
  title: string;
  fileSize: string;
  fileType: string;
  description: string;
  category: 'catalogo' | 'biografia' | 'licenciamento' | 'contato';
}

export interface LicensingRequest {
  songId?: string;
  songTitle?: string;
  entityType: 'Gravadora' | 'Artista' | 'Empresário' | 'Produtor' | 'Audiovisual' | 'Publicidade' | 'Outro';
  applicantName: string;
  email: string;
  phone: string;
  companyOrArtistName: string;
  licenseScope: 'Exclusiva' | 'Não Exclusiva' | 'Sincronização' | 'Sob Consulta';
  intendedProject: string;
  budgetRange?: string;
  additionalNotes?: string;
}

export interface ProposalSubmission {
  applicantName: string;
  email: string;
  phone: string;
  proposalType: 'Composição sob encomenda' | 'Parceria de Co-publishing' | 'Pitch de Artista' | 'Produção Musical';
  targetArtists?: string;
  projectSummary: string;
  demoLink?: string;
}

export interface ActiveAudioTrack {
  song: Song;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
}
