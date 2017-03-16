/**
 * Alle boetes die door het CJIB worden uitgeschreven
 */

public class Boetes {

  private int boete = 0;
  private int verhoging = 100;
  private int verhogingVoorEngelbertje = 250;
  private int cjibKosten = 18;

  public static void main(String, args[]){
    runBoetes(50, "Engelbert");
  }

  public void runBoetes(int overtreding, String boef){
    boete = overtreding + cjibKosten;

    if(boef == "Engelbert"){
      boete = boete + verhoging + verhogingVoorEngelbertje;
    }

    printboete(boete, "Engelbert");
  }

  public void printboete(int boete, String boef){
    System.out.println("Meneer Engelbert, u moet " + boete + " betalen aan het CJIB. Alvast bedankt voor uw donatie.");
  }
}
