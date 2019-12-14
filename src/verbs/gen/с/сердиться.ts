import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сердиться: PerfectVerb = {
  name: Word('сердиться', 4),
  singular1stPerson: Word('сержусь', 4),
  singular2ndPerson: Word('сердишься', 1),
  singular3rdPerson: Word('сердится', 1),
  plural1stPerson: Word('сердимся', 1),
  plural2ndPerson: Word('сердитесь', 1),
  plural3rdPerson: Word('сердятся', 1),
  masculinePast: Word('сердился', 4),
  femininePast: Word('сердилась', 4),
  neuterPast: Word('сердилось', 4),
  pluralPast: Word('сердились', 4),
  imperativeInformal: Word('сердись', 4),
  imperativeFormal: Word('сердитесь', 4),
  imperfect: ['рассердиться'],
};

perfectVerbs.set(сердиться.name.text, сердиться);

export { сердиться };