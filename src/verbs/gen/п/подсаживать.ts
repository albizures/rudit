import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсаживать: PerfectVerb = {
  name: Word('подсаживать', 4),
  singular1stPerson: Word('подсаживаю', 4),
  singular2ndPerson: Word('подсаживаешь', 4),
  singular3rdPerson: Word('подсаживает', 4),
  plural1stPerson: Word('подсаживаем', 4),
  plural2ndPerson: Word('подсаживаете', 4),
  plural3rdPerson: Word('подсаживают', 4),
  masculinePast: Word('подсаживал', 4),
  femininePast: Word('подсаживала', 4),
  neuterPast: Word('подсаживало', 4),
  pluralPast: Word('подсаживали', 4),
  imperativeInformal: Word('подсаживай', 4),
  imperativeFormal: Word('подсаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(подсаживать.name.text, подсаживать);

export { подсаживать };