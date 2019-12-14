import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const конструировать: PerfectVerb = {
  name: Word('конструировать', 7),
  singular1stPerson: Word('конструирую', 7),
  singular2ndPerson: Word('конструируешь', 7),
  singular3rdPerson: Word('конструирует', 7),
  plural1stPerson: Word('конструируем', 7),
  plural2ndPerson: Word('конструируете', 7),
  plural3rdPerson: Word('конструируют', 7),
  masculinePast: Word('конструировал', 7),
  femininePast: Word('конструировала', 7),
  neuterPast: Word('конструировало', 7),
  pluralPast: Word('конструировали', 7),
  imperativeInformal: Word('конструируй', 7),
  imperativeFormal: Word('конструируйте', 7),
  imperfect: [],
};

perfectVerbs.set(конструировать.name.text, конструировать);

export { конструировать };