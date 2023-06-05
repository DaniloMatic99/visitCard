function shareContent() {
    if (navigator.share) {
      navigator.share({
        title: 'Visit card',
        text: 'Check out my website!',
        url: 'https://danilomatic99.github.io/visitCard/'
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      console.log('Web Share API not supported');
    }
  }
  