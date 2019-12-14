import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продалбливать: PerfectVerb = {
  name: Word('продалбливать', 4),
  singular1stPerson: Word('продалбливаю', 4),
  singular2ndPerson: Word('продалбливаешь', 4),
  singular3rdPerson: Word('продалбливает', 4),
  plural1stPerson: Word('продалбливаем', 4),
  plural2ndPerson: Word('продалбливаете', 4),
  plural3rdPerson: Word('продалбливают', 4),
  masculinePast: Word('продалбливал', 4),
  femininePast: Word('продалбливала', 4),
  neuterPast: Word('продалбливало', 4),
  pluralPast: Word('продалбливали', 4),
  imperativeInformal: Word('продалбливай', 4),
  imperativeFormal: Word('продалбливайте', 4),
  imperfect: [],
};

perfectVerbs.set(продалбливать.name.text, продалбливать);

export { продалбливать };