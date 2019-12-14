import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const индустриализировать: PerfectVerb = {
  name: Word('индустриализировать', 12),
  singular1stPerson: Word('индустриализирую', 12),
  singular2ndPerson: Word('индустриализируешь', 12),
  singular3rdPerson: Word('индустриализирует', 12),
  plural1stPerson: Word('индустриализируем', 12),
  plural2ndPerson: Word('индустриализируете', 12),
  plural3rdPerson: Word('индустриализируют', 12),
  masculinePast: Word('индустриализировал', 12),
  femininePast: Word('индустриализировала', 12),
  neuterPast: Word('индустриализировало', 12),
  pluralPast: Word('индустриализировали', 12),
  imperativeInformal: Word('индустриализируй', 12),
  imperativeFormal: Word('индустриализируйте', 12),
  imperfect: [],
};

perfectVerbs.set(индустриализировать.name.text, индустриализировать);

export { индустриализировать };