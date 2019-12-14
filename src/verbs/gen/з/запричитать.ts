import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запричитать: PerfectVerb = {
  name: Word('запричитать', 8),
  singular1stPerson: Word('запричитаю', 8),
  singular2ndPerson: Word('запричитаешь', 8),
  singular3rdPerson: Word('запричитает', 8),
  plural1stPerson: Word('запричитаем', 8),
  plural2ndPerson: Word('запричитаете', 8),
  plural3rdPerson: Word('запричитают', 8),
  masculinePast: Word('запричитал', 8),
  femininePast: Word('запричитала', 8),
  neuterPast: Word('запричитало', 8),
  pluralPast: Word('запричитали', 8),
  imperativeInformal: Word('запричитай', 8),
  imperativeFormal: Word('запричитайте', 8),
  imperfect: [],
};

perfectVerbs.set(запричитать.name.text, запричитать);

export { запричитать };