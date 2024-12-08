import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:nanis_kitchen_web/ui/common/app_colors.dart';
import 'package:nanis_kitchen_web/ui/common/app_images.dart';
import 'package:nanis_kitchen_web/ui/widgets/common/image_view.dart';
import 'package:nanis_kitchen_web/ui/widgets/common/text_view.dart';

class MenuItemWidget extends StatelessWidget {
  final String title;

  const MenuItemWidget({super.key, required this.title});

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.sizeOf(context).width;
    return Container(
      margin: const EdgeInsets.only(right: 20),
      width: width / 5,
      child: Card(
        color: bgColorLight,
        shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(20))),
        child: Stack(
          children: [
            const Align(
              alignment: Alignment.center,
              child: Opacity(
                  opacity: 0.5,
                  child: ImageView(
                      path: AppImages.imgDashboard,
                  fit: BoxFit.cover,)),
            ),
            Align(
              alignment: Alignment.center,
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    TextView(
                      text: title,
                      size: 20,
                      weight: FontWeight.w600,
                    ),
                    const TextView(
                      text: ""
                          "The description of the menu will go under here"
                          "The description of the menu will go under here"
                          "The description of the menu will go under here"
                          "The description of the menu will go under here"
                          "",
                      size: 14,
                    ),
                    const Gap(20),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const TextView(
                          text: "\$ 20",
                          size: 14,
                          weight: FontWeight.w800,

                        ),
                        MaterialButton(
                          onPressed: () {},
                          color: Colors.black,
                          shape: const RoundedRectangleBorder(
                            borderRadius: BorderRadius.all(Radius.circular(10))
                          ),

                          child: const TextView(
                            text: "Order Now",
                            weight: FontWeight.w300,
                            size: 10,
                            color: Colors.white,
                          ),
                        )
                      ],
                    )
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
