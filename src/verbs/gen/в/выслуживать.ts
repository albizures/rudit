import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выслуживать: PerfectVerb = {
  name: Word('выслуживать', 4),
  singular1stPerson: Word('выслуживаю', 4),
  singular2ndPerson: Word('выслуживаешь', 4),
  singular3rdPerson: Word('выслуживает', 4),
  plural1stPerson: Word('выслуживаем', 4),
  plural2ndPerson: Word('выслуживаете', 4),
  plural3rdPerson: Word('выслуживают', 4),
  masculinePast: Word('выслуживал', 4),
  femininePast: Word('выслуживала', 4),
  neuterPast: Word('выслуживало', 4),
  pluralPast: Word('выслуживали', 4),
  imperativeInformal: Word('выслуживай', 4),
  imperativeFormal: Word('выслуживайте', 4),
  imperfect: [],
};

perfectVerbs.set(выслуживать.name.text, выслуживать);

export { выслуживать };