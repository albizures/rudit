import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвинуться: PerfectVerb = {
  name: Word('подвинуться', 4),
  singular1stPerson: Word('подвинусь', 4),
  singular2ndPerson: Word('подвинешься', 4),
  singular3rdPerson: Word('подвинется', 4),
  plural1stPerson: Word('подвинемся', 4),
  plural2ndPerson: Word('подвинетесь', 4),
  plural3rdPerson: Word('подвинутся', 4),
  masculinePast: Word('подвинулся', 4),
  femininePast: Word('подвинулась', 4),
  neuterPast: Word('подвинулось', 4),
  pluralPast: Word('подвинулись', 4),
  imperativeInformal: Word('подвинься', 4),
  imperativeFormal: Word('подвиньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подвинуться.name.text, подвинуться);

export { подвинуться };