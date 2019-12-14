import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снизиться: PerfectVerb = {
  name: Word('снизиться', 2),
  singular1stPerson: Word('снижусь', 2),
  singular2ndPerson: Word('снизишься', 2),
  singular3rdPerson: Word('снизится', 2),
  plural1stPerson: Word('снизимся', 2),
  plural2ndPerson: Word('снизитесь', 2),
  plural3rdPerson: Word('снизятся', 2),
  masculinePast: Word('снизился', 2),
  femininePast: Word('снизилась', 2),
  neuterPast: Word('снизилось', 2),
  pluralPast: Word('снизились', 2),
  imperativeInformal: Word('снизься', 2),
  imperativeFormal: Word('снизьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(снизиться.name.text, снизиться);

export { снизиться };