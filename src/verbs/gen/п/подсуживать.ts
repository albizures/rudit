import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсуживать: PerfectVerb = {
  name: Word('подсуживать', 4),
  singular1stPerson: Word('подсуживаю', 4),
  singular2ndPerson: Word('подсуживаешь', 4),
  singular3rdPerson: Word('подсуживает', 4),
  plural1stPerson: Word('подсуживаем', 4),
  plural2ndPerson: Word('подсуживаете', 4),
  plural3rdPerson: Word('подсуживают', 4),
  masculinePast: Word('подсуживал', 4),
  femininePast: Word('подсуживала', 4),
  neuterPast: Word('подсуживало', 4),
  pluralPast: Word('подсуживали', 4),
  imperativeInformal: Word('подсуживай', 4),
  imperativeFormal: Word('подсуживайте', 4),
  imperfect: [],
};

perfectVerbs.set(подсуживать.name.text, подсуживать);

export { подсуживать };