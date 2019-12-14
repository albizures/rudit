import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продырявливать: PerfectVerb = {
  name: Word('продырявливать', 6),
  singular1stPerson: Word('продырявливаю', 6),
  singular2ndPerson: Word('продырявливаешь', 6),
  singular3rdPerson: Word('продырявливает', 6),
  plural1stPerson: Word('продырявливаем', 6),
  plural2ndPerson: Word('продырявливаете', 6),
  plural3rdPerson: Word('продырявливают', 6),
  masculinePast: Word('продырявливал', 6),
  femininePast: Word('продырявливала', 6),
  neuterPast: Word('продырявливало', 6),
  pluralPast: Word('продырявливали', 6),
  imperativeInformal: Word('продырявливай', 6),
  imperativeFormal: Word('продырявливайте', 6),
  imperfect: [],
};

perfectVerbs.set(продырявливать.name.text, продырявливать);

export { продырявливать };