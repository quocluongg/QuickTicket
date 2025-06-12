'use client';
import React, { useEffect, useRef, useState } from 'react';

const WebcamToggle: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isOn, setIsOn] = useState(true);

  // Hàm bật webcam
  const startWebcam = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
      setIsOn(true);
    } catch (err) {
      console.error('Không thể truy cập camera:', err);
      alert('Vui lòng cấp quyền truy cập camera.');
    }
  };

  // Hàm tắt webcam
  const stopWebcam = () => {
    stream?.getTracks().forEach((track) => track.stop());
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setStream(null);
    setIsOn(false);
  };

  // Khi component mount: bật webcam
  useEffect(() => {
    startWebcam();
    return () => {
      stopWebcam(); // cleanup khi unmount
    };
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>React WebCam App</h1>
      <video
        ref={videoRef}
        autoPlay
        playsInline
        style={{
          width: '100%',
          maxWidth: 400,
          borderRadius: 8,
          border: '2px solid #000',
        }}
      />
      <br />
      <button
        onClick={() => (isOn ? stopWebcam() : startWebcam())}
        style={{ marginTop: 16, padding: '10px 20px', fontSize: 16 }}
      >
        {isOn ? 'Turn off your cam' : 'Turn on your cam'}
      </button>
    </div>
  );
};

export default WebcamToggle;
