/**
 * Google Drive integration utilities for Dominik Publishing.
 * Converts shared Google Drive URLs into direct audio streaming links
 * and provides access to the official Google Drive repository folder.
 */

export const DOMINIK_DRIVE_FOLDER_URL = 'https://drive.google.com/drive/folders/1XztzCdYXoLIOI5pxebRFDSp2BBdqYLsq?usp=sharing';

/**
 * Extracts Google Drive File ID from various link formats.
 */
export function extractDriveFileId(url: string): string | null {
  if (!url) return null;

  // Format: https://drive.google.com/file/d/FILE_ID/view
  const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return fileIdMatch[1];
  }

  // Format: https://drive.google.com/open?id=FILE_ID or uc?id=FILE_ID
  const queryIdMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (queryIdMatch && queryIdMatch[1]) {
    return queryIdMatch[1];
  }

  return null;
}

/**
 * Converts a Google Drive share link to a direct streaming audio URL for HTML5 <audio>.
 */
export function getAudioStreamUrl(url?: string): string | undefined {
  if (!url) return undefined;

  // Check if it's a Google Drive link
  if (url.includes('drive.google.com') || url.includes('docs.google.com')) {
    const fileId = extractDriveFileId(url);
    if (fileId) {
      // Direct stream URL for Google Drive hosted audio
      return `https://docs.google.com/uc?export=download&id=${fileId}`;
    }
  }

  return url;
}

/**
 * Validates whether a string is a Google Drive folder link.
 */
export function isDriveFolderUrl(url: string): boolean {
  return url.includes('drive.google.com/drive/folders') || url.includes('drive.google.com/folderview');
}
