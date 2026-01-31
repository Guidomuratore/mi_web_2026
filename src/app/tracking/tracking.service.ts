// ============================================================
// tracking.service.ts
// Pega esto en src/app/services/tracking.service.ts
// ============================================================
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TrackingService {

    // *** REEMPLAZA esta URL por la de tu webhook de n8n ***
    private readonly WEBHOOK_URL = 'https://n8n.guidomuratore.com.ar/webhook/track-ip';

    constructor() { }

    /**
     * Trackea la visita del usuario de forma completamente silenciosa.
     * No genera ningún log ni error visible, incluso si falla.
     */
    async trackVisit(): Promise<void> {
        try {
            // 1) Obtener IP del visitante
            const ipRes = await fetch('https://api.ipify.org?format=json').catch(() => null);
            if (!ipRes) return; // Falla silenciosa

            const { ip } = await ipRes.json().catch(() => ({ ip: 'unknown' }));

            // 2) Mandar al webhook de n8n
            const payload = {
                ip,
                pagina: window.location.pathname,
                referrer: document.referrer || 'directo',
                userAgent: navigator.userAgent
            };

            // Envío completamente silencioso (fire and forget)
            await fetch(this.WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            }).catch(() => { }); // Silenciar cualquier error

        } catch {
            // Completamente silencioso - sin logs
        }
    }
}