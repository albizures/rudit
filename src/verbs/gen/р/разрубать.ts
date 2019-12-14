import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрубать: PerfectVerb = {
  name: Word('разрубать', 6),
  singular1stPerson: Word('разрубаю', 6),
  singular2ndPerson: Word('разрубаешь', 6),
  singular3rdPerson: Word('разрубает', 6),
  plural1stPerson: Word('разрубаем', 6),
  plural2ndPerson: Word('разрубаете', 6),
  plural3rdPerson: Word('разрубают', 6),
  masculinePast: Word('разрубал', 6),
  femininePast: Word('разрубала', 6),
  neuterPast: Word('разрубало', 6),
  pluralPast: Word('разрубали', 6),
  imperativeInformal: Word('разрубай', 6),
  imperativeFormal: Word('разрубайте', 6),
  imperfect: [],
};

perfectVerbs.set(разрубать.name.text, разрубать);

export { разрубать };