import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наморщиться: PerfectVerb = {
  name: Word('наморщиться', 3),
  singular1stPerson: Word('наморщусь', 3),
  singular2ndPerson: Word('наморщишься', 3),
  singular3rdPerson: Word('наморщится', 3),
  plural1stPerson: Word('наморщимся', 3),
  plural2ndPerson: Word('наморщитесь', 3),
  plural3rdPerson: Word('наморщатся', 3),
  masculinePast: Word('наморщился', 3),
  femininePast: Word('наморщилась', 3),
  neuterPast: Word('наморщилось', 3),
  pluralPast: Word('наморщились', 3),
  imperativeInformal: Word('наморщись//намо'рщься', 3),
  imperativeFormal: Word('наморщьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(наморщиться.name.text, наморщиться);

export { наморщиться };