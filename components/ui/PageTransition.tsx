import { cn } from '@/lib/utils';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <div
      className={cn(
        'transition-all duration-300',
        'page-transition-enter-active',
        className
      )}
    >
      {children}
    </div>
  );
} 