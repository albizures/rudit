import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распаковать: PerfectVerb = {
  name: Word('распаковать', 8),
  singular1stPerson: Word('распакую', 6),
  singular2ndPerson: Word('распакуешь', 6),
  singular3rdPerson: Word('распакует', 6),
  plural1stPerson: Word('распакуем', 6),
  plural2ndPerson: Word('распакуете', 6),
  plural3rdPerson: Word('распакуют', 6),
  masculinePast: Word('распаковал', 8),
  femininePast: Word('распаковала', 8),
  neuterPast: Word('распаковало', 8),
  pluralPast: Word('распаковали', 8),
  imperativeInformal: Word('распакуй', 6),
  imperativeFormal: Word('распакуйте', 6),
  imperfect: [],
};

perfectVerbs.set(распаковать.name.text, распаковать);

export { распаковать };