import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поморщиться: PerfectVerb = {
  name: Word('поморщиться', 3),
  singular1stPerson: Word('поморщусь', 3),
  singular2ndPerson: Word('поморщишься', 3),
  singular3rdPerson: Word('поморщится', 3),
  plural1stPerson: Word('поморщимся', 3),
  plural2ndPerson: Word('поморщитесь', 3),
  plural3rdPerson: Word('поморщатся', 3),
  masculinePast: Word('поморщился', 3),
  femininePast: Word('поморщилась', 3),
  neuterPast: Word('поморщилось', 3),
  pluralPast: Word('поморщились', 3),
  imperativeInformal: Word('поморщись//помо'рщься', 3),
  imperativeFormal: Word('поморщьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(поморщиться.name.text, поморщиться);

export { поморщиться };