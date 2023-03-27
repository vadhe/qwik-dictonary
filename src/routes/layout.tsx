import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
import Navbar from '~/components/ui/Navbar';


export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <div class="page">
      <main>
        <Navbar/>
        <Slot />
      </main>
      <div class="section dark">
        <div class="container">
          ini footer
        </div>
      </div>
    </div>
  );
});
