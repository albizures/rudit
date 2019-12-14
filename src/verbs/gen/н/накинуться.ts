import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накинуться: PerfectVerb = {
  name: Word('накинуться', 3),
  singular1stPerson: Word('накинусь', 3),
  singular2ndPerson: Word('накинешься', 3),
  singular3rdPerson: Word('накинется', 3),
  plural1stPerson: Word('накинемся', 3),
  plural2ndPerson: Word('накинетесь', 3),
  plural3rdPerson: Word('накинутся', 3),
  masculinePast: Word('накинулся', 3),
  femininePast: Word('накинулась', 3),
  neuterPast: Word('накинулось', 3),
  pluralPast: Word('накинулись', 3),
  imperativeInformal: Word('накинься', 3),
  imperativeFormal: Word('накиньтесь', 3),
  imperfect: [],
};

perfectVerbs.set(накинуться.name.text, накинуться);

export { накинуться };