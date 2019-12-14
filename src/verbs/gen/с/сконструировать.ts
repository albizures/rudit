import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сконструировать: PerfectVerb = {
  name: Word('сконструировать', 8),
  singular1stPerson: Word('сконструирую', 8),
  singular2ndPerson: Word('сконструируешь', 8),
  singular3rdPerson: Word('сконструирует', 8),
  plural1stPerson: Word('сконструируем', 8),
  plural2ndPerson: Word('сконструируете', 8),
  plural3rdPerson: Word('сконструируют', 8),
  masculinePast: Word('сконструировал', 8),
  femininePast: Word('сконструировала', 8),
  neuterPast: Word('сконструировало', 8),
  pluralPast: Word('сконструировали', 8),
  imperativeInformal: Word('сконструируй', 8),
  imperativeFormal: Word('сконструируйте', 8),
  imperfect: [],
};

perfectVerbs.set(сконструировать.name.text, сконструировать);

export { сконструировать };