import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разметать: PerfectVerb = {
  name: Word('разметать', 6),
  singular1stPerson: Word('разметаю', 6),
  singular2ndPerson: Word('разметаешь', 6),
  singular3rdPerson: Word('разметает', 6),
  plural1stPerson: Word('разметаем', 6),
  plural2ndPerson: Word('разметаете', 6),
  plural3rdPerson: Word('разметают', 6),
  masculinePast: Word('разметал', 6),
  femininePast: Word('разметала', 6),
  neuterPast: Word('разметало', 6),
  pluralPast: Word('разметали', 6),
  imperativeInformal: Word('разметай', 6),
  imperativeFormal: Word('разметайте', 6),
  imperfect: [],
};

perfectVerbs.set(разметать.name.text, разметать);

export { разметать };