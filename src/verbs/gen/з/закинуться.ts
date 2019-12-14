import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закинуться: PerfectVerb = {
  name: Word('закинуться', 3),
  singular1stPerson: Word('закинусь', 3),
  singular2ndPerson: Word('закинешься', 3),
  singular3rdPerson: Word('закинется', 3),
  plural1stPerson: Word('закинемся', 3),
  plural2ndPerson: Word('закинетесь', 3),
  plural3rdPerson: Word('закинутся', 3),
  masculinePast: Word('закинулся', 3),
  femininePast: Word('закинулась', 3),
  neuterPast: Word('закинулось', 3),
  pluralPast: Word('закинулись', 3),
  imperativeInformal: Word('закинься', 3),
  imperativeFormal: Word('закиньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(закинуться.name.text, закинуться);

export { закинуться };