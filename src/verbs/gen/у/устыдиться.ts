import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устыдиться: PerfectVerb = {
  name: Word('устыдиться', 5),
  singular1stPerson: Word('устыжусь', 5),
  singular2ndPerson: Word('устыдишься', 5),
  singular3rdPerson: Word('устыдится', 5),
  plural1stPerson: Word('устыдимся', 5),
  plural2ndPerson: Word('устыдитесь', 5),
  plural3rdPerson: Word('устыдятся', 5),
  masculinePast: Word('устыдился', 5),
  femininePast: Word('устыдилась', 5),
  neuterPast: Word('устыдилось', 5),
  pluralPast: Word('устыдились', 5),
  imperativeInformal: Word('устыдись', 5),
  imperativeFormal: Word('устыдитесь', 5),
  imperfect: [],
};

perfectVerbs.set(устыдиться.name.text, устыдиться);

export { устыдиться };