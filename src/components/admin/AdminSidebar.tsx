'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Kanban,
  CheckSquare,
  Building2,
  Package,
  Layers,
  FileCheck,
  FolderDown,
  Globe,
  ShieldAlert,
  Settings,
  History,
  LogOut,
  Cpu
} from 'lucide-react';

interface AdminSidebarProps {
  userEmail?: string;
  userRole?: string;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  userEmail = 'admin@perfai.in',
  userRole = 'SUPER_ADMIN',
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  };

  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Pipeline Kanban', href: '/admin/leads/pipeline', icon: Kanban },
    { label: 'Leads Table', href: '/admin/leads', icon: Users },
    { label: 'My Tasks', href: '/admin/tasks', icon: CheckSquare },
    { label: 'Contacts', href: '/admin/contacts', icon: Building2 },
    { label: 'Products', href: '/admin/products', icon: Package },
    { label: 'Industries', href: '/admin/industries', icon: Layers },
    { label: 'Case Studies', href: '/admin/case-studies', icon: FileCheck },
    { label: 'Resources & Docs', href: '/admin/resources', icon: FolderDown },
    { label: 'Website Content', href: '/admin/content', icon: Globe },
    { label: 'Users & Roles', href: '/admin/users', icon: ShieldAlert },
    { label: 'System Settings', href: '/admin/settings', icon: Settings },
    { label: 'Audit Logs', href: '/admin/audit-logs', icon: History },
  ];

  return (
    <aside className="w-64 bg-midnight border-r border-white/10 flex flex-col justify-between h-screen sticky top-0 text-slate-300">
      <div>
        {/* Logo header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <Link href="/admin/dashboard" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-techblue to-tealaccent flex items-center justify-center">
              <Cpu className="w-5 h-5 text-midnight" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-base tracking-tight">PERFAI Admin</div>
              <div className="text-[10px] text-tealaccent uppercase tracking-wider font-mono">Operations Portal</div>
            </div>
          </Link>
        </div>

        {/* Navigation list */}
        <nav className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-170px)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && item.href !== '/admin/leads' && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-techblue/20 text-tealaccent border border-tealaccent/30 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-tealaccent' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User profile & Logout */}
      <div className="p-4 border-t border-white/10 bg-deepnavy/50">
        <div className="flex items-center justify-between mb-3">
          <div className="truncate">
            <div className="text-xs font-bold text-white truncate">{userEmail}</div>
            <div className="text-[10px] text-tealaccent font-mono uppercase">{userRole}</div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 text-red-300 hover:bg-red-500/20 border border-red-500/20 text-xs font-semibold transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};
