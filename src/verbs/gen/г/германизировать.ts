import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const германизировать: PerfectVerb = {
  name: Word('германизировать', 8),
  singular1stPerson: Word('германизирую', 8),
  singular2ndPerson: Word('германизируешь', 8),
  singular3rdPerson: Word('германизирует', 8),
  plural1stPerson: Word('германизируем', 8),
  plural2ndPerson: Word('германизируете', 8),
  plural3rdPerson: Word('германизируют', 8),
  masculinePast: Word('германизировал', 8),
  femininePast: Word('германизировала', 8),
  neuterPast: Word('германизировало', 8),
  pluralPast: Word('германизировали', 8),
  imperativeInformal: Word('германизируй', 8),
  imperativeFormal: Word('германизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(германизировать.name.text, германизировать);

export { германизировать };