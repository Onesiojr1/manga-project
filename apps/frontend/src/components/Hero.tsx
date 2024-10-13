interface HeroProps {
  children: React.ReactNode
}

interface HeroElementProps {
  children: React.ReactNode
}

export function HeroTitle(props: HeroElementProps) {
  return <h1 className="text-7xl leading-none my-12 uppercase lg:text-9xl lg:my-6">{props.children}</h1>
}

export function HeroSubtitle(props: HeroElementProps) {
  return <p className="text-3xl leading-tight mb-12 text-zinc-300 lg:text-4xl">{props.children}</p>
}

export default function Hero(props: HeroProps) {
  return (
    <div className="text-center">{props.children}</div>
  );
}