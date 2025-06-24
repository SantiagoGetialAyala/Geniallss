'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const discs = [
  {
    title: "Verte",
    embed: "https://open.spotify.com/embed/track/5otZx9rwHn0Y9dCujbKWlg?utm_source=generator"
  },
  {
    title: "Mañanas",
    embed: "https://open.spotify.com/embed/track/5wustcDJiodzD5BVQ7sUN8?utm_source=generator"
  },
  {
    title: "En Pedazos",
    embed: "https://open.spotify.com/embed/track/2kIkPMbcFupOiuifGpZNnu?utm_source=generator"
  }
];

const youtubeVideos = [
  {
    title: "Video 1",
    embed: "https://www.youtube.com/embed/_ihDd3PpOAQ"
  },
  {
    title: "Video 2",
    embed: "https://www.youtube.com/embed/a0sqW0L0y0Y"
  },
  {
    title: "Video 3",
    embed: "https://www.youtube.com/embed/P3nPUgmkIMg"
  }
];

const Discs = () => (
  <section className="py-12 px-6 text-center bg-white">
    <motion.h2 
      className="text-3xl font-bold mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Escucha Mi Música
    </motion.h2>

    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1.2}
        grabCursor={true}
        className="max-w-3xl mx-auto"
      >
        {discs.map((disc, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              className="flex flex-col items-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-lg font-semibold mb-2">{disc.title}</h3>
              <iframe
                src={disc.embed}
                width="100%"
                height="352"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg shadow-md"
              ></iframe>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>

    <motion.div 
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6">También en YouTube</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {youtubeVideos.map((video, idx) => (
          <motion.div 
            key={idx} 
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <iframe
              width="100%"
              height="200"
              src={video.embed}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-md"
            ></iframe>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default Discs;
