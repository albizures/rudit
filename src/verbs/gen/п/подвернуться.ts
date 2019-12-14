import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвернуться: PerfectVerb = {
  name: Word('подвернуться', 7),
  singular1stPerson: Word('подвернусь', 7),
  singular2ndPerson: Word('подвернёшься', 4),
  singular3rdPerson: Word('подвернётся', 4),
  plural1stPerson: Word('подвернёмся', 4),
  plural2ndPerson: Word('подвернётесь', 4),
  plural3rdPerson: Word('подвернутся', 7),
  masculinePast: Word('подвернулся', 7),
  femininePast: Word('подвернулась', 7),
  neuterPast: Word('подвернулось', 7),
  pluralPast: Word('подвернулись', 7),
  imperativeInformal: Word('подвернись', 7),
  imperativeFormal: Word('подвернитесь', 7),
  imperfect: [],
};

perfectVerbs.set(подвернуться.name.text, подвернуться);

export { подвернуться };