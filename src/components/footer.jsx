import React from 'react';
import { Shirt, Heart, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-panel border-t border-white/10 mt-24 py-12 px-4 sm:px-8 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2 text-white font-mono font-bold text-base">
            <Shirt className="text-emerald-400" size={18} />
            <span>ImpriStyle Lab</span>
          </div>
          <p className="text-neutral-400 leading-relaxed max-w-sm">
            Plateforme de personnalisation de vêtements et streetwear à la demande. Coton biologique premium, impression numérique directe haute définition et expédition soignée.
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-white font-bold font-mono uppercase tracking-wider text-[11px]">Garanties</h4>
          <ul className="space-y-1.5 text-neutral-400">
            <li className="flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>Impression DTG 300 DPI</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Truck size={13} className="text-emerald-400" />
              <span>Livraison Express & Suivie</span>
            </li>
            <li className="flex items-center gap-1.5">
              <Sparkles size={13} className="text-emerald-400" />
              <span>100% Coton Ring-Spun</span>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h4 className="text-white font-bold font-mono uppercase tracking-wider text-[11px]">Contact & Support</h4>
          <p className="text-neutral-400">Maroc & International</p>
          <p className="text-emerald-400 font-mono">support@impristyle.lab</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
        <div>© {new Date().getFullYear()} ImpriStyle Lab • Conçu par Amine Errachdi</div>
        <div className="font-mono">Fait avec passion & Next-Gen Workflows</div>
      </div>
    </footer>
  );
}
