import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сигнализировать: PerfectVerb = {
  name: Word('сигнализировать', 8),
  singular1stPerson: Word('сигнализирую', 8),
  singular2ndPerson: Word('сигнализируешь', 8),
  singular3rdPerson: Word('сигнализирует', 8),
  plural1stPerson: Word('сигнализируем', 8),
  plural2ndPerson: Word('сигнализируете', 8),
  plural3rdPerson: Word('сигнализируют', 8),
  masculinePast: Word('сигнализировал', 8),
  femininePast: Word('сигнализировала', 8),
  neuterPast: Word('сигнализировало', 8),
  pluralPast: Word('сигнализировали', 8),
  imperativeInformal: Word('сигнализируй', 8),
  imperativeFormal: Word('сигнализируйте', 8),
  imperfect: [],
};

perfectVerbs.set(сигнализировать.name.text, сигнализировать);

export { сигнализировать };