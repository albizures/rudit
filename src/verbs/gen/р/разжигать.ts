import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжигать: PerfectVerb = {
  name: Word('разжигать', 6),
  singular1stPerson: Word('разжигаю', 6),
  singular2ndPerson: Word('разжигаешь', 6),
  singular3rdPerson: Word('разжигает', 6),
  plural1stPerson: Word('разжигаем', 6),
  plural2ndPerson: Word('разжигаете', 6),
  plural3rdPerson: Word('разжигают', 6),
  masculinePast: Word('разжигал', 6),
  femininePast: Word('разжигала', 6),
  neuterPast: Word('разжигало', 6),
  pluralPast: Word('разжигали', 6),
  imperativeInformal: Word('разжигай', 6),
  imperativeFormal: Word('разжигайте', 6),
  imperfect: [],
};

perfectVerbs.set(разжигать.name.text, разжигать);

export { разжигать };