import Head from 'next/head';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const mouseSpecies = [
    { name: "House Mouse", scientific: "Mus musculus", habitat: "Urban areas, fields" },
    { name: "Field Mouse", scientific: "Apodemus sylvaticus", habitat: "Woodlands, grasslands" },
    { name: "Harvest Mouse", scientific: "Micromys minutus", habitat: "Tall grasses, reed beds" },
    { name: "Deer Mouse", scientific: "Peromyscus maniculatus", habitat: "Forests, prairies" }
  ];

  const mouseCharacteristics = [
    "Excellent climbers and swimmers",
    "Highly social animals",
    "Nocturnal behavior patterns",
    "Keen sense of smell and hearing",
    "Rapid reproduction rate",
    "Omnivorous diet"
  ];

  return (
    <>
      <Head>
        <title>About Mice - Glassmorphism Mouse App</title>
        <meta name="description" content="Learn fascinating facts about mice, their behavior, habitat, and characteristics" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              About Mice
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover the fascinating world of mice - small mammals with extraordinary abilities and complex social behaviors that have adapted to live alongside humans for thousands of years.
            </p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            {/* General Information */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    🐭 General Information
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Basic facts about mice and their characteristics
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white space-y-4">
                  <p className="leading-relaxed">
                    Mice are small rodents belonging to the family Muridae. They are found on every continent except Antarctica and have been living alongside humans for millennia.
                  </p>
                  <Separator className="bg-white/20" />
                  <div className="space-y-2">
                    <p><strong>Size:</strong> 2.5-4 inches (body length)</p>
                    <p><strong>Weight:</strong> 0.5-1 ounce</p>
                    <p><strong>Lifespan:</strong> 1-3 years in wild</p>
                    <p><strong>Gestation:</strong> 19-21 days</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Behavior */}
            <motion.div variants={fadeInUp}>
              <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center gap-2">
                    🧠 Behavior & Intelligence
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Understanding mouse behavior and cognitive abilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-white space-y-4">
                  <p className="leading-relaxed">
                    Mice are highly intelligent creatures with complex social structures and remarkable problem-solving abilities.
                  </p>
                  <Separator className="bg-white/20" />
                  <div className="flex flex-wrap gap-2">
                    {mouseCharacteristics.map((characteristic, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-100 border-blue-400/30">
                        {characteristic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Species Information */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-white flex items-center gap-2">
                  🌍 Common Mouse Species
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  Different species of mice and their natural habitats
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mouseSpecies.map((species, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white/5 rounded-lg p-4 border border-white/10"
                    >
                      <h4 className="text-xl font-semibold text-white mb-2">{species.name}</h4>
                      <p className="text-blue-200 italic mb-2">{species.scientific}</p>
                      <p className="text-blue-100">
                        <strong>Habitat:</strong> {species.habitat}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Ecological Role */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-white flex items-center gap-2">
                  🌿 Ecological Importance
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  The vital role mice play in ecosystems
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white space-y-4">
                <p className="leading-relaxed text-lg">
                  Despite their small size, mice play crucial roles in their ecosystems as both predators and prey, seed dispersers, and ecosystem engineers.
                </p>
                <Separator className="bg-white/20" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌱</div>
                    <h4 className="font-semibold mb-2">Seed Dispersal</h4>
                    <p className="text-blue-100">Help spread plant seeds across different areas</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🦉</div>
                    <h4 className="font-semibold mb-2">Food Chain</h4>
                    <p className="text-blue-100">Important food source for many predators</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-2">🔬</div>
                    <h4 className="font-semibold mb-2">Research</h4>
                    <p className="text-blue-100">Vital for medical and scientific research</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Fun Facts */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-3xl text-white flex items-center gap-2">
                  ✨ Amazing Mouse Facts
                </CardTitle>
                <CardDescription className="text-blue-100 text-lg">
                  Surprising and delightful facts about these remarkable creatures
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Mice can squeeze through holes as small as a dime",
                    "They have excellent memories and can remember routes",
                    "Mice are capable of learning their names",
                    "They can run up to 8 mph",
                    "Mice are naturally curious and love to explore",
                    "They communicate through ultrasonic vocalizations"
                  ].map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white/10 rounded-lg p-4 border border-white/10 text-center"
                    >
                      <p className="text-blue-100">{fact}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}