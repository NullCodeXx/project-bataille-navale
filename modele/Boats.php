<?php

/*
 * THE BOATS
 */

/**
 * Description of Boats
 *
 * @author SOolOoCrakOo
 */
class Boats {
    private $marque;
    private $pays;
    private $pseudo;
    private $power;
    private $life;
    private $ammunition;
    private $armement;
    
    function __construct($marque, $pays, $pseudo, $power, $life, $ammunition, $armement) {
        $this->marque = $marque;
        $this->pays = $pays;
        $this->pseudo = $pseudo;
        $this->power = $power;
        $this->life = $life;
        $this->ammunition = $ammunition;
        $this->armement = $armement;
    }
    
    function getMarque() {
        return $this->marque;
    }

    function getPays() {
        return $this->pays;
    }

    function getPseudo() {
        return $this->pseudo;
    }

    function getPower() {
        return $this->power;
    }

    function getLife() {
        return $this->life;
    }

    function getammunition() {
        return $this->ammunition;
    }

    function getArmement() {
        return $this->armement;
    }
}
