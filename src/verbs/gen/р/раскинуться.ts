import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскинуться: PerfectVerb = {
  name: Word('раскинуться', 4),
  singular1stPerson: Word('раскинусь', 4),
  singular2ndPerson: Word('раскинешься', 4),
  singular3rdPerson: Word('раскинется', 4),
  plural1stPerson: Word('раскинемся', 4),
  plural2ndPerson: Word('раскинетесь', 4),
  plural3rdPerson: Word('раскинутся', 4),
  masculinePast: Word('раскинулся', 4),
  femininePast: Word('раскинулась', 4),
  neuterPast: Word('раскинулось', 4),
  pluralPast: Word('раскинулись', 4),
  imperativeInformal: Word('раскинься', 4),
  imperativeFormal: Word('раскиньтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскинуться.name.text, раскинуться);

export { раскинуться };