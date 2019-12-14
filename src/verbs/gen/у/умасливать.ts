import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умасливать: PerfectVerb = {
  name: Word('умасливать', 2),
  singular1stPerson: Word('умасливаю', 2),
  singular2ndPerson: Word('умасливаешь', 2),
  singular3rdPerson: Word('умасливает', 2),
  plural1stPerson: Word('умасливаем', 2),
  plural2ndPerson: Word('умасливаете', 2),
  plural3rdPerson: Word('умасливают', 2),
  masculinePast: Word('умасливал', 2),
  femininePast: Word('умасливала', 2),
  neuterPast: Word('умасливало', 2),
  pluralPast: Word('умасливали', 2),
  imperativeInformal: Word('умасливай', 2),
  imperativeFormal: Word('умасливайте', 2),
  imperfect: [],
};

perfectVerbs.set(умасливать.name.text, умасливать);

export { умасливать };