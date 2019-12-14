import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изгаживать: PerfectVerb = {
  name: Word('изгаживать', 3),
  singular1stPerson: Word('изгаживаю', 3),
  singular2ndPerson: Word('изгаживаешь', 3),
  singular3rdPerson: Word('изгаживает', 3),
  plural1stPerson: Word('изгаживаем', 3),
  plural2ndPerson: Word('изгаживаете', 3),
  plural3rdPerson: Word('изгаживают', 3),
  masculinePast: Word('изгаживал', 3),
  femininePast: Word('изгаживала', 3),
  neuterPast: Word('изгаживало', 3),
  pluralPast: Word('изгаживали', 3),
  imperativeInformal: Word('изгаживай', 3),
  imperativeFormal: Word('изгаживайте', 3),
  imperfect: [],
};

perfectVerbs.set(изгаживать.name.text, изгаживать);

export { изгаживать };