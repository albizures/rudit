import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подрубать: PerfectVerb = {
  name: Word('подрубать', 6),
  singular1stPerson: Word('подрубаю', 6),
  singular2ndPerson: Word('подрубаешь', 6),
  singular3rdPerson: Word('подрубает', 6),
  plural1stPerson: Word('подрубаем', 6),
  plural2ndPerson: Word('подрубаете', 6),
  plural3rdPerson: Word('подрубают', 6),
  masculinePast: Word('подрубал', 6),
  femininePast: Word('подрубала', 6),
  neuterPast: Word('подрубало', 6),
  pluralPast: Word('подрубали', 6),
  imperativeInformal: Word('подрубай', 6),
  imperativeFormal: Word('подрубайте', 6),
  imperfect: [],
};

perfectVerbs.set(подрубать.name.text, подрубать);

export { подрубать };