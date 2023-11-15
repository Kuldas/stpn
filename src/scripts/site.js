import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import morph from '@alpinejs/morph'
import persist from '@alpinejs/persist'
import focus from '@alpinejs/focus'

// Call Alpine.
window.Alpine = Alpine
Alpine.plugin([collapse, focus, morph, persist])
Alpine.start()