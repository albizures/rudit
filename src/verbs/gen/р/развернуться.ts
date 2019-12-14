import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развернуться: PerfectVerb = {
  name: Word('развернуться', 7),
  singular1stPerson: Word('развернусь', 7),
  singular2ndPerson: Word('развернёшься', 7),
  singular3rdPerson: Word('развернётся', 7),
  plural1stPerson: Word('развернёмся', 7),
  plural2ndPerson: Word('развернётесь', 7),
  plural3rdPerson: Word('развернутся', 7),
  masculinePast: Word('развернулся', 7),
  femininePast: Word('развернулась', 7),
  neuterPast: Word('развернулось', 7),
  pluralPast: Word('развернулись', 7),
  imperativeInformal: Word('развернись', 7),
  imperativeFormal: Word('развернитесь', 7),
  imperfect: [],
};

perfectVerbs.set(развернуться.name.text, развернуться);

export { развернуться };