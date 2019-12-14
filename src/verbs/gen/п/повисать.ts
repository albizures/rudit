import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повисать: PerfectVerb = {
  name: Word('повисать', 5),
  singular1stPerson: Word('повисаю', 5),
  singular2ndPerson: Word('повисаешь', 5),
  singular3rdPerson: Word('повисает', 5),
  plural1stPerson: Word('повисаем', 5),
  plural2ndPerson: Word('повисаете', 5),
  plural3rdPerson: Word('повисают', 5),
  masculinePast: Word('повисал', 5),
  femininePast: Word('повисала', 5),
  neuterPast: Word('повисало', 5),
  pluralPast: Word('повисали', 5),
  imperativeInformal: Word('повисай', 5),
  imperativeFormal: Word('повисайте', 5),
  imperfect: [],
};

perfectVerbs.set(повисать.name.text, повисать);

export { повисать };