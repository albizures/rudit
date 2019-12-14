import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спутывать: PerfectVerb = {
  name: Word('спутывать', 2),
  singular1stPerson: Word('спутываю', 2),
  singular2ndPerson: Word('спутываешь', 2),
  singular3rdPerson: Word('спутывает', 2),
  plural1stPerson: Word('спутываем', 2),
  plural2ndPerson: Word('спутываете', 2),
  plural3rdPerson: Word('спутывают', 2),
  masculinePast: Word('спутывал', 2),
  femininePast: Word('спутывала', 2),
  neuterPast: Word('спутывало', 2),
  pluralPast: Word('спутывали', 2),
  imperativeInformal: Word('спутывай', 2),
  imperativeFormal: Word('спутывайте', 2),
  imperfect: [],
};

perfectVerbs.set(спутывать.name.text, спутывать);

export { спутывать };