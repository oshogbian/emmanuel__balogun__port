/**
 * Utility function to trigger resume download
 * @returns {void}
 */
const downloadResume = () => {
  try {
    // Create a temporary anchor element
    const link = document.createElement('a');
    
    // Set the href to the PDF resume file in the public directory
    link.href = '/Resume_Emmanuel Balogun.pdf';
    
    // Set the download attribute with the desired filename
    link.download = 'Emmanuel_Balogun_Resume.pdf';
    
    // Append to body, trigger click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error downloading resume:', error);
    // Fallback: Open in new tab if download fails
    window.open('/Emmanuel_Balogun_Resume.md', '_blank');
  }
};

export default downloadResume;
