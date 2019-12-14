import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const критиковать: PerfectVerb = {
  name: Word('критиковать', 8),
  singular1stPerson: Word('критикую', 6),
  singular2ndPerson: Word('критикуешь', 6),
  singular3rdPerson: Word('критикует', 6),
  plural1stPerson: Word('критикуем', 6),
  plural2ndPerson: Word('критикуете', 6),
  plural3rdPerson: Word('критикуют', 6),
  masculinePast: Word('критиковал', 8),
  femininePast: Word('критиковала', 8),
  neuterPast: Word('критиковало', 8),
  pluralPast: Word('критиковали', 8),
  imperativeInformal: Word('критикуй', 6),
  imperativeFormal: Word('критикуйте', 6),
  imperfect: [],
};

perfectVerbs.set(критиковать.name.text, критиковать);

export { критиковать };