import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const простреливать: PerfectVerb = {
  name: Word('простреливать', 6),
  singular1stPerson: Word('простреливаю', 6),
  singular2ndPerson: Word('простреливаешь', 6),
  singular3rdPerson: Word('простреливает', 6),
  plural1stPerson: Word('простреливаем', 6),
  plural2ndPerson: Word('простреливаете', 6),
  plural3rdPerson: Word('простреливают', 6),
  masculinePast: Word('простреливал', 6),
  femininePast: Word('простреливала', 6),
  neuterPast: Word('простреливало', 6),
  pluralPast: Word('простреливали', 6),
  imperativeInformal: Word('простреливай', 6),
  imperativeFormal: Word('простреливайте', 6),
  imperfect: [],
};

perfectVerbs.set(простреливать.name.text, простреливать);

export { простреливать };