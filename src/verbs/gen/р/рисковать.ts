import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рисковать: PerfectVerb = {
  name: Word('рисковать', 6),
  singular1stPerson: Word('рискую', 4),
  singular2ndPerson: Word('рискуешь', 4),
  singular3rdPerson: Word('рискует', 4),
  plural1stPerson: Word('рискуем', 4),
  plural2ndPerson: Word('рискуете', 4),
  plural3rdPerson: Word('рискуют', 4),
  masculinePast: Word('рисковал', 6),
  femininePast: Word('рисковала', 6),
  neuterPast: Word('рисковало', 6),
  pluralPast: Word('рисковали', 6),
  imperativeInformal: Word('рискуй', 4),
  imperativeFormal: Word('рискуйте', 4),
  imperfect: ['рискнуть'],
};

perfectVerbs.set(рисковать.name.text, рисковать);

export { рисковать };