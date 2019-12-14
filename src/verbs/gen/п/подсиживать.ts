import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсиживать: PerfectVerb = {
  name: Word('подсиживать', 4),
  singular1stPerson: Word('подсиживаю', 4),
  singular2ndPerson: Word('подсиживаешь', 4),
  singular3rdPerson: Word('подсиживает', 4),
  plural1stPerson: Word('подсиживаем', 4),
  plural2ndPerson: Word('подсиживаете', 4),
  plural3rdPerson: Word('подсиживают', 4),
  masculinePast: Word('подсиживал', 4),
  femininePast: Word('подсиживала', 4),
  neuterPast: Word('подсиживало', 4),
  pluralPast: Word('подсиживали', 4),
  imperativeInformal: Word('подсиживай', 4),
  imperativeFormal: Word('подсиживайте', 4),
  imperfect: [],
};

perfectVerbs.set(подсиживать.name.text, подсиживать);

export { подсиживать };