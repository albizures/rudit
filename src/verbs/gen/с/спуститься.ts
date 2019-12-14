import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спуститься: PerfectVerb = {
  name: Word('спуститься', 5),
  singular1stPerson: Word('спущусь', 4),
  singular2ndPerson: Word('спустишься', 2),
  singular3rdPerson: Word('спустится', 2),
  plural1stPerson: Word('спустимся', 2),
  plural2ndPerson: Word('спуститесь', 2),
  plural3rdPerson: Word('спустятся', 2),
  masculinePast: Word('спустился', 5),
  femininePast: Word('спустилась', 5),
  neuterPast: Word('спустилось', 5),
  pluralPast: Word('спустились', 5),
  imperativeInformal: Word('спустись', 5),
  imperativeFormal: Word('спуститесь', 5),
  imperfect: ['спускаться'],
};

perfectVerbs.set(спуститься.name.text, спуститься);

export { спуститься };