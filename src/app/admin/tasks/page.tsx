'use client';

import React, { useState } from 'react';
import { CheckSquare, Square, Clock, Plus, AlertCircle, Calendar } from 'lucide-react';

interface TaskItem {
  id: string;
  title: string;
  leadRef: string;
  company: string;
  dueText: string;
  priority: 'HIGH' | 'NORMAL' | 'URGENT';
  completed: boolean;
}

export default function AdminTasksPage() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    {
      id: 't1',
      title: 'Review chiller plant single-line diagram & 15-min interval CSV',
      leadRef: 'PRF-2026-00101',
      company: 'Apex Commercial REIT',
      dueText: 'Today (Overdue)',
      priority: 'URGENT',
      completed: false,
    },
    {
      id: 't2',
      title: 'Schedule introductory feasibility video conference with Chief Engineer',
      leadRef: 'PRF-2026-00102',
      company: 'Grand Horizon Hospitality',
      dueText: 'Tomorrow, 11:00 AM',
      priority: 'HIGH',
      completed: false,
    },
    {
      id: 't3',
      title: 'Generate preliminary IPMVP Option C weather-normalized baseline estimate',
      leadRef: 'PRF-2026-00103',
      company: 'CloudHyper Data Centres',
      dueText: 'In 3 days',
      priority: 'NORMAL',
      completed: false,
    },
  ]);

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="p-8 space-y-6 max-w-5xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <h1 className="font-heading text-2xl font-bold text-white">My Action Items & Follow-ups</h1>
          <p className="text-xs text-slate-400 mt-1">
            Manage engineering audits, technical proposal deadlines, and client calls
          </p>
        </div>
      </div>

      <div className="bg-deepnavy/80 rounded-2xl border border-white/10 glass-dark divide-y divide-white/5">
        {tasks.map((task) => (
          <div
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className={`p-4 flex items-start gap-3.5 hover:bg-white/5 cursor-pointer transition-colors ${
              task.completed ? 'opacity-40 line-through' : ''
            }`}
          >
            <button className="mt-0.5 text-tealaccent">
              {task.completed ? (
                <CheckSquare className="w-4 h-4 text-emerald-400" />
              ) : (
                <Square className="w-4 h-4 text-slate-400" />
              )}
            </button>

            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-heading font-semibold text-sm text-white">
                  {task.title}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    task.priority === 'URGENT'
                      ? 'bg-red-500/20 text-red-300'
                      : task.priority === 'HIGH'
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'bg-white/10 text-slate-300'
                  }`}
                >
                  {task.priority}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="font-mono text-tealaccent">{task.leadRef}</span>
                <span>{task.company}</span>
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3 h-3 text-techblue" />
                  <span>{task.dueText}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

