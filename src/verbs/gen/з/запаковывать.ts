import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запаковывать: PerfectVerb = {
  name: Word('запаковывать', 5),
  singular1stPerson: Word('запаковываю', 5),
  singular2ndPerson: Word('запаковываешь', 5),
  singular3rdPerson: Word('запаковывает', 5),
  plural1stPerson: Word('запаковываем', 5),
  plural2ndPerson: Word('запаковываете', 5),
  plural3rdPerson: Word('запаковывают', 5),
  masculinePast: Word('запаковывал', 5),
  femininePast: Word('запаковывала', 5),
  neuterPast: Word('запаковывало', 5),
  pluralPast: Word('запаковывали', 5),
  imperativeInformal: Word('запаковывай', 5),
  imperativeFormal: Word('запаковывайте', 5),
  imperfect: [],
};

perfectVerbs.set(запаковывать.name.text, запаковывать);

export { запаковывать };