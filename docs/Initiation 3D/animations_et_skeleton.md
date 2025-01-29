---
sidebar_position: 7
---

# Animations et Squelettes en 3D

L'animation 3D est un processus essentiel pour donner vie à vos modèles. Elle consiste à ajouter des mouvements à des objets ou personnages 3D à l'aide d'un système de **squelette** (ou **rigging**) et de **skin** (attachement des maillages au squelette). Le processus inclut la création de poses clés et l’application de mouvements à travers les différentes étapes du temps.

## Définition du Rigging et du Skinning

- **Rigging** : C'est le processus qui consiste à ajouter un squelette à un modèle 3D. Le squelette est constitué de **bones** (os) qui sont reliés entre eux pour définir la structure du mouvement.
- **Skinning** : Le skinning fait référence à l’application du maillage du modèle à ce squelette. Chaque vertex (sommet) du modèle est lié à un ou plusieurs os du squelette, ce qui détermine la façon dont le modèle se déforme pendant l’animation.

### Exemple Pratique : Rigging d’un Personnage Humanoïde

1. **Création du Squelette** : 
   - Commencez par créer un squelette de base en insérant des os pour chaque partie du corps (buste, bras, jambes, tête, etc.).
2. **Skinning du Modèle** : 
   - Appliquez votre modèle 3D (par exemple un personnage humain) au squelette. Utilisez des outils de **weight painting** (peinture des poids) pour ajuster l’influence de chaque os sur les vertices du modèle.
3. **Animation des Poses** : 
   - Créez des poses clés en déplaçant les os du squelette pour poser votre personnage. Chaque pose définit la position d’un ou plusieurs os à un moment donné.

### Cas Pratique : Animation d'un Modèle de Personnage

Prenons l'exemple d'un personnage humanoïde. Une fois le rigging et le skinning effectués, vous pouvez ajouter des animations de marche, de course, ou de combat. Voici les étapes :

1. **Poses Clés de la Marche** : 
   - Créez une pose clé pour chaque phase de la marche (lever du pied, avancée, etc.).
2. **Interpolation** : 
   - L'animation entre ces poses clés se fait par interpolation. Le logiciel génère automatiquement les étapes intermédiaires du mouvement.
3. **Rendu de l’Animation** : 
   - Une fois l’animation complète, vous pouvez appliquer des ajustements finaux comme des **amortissements** (pour rendre l'animation plus naturelle).

## Conclusion

Le rigging et le skinning sont des éléments clés pour l'animation des modèles 3D. Une fois que vous avez maîtrisé le processus, vous pouvez animer des personnages et des objets avec fluidité et réalisme.

---
