import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аттестовать: PerfectVerb = {
  name: Word('аттестовать', 8),
  singular1stPerson: Word('аттестую', 6),
  singular2ndPerson: Word('аттестуешь', 6),
  singular3rdPerson: Word('аттестует', 6),
  plural1stPerson: Word('аттестуем', 6),
  plural2ndPerson: Word('аттестуете', 6),
  plural3rdPerson: Word('аттестуют', 6),
  masculinePast: Word('аттестовал', 8),
  femininePast: Word('аттестовала', 8),
  neuterPast: Word('аттестовало', 8),
  pluralPast: Word('аттестовали', 8),
  imperativeInformal: Word('аттестуй', 6),
  imperativeFormal: Word('аттестуйте', 6),
  imperfect: [],
};

perfectVerbs.set(аттестовать.name.text, аттестовать);

export { аттестовать };