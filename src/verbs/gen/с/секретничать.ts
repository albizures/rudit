import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const секретничать: PerfectVerb = {
  name: Word('секретничать', 4),
  singular1stPerson: Word('секретничаю', 4),
  singular2ndPerson: Word('секретничаешь', 4),
  singular3rdPerson: Word('секретничает', 4),
  plural1stPerson: Word('секретничаем', 4),
  plural2ndPerson: Word('секретничаете', 4),
  plural3rdPerson: Word('секретничают', 4),
  masculinePast: Word('секретничал', 4),
  femininePast: Word('секретничала', 4),
  neuterPast: Word('секретничало', 4),
  pluralPast: Word('секретничали', 4),
  imperativeInformal: Word('секретничай', 4),
  imperativeFormal: Word('секретничайте', 4),
  imperfect: [],
};

perfectVerbs.set(секретничать.name.text, секретничать);

export { секретничать };