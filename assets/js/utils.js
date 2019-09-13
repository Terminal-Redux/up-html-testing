// Enable Bootstrap Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

// Switch dropdown icons
$('#collapse-1').on('hide.bs.collapse', function () {
  $('#collapse-1-icon').removeClass('fa-angle-up').addClass('fa-angle-down');
});

$('#collapse-1').on('show.bs.collapse', function () {
  $('#collapse-1-icon').removeClass('fa-angle-down').addClass('fa-angle-up');
});

$('#collapse-2').on('hide.bs.collapse', function () {
  $('#collapse-2-icon').removeClass('fa-angle-up').addClass('fa-angle-down');
});

$('#collapse-2').on('show.bs.collapse', function () {
  $('#collapse-2-icon').removeClass('fa-angle-down').addClass('fa-angle-up');
});

// Toggle color on active tools buttons

// Enable file input through Bootstrap button
$('#add-data').click(function() {
  $('#add-data-real').click();
});

// Enable DataTable functionality
$(document).ready(function() {
  $('#projects-table').DataTable();
} );

// Toggle columns
const btnLayers = $('#btn-layers');
const btnTools = $('#btn-tools');
const mapContainer = $('#map-container');
const colLayers = $('#layer-col');
const colTools = $('#tools-col');

$(btnLayers).click(function() {
  $(colLayers).toggle({
    duration: 1000,
    effect: 'slide',
    complete: function() {
      $(btnLayers).find('i').toggleClass('fa-angle-left fa-angle-right');
    }
  }).toggleClass('shown hidden');
  $(btnLayers).toggleClass('slide-btn-show slide-btn-hide', 1000);
  if($(colLayers).hasClass('hidden') && $(colTools).hasClass('hidden')){
    $(mapContainer).removeClass('col-md-8 col-md-9 col-md-11 col-md-12').toggleClass('col-md-12', {
      duration: 1000,
      effect: 'size'
    });
  } else if($(colLayers).hasClass('hidden') && $(colTools).hasClass('shown')){
    $(mapContainer).removeClass('col-md-8 col-md-9 col-md-11 col-md-12').toggleClass('col-md-11', {
      duration: 1000,
      effect: 'size'
    });
  } else if($(colLayers).hasClass('shown') && $(colTools).hasClass('hidden')){
    $(mapContainer).removeClass('col-md-8 col-md-9 col-md-11 col-md-12').toggleClass('col-md-9', {
      duration: 1000,
      effect: 'size'
    });
  } else if($(colLayers).hasClass('shown') && $(colTools).toggleClass('shown')){
    $(mapContainer).removeClass('col-md-8 col-md-9 col-md-11 col-md-12').toggleClass('col-md-8', {
      duration: 1000,
      effect: 'size'
    });
  }
});

$(btnTools).click(function() {
  $(colTools).toggle({
    duration: 1000,
    effect: 'slide',
    direction: 'right',
    complete: function() {
      $(btnTools).find('i').toggleClass('fa-angle-left fa-angle-right');
    }
  }).toggleClass('shown hidden');
  
  $(btnTools).toggleClass('slide-btn-show slide-btn-hide', 1000);
  if($(colLayers).hasClass('hidden') && $(colTools).hasClass('hidden')){
    $(mapContainer).removeClass('col-md-8 col-md-9 col-md-11 col-md-12').toggleClass('col-md-12', {
      duration: 1000,
      effect: 'size'
    });
  } else if($(colLayers).hasClass('hidden') && $(colTools).hasClass('shown')){
    $(mapContainer).removeClass('col-md-8 col-md-9 col-md-11 col-md-12').toggleClass('col-md-11', {
      duration: 1000,
      effect: 'size'
    });
  } else if($(colLayers).hasClass('shown') && $(colTools).hasClass('hidden')){
    $(mapContainer).removeClass('col-md-8 col-md-9 col-md-11 col-md-12').toggleClass('col-md-9', {
      duration: 1000,
      effect: 'size'
    });
  } else if($(colLayers).hasClass('shown') && $(colTools).toggleClass('shown')){
    $(mapContainer).removeClass('col-md-8 col-md-9 col-md-11 col-md-12').toggleClass('col-md-8', {
      duration: 1000,
      effect: 'size'
    });
  }
});

// Make Modals Draggable
$('.gp_modal').draggable({ 
  handle: '.modal-header',
  cancel: '.close'
});

// Make Modals Resizable
$('.gp_modal').resizable({
  animate: true,
  ghost: true
});

// Make buttons Sortable
$('#tools-col .btn-list').sortable({
  cancel: false,
  containment: '#tools-col'
}).disableSelection();