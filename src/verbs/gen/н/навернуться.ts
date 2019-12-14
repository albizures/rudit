import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навернуться: PerfectVerb = {
  name: Word('навернуться', 6),
  singular1stPerson: Word('навернусь', 6),
  singular2ndPerson: Word('навернёшься', 1),
  singular3rdPerson: Word('навернётся', 1),
  plural1stPerson: Word('навернёмся', 1),
  plural2ndPerson: Word('навернётесь', 1),
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