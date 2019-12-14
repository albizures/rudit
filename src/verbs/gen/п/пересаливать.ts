import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересаливать: PerfectVerb = {
  name: Word('пересаливать', 5),
  singular1stPerson: Word('пересаливаю', 5),
  singular2ndPerson: Word('пересаливаешь', 5),
  singular3rdPerson: Word('пересаливает', 5),
  plural1stPerson: Word('пересаливаем', 5),
  plural2ndPerson: Word('пересаливаете', 5),
  plural3rdPerson: Word('пересаливают', 5),
  masculinePast: Word('пересаливал', 5),
  femininePast: Word('пересаливала', 5),
  neuterPast: Word('пересаливало', 5),
  pluralPast: Word('пересаливали', 5),
  imperativeInformal: Word('пересаливай', 5),
  imperativeFormal: Word('пересаливайте', 5),
  imperfect: [],
};

perfectVerbs.set(пересаливать.name.text, пересаливать);

export { пересаливать };