import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выслеживать: PerfectVerb = {
  name: Word('выслеживать', 4),
  singular1stPerson: Word('выслеживаю', 4),
  singular2ndPerson: Word('выслеживаешь', 4),
  singular3rdPerson: Word('выслеживает', 4),
  plural1stPerson: Word('выслеживаем', 4),
  plural2ndPerson: Word('выслеживаете', 4),
  plural3rdPerson: Word('выслеживают', 4),
  masculinePast: Word('выслеживал', 4),
  femininePast: Word('выслеживала', 4),
  neuterPast: Word('выслеживало', 4),
  pluralPast: Word('выслеживали', 4),
  imperativeInformal: Word('выслеживай', 4),
  imperativeFormal: Word('выслеживайте', 4),
  imperfect: [],
};

perfectVerbs.set(выслеживать.name.text, выслеживать);

export { выслеживать };