export default function PreFooter() {
  return (
    <section className="relative overflow-hidden bg-orange-500">
      {/* Decoración izquierda */}
      <div
        className="
          absolute
          -left-36
          -bottom-24
          h-96
          w-96
          rounded-full
          border-[60px]
          border-orange-400/40
        "
      />

      {/* Decoración derecha */}
      <div
        className="
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          border-[50px]
          border-orange-400/40
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-10
          px-6
          py-20
          lg:flex-row
        "
      >
        <h2
          className="
            max-w-lg
            text-center
            text-4xl
            font-bold
            leading-tight
            text-white
            lg:text-left
          "
        >
          Simplify how your team works today.
        </h2>

        <button
          className="
            rounded-full
            bg-white
            px-8
            py-3
            font-semibold
            text-orange-500
            shadow-xl
            transition
            hover:scale-105
          "
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
