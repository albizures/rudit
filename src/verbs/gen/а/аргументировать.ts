import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аргументировать: PerfectVerb = {
  name: Word('аргументировать', 8),
  singular1stPerson: Word('аргументирую', 8),
  singular2ndPerson: Word('аргументируешь', 8),
  singular3rdPerson: Word('аргументирует', 8),
  plural1stPerson: Word('аргументируем', 8),
  plural2ndPerson: Word('аргументируете', 8),
  plural3rdPerson: Word('аргументируют', 8),
  masculinePast: Word('аргументировал', 8),
  femininePast: Word('аргументировала', 8),
  neuterPast: Word('аргументировало', 8),
  pluralPast: Word('аргументировали', 8),
  imperativeInformal: Word('аргументируй', 8),
  imperativeFormal: Word('аргументируйте', 8),
  imperfect: [],
};

perfectVerbs.set(аргументировать.name.text, аргументировать);

export { аргументировать };