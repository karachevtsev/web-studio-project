$(document).ready(function(){$(".header").removeClass("header_fixed"),$(window).scroll(function(){$(this).scrollTop()>10?$(".header").addClass("header_fixed").fadeIn("fast"):$(".header").removeClass("header_fixed").fadeIn("fast")})}),$(document).ready(function(){var a=$("intro").height();$(".navigation__link").click(function(e){e.preventDefault();var n=$("#"+$(this).data("target")).offset().top-a;$("html, body").animate({scrollTop:n},1e3)}),$(document).scroll(function(){var e=[];$(".navigation__link").each(function(a,n){e.push($("#"+$(n).data("target")).offset().top)}),e.push($(document).height());for(var n=$(document).scrollTop()+a+$(window).height()/2,t=0;t<e.length-1;t++)if(n>=e[t]&&n<e[t+1]){$(".navigation__link_active").removeClass("navigation__link_active"),$(".navigation__link").eq(t).addClass("navigation__link_active");break}})});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJyZW1vdmVDbGFzcyIsIndpbmRvdyIsInNjcm9sbCIsInRoaXMiLCJzY3JvbGxUb3AiLCJhZGRDbGFzcyIsImZhZGVJbiIsImhlYWRlckhlaWdodCIsImhlaWdodCIsImNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib2Zmc2V0VG9wIiwiZGF0YSIsIm9mZnNldCIsInRvcCIsImFuaW1hdGUiLCJvZmZzZXRzIiwiZWFjaCIsImluZGV4IiwiZWxlbWVudCIsInB1c2giLCJkb2NTY3JvbGwiLCJpIiwibGVuZ3RoIiwiZXEiXSwibWFwcGluZ3MiOiJBQUFBQSxFQUFFQyxVQUFVQyxNQUFNLFdBQ2RGLEVBQUUsV0FBV0csWUFBWSxnQkFDekJILEVBQUVJLFFBQVFDLE9BQU8sV0FDVEwsRUFBRU0sTUFBTUMsWUFBYyxHQUN0QlAsRUFBRSxXQUFXUSxTQUFTLGdCQUFnQkMsT0FBTyxRQUU3Q1QsRUFBRSxXQUFXRyxZQUFZLGdCQUFnQk0sT0FBTyxZQUk1RFQsRUFBRUMsVUFBVUMsTUFBTSxXQUNkLEdBQUlRLEdBQWVWLEVBQUUsU0FBU1csUUFFOUJYLEdBQUUscUJBQXFCWSxNQUFNLFNBQVNDLEdBQ2xDQSxFQUFFQyxnQkFDRixJQUFJQyxHQUFZZixFQUFFLElBQUlBLEVBQUVNLE1BQU1VLEtBQUssV0FBV0MsU0FBU0MsSUFBTVIsQ0FDN0RWLEdBQUUsY0FBY21CLFNBQVNaLFVBQVdRLEdBQVksT0FHcERmLEVBQUVDLFVBQVVJLE9BQU8sV0FFZixHQUFJZSxLQUNKcEIsR0FBRSxxQkFBcUJxQixLQUFLLFNBQVNDLEVBQU9DLEdBQzVDSCxFQUFRSSxLQUFLeEIsRUFBRSxJQUFNQSxFQUFFdUIsR0FBU1AsS0FBSyxXQUFXQyxTQUFTQyxPQUc3REUsRUFBUUksS0FBTXhCLEVBQUVDLFVBQVVVLFNBR3RCLEtBQUssR0FETGMsR0FBWXpCLEVBQUVDLFVBQVVNLFlBQWNHLEVBQWVWLEVBQUVJLFFBQVFPLFNBQVcsRUFDakVlLEVBQUksRUFBR0EsRUFBSU4sRUFBUU8sT0FBUyxFQUFHRCxJQUN0QyxHQUFJRCxHQUFhTCxFQUFRTSxJQUFNRCxFQUFZTCxFQUFRTSxFQUFFLEdBQUksQ0FDdkQxQixFQUFFLDRCQUE0QkcsWUFBWSwyQkFDMUNILEVBQUUscUJBQXFCNEIsR0FBR0YsR0FBR2xCLFNBQVMsMEJBQ3RDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICQoJy5oZWFkZXInKS5yZW1vdmVDbGFzcygnaGVhZGVyX2ZpeGVkJyk7XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTApIHtcclxuICAgICAgICAgICAgJCgnLmhlYWRlcicpLmFkZENsYXNzKCdoZWFkZXJfZml4ZWQnKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoJ2hlYWRlcl9maXhlZCcpLmZhZGVJbignZmFzdCcpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7XHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGhlYWRlckhlaWdodCA9ICQoJ2ludHJvJykuaGVpZ2h0KCk7XHJcblxyXG4gICAgJChcIi5uYXZpZ2F0aW9uX19saW5rXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIG9mZnNldFRvcCA9ICQoXCIjXCIrJCh0aGlzKS5kYXRhKFwidGFyZ2V0XCIpKS5vZmZzZXQoKS50b3AgLSBoZWFkZXJIZWlnaHQ7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogb2Zmc2V0VG9wfSwgMTAwMCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBvZmZzZXRzID0gW107XHJcbiAgICAgICAgJCgnLm5hdmlnYXRpb25fX2xpbmsnKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgb2Zmc2V0cy5wdXNoKCQoXCIjXCIgKyAkKGVsZW1lbnQpLmRhdGEoJ3RhcmdldCcpKS5vZmZzZXQoKS50b3ApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgb2Zmc2V0cy5wdXNoKCAkKGRvY3VtZW50KS5oZWlnaHQoKSApO1xyXG5cclxuICAgIHZhciBkb2NTY3JvbGwgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSArIGhlYWRlckhlaWdodCArICQod2luZG93KS5oZWlnaHQoKSAvIDI7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvZmZzZXRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGRvY1Njcm9sbCA+PSBvZmZzZXRzW2ldICYmIGRvY1Njcm9sbCA8IG9mZnNldHNbaSsxXSkge1xyXG4gICAgICAgICAgICAkKCcubmF2aWdhdGlvbl9fbGlua19hY3RpdmUnKS5yZW1vdmVDbGFzcygnbmF2aWdhdGlvbl9fbGlua19hY3RpdmUnKTtcclxuICAgICAgICAgICAgJCgnLm5hdmlnYXRpb25fX2xpbmsnKS5lcShpKS5hZGRDbGFzcygnbmF2aWdhdGlvbl9fbGlua19hY3RpdmUnKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
