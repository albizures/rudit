import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвернуться: PerfectVerb = {
  name: Word('отвернуться', 6),
  singular1stPerson: Word('отвернусь', 6),
  singular2ndPerson: Word('отвернёшься', 3),
  singular3rdPerson: Word('отвернётся', 3),
  plural1stPerson: Word('отвернёмся', 3),
  plural2ndPerson: Word('отвернётесь', 3),
  plural3rdPerson: Word('отвернутся', 6),
  masculinePast: Word('отвернулся', 6),
  femininePast: Word('отвернулась', 6),
  neuterPast: Word('отвернулось', 6),
  pluralPast: Word('отвернулись', 6),
  imperativeInformal: Word('отвернись', 6),
  imperativeFormal: Word('отвернитесь', 6),
  imperfect: [],
};

perfectVerbs.set(отвернуться.name.text, отвернуться);

export { отвернуться };