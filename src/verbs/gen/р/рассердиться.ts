import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассердиться: PerfectVerb = {
  name: Word('рассердиться', 7),
  singular1stPerson: Word('рассержусь', 7),
  singular2ndPerson: Word('рассердишься', 4),
  singular3rdPerson: Word('рассердится', 4),
  plural1stPerson: Word('рассердимся', 4),
  plural2ndPerson: Word('рассердитесь', 4),
  plural3rdPerson: Word('рассердятся', 4),
  masculinePast: Word('рассердился', 7),
  femininePast: Word('рассердилась', 7),
  neuterPast: Word('рассердилось', 7),
  pluralPast: Word('рассердились', 7),
  imperativeInformal: Word('рассердись', 7),
  imperativeFormal: Word('рассердитесь', 7),
  imperfect: [],
};

perfectVerbs.set(рассердиться.name.text, рассердиться);

export { рассердиться };