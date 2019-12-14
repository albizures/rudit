import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прослеживать: PerfectVerb = {
  name: Word('прослеживать', 5),
  singular1stPerson: Word('прослеживаю', 5),
  singular2ndPerson: Word('прослеживаешь', 5),
  singular3rdPerson: Word('прослеживает', 5),
  plural1stPerson: Word('прослеживаем', 5),
  plural2ndPerson: Word('прослеживаете', 5),
  plural3rdPerson: Word('прослеживают', 5),
  masculinePast: Word('прослеживал', 5),
  femininePast: Word('прослеживала', 5),
  neuterPast: Word('прослеживало', 5),
  pluralPast: Word('прослеживали', 5),
  imperativeInformal: Word('прослеживай', 5),
  imperativeFormal: Word('прослеживайте', 5),
  imperfect: [],
};

perfectVerbs.set(прослеживать.name.text, прослеживать);

export { прослеживать };