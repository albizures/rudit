import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскопать: PerfectVerb = {
  name: Word('раскопать', 6),
  singular1stPerson: Word('раскопаю', 6),
  singular2ndPerson: Word('раскопаешь', 6),
  singular3rdPerson: Word('раскопает', 6),
  plural1stPerson: Word('раскопаем', 6),
  plural2ndPerson: Word('раскопаете', 6),
  plural3rdPerson: Word('раскопают', 6),
  masculinePast: Word('раскопал', 6),
  femininePast: Word('раскопала', 6),
  neuterPast: Word('раскопало', 6),
  pluralPast: Word('раскопали', 6),
  imperativeInformal: Word('раскопай', 6),
  imperativeFormal: Word('раскопайте', 6),
  imperfect: [],
};

perfectVerbs.set(раскопать.name.text, раскопать);

export { раскопать };