import 'package:flutter/material.dart';
import 'package:nanis_kitchen_web/ui/common/app_colors.dart';
import 'package:nanis_kitchen_web/ui/common/app_images.dart';
import 'package:nanis_kitchen_web/ui/common/app_strings.dart';
import 'package:nanis_kitchen_web/ui/widgets/common/image_view.dart';
import 'package:nanis_kitchen_web/ui/widgets/common/text_view.dart';
import 'package:stacked/stacked.dart';

import 'app_bar_web_model.dart';

class AppBarWeb extends StackedView<AppBarWebModel> {
  final Function(int) onItemClick;
  const AppBarWeb({super.key, required this.onItemClick});

  @override
  Widget builder(
    BuildContext context,
    AppBarWebModel viewModel,
    Widget? child,
  ) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20.0),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const ImageView(path: AppImages.icApp, height: 100,),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: _getMenuItems(),
          ),
          MaterialButton(
              shape: const RoundedRectangleBorder(
                borderRadius: BorderRadius.all(Radius.circular(10))
              ),
              color: primaryColor,
              onPressed: (){},
              child: const TextView(text: "Contact Us",))
        ],
      ),
    );
  }

  List<Widget> _getMenuItems() {
    const menuList = appBarMenus;
    List<AppBarMenuWidget> menu = [];
    for (int i = 0; i < menuList.length; i++) {
      menu.add(AppBarMenuWidget(
          onClick: () {
            onItemClick(i);
          },
          label: menuList[i]));
    }
    return menu;
  }

  @override
  AppBarWebModel viewModelBuilder(
    BuildContext context,
  ) =>
      AppBarWebModel();
}

class AppBarMenuWidget extends StatelessWidget {
  final String label;
  final Function onClick;
  const AppBarMenuWidget({super.key, required this.label, required this.onClick});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        onClick();
      },
      child: Padding(
        padding: const EdgeInsets.all(8.0),
        child: TextView(
          text: label,
          color: textSecondaryColor,
        ),
      ),
    );
  }
}

enum AppBarMenu {
  menu("menu"),
  orders("order"),
  services("services"),
  contact("contact");

  final String value;

  const AppBarMenu(this.value);
}
