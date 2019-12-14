import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гильотинировать: PerfectVerb = {
  name: Word('гильотинировать', 8),
  singular1stPerson: Word('гильотинирую', 8),
  singular2ndPerson: Word('гильотинируешь', 8),
  singular3rdPerson: Word('гильотинирует', 8),
  plural1stPerson: Word('гильотинируем', 8),
  plural2ndPerson: Word('гильотинируете', 8),
  plural3rdPerson: Word('гильотинируют', 8),
  masculinePast: Word('гильотинировал', 8),
  femininePast: Word('гильотинировала', 8),
  neuterPast: Word('гильотинировало', 8),
  pluralPast: Word('гильотинировали', 8),
  imperativeInformal: Word('гильотинируй', 8),
  imperativeFormal: Word('гильотинируйте', 8),
  imperfect: [],
};

perfectVerbs.set(гильотинировать.name.text, гильотинировать);

export { гильотинировать };