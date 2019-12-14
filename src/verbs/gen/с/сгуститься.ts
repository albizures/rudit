import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгуститься: PerfectVerb = {
  name: Word('сгуститься', 5),
  singular1stPerson: Word('сгущусь', 4),
  singular2ndPerson: Word('сгустишься', 5),
  singular3rdPerson: Word('сгустится', 5),
  plural1stPerson: Word('сгустимся', 5),
  plural2ndPerson: Word('сгуститесь', 5),
  plural3rdPerson: Word('сгустятся', 5),
  masculinePast: Word('сгустился', 5),
  femininePast: Word('сгустилась', 5),
  neuterPast: Word('сгустилось', 5),
  pluralPast: Word('сгустились', 5),
  imperativeInformal: Word('сгустись', 5),
  imperativeFormal: Word('сгуститесь', 5),
  imperfect: ['сгущаться'],
};

perfectVerbs.set(сгуститься.name.text, сгуститься);

export { сгуститься };