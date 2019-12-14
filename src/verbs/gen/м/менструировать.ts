import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const менструировать: PerfectVerb = {
  name: Word('менструировать', 7),
  singular1stPerson: Word('менструирую', 7),
  singular2ndPerson: Word('менструируешь', 7),
  singular3rdPerson: Word('менструирует', 7),
  plural1stPerson: Word('менструируем', 7),
  plural2ndPerson: Word('менструируете', 7),
  plural3rdPerson: Word('менструируют', 7),
  masculinePast: Word('менструировал', 7),
  femininePast: Word('менструировала', 7),
  neuterPast: Word('менструировало', 7),
  pluralPast: Word('менструировали', 7),
  imperativeInformal: Word('менструируй', 7),
  imperativeFormal: Word('менструируйте', 7),
  imperfect: [],
};

perfectVerbs.set(менструировать.name.text, менструировать);

export { менструировать };