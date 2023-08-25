"use client";
import { FC } from "react";
import { useRouter } from "next/navigation"; // Import from next/router
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import BigBoard from "../BigBoard/page";

interface GoogleFormProps {
  src: string;
  width: number;
  height: number;
}

const GoogleForm: FC<GoogleFormProps> = ({ src, width, height }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleFormSubmission = () => {
        setIsSubmitted(true);
    };
    
  return (
    <div className="w-full max-w-7xl">
      {isSubmitted ? (
        <BigBoard board={[]} />
      ) : (
        <div className="w-full max-w-7xl">
          <iframe
            src={src}
            width={width}
            height={height}
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            onSubmit={handleFormSubmission}
          >
            Loading...
          </iframe>
        </div>
      )}
    </div>
  );
};

export default GoogleForm;
