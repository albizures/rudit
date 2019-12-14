import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приплясывать: PerfectVerb = {
  name: Word('приплясывать', 5),
  singular1stPerson: Word('приплясываю', 5),
  singular2ndPerson: Word('приплясываешь', 5),
  singular3rdPerson: Word('приплясывает', 5),
  plural1stPerson: Word('приплясываем', 5),
  plural2ndPerson: Word('приплясываете', 5),
  plural3rdPerson: Word('приплясывают', 5),
  masculinePast: Word('приплясывал', 5),
  femininePast: Word('приплясывала', 5),
  neuterPast: Word('приплясывало', 5),
  pluralPast: Word('приплясывали', 5),
  imperativeInformal: Word('приплясывай', 5),
  imperativeFormal: Word('приплясывайте', 5),
  imperfect: [],
};

perfectVerbs.set(приплясывать.name.text, приплясывать);

export { приплясывать };