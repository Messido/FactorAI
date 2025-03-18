
import React from 'react';
import ScrollReveal from './ScrollReveal';
import AnimatedText from './AnimatedText';

const TeamSection: React.FC = () => {
  const team = [
    {
      name: "Alex Morgan",
      position: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Jordan Lee",
      position: "Head of Digital Strategy",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Taylor Kim",
      position: "Lead Web Developer",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Casey Rivera",
      position: "Content Strategist",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    }
  ];

  return (
    <section id="team" className="py-24 bg-factor-black">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-factor-red/10 rounded-full text-factor-red text-sm font-medium mb-4">
              Our Team
            </span>
            <AnimatedText
              text="Meet the Creative Minds"
              tag="h2"
              className="text-3xl md:text-4xl font-bold text-white mb-5"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our talented team of digital experts is passionate about helping brands reach their full potential.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 100}>
              <div className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-factor-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex space-x-3">
                        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-factor-black transition-transform duration-300 hover:scale-110">
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-factor-black transition-transform duration-300 hover:scale-110">
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                            <path d="M17.884 7.207a1.078 1.078 0 1 1-2.156 0 1.078 1.078 0 0 1 2.156 0z"></path>
                            <path d="M12 4.5c-2.068 0-2.325.007-3.138.046-.815.038-1.372.167-1.86.355-.505.196-.933.458-1.359.885-.43.43-.689.858-.886 1.36-.186.487-.317 1.044-.355 1.858-.04.814-.047 1.071-.047 3.139s.007 2.325.046 3.138c.038.815.167 1.372.355 1.86.196.505.458.933.885 1.359.43.43.858.689 1.36.886.487.186 1.044.317 1.858.355.813.04 1.07.047 3.138.047s2.325-.007 3.138-.046c.815-.038 1.372-.167 1.86-.355.505-.196.933-.458 1.359-.885.43-.43.689-.858.886-1.36.186-.487.317-1.044.355-1.858.04-.813.047-1.07.047-3.138s-.007-2.325-.046-3.138c-.038-.815-.167-1.372-.355-1.86-.196-.505-.458-.933-.885-1.359-.43-.43-.858-.689-1.36-.886-.487-.186-1.044-.317-1.858-.355C14.325 4.507 14.068 4.5 12 4.5zm0 1.382c2.04 0 2.277.008 3.082.045.744.034 1.15.158 1.42.262.356.138.61.304.879.573.269.268.436.522.574.879.104.27.228.676.262 1.42.037.804.045 1.042.045 3.082s-.008 2.277-.045 3.082c-.034.744-.158 1.15-.262 1.42-.138.356-.304.61-.573.879-.268.269-.523.436-.88.574-.27.104-.675.228-1.419.262-.804.037-1.042.045-3.082.045s-2.277-.008-3.082-.045c-.744-.034-1.15-.158-1.42-.262a2.372 2.372 0 0 1-.879-.574 2.372 2.372 0 0 1-.574-.879c-.104-.27-.228-.676-.262-1.42-.037-.804-.045-1.042-.045-3.082s.008-2.277.045-3.082c.034-.744.158-1.15.262-1.42.138-.356.304-.61.573-.879.268-.269.523-.436.88-.574.27-.104.675-.228 1.419-.262.805-.037 1.042-.045 3.082-.045z"></path>
                          </svg>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-factor-black transition-transform duration-300 hover:scale-110">
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.989 11.572a7.96 7.96 0 0 0-1.573-4.351 9.749 9.749 0 0 1-.92.87 13.157 13.157 0 0 1-3.313 2.01c.167.35.32.689.455 1.009v.003a9.186 9.186 0 0 1 .11.27c1.514-.17 3.11-.108 4.657.101.206.028.4.058.584.088zm-9.385-7.45a46.164 46.164 0 0 1 2.692 4.27c1.223-.482 2.234-1.09 3.048-1.767a7.88 7.88 0 0 0-5.74-2.503zm-2.56 9.074a54.052 54.052 0 0 0-3.907-.042 8.026 8.026 0
                            0 0 4.123 4.279 13.9 13.9 0 0 1-.216-4.237zm-3.584-1.78a56.981 56.981 0 0 1 4.046.048 54.28 54.28 0 0 0-1.184-2.234 25.917 25.917 0 0 0-2.862.236zm9.222-5.458l-.004.005c-.058.073-.13.148-.215.225a11.908 11.908 0 0 1-2.97 1.865 44.74 44.74 0 0 0-2.604-4.1 8.06 8.06 0 0 0-1.366-.118c-.087 0-.175.002-.262.006a7.977 7.977 0 0 0-2.104.561c.062.07.124.139.189.208.457.494.934 1.097 1.43 1.811.265.381.517.775.752 1.175.465.15.863.297 1.22.448.638.273 1.36.635 2.123 1.081.276.163.54.327.789.49.096.06.184.118.264.17.394.247.717.453.994.636.005-.106.01-.213.016-.32.033-.656.086-1.587.054-2.435a8.072 8.072 0 0 0-1.532-.902l-.02-.012c-.297-.177-.61-.356-.928-.54a7.994 7.994
                            0 0 0-4.17-1.186h-.676c-.094 0-.187.002-.28.005a7.98 7.98 0 0 0-5.9 2.791c.118.133.237.264.36.397a18.82 18.82 0 0 1 1.03.968c.093.09.184.181.275.269.384.034.761.052 1.128.052.34 0 .672-.014.995-.04.169-.014.338-.032.505-.052 1.298-.164 2.563-.48 3.67-.992.017-.008.036-.018.055-.027a7.99 7.99 0 0 0-2.618-.577zm3.318 8.07c.047-.063.097-.122.146-.185a9.297 9.297 0 0 0 1.317-2.1 7.94 7.94 0 0 0-1.765-.248c-.405 0-.794.03-1.168.08a11.95 11.95 0 0 1-.903 3.16c.678-.303 1.494-.712 2.373-.707zm-10.22-.422c.154.203.331.4.52.59a7.975 7.975 0 0 0 5.763 2.478c.915 0 1.792-.151 2.613-.427a16.773 16.773 0 0 0 .578-1.492 16.86 16.86
                            0 0 0 .457-1.74c-1.543.07-3.327-.127-4.575-1.546-.152-.173-.274-.354-.377-.534l-.022-.043a1.09 1.09 0 0 1-.031-.06 8.143 8.143 0 0 0-4.926 2.774zm11.438-8.891a8.012 8.012 0 0 0-1.29-1.4A15.304 15.304 0 0 1 12 9.696c.121.312.223.629.305.951.83.035.164.072.246.108a16.85 16.85 0 0 1 3.639.482c.585.132 1.116.287 1.596.458.042-.171.08-.345.111-.521a7.984 7.984 0 0 0-.234-3.031z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-gray-400">{member.position}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
