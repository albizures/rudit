import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нокаутировать: PerfectVerb = {
  name: Word('нокаутировать', 6),
  singular1stPerson: Word('нокаутирую', 6),
  singular2ndPerson: Word('нокаутируешь', 6),
  singular3rdPerson: Word('нокаутирует', 6),
  plural1stPerson: Word('нокаутируем', 6),
  plural2ndPerson: Word('нокаутируете', 6),
  plural3rdPerson: Word('нокаутируют', 6),
  masculinePast: Word('нокаутировал', 6),
  femininePast: Word('нокаутировала', 6),
  neuterPast: Word('нокаутировало', 6),
  pluralPast: Word('нокаутировали', 6),
  imperativeInformal: Word('нокаутируй', 6),
  imperativeFormal: Word('нокаутируйте', 6),
  imperfect: [],
};

perfectVerbs.set(нокаутировать.name.text, нокаутировать);

export { нокаутировать };