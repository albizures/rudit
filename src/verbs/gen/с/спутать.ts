import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спутать: PerfectVerb = {
  name: Word('спутать', 2),
  singular1stPerson: Word('спутаю', 2),
  singular2ndPerson: Word('спутаешь', 2),
  singular3rdPerson: Word('спутает', 2),
  plural1stPerson: Word('спутаем', 2),
  plural2ndPerson: Word('спутаете', 2),
  plural3rdPerson: Word('спутают', 2),
  masculinePast: Word('спутал', 2),
  femininePast: Word('спутала', 2),
  neuterPast: Word('спутало', 2),
  pluralPast: Word('спутали', 2),
  imperativeInformal: Word('спутай', 2),
  imperativeFormal: Word('спутайте', 2),
  imperfect: [],
};

perfectVerbs.set(спутать.name.text, спутать);

export { спутать };