import SearchBar from '@/components/SearchBar';
import RunClubCard from '@/components/RunClubCard';
import { getAllRunClubs, getMajorCities } from '@/lib/runclubs';
import { getFeaturedRunClubs } from '@/utils/csvParser';
import { getCityImage, getCityGradient } from '@/utils/cityImages';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const allRunClubs = getAllRunClubs();
  const featuredRunClubs = getFeaturedRunClubs(allRunClubs, 6);
  const majorCities = getMajorCities();

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Find the <span className="text-emerald-600">best</span>
            <br />
            <span className="text-teal-600">run club</span> near you
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Curated <span className="text-teal-600 font-medium">running groups</span> picks delivered to your inbox
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <SearchBar />
          </div>

          <p className="text-sm text-slate-500">
            Join <span className="font-medium">3,650+</span> runners • Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Featured Run Clubs */}
      <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Find <span className="text-emerald-600">run clubs</span> in <span className="text-teal-600">minutes, not months</span>
          </h2>
          <p className="text-slate-600">
            with robust provider data, verified reviews and one-click tours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredRunClubs.map((runClub) => (
            <RunClubCard key={runClub.id} runClub={runClub} />
          ))}
        </div>
      </section>

      {/* Major Cities */}
      <section className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-2 text-slate-900">
            Explore <span className="text-emerald-600">Run Clubs</span> in <span className="text-teal-600">Major Metros</span>
          </h2>
          <p className="text-center text-slate-600 mb-8">
            Find the best running options in these popular destinations
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {majorCities.map((city, index) => {
              const cityImage = getCityImage(city.city);
              const fallbackGradient = getCityGradient(index);
              
              return (
                <Link 
                  key={city.city}
                  href={`/search?city=${encodeURIComponent(city.city)}`}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] shadow-lg hover:shadow-xl transition-shadow"
                >
                  {/* City Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={cityImage}
                      alt={`${city.city} cityscape`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  
                  {/* Fallback gradient overlay for loading/error states */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                  
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* City information */}
                  <div className="relative h-full flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-bold mb-1 drop-shadow-lg">
                      {city.city}{city.state && `, ${city.state}`}
                    </h3>
                    <p className="text-sm opacity-90 drop-shadow-md">
                      {city.count} run clubs
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Find <span className="text-emerald-600">run clubs</span> in <span className="text-teal-600">minutes, not months</span>
          </h2>
          <p className="text-slate-600 mb-8">
            with robust provider data, verified reviews and one-click tours.
          </p>
          
          <SearchBar className="max-w-2xl mx-auto" />
        </div>
      </section>
    </div>
  );
}
