import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздвинуться: PerfectVerb = {
  name: Word('раздвинуться', 5),
  singular1stPerson: Word('раздвинусь', 5),
  singular2ndPerson: Word('раздвинешься', 5),
  singular3rdPerson: Word('раздвинется', 5),
  plural1stPerson: Word('раздвинемся', 5),
  plural2ndPerson: Word('раздвинетесь', 5),
  plural3rdPerson: Word('раздвинутся', 5),
  masculinePast: Word('раздвинулся', 5),
  femininePast: Word('раздвинулась', 5),
  neuterPast: Word('раздвинулось', 5),
  pluralPast: Word('раздвинулись', 5),
  imperativeInformal: Word('раздвинься', 5),
  imperativeFormal: Word('раздвиньтесь', 5),
  imperfect: [],
};

perfectVerbs.set(раздвинуться.name.text, раздвинуться);

export { раздвинуться };