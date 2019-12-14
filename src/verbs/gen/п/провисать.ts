import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const провисать: PerfectVerb = {
  name: Word('провисать', 6),
  singular1stPerson: Word('провисаю', 6),
  singular2ndPerson: Word('провисаешь', 6),
  singular3rdPerson: Word('провисает', 6),
  plural1stPerson: Word('провисаем', 6),
  plural2ndPerson: Word('провисаете', 6),
  plural3rdPerson: Word('провисают', 6),
  masculinePast: Word('провисал', 6),
  femininePast: Word('провисала', 6),
  neuterPast: Word('провисало', 6),
  pluralPast: Word('провисали', 6),
  imperativeInformal: Word('провисай', 6),
  imperativeFormal: Word('провисайте', 6),
  imperfect: [],
};

perfectVerbs.set(провисать.name.text, провисать);

export { провисать };