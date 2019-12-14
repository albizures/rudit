import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поохотиться: PerfectVerb = {
  name: Word('поохотиться', 4),
  singular1stPerson: Word('поохочусь', 4),
  singular2ndPerson: Word('поохотишься', 4),
  singular3rdPerson: Word('поохотится', 4),
  plural1stPerson: Word('поохотимся', 4),
  plural2ndPerson: Word('поохотитесь', 4),
  plural3rdPerson: Word('поохотятся', 4),
  masculinePast: Word('поохотился', 4),
  femininePast: Word('поохотилась', 4),
  neuterPast: Word('поохотилось', 4),
  pluralPast: Word('поохотились', 4),
  imperativeInformal: Word('поохоться', 4),
  imperativeFormal: Word('поохотьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(поохотиться.name.text, поохотиться);

export { поохотиться };