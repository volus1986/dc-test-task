'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import Popup from './popup';
import { PopupOptions } from './popup';

type PopupContextType = {
    openPopup: (options: PopupOptions) => void;
    closePopup: () => void;
};

const PopupContext = createContext<PopupContextType | null>(null);

export const usePopup = () => {
    const ctx = useContext(PopupContext);
    if (!ctx) throw new Error('usePopup must be used inside PopupProvider');
    return ctx;
};

export function PopupProvider({ children }: { children: ReactNode }) {
    const [popup, setPopup] = useState<PopupOptions | null>(null);

    const openPopup = (options: PopupOptions) => setPopup(options);
    const closePopup = () => setPopup(null);

    return (
        <PopupContext.Provider value={{ openPopup, closePopup }}>
            {children}

            {popup && (
                <Popup
                    title={popup.title}
                    content={popup.content}
                    onAccept={() => {
                        popup.onAccept?.();
                        closePopup();
                    }}
                    onDecline={() => {
                        popup.onDecline?.();
                        closePopup();
                    }}
                />
            )}
        </PopupContext.Provider>
    );
}
