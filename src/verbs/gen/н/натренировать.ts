import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натренировать: PerfectVerb = {
  name: Word('натренировать', 10),
  singular1stPerson: Word('натренирую', 8),
  singular2ndPerson: Word('натренируешь', 8),
  singular3rdPerson: Word('натренирует', 8),
  plural1stPerson: Word('натренируем', 8),
  plural2ndPerson: Word('натренируете', 8),
  plural3rdPerson: Word('натренируют', 8),
  masculinePast: Word('натренировал', 10),
  femininePast: Word('натренировала', 10),
  neuterPast: Word('натренировало', 10),
  pluralPast: Word('натренировали', 10),
  imperativeInformal: Word('натренируй', 8),
  imperativeFormal: Word('натренируйте', 8),
  imperfect: [],
};

perfectVerbs.set(натренировать.name.text, натренировать);

export { натренировать };