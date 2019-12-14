import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымыливать: PerfectVerb = {
  name: Word('вымыливать', 3),
  singular1stPerson: Word('вымыливаю', 3),
  singular2ndPerson: Word('вымыливаешь', 3),
  singular3rdPerson: Word('вымыливает', 3),
  plural1stPerson: Word('вымыливаем', 3),
  plural2ndPerson: Word('вымыливаете', 3),
  plural3rdPerson: Word('вымыливают', 3),
  masculinePast: Word('вымыливал', 3),
  femininePast: Word('вымыливала', 3),
  neuterPast: Word('вымыливало', 3),
  pluralPast: Word('вымыливали', 3),
  imperativeInformal: Word('вымыливай', 3),
  imperativeFormal: Word('вымыливайте', 3),
  imperfect: [],
};

perfectVerbs.set(вымыливать.name.text, вымыливать);

export { вымыливать };