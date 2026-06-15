import React, { createContext, useContext, useState, useEffect } from 'react';

export interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'read' | 'archived';
}

interface SubmissionsContextType {
  submissions: Submission[];
  addSubmission: (submission: Omit<Submission, 'id' | 'submittedAt' | 'status'>) => void;
  updateSubmissionStatus: (id: string, status: 'new' | 'read' | 'archived') => void;
  deleteSubmission: (id: string) => void;
  getStats: () => { total: number; new: number; read: number; archived: number };
}

const SubmissionsContext = createContext<SubmissionsContextType | undefined>(undefined);

const SUBMISSIONS_STORAGE_KEY = 'himalayan_submissions';

export function SubmissionsProvider({ children }: { children: React.ReactNode }) {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  // Load submissions from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(SUBMISSIONS_STORAGE_KEY);
    if (stored) {
      try {
        setSubmissions(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to load submissions:', error);
      }
    }
  }, []);

  // Save submissions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(SUBMISSIONS_STORAGE_KEY, JSON.stringify(submissions));
  }, [submissions]);

  const addSubmission = (submission: Omit<Submission, 'id' | 'submittedAt' | 'status'>) => {
    const newSubmission: Submission = {
      ...submission,
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      status: 'new',
    };
    setSubmissions((prev) => [newSubmission, ...prev]);
  };

  const updateSubmissionStatus = (id: string, status: 'new' | 'read' | 'archived') => {
    setSubmissions((prev) =>
      prev.map((sub) => (sub.id === id ? { ...sub, status } : sub))
    );
  };

  const deleteSubmission = (id: string) => {
    setSubmissions((prev) => prev.filter((sub) => sub.id !== id));
  };

  const getStats = () => {
    return {
      total: submissions.length,
      new: submissions.filter((s) => s.status === 'new').length,
      read: submissions.filter((s) => s.status === 'read').length,
      archived: submissions.filter((s) => s.status === 'archived').length,
    };
  };

  return (
    <SubmissionsContext.Provider
      value={{ submissions, addSubmission, updateSubmissionStatus, deleteSubmission, getStats }}
    >
      {children}
    </SubmissionsContext.Provider>
  );
}

export function useSubmissions() {
  const context = useContext(SubmissionsContext);
  if (context === undefined) {
    throw new Error('useSubmissions must be used within SubmissionsProvider');
  }
  return context;
}
