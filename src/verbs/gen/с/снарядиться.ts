import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снарядиться: PerfectVerb = {
  name: Word('снарядиться', 6),
  singular1stPerson: Word('снаряжусь', 6),
  singular2ndPerson: Word('снарядишься', 6),
  singular3rdPerson: Word('снарядится', 6),
  plural1stPerson: Word('снарядимся', 6),
  plural2ndPerson: Word('снарядитесь', 6),
  plural3rdPerson: Word('снарядятся', 6),
  masculinePast: Word('снарядился', 6),
  femininePast: Word('снарядилась', 6),
  neuterPast: Word('снарядилось', 6),
  pluralPast: Word('снарядились', 6),
  imperativeInformal: Word('снарядись', 6),
  imperativeFormal: Word('снарядитесь', 6),
  imperfect: [],
};

perfectVerbs.set(снарядиться.name.text, снарядиться);

export { снарядиться };