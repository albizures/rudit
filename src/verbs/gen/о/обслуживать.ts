import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обслуживать: PerfectVerb = {
  name: Word('обслуживать', 4),
  singular1stPerson: Word('обслуживаю', 4),
  singular2ndPerson: Word('обслуживаешь', 4),
  singular3rdPerson: Word('обслуживает', 4),
  plural1stPerson: Word('обслуживаем', 4),
  plural2ndPerson: Word('обслуживаете', 4),
  plural3rdPerson: Word('обслуживают', 4),
  masculinePast: Word('обслуживал', 4),
  femininePast: Word('обслуживала', 4),
  neuterPast: Word('обслуживало', 4),
  pluralPast: Word('обслуживали', 4),
  imperativeInformal: Word('обслуживай', 4),
  imperativeFormal: Word('обслуживайте', 4),
  imperfect: [],
};

perfectVerbs.set(обслуживать.name.text, обслуживать);

export { обслуживать };