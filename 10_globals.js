"use strict";

// Requires.........................................................

const alert = require("./modules/alert");
const assign_without_overwrite = require("./modules/utils").assign_without_overwrite;
const child_process = require("child_process");
const debork_json = require("./modules/debork_json");
const fs = require('fs');
const ipcRenderer = require("electron").ipcRenderer;
const path = require("path");
const readline = require("readline");
const util = require("util");

// HTML stuff.......................................................

const canvas = document.getElementById("canvas");
const fenbox = document.getElementById("fenbox");
const infobox = document.getElementById("infobox");
const movelist = document.getElementById("movelist");
const pgnchooser = document.getElementById("pgnchooser");

const context = canvas.getContext("2d");

// Global variables.................................................

let config = {};

let decoder = new util.TextDecoder("utf8");

let total_moves_made = 0;		// For debugging / info
let total_positions_made = 0;	// For debugging / info

let total_tree_changes = 0;