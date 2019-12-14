import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const западать: PerfectVerb = {
  name: Word('западать', 3),
  singular1stPerson: Word('западаю', 3),
  singular2ndPerson: Word('западаешь', 3),
  singular3rdPerson: Word('западает', 3),
  plural1stPerson: Word('западаем', 3),
  plural2ndPerson: Word('западаете', 3),
  plural3rdPerson: Word('западают', 3),
  masculinePast: Word('западал', 3),
  femininePast: Word('западала', 3),
  neuterPast: Word('западало', 3),
  pluralPast: Word('западали', 3),
  imperativeInformal: Word('западай', 3),
  imperativeFormal: Word('западайте', 3),
  imperfect: [],
};

perfectVerbs.set(западать.name.text, западать);

export { западать };