import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздуться: PerfectVerb = {
  name: Word('раздуться', 4),
  singular1stPerson: Word('раздуюсь', 4),
  singular2ndPerson: Word('раздуешься', 4),
  singular3rdPerson: Word('раздуется', 4),
  plural1stPerson: Word('раздуемся', 4),
  plural2ndPerson: Word('раздуетесь', 4),
  plural3rdPerson: Word('раздуются', 4),
  masculinePast: Word('раздулся', 4),
  femininePast: Word('раздулась', 4),
  neuterPast: Word('раздулось', 4),
  pluralPast: Word('раздулись', 4),
  imperativeInformal: Word('раздуйся', 4),
  imperativeFormal: Word('раздуйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раздуться.name.text, раздуться);

export { раздуться };