"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/dist/vanta.net.min";

const Background = () => {
    const vantaRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let vantaEffect: any = null;
        if (vantaRef.current) {
            vantaEffect = NET({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x2563eb, // blue-600
                backgroundColor: 0x0, // black
                points: 10.00,
                maxDistance: 20.00,
                spacing: 18.00,
                showDots: true
            });
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-black opacity-30"
        />
    );
};

export default Background;
