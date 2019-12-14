import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продавливать: PerfectVerb = {
  name: Word('продавливать', 4),
  singular1stPerson: Word('продавливаю', 4),
  singular2ndPerson: Word('продавливаешь', 4),
  singular3rdPerson: Word('продавливает', 4),
  plural1stPerson: Word('продавливаем', 4),
  plural2ndPerson: Word('продавливаете', 4),
  plural3rdPerson: Word('продавливают', 4),
  masculinePast: Word('продавливал', 4),
  femininePast: Word('продавливала', 4),
  neuterPast: Word('продавливало', 4),
  pluralPast: Word('продавливали', 4),
  imperativeInformal: Word('продавливай', 4),
  imperativeFormal: Word('продавливайте', 4),
  imperfect: [],
};

perfectVerbs.set(продавливать.name.text, продавливать);

export { продавливать };