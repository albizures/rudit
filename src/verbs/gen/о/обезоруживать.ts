import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обезоруживать: PerfectVerb = {
  name: Word('обезоруживать', 6),
  singular1stPerson: Word('обезоруживаю', 6),
  singular2ndPerson: Word('обезоруживаешь', 6),
  singular3rdPerson: Word('обезоруживает', 6),
  plural1stPerson: Word('обезоруживаем', 6),
  plural2ndPerson: Word('обезоруживаете', 6),
  plural3rdPerson: Word('обезоруживают', 6),
  masculinePast: Word('обезоруживал', 6),
  femininePast: Word('обезоруживала', 6),
  neuterPast: Word('обезоруживало', 6),
  pluralPast: Word('обезоруживали', 6),
  imperativeInformal: Word('обезоруживай', 6),
  imperativeFormal: Word('обезоруживайте', 6),
  imperfect: [],
};

perfectVerbs.set(обезоруживать.name.text, обезоруживать);

export { обезоруживать };