import java.io.FileWriter;
import java.io.IOException;
import java.text.DecimalFormat;
import java.text.DecimalFormatSymbols;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.TextStyle;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Random;

public class CafeteriaDataGeneration {

    private static final Random random = new Random();

    public static String genProductID() {
        return String.format("ID%08X-%08X", random.nextInt(), random.nextInt());
    }

    public static String periodeAleatoire() {
        String[] periodes = { "Pause 10h00-10h30", "Pause 15h00-15h30", "Pause 12h00-13h00" };
        return periodes[(int) (Math.random() * periodes.length)];
    }

    static class Produit {
        String idProduit;
        String type;
        String nom;
        double prix;

        Produit(String idProduit, String type, String nom, double prix) {
            this.idProduit = idProduit;
            this.type = type;
            this.nom = nom;
            this.prix = prix;
        }

        @Override
        public String toString() {
            DecimalFormatSymbols dfs = new DecimalFormatSymbols();
            dfs.setDecimalSeparator('.');
            dfs.setGroupingSeparator('\'');
            DecimalFormat df = new DecimalFormat("#,##0.00", dfs);
            String strPrix = df.format(prix);

            return String.format("{\"id\":\"%s\",\"type\":\"%s\",\"nom\":\"%s\",\"prix\":%s}", idProduit, type, nom,
                    strPrix);
        }
    }

    static class Utilisateur {
        String id;
        String nom;
        String prenom;

        Utilisateur(String id, String nom, String prenom) {
            this.id = id;
            this.nom = nom;
            this.prenom = prenom;
        }

        @Override
        public String toString() {
            return String.format("{\"id\":\"%s\",\"nom\":\"%s\",\"prenom\":\"%s\"}", id, nom, prenom);
        }
    }

    public static void main(String[] args) throws IOException {
        List<Produit> produits = Arrays.asList(
                new Produit(genProductID(), "Boisson froide", "Eau minérale gazeuse 3dl", 1.8),
                new Produit(genProductID(), "Boisson froide", "Eau minérale plate 3dl", 1.8),
                new Produit(genProductID(), "Boisson froide", "Coca-cola 3dl", 2.5),
                new Produit(genProductID(), "Boisson froide", "Coca-cola zéro 3dl", 2.5),
                new Produit(genProductID(), "Boisson froide", "Jus de pommes 3dl", 2.5),
                new Produit(genProductID(), "Boisson froide", "Thé-froid citron 3dl", 2.5),
                new Produit(genProductID(), "Boisson froide", "Thé-froid pêche 3dl", 2.5),
                new Produit(genProductID(), "Boisson froide", "Thé-froid citron maison sans sucre 4dl", 3.2),
                new Produit(genProductID(), "Viennoiserie", "Croissant au beurre", 1.5),
                new Produit(genProductID(), "Viennoiserie", "Petit-pain au chocolat", 2),
                new Produit(genProductID(), "Viennoiserie", "Petit-pain au lait", 1.5),
                new Produit(genProductID(), "Boisson chaude", "Espresso", 2),
                new Produit(genProductID(), "Boisson chaude", "Café", 2),
                new Produit(genProductID(), "Boisson chaude", "Thé", 2),
                new Produit(genProductID(), "Boisson chaude", "Chocolat chaud", 3),
                new Produit(genProductID(), "Boisson chaude", "Cappuccino", 3.5),
                new Produit(genProductID(), "Boisson chaude", "Latte macchiato", 3),
                new Produit(genProductID(), "Sandwich", "Sandwich jambon/fromage", 3.8),
                new Produit(genProductID(), "Sandwich", "Sandwich jambon/beurre", 3.5),
                new Produit(genProductID(), "Sandwich", "Sandwich au thon", 3.8),
                new Produit(genProductID(), "Sandwich", "Sandwich poulet/curry", 3.5),
                new Produit(genProductID(), "Salades", "Salade césar", 4.2),
                new Produit(genProductID(), "Salades", "Salade de pâtes", 4),
                new Produit(genProductID(), "Snacks", "Barre de céréales", 1),
                new Produit(genProductID(), "Snacks", "Chips paprika", 1.2),
                new Produit(genProductID(), "Snacks", "Cacahouettes", 1.2),
                new Produit(genProductID(), "Snacks", "Sachet de fruits secs", 1.8),
                new Produit(genProductID(), "Pâtisseries & desserts", "Tranche de gâteau aux noix", 3.5),
                new Produit(genProductID(), "Pâtisseries & desserts", "Tranche de gâteau aux pommes", 3.5),
                new Produit(genProductID(), "Plats chauds", "Plat du jour chaud avec viande", 10.5),
                new Produit(genProductID(), "Plats chauds", "Plat du jour chaud avec pâtes ou riz", 10.5),
                new Produit(genProductID(), "Plats chauds", "Plat du jour chaud végétarien", 10.5),
                new Produit(genProductID(), "Produits laitiers", "Briquette de lait UHT de 250ml", 2.4),
                new Produit(genProductID(), "Produits laitiers", "Morceau de Gruyère AOP surchoix 100g", 1.8),
                new Produit(genProductID(), "Fruits", "Pomme", 1),
                new Produit(genProductID(), "Fruits", "Banane", 1.5),
                new Produit(genProductID(), "Fruits", "Poire", 1),
                new Produit(genProductID(), "Biscuits", "Les palets Bretons, paquet de 5", 3),
                new Produit(genProductID(), "Biscuits", "Les bricelets de grand-mère, paquet de 10", 3),
                new Produit(genProductID(), "Boisson énergisante", "Red Bull, cannette 250ml", 3.5),
                new Produit(genProductID(), "Boisson énergisante", "Monster Energy, cannette 300ml", 3.5));

        List<Utilisateur> utilisateurs = Arrays.asList(
                new Utilisateur("ID12D7310B-3972B953", "Terrieur", "Alain"),
                new Utilisateur("ID2108DF8A-37B5AB5A", "Terrieur", "Alex"),
                new Utilisateur("ID0BAA34BE-15694812", "Haroni", "Mac"),
                new Utilisateur("ID38D4C392-0FB4B1D9", "d'Œuf", "John"),
                new Utilisateur("ID2141229C-0B0CBFB0", "Tariste", "Guy"),
                new Utilisateur("ID11CEAC28-34EE910C", "Voyante", "Claire"),
                new Utilisateur("ID1529E3C7-1A2CDD50", "Fice", "Eddy"),
                new Utilisateur("ID09F6B523-042C8280", "Nissens", "Remy"),
                new Utilisateur("ID1C4E8094-30849278", "Ternet", "Alain"),
                new Utilisateur("ID29AFF6B4-36813BA8", "Rique", "Théo"),
                new Utilisateur("ID188020B2-1C54920C", "Célère", "Jack"),
                new Utilisateur("ID3A3D49B6-21F77D0C", "Friedli", "Paul"),
                new Utilisateur("ID289F8B35-39C65DB1", "Galley", "Philippe"));

        LocalDate debut = LocalDate.of(2024, 9, 1);
        LocalDate fin = LocalDate.of(2024, 12, 31);

        List<Map<String, Object>> ventes = genererVentesAleatoires(debut, fin, produits, utilisateurs);

        try (FileWriter file = new FileWriter("ventes.json")) {
            file.write(ventes.toString().replaceAll("=", ":"));
        }
    }

    private static List<Map<String, Object>> genererVentesAleatoires(LocalDate debut, LocalDate fin,
            List<Produit> produits, List<Utilisateur> utilisateurs) {
        List<Map<String, Object>> ventes = new ArrayList<>();
        Random rand = new Random();

        long jours = ChronoUnit.DAYS.between(debut, fin);

        for (int i = 0; i <= jours; i++) {
            LocalDate date = debut.plusDays(i);
            if (date.getDayOfWeek().getValue() <= 5) { // Lundi à Vendredi seulement
                int nbVentes = rand.nextInt(16) + 5; // Entre 5 et 20 ventes par jour

                for (int j = 0; j < nbVentes; j++) {
                    Map<String, Object> vente = new HashMap<>();
                    Utilisateur client = utilisateurs.get(rand.nextInt(utilisateurs.size()));
                    String strDate = "\"" + date.format(DateTimeFormatter.ISO_LOCAL_DATE) + "\"";
                    String strPeriode = "\"" + periodeAleatoire() + "\"";
                    String strDayName = "\"" + date.getDayOfWeek().getDisplayName(TextStyle.FULL, Locale.FRENCH) + "\"";

                    vente.put("\"date\"", strDate);
                    vente.put("\"jour\"", strDayName);
                    vente.put("\"periode\"", strPeriode);
                    vente.put("\"client\"", client);

                    int nbProduits = rand.nextInt(5) + 1; // Entre 1 et 5 produits par vente
                    List<Produit> produitsAchetes = new ArrayList<>();

                    for (int k = 0; k < nbProduits; k++) {
                        produitsAchetes.add(produits.get(rand.nextInt(produits.size())));
                    }

                    vente.put("\"produits\"", produitsAchetes);
                    ventes.add(vente);
                }
            }
        }
        return ventes;
    }
}
