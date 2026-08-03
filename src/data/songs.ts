import { Song } from '../types';

import frequenciaCover from '../assets/images/frequencia_manifestacao_cover_1785524456882.jpg';
import aMulherEmMimCover from '../assets/images/cover_a_mulher_em_mim_lyra_1785536030307.jpg';
import auraCover from '../assets/images/cover_aura_1785521319263.jpg';
import codigoSupremoCover from '../assets/images/cover_codigo_supremo_1785521329809.jpg';
import modoImperadorCover from '../assets/images/cover_modo_imperador_1785521343111.jpg';
import efeitoMagnetoCover from '../assets/images/cover_efeito_magneto_1785521353343.jpg';

export const codigoInvictoCover = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800"><defs><linearGradient id="invictoBg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23020205"/><stop offset="40%" stop-color="%230d0914"/><stop offset="100%" stop-color="%23000000"/></linearGradient><linearGradient id="invictoGold" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23FFFFFF"/><stop offset="25%" stop-color="%23FCE880"/><stop offset="60%" stop-color="%23C5A059"/><stop offset="100%" stop-color="%237A5B22"/></linearGradient><linearGradient id="cyanGold" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23C5A059"/><stop offset="50%" stop-color="%23FFFFFF"/><stop offset="100%" stop-color="%23C5A059"/></linearGradient><radialGradient id="invictoGlow" cx="50%" cy="40%" r="55%"><stop offset="0%" stop-color="%23C5A059" stop-opacity="0.45"/><stop offset="50%" stop-color="%2361481c" stop-opacity="0.15"/><stop offset="100%" stop-color="%23000000" stop-opacity="0"/></radialGradient></defs><rect width="800" height="800" fill="url(%23invictoBg)"/><circle cx="400" cy="350" r="320" fill="url(%23invictoGlow)"/><g opacity="0.15"><path d="M0,100 L800,100 M0,200 L800,200 M0,300 L800,300 M0,400 L800,400 M0,500 L800,500 M0,600 L800,600 M0,700 L800,700" stroke="%23C5A059" stroke-width="1"/><path d="M100,0 L100,800 M200,0 L200,800 M300,0 L300,800 M400,0 L400,800 M500,0 L500,800 M600,0 L600,800 M700,0 L700,800" stroke="%23C5A059" stroke-width="1"/></g><rect x="30" y="30" width="740" height="740" fill="none" stroke="url(%23invictoGold)" stroke-width="3"/><rect x="45" y="45" width="710" height="710" fill="none" stroke="%23C5A059" stroke-width="1" stroke-dasharray="6 6" opacity="0.6"/><g transform="translate(400, 330)"><polygon points="0,-160 130,-70 80,120 0,160 -80,120 -130,-70" fill="none" stroke="url(%23invictoGold)" stroke-width="5"/><polygon points="0,-130 100,-50 60,95 0,130 -60,95 -100,-50" fill="none" stroke="%23FFFFFF" stroke-width="1.5" opacity="0.8"/><path d="M-50,20 L0,-100 L50,20 L25,20 L25,70 L-25,70 L-25,20 Z" fill="url(%23invictoGold)"/><circle cx="0" cy="-30" r="18" fill="%23000000" stroke="url(%23invictoGold)" stroke-width="3"/><path d="M-10,-30 L10,-30 M0,-40 L0,-20" stroke="url(%23invictoGold)" stroke-width="3"/></g><text x="400" y="575" font-family="Georgia, serif" font-size="46" font-weight="900" fill="url(%23invictoGold)" text-anchor="middle" letter-spacing="7">CÓDIGO INVICTO</text><text x="400" y="620" font-family="Arial, sans-serif" font-size="16" font-weight="700" fill="%23FFFFFF" opacity="0.9" text-anchor="middle" letter-spacing="10">DOMINIK</text><rect x="230" y="650" width="340" height="32" fill="%23C5A059" opacity="0.15" stroke="%23C5A059" stroke-width="1"/><text x="400" y="671" font-family="monospace" font-size="12" font-weight="700" fill="%23C5A059" text-anchor="middle" letter-spacing="4">DARK TRAP • EDITAL EXCLUSIVO 2026</text></svg>`;

export const INITIAL_SONGS: Song[] = [
  {
    id: 'frequencia-da-manifestacao',
    code: 'DP-000',
    title: 'Frequência da Manifestação',
    genre: 'Luxury Trap / Trap Soul / Cinematic Trap / Motivational Hip Hop',
    composer: 'Luciana Domingos',
    artist: 'Dominik',
    mood: ['Powerful', 'Inspirational', 'Cinematic', 'Confident', 'Epic', 'Uplifting'],
    instruments: ['808 Bass', 'Trap Drums', 'Piano', 'Synth', 'Strings', 'Choir', 'Atmospheric Pads', 'FX', 'Bells'],
    tags: ['manifestation', 'luxury trap', 'cinematic trap', 'mindset', 'abundance', 'success', 'law of attraction', 'motivation', 'heavy 808', 'premium', 'anthem', 'positive energy'],
    suggestedArtists: ['Matuê', 'Veigh', 'WIU', 'L7NNON', 'Teto', 'Travis Scott', 'Don Toliver', 'Rod Wave', 'NF', 'Future'],
    suggestedArtistsNational: ['Matuê', 'Veigh', 'WIU', 'L7NNON', 'Teto'],
    suggestedArtistsInternational: ['Travis Scott', 'Don Toliver', 'Rod Wave', 'NF', 'Future'],
    coverUrl: frequenciaCover,
    history: 'Composição autoral por Luciana Domingos. Luxury Trap cinematográfico que une produção sofisticada, 808s marcantes e uma atmosfera inspiradora para explorar temas como abundância, mentalidade e realização.',
    concept: 'Explora a mentalidade de conquista, foco inabalável e atração do sucesso através da sintonia de 528Hz, abundância e postura de liderança.',
    catalogDescription: '"Frequência da Manifestação" é um Luxury Trap cinematográfico que une produção sofisticada, 808s marcantes e uma atmosfera inspiradora para explorar temas como abundância, mentalidade, propósito e realização. A composição transmite confiança e visão de futuro, sendo ideal para artistas que desejam interpretar uma mensagem de crescimento pessoal sem abrir mão de uma sonoridade moderna e impactante. Com forte potencial para streaming, sincronização audiovisual e campanhas motivacionais, a faixa combina emoção e imponência em uma estética premium.',
    language: 'Português (Brasil)',
    bpm: 129,
    key: 'Ré Sustenido Menor (D#m / Ebm)',
    commercialPotential: 'Forte potencial para streaming, sincronização audiovisual, campanhas motivacionais e shows de grande porte.',
    lyricsSnippet: `[Intro]
(Deep breathing sounds)
(Pure 528Hz tone resonating)
Sinta a frequência. 528 Hertz.
A chave da criação.
Ativando a abundância agora.

[Build-up]
O universo está ouvindo.
A batida vai tremer o chão.
Abra os braços. Sinta a força!
Prepare-se para receber!

[Drop]
[Massive Stadium Drums]
[Heavy Sub Bass]
A riqueza flui! O ouro vem!
Eu sou a fonte do que me faz bem!
Prosperidade! Sucesso real!
Manifestando o poder universal!

[Verse 1]
Olhe ao redor, tudo é energia
O que eu penso, eu crio no dia
A mente expande, a escassez sumiu
O fluxo divino em mim subiu
Dinheiro flui como água do mar
Eu nasci para conquistar!

[Pre-Chorus]
O som tá batendo, o peito vibrando
A nossa frequência está se elevando
Sinta o choque, sinta a conexão
Três, dois, um... Explosão!

[Chorus]
[Explosive Beat]
[Crowd Cheering]
A riqueza flui! O ouro vem!
Eu sou a fonte do que me faz bem!
Prosperidade! Sucesso real!
Manifestando o poder universal!

[Bridge]
(Frequência pura de 528Hz no fundo)
Eu sou próspero. Eu sou abundante.
O universo trabalha para mim.
Sinta essa energia tomar conta do show!

[Outro]
[Big Finish]
Está feito. Está manifesto.
A batida para. O eco fica.
528Hz... Ativado.
[End]`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Autoria & Licenciamento Disponível',
    isrcCode: 'BC6M22627839',
    upcCode: '7900279889449',
    iswcCode: 'Em andamento',
    featured: true,
    demoType: 'TrapSoul',
    audioUrl: '/audio/frequencia_manifestacao_demo.wav',
    audioFrequencyProfile: [55, 80, 90, 85, 95, 100, 85, 70, 90, 95, 80, 70, 60, 75, 85],
    technicalSheet: {
      code: 'DP-000',
      title: 'Frequência da Manifestação',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik',
      publishers: 'Dominik Records Publishing',
      isrcCode: 'BC6M22627839',
      upcCode: '7900279889449',
      iswcCode: 'Em andamento',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Luxury Trap / Trap Soul / Cinematic Trap / Motivational Hip Hop',
      bpm: 129,
      key: 'Ré Sustenido Menor (D#m / Ebm)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      status: '🟢 Disponível para licenciamento',
      notes: '"Frequência da Manifestação" é um Luxury Trap cinematográfico que une produção sofisticada, 808s marcantes e uma atmosfera inspiradora para explorar temas como abundância, mentalidade, propósito e realização. A composição transmite confiança e visão de futuro.'
    }
  },
  {
    id: 'a-mulher-em-mim',
    code: 'DP-001',
    title: 'A Mulher em Mim',
    genre: 'Trap Soul / Female Trap / Cinematic Trap',
    composer: 'Luciana Domingos',
    artist: 'Lyra',
    mood: ['Empowering', 'Confident', 'Dark', 'Cinematic', 'Emotional'],
    instruments: ['808 Bass', 'Piano', 'Synth', 'Strings', 'Choir', 'Pads', 'Percussion'],
    tags: ['female anthem', 'empowerment', 'luxury', 'trap', 'cinematic', 'confidence', 'urban', 'premium'],
    suggestedArtists: ['Gloria Groove', 'Ludmilla', 'Duquesa', 'Ebony', 'Tasha & Tracie', 'Doja Cat', 'Latto', 'Megan Thee Stallion', 'Cardi B', 'Flo Milli'],
    suggestedArtistsNational: ['Gloria Groove', 'Ludmilla', 'Duquesa', 'Ebony', 'Tasha & Tracie'],
    suggestedArtistsInternational: ['Doja Cat', 'Latto', 'Megan Thee Stallion', 'Cardi B', 'Flo Milli'],
    coverUrl: aMulherEmMimCover,
    history: 'Composição e obra autoral por Luciana Domingos, desenvolvida como um hino cinematográfico de força e identidade feminina.',
    concept: 'Um hino contemporâneo de empoderamento, celebrando força, identidade e liberdade feminina com alta sofisticação de produção.',
    catalogDescription: '"A Mulher em Mim" é um trap soul cinematográfico que celebra força, identidade e liberdade feminina. Com produção sofisticada, 808s intensos, piano atmosférico e melodias marcantes, a faixa combina emoção e imponência, sendo ideal para artistas que buscam um hino contemporâneo de empoderamento com forte apelo comercial.',
    language: 'Português (Brasil)',
    bpm: 144,
    key: 'Ré Menor (Dm)',
    commercialPotential: 'Altíssimo potencial de hit para álbum de estúdio, lead single ou trilha sonora de séries e campanhas publicitárias de luxo.',
    lyricsSnippet: `(Trecho Oficial / Prévia da Letra)

[Intro]

(Voz suave + piano, depois entra um 808 pesado)

Yeah...

Olha pra mim agora...

Quem duvidou...
Vai assistir de camarote.

Dominik Records.

[Verse 1]

Já chorei baixinho pra ninguém notar.
Hoje meu silêncio faz o mundo escutar.
Cada cicatriz virou minha medalha.
Transformei meu medo na minha batalha.

Me chamaram fraca...
Eu virei furacão.
Tentaram fechar...
Eu abri outra direção.

Não preciso provar quem eu sou.
Minha presença fala antes da minha voz.

[Pre-Chorus]

Olha onde eu cheguei...

Sem pedir licença.

Hoje minha paz...

Vale mais que qualquer sentença.`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | 🟢 Disponível para licenciamento',
    isrcCode: 'BC6M22622279',
    upcCode: '7900279896683',
    iswcCode: 'Em andamento',
    featured: true,
    demoType: 'TrapSoul',
    audioUrl: '/audio/a_mulher_em_mim_demo.wav',
    audioFrequencyProfile: [40, 65, 80, 95, 70, 85, 90, 60, 45, 80, 100, 75, 50, 65, 85],
    technicalSheet: {
      code: 'DP-001',
      title: 'A Mulher em Mim',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik & Lyra',
      publishers: 'Dominik Records Publishing / UBC',
      isrcCode: 'BC6M22622279',
      upcCode: '7900279896683',
      iswcCode: 'Em andamento',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Trap Soul / Female Trap / Cinematic Trap',
      bpm: 144,
      key: 'Ré Menor (Dm)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      status: '🟢 Disponível para licenciamento',
      notes: '"A Mulher em Mim" é um trap soul cinematográfico que celebra força, identidade e liberdade feminina. Com produção sofisticada, 808s intensos, piano atmosférico e melodias marcantes, a faixa combina emoção e imponência, sendo ideal para artistas que buscam um hino contemporâneo de empoderamento com forte apelo comercial.'
    }
  },
  {
    id: 'aura',
    code: 'DP-002',
    title: 'Minha Aura Pesa',
    genre: 'Luxury Trap / Trap Soul',
    composer: 'Luciana Domingos',
    artist: 'Lyra',
    mood: ['Powerful', 'Dark', 'Confident', 'Cinematic', 'Magnetic'],
    instruments: ['808 Bass', 'Piano', 'Synth', 'Strings', 'Pads', 'Choir', 'Trap Drums', 'FX'],
    tags: ['luxury trap', 'female trap', 'cinematic', 'empowerment', 'dark', 'boss energy', 'premium', 'urban', 'magnetic', 'anthem'],
    suggestedArtists: ['Gloria Groove', 'Duquesa', 'Ludmilla (fase trap)', 'Ebony', 'Tasha & Tracie', 'Doechii', 'Latto', 'Megan Thee Stallion', 'Cardi B', 'Flo Milli'],
    suggestedArtistsNational: ['Gloria Groove', 'Duquesa', 'Ludmilla (fase trap)', 'Ebony', 'Tasha & Tracie'],
    suggestedArtistsInternational: ['Doechii', 'Latto', 'Megan Thee Stallion', 'Cardi B', 'Flo Milli'],
    coverUrl: auraCover,
    history: 'Composição autoral por Luciana Domingos. Nascida a partir de 808s profundos, synths sombrios e timbres minimalistas, "Minha Aura Pesa" traduz presença, elegância e poder feminino em uma produção intensa e sofisticada.',
    concept: 'Explora o conceito do magnetismo pessoal e da elegância imponente. A música retrata a sensação de entrar num ambiente e dominar a atenção com autoridade e atitude indiscutível.',
    catalogDescription: '"Minha Aura Pesa" é um Luxury Trap cinematográfico que traduz presença, elegância e poder feminino em uma produção intensa e sofisticada. Com 808s profundos, atmosfera sombria e um refrão marcante, a faixa foi desenvolvida para artistas que desejam transmitir autoridade, confiança e identidade. Ideal para gravações comerciais, sincronização audiovisual, campanhas publicitárias e projetos de alto impacto.',
    language: 'Português (Brasil)',
    bpm: 125,
    key: 'Fá Maior (F Major)',
    commercialPotential: 'Ideal para gravações comerciais, sincronização audiovisual em produções de alto luxo, campanhas publicitárias e projetos de alto impacto.',
    lyricsSnippet: `[Intro - Whisper]

(Você sentiu...)
(Antes mesmo de me ver...)
(Lyra...)

[Beat Drop]

[Chorus]

Minha aura pesa...
Pesa...
Pesa...

Quem desacredita...
Reza...
Reza...

Olha a fumaça subir...
Olha a cidade parar...

Quem tentou competir...
Só ficou pra olhar...

Minha aura pesa...
Pesa...
Pesa...

Hoje ninguém vai me apagar.


Diamante nasce na pressão.
Eu virei tempestade depois do furacão.

Meu salto ecoa pelo chão.
Não por vaidade...
É direção.

O silêncio fala antes da voz.
Meu olhar diz tudo.
Nem preciso provar.

Onde eu passo nasce movimento.
Quem tem visão sabe reconhecer.


Luz baixa.
Preto e dourado.
Eu nem preciso falar.

O ambiente inteiro muda...
Quando eu resolvo chegar.

[Chorus]

Minha aura pesa...
Pesa...
Pesa...

Quem desacredita...
Reza...
Reza...

Olha a fumaça subir...
Olha a cidade parar...

Quem tentou competir...
Só ficou pra olhar...

Minha aura pesa...
Pesa...
Pesa...

Hoje ninguém vai me apagar.

[Bridge]

Não corro...

Eu atraio.

Não peço...

Eu assumo.

Não sigo...

Eu lidero.



Minha aura pesa...

Pesa...

Pesa...

Quem sente...
Nunca esquece.

Quem vê...
Nunca supera.

Minha aura pesa...

Lyra.
Cinematic Trap`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Autoria & Licenciamento Disponível',
    isrcCode: 'BR-DMK-26-00003',
    upcCode: '7891000260003',
    iswcCode: 'Em andamento',
    featured: true,
    demoType: 'DarkTrap',
    audioUrl: '/audio/aura_demo.wav',
    audioFrequencyProfile: [60, 90, 100, 70, 85, 95, 80, 60, 90, 100, 80, 60, 40, 70, 90],
    technicalSheet: {
      code: 'DP-002',
      title: 'Minha Aura Pesa',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik & Lyra',
      publishers: 'Dominik Records Publishing',
      isrcCode: 'BR-DMK-26-00003',
      upcCode: '7891000260003',
      iswcCode: 'Em andamento',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Luxury Trap / Trap Soul',
      bpm: 125,
      key: 'Fá Maior (F Major)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      status: '🟢 Disponível para licenciamento',
      notes: '"Minha Aura Pesa" é um Luxury Trap cinematográfico que traduz presença, elegância e poder feminino em uma produção intensa e sofisticada. Com 808s profundos, atmosfera sombria e um refrão marcante, a faixa foi desenvolvida para artistas que desejam transmitir autoridade, confiança e identidade.'
    }
  },
  {
    id: 'codigo-supremo',
    code: 'DP-004',
    title: 'Código Supremo',
    genre: 'Motivational Trap / Cinematic Trap / Hip-Hop / Luxury Trap',
    composer: 'Luciana Domingos',
    artist: 'Dominik',
    mood: ['Powerful', 'Epic', 'Confident', 'Motivational', 'Dark', 'Triumphant'],
    instruments: ['808 Bass', 'Trap Drums', 'Synth Bass', 'Cinematic Brass', 'Strings', 'Atmospheric Pads', 'Choir', 'Impact FX'],
    tags: ['motivational trap', 'cinematic trap', 'luxury trap', 'power', 'success', 'discipline', 'leadership', 'mindset', 'heavy 808', 'epic', 'victory', 'anthem'],
    suggestedArtists: ['Matuê', 'WIU', 'Veigh', 'Teto', 'Orochi', 'L7NNON', 'Travis Scott', 'Don Toliver', 'Future', 'Meek Mill', 'NF'],
    suggestedArtistsNational: ['Matuê', 'WIU', 'Veigh', 'Teto', 'Orochi', 'L7NNON'],
    suggestedArtistsInternational: ['Travis Scott', 'Don Toliver', 'Future', 'Meek Mill', 'NF'],
    coverUrl: codigoSupremoCover,
    history: 'Composição autoral por Luciana Domingos. Trap cinematográfico de alta intensidade que transforma disciplina, liderança e ambição em uma narrativa de poder.',
    concept: 'A energia de quem abandona desculpas, assume o controle da própria trajetória e constrói o próprio legado.',
    catalogDescription: '“Código Supremo” é um trap cinematográfico de alta intensidade que transforma disciplina, liderança e ambição em uma narrativa de poder. Com 808s pesados, elementos orquestrais e uma atmosfera épica, a faixa transmite a energia de quem abandona desculpas, assume o controle da própria trajetória e constrói o próprio legado. Indicada para artistas de trap, hip-hop e rap motivacional que buscam uma composição marcante, grandiosa e com forte potencial para shows, streaming, campanhas e sincronização audiovisual.',
    language: 'Português (Brasil)',
    bpm: 125,
    key: 'Dó Sustenido Menor (C#m)',
    commercialPotential: 'Indicada para artistas de trap, hip-hop e rap motivacional que buscam uma composição marcante, grandiosa e com forte potencial para shows, streaming, campanhas e sincronização audiovisual.',
    lyricsSnippet: `[Intro]
Ahn…
Frequência da cura, mas o grave rasga o chão
Ativando a prosperidade na marra
Se prepara pro impacto
Cê tá sentindo a vibração?

[Verse 1]
Mente blindada, o topo é o alvo
Olha pro bolso, tá tudo lotado
Frequência da luz limpando os bloqueios
Eu não quero resto, eu quero o recheio
Prosperidade exala na pele
O universo responde pro bonde
Quem tem visão nunca mais se esconde
Grave batendo, o copo tremendo

[Pre-Chorus]
A energia subiu, o público grita
Ninguém segura quem manifesta e acredita
Ouve o estalo, sente o impacto
Com a abundância eu fiz um pacto

[Chorus]
Código supremo! (vem!)
Grave batendo no peito, explosão! (rá!)
O ouro tá vindo pro meu lado
Manifestado e profetizado
Código supremo! (vem!)
Grave batendo no peito, explosão!
Derrubando as portas com o pé
Prosperidade pra quem tem fé

[Verse 2]
Atraio cifrão, atraio poder
Tudo que eu quero eu vou receber
Energia binaural na minha mente
Mudando a vida de toda a minha gente
Notas azuis empilhadas na mesa
Luz de quinhentos e vinte e oito limpando a tristeza
Sente o poder desse show, tá lotado
O mundo já é meu, tá decretado

[Bridge]
Não foi sorte, foi visão
Não foi acaso, foi decisão
Quando eu falo, o chão responde
Minha voz acende o horizonte

[Chorus]
Código supremo! (vem!)
Grave batendo no peito, explosão! (rá!)
O ouro tá vindo pro meu lado
Manifestado e profetizado
Código supremo! (vem!)
Grave batendo no peito, explosão!
Derrubando as portas com o pé
Prosperidade pra quem tem fé

[Outro]
Tá feito
Sente o eco do grave
Prosperidade pura
Ahn…`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Autoria & Licenciamento Disponível',
    isrcCode: 'BC6M22621438',
    upcCode: '7900279888718',
    iswcCode: 'Em andamento',
    featured: true,
    demoType: 'Trap',
    audioUrl: '/audio/codigo_supremo_demo.wav',
    audioFrequencyProfile: [80, 100, 90, 85, 95, 100, 75, 90, 85, 95, 100, 80, 65, 85, 95],
    technicalSheet: {
      code: 'DP-004',
      title: 'Código Supremo',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik',
      publishers: 'Dominik Records Publishing',
      isrcCode: 'BC6M22621438',
      upcCode: '7900279888718',
      iswcCode: 'Em andamento',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Motivational Trap / Cinematic Trap / Hip-Hop / Luxury Trap',
      bpm: 125,
      key: 'Dó Sustenido Menor (C#m)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      status: '🟢 Disponível para licenciamento',
      notes: '“Código Supremo” é um trap cinematográfico de alta intensidade que transforma disciplina, liderança e ambição em uma narrativa de poder. Com 808s pesados, elementos orquestrais e uma atmosfera épica, a faixa transmite a energia de quem abandona desculpas, assume o controle da própria trajetória e constrói o próprio legado.'
    }
  },
  {
    id: 'modo-imperador',
    code: 'DP-005',
    title: 'Modo Imperador',
    genre: 'Luxury Trap / Cinematic Trap / Hip Hop / Motivational Trap',
    composer: 'Luciana Domingos',
    artist: 'Dominik',
    mood: ['Powerful', 'Epic', 'Aggressive', 'Dark', 'Triumphant', 'Confident'],
    instruments: ['808 Bass', 'Trap Drums', 'Piano', 'Synth', 'Brass', 'Strings', 'Choir', 'Atmospheric Pads', 'FX'],
    tags: ['luxury trap', 'cinematic trap', 'boss anthem', 'king mindset', 'leadership', 'power', 'success', 'motivation', 'heavy 808', 'epic', 'victory', 'premium'],
    suggestedArtists: ['Matuê', 'Veigh', 'WIU', 'Teto', 'Orochi', 'L7NNON', 'Travis Scott', 'Future', 'Don Toliver', 'Rick Ross', 'Meek Mill'],
    suggestedArtistsNational: ['Matuê', 'Veigh', 'WIU', 'Teto', 'Orochi', 'L7NNON'],
    suggestedArtistsInternational: ['Travis Scott', 'Future', 'Don Toliver', 'Rick Ross', 'Meek Mill'],
    coverUrl: modoImperadorCover,
    history: 'Composta por Luciana Domingos. Luxury Trap cinematográfico construído para transmitir liderança, estratégia e domínio.',
    concept: 'Representa a mentalidade de quem assume o controle do próprio destino, supera batalhas e lidera pelo exemplo no mais alto nível.',
    catalogDescription: '"Modo Imperador" é um Luxury Trap cinematográfico construído para transmitir liderança, estratégia e domínio. Com produção grandiosa, 808s profundos, elementos orquestrais e uma atmosfera intensa, a faixa representa a mentalidade de quem assume o controle do próprio destino e lidera pelo exemplo. Desenvolvida para artistas que buscam um som premium, marcante e de forte impacto comercial, possui excelente potencial para streaming, performances ao vivo, campanhas publicitárias e sincronização audiovisual.',
    language: 'Português (Brasil)',
    bpm: 141,
    key: 'Fá Menor (F Minor)',
    commercialPotential: 'Excelente potencial para streaming, performances ao vivo, campanhas publicitárias e sincronização audiovisual.',
    lyricsSnippet: `[Intro]
[Deep male voice | Cinematic | Reverb]

Dominik Records...

Onde a mente domina...

O impossível recua.

(Boom)

[Verse 1]

Eu vim de longe
Olho frio, passo firme
Disciplina no peito
Nada me desvia

Cabeça em guerra
Mas a mente blindada
Faço do peso
Minha escada

Não espero sorte
Eu construo destino
Cada batalha
Refinou meu instinto

Enquanto eles sonham...
Eu construo.

Enquanto eles esperam...
Eu avanço.

[Pre-Chorus]

Respira...

Olha o horizonte...

O próximo nível...

Já começou.

[Drop]

Modo Imperador.

Liga.

Modo Imperador.

Vai.

Sem medo.

Sem freio.

Só foco.

Explode.

Modo Imperador.

Liga.

Modo Imperador.

Vai.

Quando eu passo...

O jogo muda.

[Verse 2]

Acordo antes
Da cidade respirar
Enquanto o mundo dorme
Eu começo a ganhar

Nada me compra
Nada me para
Minha visão
É muito mais rara

Meu nome ecoa

Minha presença pesa

Minha visão domina

Nada me atravessa

Não corro.

Eu avanço.

Não paro.

Eu alcanço.

[Pre-Chorus]

Respira...

Olha o horizonte...

O impossível...

Ficou pequeno.

[Final Drop]

Modo Imperador.

Liga.

Modo Imperador.

Vai.

Sem medo.

Sem freio.

Só foco.

Explode.

Modo Imperador.

Liga.

Modo Imperador.

Vai.

Quando eu passo...

O jogo muda.

[Crowd Chant]

Hey!

Hey!

Modo...

Imperador!

Hey!

Hey!

Modo...

Imperador!

[Outro]

Não foi sorte...

Foi decisão.

Dominik Records.`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Autoria & Licenciamento Disponível',
    isrcCode: 'BC6M22675389',
    upcCode: '7900279891763',
    iswcCode: 'Em andamento',
    featured: true,
    demoType: 'Trap',
    audioUrl: '/audio/modo_imperador_demo.wav',
    audioFrequencyProfile: [75, 85, 95, 100, 80, 90, 100, 85, 70, 95, 90, 80, 60, 75, 85],
    technicalSheet: {
      code: 'DP-005',
      title: 'Modo Imperador',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik',
      publishers: 'Dominik Records Publishing',
      isrcCode: 'BC6M22675389',
      upcCode: '7900279891763',
      iswcCode: 'Em andamento',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Luxury Trap / Cinematic Trap / Hip Hop / Motivational Trap',
      bpm: 141,
      key: 'Fá Menor (F Minor)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      status: '🟢 Disponível para licenciamento',
      notes: '"Modo Imperador" é um Luxury Trap cinematográfico construído para transmitir liderança, estratégia e domínio. Com produção grandiosa, 808s profundos, elementos orquestrais e uma atmosfera intensa, a faixa representa a mentalidade de quem assume o controle do próprio destino e lidera pelo exemplo.'
    }
  },
  {
    id: 'efeito-magneto',
    code: 'DP-006',
    title: 'Efeito Magneto',
    genre: 'Luxury Trap / Trap Soul / Cinematic Trap / Hip Hop',
    composer: 'Luciana Domingos',
    artist: 'Dominik',
    mood: ['Magnetic', 'Powerful', 'Dark', 'Confident', 'Cinematic', 'Mysterious'],
    instruments: ['808 Bass', 'Trap Drums', 'Piano', 'Synth', 'Strings', 'Choir', 'Atmospheric Pads', 'FX', 'Bass Synth'],
    tags: ['magnetism', 'luxury trap', 'cinematic trap', 'confidence', 'mindset', 'abundance', 'power', 'heavy 808', 'premium', 'dark', 'anthem', 'manifestation'],
    suggestedArtists: ['Gloria Groove', 'Duquesa', 'WIU', 'Veigh', 'Ludmilla (fase trap)', 'Doechii', 'Travis Scott', 'Don Toliver', 'Megan Thee Stallion', 'Latto'],
    suggestedArtistsNational: ['Gloria Groove', 'Duquesa', 'WIU', 'Veigh', 'Ludmilla (fase trap)'],
    suggestedArtistsInternational: ['Doechii', 'Travis Scott', 'Don Toliver', 'Megan Thee Stallion', 'Latto'],
    coverUrl: efeitoMagnetoCover,
    history: 'Composição autoral por Luciana Domingos. Luxury Trap cinematográfico que explora o conceito de magnetismo pessoal, confiança e atração por meio de uma produção sofisticada e intensa.',
    concept: 'Explora o conceito de magnetismo pessoal, atração da abundância e presença marcante sob o comando do próprio destino.',
    catalogDescription: '"Efeito Magneto" é um Luxury Trap cinematográfico que explora o conceito de magnetismo pessoal, confiança e atração por meio de uma produção sofisticada e intensa. Com 808s profundos, piano atmosférico e elementos orquestrais, a faixa cria uma experiência sonora envolvente e marcante. Desenvolvida para artistas que desejam transmitir presença, poder e autenticidade, possui forte potencial para streaming, sincronização audiovisual, campanhas publicitárias e performances ao vivo.',
    language: 'Português (Brasil)',
    bpm: 122,
    key: 'Fá Menor (F Minor)',
    commercialPotential: 'Forte potencial para streaming, sincronização audiovisual, campanhas publicitárias e performances ao vivo.',
    lyricsSnippet: `[Intro]
Sinfonia cósmica brilhando em 528 hertz
(Voz com eco profundo)
Eles acham que é sorte
Não é sorte, é magnetismo
Ativando o Efeito Magneto agora
Olha a energia subindo
Sente o choque

[Verse 1]
Espirais de ouro cortando os telhados
Olha lá
O topo do mundo já tá dominado
Tá!
Frequência divina moldando a matéria
Mente de rei comandando essa era
Luz que envolve, energia que cria
O que era sonho virou profecia
O grave batendo e a aura brilhando
Notas de cem no meu bolso empilhando
(Vem comigo)

[Pre-Chorus]
Eu sou o ímã que atrai o poder
Ahn
Tudo que é meu vai ter que ceder
O céu tá dourado, o código abriu
A força do bonde você já sentiu
(Sentiu)

[Chorus]
Efeito Magneto!
(Vem!)
Puxando a riqueza direto pro centro
(Rrá!)
O mundo girando e eu no controle
Abundância pura, não me engole
Efeito Magneto!
(Vem!)
Grave rasgando, o topo é meu teto
Ninguém segura a força da luz
Prosperidade que me conduz
(Efeito Magneto)

[Verse 2]
Olha pra tela, a energia tá pura
Manifestando no nível mais alto
O universo não faz sobressalto
Eu ditei a lei, assinei o contrato
Sino tocando, a mente blindada
A força do milhão tá decretada
Tudo que é meu vem sem demora
Quando eu chamo, a maré vai embora
(Tá vindo)

[Bridge]
Atraído
Conquistado
Manifesto
Eu sou o ímã
O silêncio pesa
E eu brilho mais
Quando eu piso firme
Tudo cai pro cais
(Efeito)

[Chorus]
Efeito Magneto!
(Vem!)
Puxando a riqueza direto pro centro
(Rrá!)
O mundo girando e eu no controle
Abundância pura, não me engole
Efeito Magneto!
(Vem!)
Grave rasgando, o topo é meu teto
Ninguém segura a força da luz
Prosperidade que me conduz
(Efeito Magneto)

[Outro]
Atraído
Conquistado
Manifesto
Eu sou o ímã
Ativado.`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Autoria & Licenciamento Disponível',
    isrcCode: 'BC6M22621546',
    upcCode: '7900279892876',
    iswcCode: 'Em andamento',
    featured: true,
    demoType: 'HipHop',
    audioUrl: '/audio/efeito_magneto_demo.wav',
    audioFrequencyProfile: [50, 70, 85, 60, 75, 80, 90, 65, 85, 70, 60, 75, 80, 65, 50],
    technicalSheet: {
      code: 'DP-006',
      title: 'Efeito Magneto',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik',
      publishers: 'Dominik Records Publishing',
      isrcCode: 'BC6M22621546',
      upcCode: '7900279892876',
      iswcCode: 'Em andamento',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Luxury Trap / Trap Soul / Cinematic Trap / Hip Hop',
      bpm: 122,
      key: 'Fá Menor (F Minor)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      status: '🟢 Disponível para licenciamento',
      notes: '"Efeito Magneto" é um Luxury Trap cinematográfico que explora o conceito de magnetismo pessoal, confiança e atração por meio de uma produção sofisticada e intensa. Com 808s profundos, piano atmosférico e elementos orquestrais, a faixa cria uma experiência sonora envolvente e marcante.'
    }
  },
  {
    id: 'codigo-invicto',
    code: 'DP-007',
    title: 'Código Invicto',
    genre: 'Trap Soul',
    composer: 'Luciana Domingos',
    artist: 'Dominik',
    mood: ['Sombria', 'Liderança', 'Luxo', 'Autoconfiança', 'Empoderamento'],
    suggestedArtists: ['Veigh', 'WIU', 'Matuê', 'KayBlack', 'Teto'],
    suggestedArtistsNational: ['Veigh', 'WIU', 'Matuê', 'KayBlack', 'Teto'],
    suggestedArtistsInternational: ['Travis Scott', 'Future', '21 Savage', 'Metro Boomin'],
    instruments: ['808 Bass Pesado', 'Sintetizadores', 'Hi-hats Duplos Trap', 'Piano Atmosférico'],
    tags: ['TrapSoul', 'DarkTrap', 'Ostentação', 'Liderança', 'Mindset', 'Sucesso', 'CódigoInvicto'],
    coverUrl: codigoInvictoCover,
    history: 'Composição autoral por Luciana Domingos desenvolvida com linha de graves 808 marcante, atmosfera sombria e narrativa sobre liderança, luxo e autoconfiança.',
    concept: 'Um manifesto de poder, foco e autoconfiança inabalável. Frequência do milhão, energia pura e superação no topo do cenário urbano.',
    catalogDescription: 'Trap Soul cinematográfico com atmosfera sombria, 808s pesados e melodias marcantes. "Código Invicto" transmite liderança, luxo e autoconfiança, sendo ideal para artistas que buscam um som premium, moderno e de forte impacto comercial.',
    language: 'Português (Brasil)',
    bpm: 148,
    key: '',
    commercialPotential: 'Altíssimo potencial comercial para álbuns de Trap / Trap Soul, aberturas de turnês e campanhas de impacto urbano.',
    lyricsSnippet: `[Intro]
Dominik.
Conexão direta.
Sem espaço pro erro.
Sente o choque na pele.
Três, dois, um...
Vai!

[Verse 1]
Grave quebrando o concreto da rua, ahn
Minha chegada vira o medo da sua, olha lá
Voz limpa cortando a barreira
Nossa estrutura toma a cadeira
Eu não fico no quase
Meu mapa já mudou de fase
Olha pro alto, o império tá feito
Sente o peso do grave no peito

[Pre-Chorus]
O som tá batendo, a mente estalou
O ímã do topo dentro de nós ligou
Acelera o pulso, o peito vibrando
A força subindo, tudo alinhando
Sente a pressão, o chão vai ceder
Ninguém segura o que vai acontecer

[Chorus]
Código invicto
É o estouro da banca
Puxando a riqueza que a mente arranca
Aura dourada no meio do caos
Deixando pra trás os bloqueios mentais
Código invicto
Energia pura
Frequência do milhão no alto da altura
Sente o impacto, assina o sucesso
Ninguém para o nosso progresso

[Verse 2]
Notas voando, a conta entupida
Luz de quinhentos mudando a vida
Quem tá de fora não aguenta o barulho
Dominik no comando, quebrando o orgulho
Grave na caixa batendo pesado
O mundo já é meu, tá decretado
Eu vi o medo bater e sair
Agora é meu nome que faz o futuro girar

[Outro]
Tá feito.
Tá na mão.
Código invicto...
Ativado.
Dominik.
Vai!`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Dominik Publishing',
    isrcCode: '',
    upcCode: '',
    iswcCode: 'Em andamento',
    featured: true,
    demoType: 'DarkTrap',
    audioUrl: '/audio/frequencia_manifestacao_demo.wav',
    technicalSheet: {
      title: 'Código Invicto',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik',
      publishers: 'Dominik Publishing',
      isrcCode: '',
      upcCode: '',
      iswcCode: 'Em andamento',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Trap Soul / Dark Trap',
      bpm: 148,
      key: 'Não informada',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      notes: 'Trap Soul cinematográfico com atmosfera sombria, 808s pesados e melodias marcantes. "Código Invicto" transmite liderança, luxo e autoconfiança, sendo ideal para artistas que buscam um som premium, moderno e de forte impacto comercial.'
    }
  }
];
