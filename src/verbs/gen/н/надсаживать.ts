import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надсаживать: PerfectVerb = {
  name: Word('надсаживать', 4),
  singular1stPerson: Word('надсаживаю', 4),
  singular2ndPerson: Word('надсаживаешь', 4),
  singular3rdPerson: Word('надсаживает', 4),
  plural1stPerson: Word('надсаживаем', 4),
  plural2ndPerson: Word('надсаживаете', 4),
  plural3rdPerson: Word('надсаживают', 4),
  masculinePast: Word('надсаживал', 4),
  femininePast: Word('надсаживала', 4),
  neuterPast: Word('надсаживало', 4),
  pluralPast: Word('надсаживали', 4),
  imperativeInformal: Word('надсаживай', 4),
  imperativeFormal: Word('надсаживайте', 4),
  imperfect: [],
};

perfectVerbs.set(надсаживать.name.text, надсаживать);

export { надсаживать };