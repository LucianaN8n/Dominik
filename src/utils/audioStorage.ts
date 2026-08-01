const DB_NAME = 'DominikPublisherDB';
const STORE_NAME = 'customSongsAudio';
const DB_VERSION = 1;

interface StoredAudio {
  blob: Blob;
  fileName: string;
  updatedAt: number;
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported'));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Saves a file/blob permanently into IndexedDB for a given songId.
 */
export async function saveCustomAudioToStorage(songId: string, file: File | Blob, fileName: string): Promise<{ audioUrl: string; fileName: string }> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const data: StoredAudio = {
        blob: file,
        fileName: fileName || 'custom_audio.mp3',
        updatedAt: Date.now()
      };
      const req = store.put(data, songId);
      req.onsuccess = () => {
        const audioUrl = URL.createObjectURL(file);
        resolve({ audioUrl, fileName: data.fileName });
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Error saving audio to IndexedDB:', err);
    const audioUrl = URL.createObjectURL(file);
    return { audioUrl, fileName };
  }
}

/**
 * Loads all custom saved audios from IndexedDB and creates valid object URLs.
 */
export async function loadAllCustomAudiosFromStorage(): Promise<Record<string, { audioUrl: string; fileName: string }>> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.openCursor();
      const result: Record<string, { audioUrl: string; fileName: string }> = {};

      req.onsuccess = () => {
        const cursor = req.result;
        if (cursor) {
          const songId = cursor.key as string;
          const data = cursor.value as StoredAudio;
          if (data && data.blob) {
            const audioUrl = URL.createObjectURL(data.blob);
            result[songId] = { audioUrl, fileName: data.fileName };
          }
          cursor.continue();
        } else {
          resolve(result);
        }
      };
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Error loading custom audios from IndexedDB:', err);
    return {};
  }
}

/**
 * Removes custom audio for a song from IndexedDB.
 */
export async function removeCustomAudioFromStorage(songId: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(songId);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.error('Error removing custom audio:', err);
  }
}
