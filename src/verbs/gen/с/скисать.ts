import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скисать: PerfectVerb = {
  name: Word('скисать', 4),
  singular1stPerson: Word('скисаю', 4),
  singular2ndPerson: Word('скисаешь', 4),
  singular3rdPerson: Word('скисает', 4),
  plural1stPerson: Word('скисаем', 4),
  plural2ndPerson: Word('скисаете', 4),
  plural3rdPerson: Word('скисают', 4),
  masculinePast: Word('скисал', 4),
  femininePast: Word('скисала', 4),
  neuterPast: Word('скисало', 4),
  pluralPast: Word('скисали', 4),
  imperativeInformal: Word('скисай', 4),
  imperativeFormal: Word('скисайте', 4),
  imperfect: [],
};

perfectVerbs.set(скисать.name.text, скисать);

export { скисать };