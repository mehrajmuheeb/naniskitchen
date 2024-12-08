import 'package:nanis_kitchen_web/ui/common/app_colors.dart';
import 'package:nanis_kitchen_web/ui/common/app_constants.dart';
import 'package:nanis_kitchen_web/ui/common/app_strings.dart';
import 'package:nanis_kitchen_web/ui/common/ui_helpers.dart';
import 'package:flutter/material.dart';
import 'package:nanis_kitchen_web/ui/views/home/widgets_app/banner_section.dart';
import 'package:nanis_kitchen_web/ui/views/home/widgets_app/contact_us_widget.dart';
import 'package:nanis_kitchen_web/ui/views/home/widgets_app/menu_section.dart';
import 'package:nanis_kitchen_web/ui/widgets/common/app_bar_web/app_bar_web.dart';
import 'package:stacked/stacked.dart';

import 'home_viewmodel.dart';

class HomeViewDesktop extends ViewModelWidget<HomeViewModel> {

  final bannerKey = GlobalKey();
  final menuKey = GlobalKey();
  final contactKey = GlobalKey();
  final ScrollController scrollController = ScrollController();


  HomeViewDesktop({super.key});

  @override
  Widget build(BuildContext context, HomeViewModel viewModel) {

    return Scaffold(
      appBar: PreferredSize(
        preferredSize: const Size.fromHeight(60),
        child: AppBarWeb(
          onItemClick: _onMenuItemClick,
        ),
      ),
      body: Container(
        padding: const EdgeInsets.symmetric(horizontal: 20),
        child: SingleChildScrollView(
          controller: scrollController,
          child: Column(
            children: [
              BannerSection(
                key: bannerKey,
              ),
              MenuSection(
                key: menuKey,
              ),
              ContactUsWidget(
                key: contactKey,
              )
            ],
          ),
        ),
      )
    );
  }

  _onMenuItemClick(int index) {
    switch(index) {
      case 0: {
        scrollToTarget(scrollController, bannerKey);
        break;
      }
      case 1: {
        scrollToTarget(scrollController, menuKey);
        break;
      }
      case 2: {
        scrollToTarget(scrollController, contactKey);
        break;
      }
    }
  }
}
