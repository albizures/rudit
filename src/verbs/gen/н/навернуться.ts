import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навернуться: PerfectVerb = {
  name: Word('навернуться', 6),
  singular1stPerson: Word('навернусь', 6),
  singular2ndPerson: Word('навернёшься', 6),
  singular3rdPerson: Word('навернётся', 6),
  plural1stPerson: Word('навернёмся', 6),
  plural2ndPerson: Word('навернётесь', 6),
  plural3rdPerson: Word('навернутся', 6),
  masculinePast: Word('навернулся', 6),
  femininePast: Word('навернулась', 6),
  neuterPast: Word('навернулось', 6),
  pluralPast: Word('навернулись', 6),
  imperativeInformal: Word('навернись', 6),
  imperativeFormal: Word('навернитесь', 6),
  imperfect: [],
};

perfectVerbs.set(навернуться.name.text, навернуться);

export { навернуться };