import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const награждать: PerfectVerb = {
  name: Word('награждать', 7),
  singular1stPerson: Word('награждаю', 7),
  singular2ndPerson: Word('награждаешь', 7),
  singular3rdPerson: Word('награждает', 7),
  plural1stPerson: Word('награждаем', 7),
  plural2ndPerson: Word('награждаете', 7),
  plural3rdPerson: Word('награждают', 7),
  masculinePast: Word('награждал', 7),
  femininePast: Word('награждала', 7),
  neuterPast: Word('награждало', 7),
  pluralPast: Word('награждали', 7),
  imperativeInformal: Word('награждай', 7),
  imperativeFormal: Word('награждайте', 7),
  imperfect: [],
};

perfectVerbs.set(награждать.name.text, награждать);

export { награждать };