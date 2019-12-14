import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const конвертировать: PerfectVerb = {
  name: Word('конвертировать', 7),
  singular1stPerson: Word('конвертирую', 7),
  singular2ndPerson: Word('конвертируешь', 7),
  singular3rdPerson: Word('конвертирует', 7),
  plural1stPerson: Word('конвертируем', 7),
  plural2ndPerson: Word('конвертируете', 7),
  plural3rdPerson: Word('конвертируют', 7),
  masculinePast: Word('конвертировал', 7),
  femininePast: Word('конвертировала', 7),
  neuterPast: Word('конвертировало', 7),
  pluralPast: Word('конвертировали', 7),
  imperativeInformal: Word('конвертируй', 7),
  imperativeFormal: Word('конвертируйте', 7),
  imperfect: [],
};

perfectVerbs.set(конвертировать.name.text, конвертировать);

export { конвертировать };