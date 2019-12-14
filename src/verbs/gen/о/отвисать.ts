import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвисать: PerfectVerb = {
  name: Word('отвисать', 5),
  singular1stPerson: Word('отвисаю', 5),
  singular2ndPerson: Word('отвисаешь', 5),
  singular3rdPerson: Word('отвисает', 5),
  plural1stPerson: Word('отвисаем', 5),
  plural2ndPerson: Word('отвисаете', 5),
  plural3rdPerson: Word('отвисают', 5),
  masculinePast: Word('отвисал', 5),
  femininePast: Word('отвисала', 5),
  neuterPast: Word('отвисало', 5),
  pluralPast: Word('отвисали', 5),
  imperativeInformal: Word('отвисай', 5),
  imperativeFormal: Word('отвисайте', 5),
  imperfect: [],
};

perfectVerbs.set(отвисать.name.text, отвисать);

export { отвисать };