import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отплясывать: PerfectVerb = {
  name: Word('отплясывать', 4),
  singular1stPerson: Word('отплясываю', 4),
  singular2ndPerson: Word('отплясываешь', 4),
  singular3rdPerson: Word('отплясывает', 4),
  plural1stPerson: Word('отплясываем', 4),
  plural2ndPerson: Word('отплясываете', 4),
  plural3rdPerson: Word('отплясывают', 4),
  masculinePast: Word('отплясывал', 4),
  femininePast: Word('отплясывала', 4),
  neuterPast: Word('отплясывало', 4),
  pluralPast: Word('отплясывали', 4),
  imperativeInformal: Word('отплясывай', 4),
  imperativeFormal: Word('отплясывайте', 4),
  imperfect: [],
};

perfectVerbs.set(отплясывать.name.text, отплясывать);

export { отплясывать };