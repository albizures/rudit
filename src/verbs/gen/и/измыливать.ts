import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const измыливать: PerfectVerb = {
  name: Word('измыливать', 3),
  singular1stPerson: Word('измыливаю', 3),
  singular2ndPerson: Word('измыливаешь', 3),
  singular3rdPerson: Word('измыливает', 3),
  plural1stPerson: Word('измыливаем', 3),
  plural2ndPerson: Word('измыливаете', 3),
  plural3rdPerson: Word('измыливают', 3),
  masculinePast: Word('измыливал', 3),
  femininePast: Word('измыливала', 3),
  neuterPast: Word('измыливало', 3),
  pluralPast: Word('измыливали', 3),
  imperativeInformal: Word('измыливай', 3),
  imperativeFormal: Word('измыливайте', 3),
  imperfect: [],
};

perfectVerbs.set(измыливать.name.text, измыливать);

export { измыливать };