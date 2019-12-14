import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пыжиться: PerfectVerb = {
  name: Word('пыжиться', 1),
  singular1stPerson: Word('пыжусь', 1),
  singular2ndPerson: Word('пыжишься', 1),
  singular3rdPerson: Word('пыжится', 1),
  plural1stPerson: Word('пыжимся', 1),
  plural2ndPerson: Word('пыжитесь', 1),
  plural3rdPerson: Word('пыжатся', 1),
  masculinePast: Word('пыжился', 1),
  femininePast: Word('пыжилась', 1),
  neuterPast: Word('пыжилось', 1),
  pluralPast: Word('пыжились', 1),
  imperativeInformal: Word('пыжься', 1),
  imperativeFormal: Word('пыжьтесь', 1),
  imperfect: [],
};

perfectVerbs.set(пыжиться.name.text, пыжиться);

export { пыжиться };