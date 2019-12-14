import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насладиться: PerfectVerb = {
  name: Word('насладиться', 6),
  singular1stPerson: Word('наслажусь', 6),
  singular2ndPerson: Word('насладишься', 6),
  singular3rdPerson: Word('насладится', 6),
  plural1stPerson: Word('насладимся', 6),
  plural2ndPerson: Word('насладитесь', 6),
  plural3rdPerson: Word('насладятся', 6),
  masculinePast: Word('насладился', 6),
  femininePast: Word('насладилась', 6),
  neuterPast: Word('насладилось', 6),
  pluralPast: Word('насладились', 6),
  imperativeInformal: Word('насладись', 6),
  imperativeFormal: Word('насладитесь', 6),
  imperfect: [],
};

perfectVerbs.set(насладиться.name.text, насладиться);

export { насладиться };