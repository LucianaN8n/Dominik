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
    genre: 'Trap / Trap Soul',
    composer: 'Luciana Domingos',
    artist: 'Dominik',
    mood: ['Frequência', 'Manifestação', 'Prosperidade', 'Elevação', 'Mentalidade'],
    suggestedArtists: ['Matuê', 'WIU', 'Veigh', 'Teto', 'L7NNON', 'Orochi'],
    coverUrl: frequenciaCover,
    history: 'Composição de Luciana Domingos desenvolvida para sintetizar a elevação da mente, ambição e sintonia com a prosperidade. Unindo arranjos atmosféricos de Trap com graves 808 marcantes e lírica reflexiva sobre visão de futuro, produzida por Dominik.',
    concept: 'Explora a mentalidade de conquista, foco inabalável e atração do sucesso através da sintonia e postura de liderança.',
    language: 'Português (Brasil)',
    bpm: 120,
    key: 'Lá Menor (Am)',
    commercialPotential: 'Indicada especialmente para artistas de destaque como Matuê (ideal em produções atmosféricas e modernas), WIU, Veigh, Teto, L7NNON e Orochi.',
    lyricsSnippet: `(Pure 528Hz tone resonating)
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
Manifestando o poder universal!`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Autoria & Licenciamento Disponível',
    isrcCode: 'BR-DMK-26-00001',
    upcCode: '7891000260001',
    iswcCode: 'T-312.894.101-0',
    featured: true,
    demoType: 'TrapSoul',
    audioUrl: '/audio/frequencia_manifestacao_demo.wav',
    audioFrequencyProfile: [55, 80, 90, 85, 95, 100, 85, 70, 90, 95, 80, 70, 60, 75, 85],
    technicalSheet: {
      title: 'Frequência da Manifestação',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik',
      publishers: 'Dominik Records Publishing',
      isrcCode: 'BR-DMK-26-00001',
      upcCode: '7891000260001',
      iswcCode: 'T-312.894.101-0',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Trap / Trap Soul (528Hz)',
      bpm: 120,
      key: 'Lá Menor (Am)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      notes: 'Obra 100% autoral por Luciana Domingos. Produção musical e arranjos por Dominik.'
    }
  },
  {
    id: 'a-mulher-em-mim',
    code: 'DP-001',
    title: 'A Mulher em Mim',
    genre: 'Trap Soul / Urban Pop',
    composer: 'Luciana Domingos (Lyra)',
    artist: 'Lyra',
    mood: ['Empoderamento', 'Emoção', 'Superação'],
    suggestedArtists: ['Ludmilla', 'Tasha & Tracie', 'Duquesa', 'Azzy'],
    coverUrl: aMulherEmMimCover,
    history: 'Composição e obra autoral por Luciana Domingos (Lyra), desenvolvida como um hino de reconexão e força feminina. "A Mulher em Mim" equilibra melodias de R&B contemporâneo e Urban Pop com graves 808 marcantes do Trap Soul, produzida e arranjada por Dominik.',
    concept: 'Uma composição sobre força, identidade e autoconfiança. Criada para artistas que desejam interpretar uma narrativa de transformação e empoderamento feminino.',
    language: 'Português',
    bpm: 128,
    key: 'Dó Menor (Cm)',
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
    isrcCode: 'BR-DMK-26-00002',
    upcCode: '7891000260002',
    iswcCode: 'T-312.894.102-1',
    featured: true,
    demoType: 'TrapSoul',
    audioUrl: '/audio/a_mulher_em_mim_demo.wav',
    audioFrequencyProfile: [40, 65, 80, 95, 70, 85, 90, 60, 45, 80, 100, 75, 50, 65, 85],
    technicalSheet: {
      code: 'DP-001',
      title: 'A Mulher em Mim',
      composer: 'Luciana Domingos (Lyra)',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik & Lyra',
      publishers: 'Dominik Records Publishing / UBC',
      isrcCode: 'BR-DMK-26-00002',
      upcCode: '7891000260002',
      iswcCode: 'T-312.894.102-1',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Trap Soul / Urban Pop',
      bpm: 128,
      key: 'Dó Menor (Cm)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      status: '🟢 Disponível para licenciamento',
      notes: 'Uma composição sobre força, identidade e autoconfiança. Criada para artistas que desejam interpretar uma narrativa de transformação e empoderamento feminino.'
    }
  },
  {
    id: 'aura',
    title: 'Minha Aura Pesa',
    genre: 'Dark Trap',
    composer: 'Luciana Domingos',
    artist: 'Lyra',
    mood: ['Luxo', 'Confiança', 'Presença', 'MISTÉRIO'],
    suggestedArtists: ['Lyra', 'Duquesa', 'Azzy'],
    coverUrl: auraCover,
    history: 'Obra autoral escrita por Luciana Domingos. Nascida a partir de synths obscuros e timbres minimalistas, "Minha Aura Pesa" foi projetada com produção e arranjos de Dominik para criar uma atmosfera de autoridade imediata.',
    concept: 'Explora o conceito do magnetismo pessoal e da elegância imponente. A música retrata a sensação de entrar num ambiente e dominar a atenção sem precisar dizer uma palavra.',
    language: 'Português (Brasil)',
    bpm: 135,
    key: 'Fá Sustenido Menor (F#m)',
    commercialPotential: 'Ideal para lançamentos conceituais de trap, videoclipes cinematográficos com estética fashion e alta demanda em playlists de treino e lifestyle de luxo.',
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
Só ficou pra olhar...`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Autoria & Licenciamento Disponível',
    isrcCode: 'BR-DMK-26-00003',
    upcCode: '7891000260003',
    iswcCode: 'T-312.894.103-2',
    featured: true,
    demoType: 'DarkTrap',
    audioUrl: '/audio/aura_demo.wav',
    audioFrequencyProfile: [60, 90, 100, 70, 85, 95, 80, 60, 90, 100, 80, 60, 40, 70, 90],
    technicalSheet: {
      title: 'Minha Aura Pesa',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik & Lyra',
      publishers: 'Dominik Records Publishing',
      isrcCode: 'BR-DMK-26-00003',
      upcCode: '7891000260003',
      iswcCode: 'T-312.894.103-2',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Dark Trap',
      bpm: 135,
      key: 'Fá Sustenido Menor (F#m)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      notes: 'Obra autoral por Luciana Domingos com produção e arranjos por Dominik.'
    }
  },
  {
    id: 'codigo-supremo',
    title: 'Código Supremo',
    genre: 'Trap Motivacional',
    composer: 'Luciana Domingos',
    artist: 'Dominik',
    mood: ['Mentalidade', 'Poder', 'Disciplina', 'Foco'],
    suggestedArtists: ['Matuê', 'Filipe Ret', 'L7NNON'],
    coverUrl: codigoSupremoCover,
    history: 'Composta por Luciana Domingos para ser uma injeção de adrenalina e foco inabalável. Combina arranjos de metais orquestrais gravados com linhas de sub-bass pesadíssimas e pontuações líricas cirúrgicas, com produção e arranjos de Dominik.',
    concept: 'A filosofia de vida de quem construiu a própria trajetória com trabalho duro, resiliência mental e recusou qualquer atalho fácil. Um manifesto para vencedores.',
    language: 'Português (Brasil)',
    bpm: 140,
    key: 'Sol Menor (Gm)',
    commercialPotential: 'Potencial massivo para viralização no TikTok/Reels, entrada direta nos charts de Trap Nacional e sync em games de esportes e campanhas corporativas.',
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
    isrcCode: 'BR-DMK-26-00004',
    upcCode: '7891000260004',
    iswcCode: 'T-312.894.104-3',
    featured: true,
    demoType: 'Trap',
    audioUrl: '/audio/codigo_supremo_demo.wav',
    audioFrequencyProfile: [80, 100, 90, 85, 95, 100, 75, 90, 85, 95, 100, 80, 65, 85, 95],
    technicalSheet: {
      title: 'Código Supremo',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik',
      publishers: 'Dominik Records Publishing',
      isrcCode: 'BR-DMK-26-00004',
      upcCode: '7891000260004',
      iswcCode: 'T-312.894.104-3',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Trap Motivacional',
      bpm: 140,
      key: 'Sol Menor (Gm)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      notes: 'Obra autoral por Luciana Domingos com produção e arranjos por Dominik.'
    }
  },
  {
    id: 'modo-imperador',
    title: 'Modo Imperador',
    genre: 'Trap',
    composer: 'Luciana Domingos',
    artist: 'Dominik',
    mood: ['Mentalidade', 'Liderança', 'Alta Performance', 'Domínio'],
    suggestedArtists: ['Veigh', 'KayBlack', 'MC Cabelinho'],
    coverUrl: modoImperadorCover,
    history: 'Composta por Luciana Domingos. Construída sob uma pulsação acelerada de hi-hats rápidos e arranjos épicos de cordas contemporâneas por Dominik.',
    concept: 'Representa a transição de quem superou a escassez e assumiu a liderança do próprio mercado. A posture do imperador que cuida do seu império e multiplica resultados.',
    language: 'Português (Brasil)',
    bpm: 132,
    key: 'Ré Menor (Dm)',
    commercialPotential: 'Altíssima aderência nas rádios urbanas, bailes e festivais de grande porte. Perfeita para aberturas de shows e faixas principiais de álbuns.',
    lyricsSnippet: `[Intro]
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

O jogo muda.`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Autoria & Licenciamento Disponível',
    isrcCode: 'BR-DMK-26-00005',
    upcCode: '7891000260005',
    iswcCode: 'T-312.894.105-4',
    featured: true,
    demoType: 'Trap',
    audioUrl: '/audio/modo_imperador_demo.wav',
    audioFrequencyProfile: [75, 85, 95, 100, 80, 90, 100, 85, 70, 95, 90, 80, 60, 75, 85],
    technicalSheet: {
      title: 'Modo Imperador',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik',
      publishers: 'Dominik Records Publishing',
      isrcCode: 'BR-DMK-26-00005',
      upcCode: '7891000260005',
      iswcCode: 'T-312.894.105-4',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Trap',
      bpm: 132,
      key: 'Ré Menor (Dm)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      notes: 'Obra autoral por Luciana Domingos com produção e arranjos por Dominik.'
    }
  },
  {
    id: 'efeito-magneto',
    title: 'Efeito Magneto',
    genre: 'Hip Hop',
    composer: 'Luciana Domingos',
    artist: 'Dominik',
    mood: ['Prosperidade', 'Abundância', 'Frequência', 'Sucesso'],
    suggestedArtists: ['Djonga', 'BK\'', 'L7NNON'],
    coverUrl: efeitoMagnetoCover,
    history: 'Composição de Luciana Domingos. Uma obra-prima de boom-bap moderno com influência de Jazz e linhas de baixo acústico produzidas por Dominik.',
    concept: 'O Efeito Magneto fala sobre a força de atração que emana de pessoas com propósito claro. Quando você trabalha no seu mais alto nível, as oportunidades gravitam naturally até você.',
    language: 'Português (Brasil)',
    bpm: 92,
    key: 'Lá Menor (Am)',
    commercialPotential: 'Obra aclamada por críticos de hip-hop consciente, ideal para fechar álbuns conceituais, vinhetas de prestígio e syncs em filmes e plataformas de streaming.',
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
Efeito Magneto!`,
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Autoria & Licenciamento Disponível',
    isrcCode: 'BR-DMK-26-00006',
    upcCode: '7891000260006',
    iswcCode: 'T-312.894.106-5',
    featured: true,
    demoType: 'HipHop',
    audioUrl: '/audio/efeito_magneto_demo.wav',
    audioFrequencyProfile: [50, 70, 85, 60, 75, 80, 90, 65, 85, 70, 60, 75, 80, 65, 50],
    technicalSheet: {
      title: 'Efeito Magneto',
      composer: 'Luciana Domingos',
      producers: 'Dominik',
      arrangers: 'Dominik',
      performers: 'Dominik',
      publishers: 'Dominik Records Publishing',
      isrcCode: 'BR-DMK-26-00006',
      upcCode: '7891000260006',
      iswcCode: 'T-312.894.106-5',
      edaRegistration: 'Biblioteca Nacional (EDA)',
      releaseYear: '2026',
      genreDetails: 'Hip Hop / Boom Bap',
      bpm: 92,
      key: 'Lá Menor (Am)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      notes: 'Obra autoral por Luciana Domingos com produção e arranjos por Dominik.'
    }
  },
  {
    id: 'codigo-invicto',
    code: 'DP-007',
    title: 'Código Invicto',
    genre: 'Trap / Dark Trap',
    composer: 'Luciana Domingos',
    artist: 'Dominik',
    mood: ['Sucesso', 'Superação', 'Energia', 'Poder', 'Prosperidade'],
    suggestedArtists: ['Matuê', 'WIU', 'Veigh', 'Teto', 'L7NNON', 'Orochi'],
    suggestedArtistsNational: ['Matuê', 'WIU', 'Veigh', 'Teto', 'L7NNON', 'Orochi', 'KayBlack', 'TZ da Coronel'],
    suggestedArtistsInternational: ['Travis Scott', 'Drake', 'Future', '21 Savage', 'Metro Boomin', 'Gunna'],
    instruments: ['Bass 808 Sub Heavy', 'Sintetizadores de Onda Analógica', 'Hi-hats Duplos Trap', 'Snare Roll', 'Guia Vocal Clean'],
    tags: ['Trap', 'DarkTrap', 'Ostentação', 'Superação', 'Mindset', 'Sucesso', 'CódigoInvicto'],
    coverUrl: codigoInvictoCover,
    history: 'Composição autoral por Luciana Domingos desenvolvida com linha de graves marcante de Trap, sintetizadores e narrativa sobre liderança, superação de bloqueios mentais e mentalidade invencível.',
    concept: 'Um manifesto de poder, foco e autoconfiança inabalável. Frequência do milhão, energia pura e superação no topo do cenário urbano.',
    catalogDescription: 'Faixa de alta pressão sonora para o mercado urbano. Apresenta o manifesto do Código Invicto com graves 808 potentes, atmosfera de luxo sombrio e refrão de altíssimo apelo para plataformas de streaming e shows ao vivo.',
    language: 'Português (Brasil)',
    bpm: 132,
    key: 'Ré Menor (Dm)',
    commercialPotential: 'Altíssimo potencial comercial para álbuns de Trap, aberturas de turnês e campanhas de impacto urbano.',
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
    registrationStatus: 'Registro da Obra: Biblioteca Nacional (EDA) | Dominik Publishing (Nº 312.894.107)',
    isrcCode: 'BR-DMK-26-00007',
    upcCode: '7891000260007',
    iswcCode: 'T-312.894.107-0',
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
      isrcCode: 'BR-DMK-26-00007',
      upcCode: '7891000260007',
      iswcCode: 'T-312.894.107-0',
      edaRegistration: 'Biblioteca Nacional (EDA) Nº 312.894.107',
      releaseYear: '2026',
      genreDetails: 'Trap / Dark Trap',
      bpm: 132,
      key: 'Ré Menor (Dm)',
      mixMaster: 'Dominik Studios (São Paulo, BR)',
      rightsOwner: 'Luciana Domingos & Dominik Records',
      notes: 'Obra 100% autoral por Luciana Domingos. Produção musical e arranjos por Dominik.'
    }
  }
];
