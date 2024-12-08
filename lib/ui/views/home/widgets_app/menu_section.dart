import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:nanis_kitchen_web/ui/common/app_colors.dart';
import 'package:nanis_kitchen_web/ui/common/app_strings.dart';
import 'package:nanis_kitchen_web/ui/views/home/widgets_app/menu_item_widget.dart';
import 'package:nanis_kitchen_web/ui/widgets/common/round_arrow_widget.dart';

import '../../../widgets/common/text_view.dart';

class MenuSection extends StatelessWidget {
  const MenuSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20  ),
      height: MediaQuery.sizeOf(context).height,
      width: MediaQuery.sizeOf(context).width,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const TextView(
            text: menuSectionTitle,
            size: 25,
            weight: FontWeight.w800,
          ),
          const TextView(
            text: menuSectionSubTitle,
            color: textSecondaryColor,
            size: 14,
            textAlign: TextAlign.center,
          ),
          const Gap(30),
          SizedBox(
            height: 280,
            child: ListView.builder(
                scrollDirection: Axis.horizontal,
                shrinkWrap: true,
                itemCount: 4,
                itemBuilder: (context, index) => MenuItemWidget(
                  title: "Menu $index",
                )),
          ),
          const Gap(10),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              RoundArrowWidget(backArrow: true, onClick: (){}),
              const Gap(20),
              RoundArrowWidget(backArrow: false, onClick: (){}),
            ],
          )
        ],
      ),
    );
  }
}
