import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лепетать: PerfectVerb = {
  name: Word('лепетать', 5),
  singular1stPerson: Word('лепечу', 5),
  singular2ndPerson: Word('лепечешь', 3),
  singular3rdPerson: Word('лепечет', 3),
  plural1stPerson: Word('лепечем', 3),
  plural2ndPerson: Word('лепечете', 3),
  plural3rdPerson: Word('лепечут', 3),
  masculinePast: Word('лепетал', 5),
  femininePast: Word('лепетала', 5),
  neuterPast: Word('лепетало', 5),
  pluralPast: Word('лепетали', 5),
  imperativeInformal: Word('лепечи', 5),
  imperativeFormal: Word('лепечите', 5),
  imperfect: ['залепетать','пролепетать'],
};

perfectVerbs.set(лепетать.name.text, лепетать);

export { лепетать };