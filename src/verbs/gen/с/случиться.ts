import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const случиться: PerfectVerb = {
  name: Word('случиться', 4),
  singular1stPerson: Word('случусь', 4),
  singular2ndPerson: Word('случишься', 4),
  singular3rdPerson: Word('случится', 4),
  plural1stPerson: Word('случимся', 4),
  plural2ndPerson: Word('случитесь', 4),
  plural3rdPerson: Word('случатся', 4),
  masculinePast: Word('случился', 4),
  femininePast: Word('случилась', 4),
  neuterPast: Word('случилось', 4),
  pluralPast: Word('случились', 4),
  imperativeInformal: Word('случись', 4),
  imperativeFormal: Word('случитесь', 4),
  imperfect: [],
};

perfectVerbs.set(случиться.name.text, случиться);

export { случиться };