import React, { useState, useEffect } from 'react';
import { Song, SongTechnicalSheet } from './types';
import { INITIAL_SONGS } from './data/songs';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Catalog } from './components/Catalog';
import { SongModal } from './components/SongModal';
import { TechnicalSheetModal } from './components/TechnicalSheetModal';
import { Composer } from './components/Composer';
import { ForLabels } from './components/ForLabels';
import { LegalProtection } from './components/LegalProtection';
import { PressKit } from './components/PressKit';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LicensingModal } from './components/LicensingModal';
import { ProposalModal } from './components/ProposalModal';
import { ProducerAreaModal } from './components/ProducerAreaModal';
import { AuthorAuthModal } from './components/AuthorAuthModal';
import { AddSongModal } from './components/AddSongModal';
import { AudioPlayer } from './components/AudioPlayer';
import { startDemoBeat, stopDemoBeat, setMasterVolume } from './utils/audioSynth';
import {
  saveCustomAudioToStorage,
  loadAllCustomAudiosFromStorage,
  removeCustomAudioFromStorage
} from './utils/audioStorage';

export default function App() {
  const [songs, setSongs] = useState<Song[]>(() => {
    try {
      const saved = localStorage.getItem('dominik_catalog_songs');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (err) {
      console.error('Error reading custom catalog songs:', err);
    }
    return INITIAL_SONGS;
  });

  const [activeSong, setActiveSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.7);

  // Author Mode & Modals
  const [isAuthorMode, setIsAuthorMode] = useState<boolean>(() => {
    return localStorage.getItem('luciana_author_mode') === 'true';
  });
  const [isAuthorAuthOpen, setIsAuthorAuthOpen] = useState<boolean>(false);
  const [selectedSongModal, setSelectedSongModal] = useState<Song | null>(null);
  const [technicalSheetSong, setTechnicalSheetSong] = useState<Song | null>(null);
  const [licensingSong, setLicensingSong] = useState<Song | null>(null);
  const [isLicensingOpen, setIsLicensingOpen] = useState<boolean>(false);
  const [isProposalOpen, setIsProposalOpen] = useState<boolean>(false);
  const [isProducerAreaOpen, setIsProducerAreaOpen] = useState<boolean>(false);
  const [isAddSongOpen, setIsAddSongOpen] = useState<boolean>(false);
  const [editingSong, setEditingSong] = useState<Song | null>(null);

  // Search state
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Persist songs list whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('dominik_catalog_songs', JSON.stringify(songs));
    } catch (err) {
      console.error('Error persisting songs catalog:', err);
    }
  }, [songs]);

  // Restore stored audio files & saved technical sheets from storage on startup
  useEffect(() => {
    loadAllCustomAudiosFromStorage().then(customAudios => {
      let savedSheets: Record<string, SongTechnicalSheet> = {};
      try {
        savedSheets = JSON.parse(localStorage.getItem('dominik_technical_sheets') || '{}');
      } catch (err) {
        console.error('Error reading technical sheets from storage:', err);
      }

      setSongs(prev =>
        prev.map(s => {
          const storedAudio = customAudios[s.id];
          const storedSheet = savedSheets[s.id];

          let updated = { ...s };

          if (storedAudio) {
            updated.audioUrl = storedAudio.audioUrl;
            updated.customAudioName = storedAudio.fileName;
            updated.hasCustomAudio = true;
          }

          if (storedSheet) {
            updated.technicalSheet = storedSheet;
            if (storedSheet.composer) updated.composer = storedSheet.composer;
            if (storedSheet.iswcCode) updated.iswcCode = storedSheet.iswcCode;
            if (storedSheet.isrcCode) updated.isrcCode = storedSheet.isrcCode;
            if (storedSheet.upcCode) updated.upcCode = storedSheet.upcCode;
          }

          return updated;
        })
      );
    });
  }, []);

  const handleSaveTechnicalSheet = (songId: string, sheet: SongTechnicalSheet) => {
    setSongs(prev =>
      prev.map(s => {
        if (s.id === songId) {
          return {
            ...s,
            technicalSheet: sheet,
            composer: sheet.composer || s.composer,
            iswcCode: sheet.iswcCode || s.iswcCode,
            isrcCode: sheet.isrcCode || s.isrcCode,
            upcCode: sheet.upcCode || s.upcCode
          };
        }
        return s;
      })
    );

    try {
      const existing = JSON.parse(localStorage.getItem('dominik_technical_sheets') || '{}');
      existing[songId] = sheet;
      localStorage.setItem('dominik_technical_sheets', JSON.stringify(existing));
    } catch (err) {
      console.error('Error saving technical sheet to storage:', err);
    }

    if (selectedSongModal && selectedSongModal.id === songId) {
      setSelectedSongModal(prev => (prev ? { ...prev, technicalSheet: sheet } : null));
    }

    if (technicalSheetSong && technicalSheetSong.id === songId) {
      setTechnicalSheetSong(prev => (prev ? { ...prev, technicalSheet: sheet } : null));
    }
  };

  const handleUpdateSongAudio = async (
    songId: string,
    newAudioUrl: string,
    file?: File | Blob,
    fileName?: string
  ) => {
    let finalUrl = newAudioUrl;
    let name = fileName || 'audio_personalizado.mp3';

    if (file) {
      const saved = await saveCustomAudioToStorage(songId, file, file instanceof File ? file.name : name);
      finalUrl = saved.audioUrl;
      name = saved.fileName;
    }

    setSongs(prev =>
      prev.map(s =>
        s.id === songId
          ? {
              ...s,
              audioUrl: finalUrl,
              customAudioName: name,
              hasCustomAudio: true
            }
          : s
      )
    );

    if (selectedSongModal && selectedSongModal.id === songId) {
      setSelectedSongModal(prev =>
        prev
          ? {
              ...prev,
              audioUrl: finalUrl,
              customAudioName: name,
              hasCustomAudio: true
            }
          : null
      );
    }

    if (activeSong && activeSong.id === songId) {
      setActiveSong(prev =>
        prev
          ? {
              ...prev,
              audioUrl: finalUrl,
              customAudioName: name,
              hasCustomAudio: true
            }
          : null
      );
    }
  };

  const handleResetSongAudio = async (songId: string) => {
    await removeCustomAudioFromStorage(songId);
    const initialSong = INITIAL_SONGS.find(s => s.id === songId);
    if (!initialSong) return;

    setSongs(prev =>
      prev.map(s =>
        s.id === songId
          ? {
              ...s,
              audioUrl: initialSong.audioUrl,
              customAudioName: undefined,
              hasCustomAudio: false
            }
          : s
      )
    );

    if (selectedSongModal && selectedSongModal.id === songId) {
      setSelectedSongModal(prev =>
        prev
          ? {
              ...prev,
              audioUrl: initialSong.audioUrl,
              customAudioName: undefined,
              hasCustomAudio: false
            }
          : null
      );
    }

    if (activeSong && activeSong.id === songId) {
      setActiveSong(prev =>
        prev
          ? {
              ...prev,
              audioUrl: initialSong.audioUrl,
              customAudioName: undefined,
              hasCustomAudio: false
            }
          : null
      );
    }
  };

  const handleSaveNewSong = async (newSong: Song, audioFile?: File) => {
    let songToAdd = { ...newSong };

    if (audioFile) {
      const saved = await saveCustomAudioToStorage(songToAdd.id, audioFile, audioFile.name);
      songToAdd.audioUrl = saved.audioUrl;
      songToAdd.customAudioName = saved.fileName;
      songToAdd.hasCustomAudio = true;
    }

    setSongs(prev => {
      const exists = prev.some(s => s.id === songToAdd.id);
      if (exists) {
        return prev.map(s => (s.id === songToAdd.id ? songToAdd : s));
      }
      return [songToAdd, ...prev];
    });
  };

  // Handle play / pause demo track
  const handlePlayDemo = (song: Song) => {
    if (activeSong?.id === song.id && isPlaying) {
      stopDemoBeat();
      setIsPlaying(false);
    } else {
      setActiveSong(song);
      setIsPlaying(true);
      startDemoBeat(song.demoType || 'Trap', song.bpm || 130, song.audioUrl);
    }
  };

  const handleTogglePlayActive = () => {
    if (!activeSong && songs.length > 0) {
      setActiveSong(songs[0]);
      setIsPlaying(true);
      startDemoBeat(songs[0].demoType || 'Trap', songs[0].bpm || 130, songs[0].audioUrl);
      return;
    }

    if (isPlaying) {
      stopDemoBeat();
      setIsPlaying(false);
    } else if (activeSong) {
      setIsPlaying(true);
      startDemoBeat(activeSong.demoType || 'Trap', activeSong.bpm || 130, activeSong.audioUrl);
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    setMasterVolume(newVol);
  };

  const handleOpenLicensingForSong = (song?: Song | null) => {
    setLicensingSong(song || activeSong || songs[0] || null);
    setIsLicensingOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    handleOpenLicensingForSong(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 selection:bg-[#D4AF37] selection:text-black">
      {/* HEADER */}
      <Header
        onOpenLicensing={() => handleOpenLicensingForSong(null)}
        onOpenProposal={() => setIsProposalOpen(true)}
        onOpenProducerArea={() => setIsProducerAreaOpen(true)}
        onOpenTechnicalSheet={() => setTechnicalSheetSong(songs.find(s => s.code === 'DP-001') || songs[0])}
        isAuthorMode={isAuthorMode}
        onOpenAuthorAuth={() => setIsAuthorAuthOpen(true)}
        onOpenPressKit={() => {
          setSelectedSongModal(null);
          setIsLicensingOpen(false);
          setIsProposalOpen(false);
          setIsProducerAreaOpen(false);
          const el = document.getElementById('presskit');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onCloseAllModals={() => {
          setSelectedSongModal(null);
          setIsLicensingOpen(false);
          setIsProposalOpen(false);
          setIsProducerAreaOpen(false);
        }}
      />

      {/* MAIN SECTIONS */}
      <main>
        <Hero onOpenLicensing={() => handleOpenLicensingForSong(null)} />
        
        <About />

        <Catalog
          songs={songs}
          activePlayingId={isPlaying ? activeSong?.id || null : null}
          onPlayDemo={handlePlayDemo}
          onViewDetails={(song) => setSelectedSongModal(song)}
          onViewTechnicalSheet={(song) => setTechnicalSheetSong(song)}
          onUpdateAudio={handleUpdateSongAudio}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isAuthorMode={isAuthorMode}
          onAddNewSong={() => {
            setEditingSong(null);
            setIsAddSongOpen(true);
          }}
        />

        <Composer />

        <ForLabels
          onOpenLicensing={() => handleOpenLicensingForSong(null)}
          onOpenProposal={() => setIsProposalOpen(true)}
        />

        <LegalProtection />

        <PressKit />

        <Contact />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* PERSISTENT FLOATING AUDIO PLAYER */}
      <AudioPlayer
        currentSong={activeSong}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlayActive}
        onRequestLicensing={(song) => handleOpenLicensingForSong(song)}
        volume={volume}
        onVolumeChange={handleVolumeChange}
        onUpdateAudio={handleUpdateSongAudio}
        isAuthorMode={isAuthorMode}
      />

      {/* INDIVIDUAL SONG DETAIL MODAL */}
      <SongModal
        song={selectedSongModal}
        isOpen={!!selectedSongModal}
        onClose={() => setSelectedSongModal(null)}
        isPlaying={isPlaying && activeSong?.id === selectedSongModal?.id}
        onPlayDemo={(song) => handlePlayDemo(song)}
        onRequestLicensing={(song) => handleOpenLicensingForSong(song)}
        onOpenTechnicalSheet={(song) => setTechnicalSheetSong(song)}
        onUpdateAudio={handleUpdateSongAudio}
        onResetAudio={handleResetSongAudio}
        isAuthorMode={isAuthorMode}
      />

      {/* TECHNICAL SHEET MODAL */}
      <TechnicalSheetModal
        song={technicalSheetSong}
        isOpen={!!technicalSheetSong}
        onClose={() => setTechnicalSheetSong(null)}
        onSaveTechnicalSheet={handleSaveTechnicalSheet}
        isAuthorMode={isAuthorMode}
        onOpenAuthorAuth={() => setIsAuthorAuthOpen(true)}
      />

      {/* LICENSING REQUEST MODAL */}
      <LicensingModal
        isOpen={isLicensingOpen}
        onClose={() => setIsLicensingOpen(false)}
        selectedSong={licensingSong}
        allSongs={songs}
      />

      {/* PROPOSAL SUBMISSION MODAL */}
      <ProposalModal
        isOpen={isProposalOpen}
        onClose={() => setIsProposalOpen(false)}
      />

      {/* PRODUCER VIP AREA MODAL */}
      <ProducerAreaModal
        isOpen={isProducerAreaOpen}
        onClose={() => setIsProducerAreaOpen(false)}
      />

      {/* AUTHOR / CREATOR EXCLUSIVE AUTH MODAL */}
      <AuthorAuthModal
        isOpen={isAuthorAuthOpen}
        onClose={() => setIsAuthorAuthOpen(false)}
        isAuthorMode={isAuthorMode}
        onToggleAuthorMode={(enable) => {
          setIsAuthorMode(enable);
          localStorage.setItem('luciana_author_mode', enable ? 'true' : 'false');
        }}
      />

      {/* ADD / EDIT SONG MODAL (MODO AUTORA) */}
      <AddSongModal
        isOpen={isAddSongOpen}
        onClose={() => setIsAddSongOpen(false)}
        onSaveSong={handleSaveNewSong}
        initialSong={editingSong}
      />
    </div>
  );
}
