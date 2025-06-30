
import { Download, Eye } from 'lucide-react';

const Resume = () => {
  const handleViewResume = () => {
    window.open('/assets/ChinmayResume.pdf', '_blank');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/ChinmayResume.pdf';
    link.download = 'ChinmayResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="c-space mt-12">
      <h2 className="text-heading mb-6" >My Resume</h2>
      
      <div className="max-w-md mx-auto">
        <div className="rounded-xl shadow-lg p-8 text-center bg-violet-500 border border-gray-200">
          <p className="text-neutral-900 mb-6">
            Click here to view or download the resume
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleViewResume}
              className="flex-1 border-2 border-neutral-300 hover:border-neutral-400 text-neutral-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Eye className="w-5 h-5" />
              View
            </button>
            
            <button
              onClick={handleDownloadResume}
              className="flex-1 border-2 border-neutral-300 hover:border-neutral-400 text-neutral-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;