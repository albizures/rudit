import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пресыщать: PerfectVerb = {
  name: Word('пресыщать', 6),
  singular1stPerson: Word('пресыщаю', 6),
  singular2ndPerson: Word('пресыщаешь', 6),
  singular3rdPerson: Word('пресыщает', 6),
  plural1stPerson: Word('пресыщаем', 6),
  plural2ndPerson: Word('пресыщаете', 6),
  plural3rdPerson: Word('пресыщают', 6),
  masculinePast: Word('пресыщал', 6),
  femininePast: Word('пресыщала', 6),
  neuterPast: Word('пресыщало', 6),
  pluralPast: Word('пресыщали', 6),
  imperativeInformal: Word('пресыщай', 6),
  imperativeFormal: Word('пресыщайте', 6),
  imperfect: [],
};

perfectVerbs.set(пресыщать.name.text, пресыщать);

export { пресыщать };