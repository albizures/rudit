import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const увернуться: PerfectVerb = {
  name: Word('увернуться', 5),
  singular1stPerson: Word('увернусь', 5),
  singular2ndPerson: Word('увернёшься', 5),
  singular3rdPerson: Word('увернётся', 5),
  plural1stPerson: Word('увернёмся', 5),
  plural2ndPerson: Word('увернётесь', 5),
  plural3rdPerson: Word('увернутся', 5),
  masculinePast: Word('увернулся', 5),
  femininePast: Word('увернулась', 5),
  neuterPast: Word('увернулось', 5),
  pluralPast: Word('увернулись', 5),
  imperativeInformal: Word('увернись', 5),
  imperativeFormal: Word('увернитесь', 5),
  imperfect: [],
};

perfectVerbs.set(увернуться.name.text, увернуться);

export { увернуться };