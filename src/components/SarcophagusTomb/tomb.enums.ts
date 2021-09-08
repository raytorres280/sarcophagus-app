export enum SarcophagusStatus {
  Active = 'Sarcophagus is Active',
  ArweaveUploading = 'File is being uploaded',
  ArweaveMining = 'File is being mined on arweave',
  Mining = 'Mining in progress',
  Canceled = 'Sarcophagus cancelled',
  Closed = 'Resurrection Window is past',
  Buried = 'Sarcophagus buried',
  Cleaned = 'Sarcophagus cleaned',
  Signing = 'Signing needed',
  Unwrapping = 'Unwrapping in progress',
  Unwrapped = 'Sarcophagus unwrapped, resurrection available',
  Created = 'Sarcophagus creation in progress, resurrection unavailable',
  Default = 'Checking status...',
}

export enum TimerStatus {
  Active,
  Close,
  Unwrapping,
  Off,
  Calculating,
}