import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const встревать: PerfectVerb = {
  name: Word('встревать', 6),
  singular1stPerson: Word('встреваю', 6),
  singular2ndPerson: Word('встреваешь', 6),
  singular3rdPerson: Word('встревает', 6),
  plural1stPerson: Word('встреваем', 6),
  plural2ndPerson: Word('встреваете', 6),
  plural3rdPerson: Word('встревают', 6),
  masculinePast: Word('встревал', 6),
  femininePast: Word('встревала', 6),
  neuterPast: Word('встревало', 6),
  pluralPast: Word('встревали', 6),
  imperativeInformal: Word('встревай', 6),
  imperativeFormal: Word('встревайте', 6),
  imperfect: [],
};

perfectVerbs.set(встревать.name.text, встревать);

export { встревать };