import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завернуться: PerfectVerb = {
  name: Word('завернуться', 6),
  singular1stPerson: Word('завернусь', 6),
  singular2ndPerson: Word('завернёшься', 6),
  singular3rdPerson: Word('завернётся', 6),
  plural1stPerson: Word('завернёмся', 6),
  plural2ndPerson: Word('завернётесь', 6),
  plural3rdPerson: Word('завернутся', 6),
  masculinePast: Word('завернулся', 6),
  femininePast: Word('завернулась', 6),
  neuterPast: Word('завернулось', 6),
  pluralPast: Word('завернулись', 6),
  imperativeInformal: Word('завернись', 6),
  imperativeFormal: Word('завернитесь', 6),
  imperfect: [],
};

perfectVerbs.set(завернуться.name.text, завернуться);

export { завернуться };