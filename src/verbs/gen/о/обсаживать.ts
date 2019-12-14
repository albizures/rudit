import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обсаживать: PerfectVerb = {
  name: Word('обсаживать', 3),
  singular1stPerson: Word('обсаживаю', 3),
  singular2ndPerson: Word('обсаживаешь', 3),
  singular3rdPerson: Word('обсаживает', 3),
  plural1stPerson: Word('обсаживаем', 3),
  plural2ndPerson: Word('обсаживаете', 3),
  plural3rdPerson: Word('обсаживают', 3),
  masculinePast: Word('обсаживал', 3),
  femininePast: Word('обсаживала', 3),
  neuterPast: Word('обсаживало', 3),
  pluralPast: Word('обсаживали', 3),
  imperativeInformal: Word('обсаживай', 3),
  imperativeFormal: Word('обсаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(обсаживать.name.text, обсаживать);

export { обсаживать };