
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Shield, PieChart, Target, ArrowRight, Smartphone, BarChart3 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-slate bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary-blue">
              WiseBank
            </h1>
          </div>
          <Link to="/auth">
            <Button className="bg-gradient-primary hover:opacity-90 transition-smooth rounded-button">
              Se connecter
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Votre{' '}
            <span className="text-primary-blue">
              Portefeuille Intelligent
            </span>{' '}
            Personnalisé
          </h2>
          <p className="text-xl text-slate mb-8 leading-relaxed">
            Gérez vos finances avec intelligence grâce à l'IA, suivez vos budgets en temps réel,
            et recevez des conseils financiers personnalisés pour atteindre vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-3 rounded-button transition-smooth hover-lift">
                Commencer Gratuitement
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 rounded-button border-slate text-slate hover:bg-slate-50 transition-smooth">
                Voir la Démo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-slate-800 mb-4">
            Fonctionnalités Intelligentes
          </h3>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Des outils puissants pour transformer votre gestion financière
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-slate shadow-xl bg-gradient-card hover:shadow-2xl transition-smooth hover-lift rounded-card">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Budgets Intelligents</CardTitle>
              <CardDescription className="text-slate">
                Répartition automatique de votre budget avec des conseils IA personnalisés
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate shadow-xl bg-gradient-card hover:shadow-2xl transition-smooth hover-lift rounded-card">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Analyses Prédictives</CardTitle>
              <CardDescription className="text-slate">
                Prédictions de votre évolution financière basées sur vos habitudes
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate shadow-xl bg-gradient-card hover:shadow-2xl transition-smooth hover-lift rounded-card">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Objectifs Personnalisés</CardTitle>
              <CardDescription className="text-slate">
                Définissez et atteignez vos objectifs financiers avec un suivi intelligent
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate shadow-xl bg-gradient-card hover:shadow-2xl transition-smooth hover-lift rounded-card">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Sécurité Avancée</CardTitle>
              <CardDescription className="text-slate">
                Chiffrement de bout en bout et protection de vos données sensibles
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate shadow-xl bg-gradient-card hover:shadow-2xl transition-smooth hover-lift rounded-card">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Interface Intuitive</CardTitle>
              <CardDescription className="text-slate">
                Design moderne et ergonomique pour une expérience utilisateur optimale
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-slate shadow-xl bg-gradient-card hover:shadow-2xl transition-smooth hover-lift rounded-card">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-xl text-slate-800">Conseils IA</CardTitle>
              <CardDescription className="text-slate">
                Recommandations financières intelligentes basées sur les tendances du marché
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Prêt à Transformer Votre Gestion Financière ?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers d'utilisateurs qui font confiance à WiseBank
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 rounded-button bg-white text-primary-blue hover:bg-slate-50 transition-smooth hover-lift">
              Créer Mon Compte Gratuitement
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-bold">WiseBank</h4>
            </div>
            <p className="text-slate-400 mb-4">
              Votre partenaire pour une gestion financière intelligente
            </p>
            <p className="text-sm text-slate-500">
              © 2024 WiseBank. Tous droits réservés. | Monnaie: FCFA
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
