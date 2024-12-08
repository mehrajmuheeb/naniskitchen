import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:nanis_kitchen_web/ui/common/app_colors.dart';
import 'package:nanis_kitchen_web/ui/common/app_strings.dart';
import 'package:nanis_kitchen_web/ui/widgets/common/rounded_text_field.dart';
import 'package:nanis_kitchen_web/ui/widgets/common/text_view.dart';

class ContactUsWidget extends StatelessWidget {
  const ContactUsWidget({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: MediaQuery.sizeOf(context).height/2,
      padding: const EdgeInsets.symmetric(horizontal: 30),
      decoration: const BoxDecoration(
          color: primaryColor,
          borderRadius: BorderRadius.all(Radius.circular(20))),
      child: LayoutBuilder(
        builder: (context, constraint) => Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            const Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                TextView(
                  text: contactUsTitle,
                  size: 30,
                  color: textPrimaryColor,
                  weight: FontWeight.w800,
                ),
                TextView(
                  text: contactUsSubTitle,
                  size: 16,
                  textAlign: TextAlign.center ,
                  color: Colors.white,
                  weight: FontWeight.w400,
                ),
              ],
            ),
            SizedBox(
              width: constraint.maxWidth/3,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const RoundedTextField(
                      hintText: "Email address"
                  ),
                  const Gap(10),
                  const RoundedTextField(
                      minLines: 3,
                      hintText: "Your message"),
                  const Gap(20),
                  MaterialButton(
                      onPressed: (){},
                    color: Colors.black,
                    shape: const RoundedRectangleBorder(
                      borderRadius: BorderRadius.all(Radius.circular(10))
                    ),
                    child: const Padding(
                      padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 8),
                      child: TextView(
                        text: "Send",
                        color: Colors.white,
                      ),
                    ),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    );
  }
}
