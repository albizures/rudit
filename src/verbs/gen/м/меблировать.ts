import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const меблировать: PerfectVerb = {
  name: Word('меблировать', 8),
  singular1stPerson: Word('меблирую', 6),
  singular2ndPerson: Word('меблируешь', 6),
  singular3rdPerson: Word('меблирует', 6),
  plural1stPerson: Word('меблируем', 6),
  plural2ndPerson: Word('меблируете', 6),
  plural3rdPerson: Word('меблируют', 6),
  masculinePast: Word('меблировал', 8),
  femininePast: Word('меблировала', 8),
  neuterPast: Word('меблировало', 8),
  pluralPast: Word('меблировали', 8),
  imperativeInformal: Word('меблируй', 6),
  imperativeFormal: Word('меблируйте', 6),
  imperfect: [],
};

perfectVerbs.set(меблировать.name.text, меблировать);

export { меблировать };