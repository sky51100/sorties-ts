require('dotenv').config();
const { Client, GatewayIntentBits } = require("discord.js");
const cron = require('node-cron');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)

function sendRandomMessage(channel) {
    // Vérifiez si le canal existe
    if (channel) {
        // Choisissez une paire de messages aléatoire parmi la liste
        const randomPair = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

        // Ajoutez "@everyone" à chaque ligne du message
        const mentionedMessages = randomPair.map(line => `@everyone ${line}`);

        // Créez un objet embed avec l'image du bot
        const embed = {
            author: {
                name: client.user.username,
                icon_url: client.user.displayAvatarURL(), // Utilise l'URL de l'avatar du bot
            },
            description: mentionedMessages.join('\n'), // Joignez les messages aléatoires en une seule chaîne
            image: {
                url: 'https://static1.millenium.org/articles/7/11/80/87/@/22155-gw2-sud-soleil-article_list_m-1.jpeg',
            },
        };

        // Envoyez le message avec l'objet embed
        channel.send({ embeds: [embed] })
            .then(() => console.log('Message envoyé avec succès'))
            .catch(error => console.error('Erreur lors de l\'envoi du message :', error));
    } else {
        console.error('Canal introuvable.');
    }
}


// Remplacez 'TOKEN' par le token de votre bot Discord
const TOKEN = 'MTE4NTMzMTc0NDUzOTQyMjc2MA.GqQvW-.d4a3B5ZtVul4tDN67FYM2UEaBsva2Goiy0Ej58';
// Remplacez les messages par ceux de votre choix
const MESSAGES = [
["Ce soir, je vous propose de sortir en** Catacombes de Kathandrax**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Ménagerie de Rragar**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Cathédrale des Flammes**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Fosse à vases**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Galeries de Sombregivre**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Terriers de Mord-givre**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Sépulcre de Dragrimmar**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Point du Corbeau**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Excavations de Vlox**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Reliefs de Bogroot**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Cavernes de la Pierre de Sang**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Fragments d'Orr**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Labo d'Oola**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Repaire d'Arachni**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Bagne des esclavagistes**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Tanière de Fronis Orteildacier**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Repaire secret des Bonshommes de neige**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Coeur des Cimefroides**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Labyrinthe d'Urgoz**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** L'abîme**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** UW**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** FOW**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** DOA**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Fournaise des lamentations**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Village de Chahbek **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Excavations de Jokanur **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Antre de Marée Noire **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Embarcadère du consulat **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Cimetière de Venta **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Croisement de Kodonur **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Refuge de Rilohn **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Passage de Pogahn **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Fissure de Moddok **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Baie de Nundu **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Verger de Tihark **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Vestibule de Dasha **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Bastion de Dzagonur **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Grand-cour de Sebelkeh **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Horde de Jennur **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Porte de la Désolation **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Ruines de Morah **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Porte de la douleur **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Porte de la folie **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Porte d'Abaddon **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Le Grand Rempart nord **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Fort Ranik **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Ruines de Surmia **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Académie Nolani **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Passage de Borlis **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** La Porte de Givre **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Portes de Kryte **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Côte d'Alessio **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Côte des Divinités **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Les Contrées sauvages **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Marais de la Pierre de Sang **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Clairière de l'Aurore **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Provinces Fluviales **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Récif sacré **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Bief d'Elona **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Dunes du Désespoir **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Rivière assoiffée **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Roche de l'Augure **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Antre du Dragon **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Grottes des Larmes gelées **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Mines de Fer de Moladune **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Donjon de Chef-Tonnerre **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Iles de Feu **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Bouche d'Abaddon **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Précipice de l'Enfer **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Domaine du ministre Cho **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Zen Daijun **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Place de Vizunah (Quartier étranger) **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Place de Vizunah (Quartier local) **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Quartiers de Nahpui **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Temple de Tahnnakai **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** District de Sunjiang **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Fonds Marins de Boreas **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Couvoir de Gyala **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Eaux Endormies (Kuku/Lulu jusqu'à 16 joueurs**. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Pierre Arborea **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Le Verger Eternel **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Palais de Raisu **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],
["Ce soir, je vous propose de sortir en** Appartements impériaux **. Rendez-vous au Grand Temple de Balthazar, à 21h00"],


    // Ajoutez autant de paires de messages que vous le souhaitez
];

// Définissez une variable globale pour stocker l'ID du salon par défaut
let defaultChannelId = '1092756333738065941';

client.on("ready", () => {
    console.log("Bot opérationnel");

    // ...

    // Planifiez l'envoi du message aléatoire à 20h30 (heure de Paris)
    cron.schedule('30 20 * * *', () => {
        // ...
        sendRandomMessage(client.channels.cache.get(defaultChannelId));
        // ...
    });    
});

// ...

client.on("messageCreate", (message) => {

    // Ajoutez une nouvelle commande $test pour envoyer le message manuellement
    if (message.content === "$test") {
        sendRandomMessage(client.channels.cache.get(defaultChannelId));
    }

    // Ajoutez une nouvelle commande $config pour mettre à jour l'ID du salon par défaut
    else if (message.content.startsWith("$config")) {
        const args = message.content.split(" ");
        if (args.length === 2) {
            const newChannelId = args[1];
            defaultChannelId = newChannelId;
            message.reply(`ID du salon par défaut mis à jour : ${newChannelId}`);
        } else {
            message.reply("Utilisation correcte : $config <nouvel ID du salon>");
        }
    }
});




function sendRandomMessage(channel) {
    // Choisissez une paire de messages aléatoire parmi la liste
    const randomPair = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

    // Ajoutez "@everyone" à chaque ligne du message
    const mentionedMessages = randomPair.map(line => `@everyone ${line}`);

    // Créez un objet embed avec l'image du bot
    const embed = {
        author: {
            name: client.user.username,
            icon_url: client.user.displayAvatarURL(), // Utilise l'URL de l'avatar du bot
        },
        description: mentionedMessages.join('\n'), // Joignez les messages aléatoires en une seule chaîne
        image: {
            url: 'https://static1.millenium.org/articles/7/11/80/87/@/22155-gw2-sud-soleil-article_list_m-1.jpeg',
        },
    };

    // Envoyez le message avec l'objet embed
    channel.send({ embeds: [embed] });
}



// Connectez-vous au bot avec le token
client.login(TOKEN);