const Index = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-warm">
      <div className="absolute inset-0 bg-background/5 backdrop-blur-3xl" />
      <div className="relative z-10 text-center animate-fade-in-up">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-foreground">
          Hello World
        </h1>
        <div className="mt-6 h-1 w-32 mx-auto bg-primary rounded-full" />
      </div>
    </div>
  );
};

export default Index;
