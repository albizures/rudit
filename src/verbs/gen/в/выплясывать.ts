import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплясывать: PerfectVerb = {
  name: Word('выплясывать', 4),
  singular1stPerson: Word('выплясываю', 4),
  singular2ndPerson: Word('выплясываешь', 4),
  singular3rdPerson: Word('выплясывает', 4),
  plural1stPerson: Word('выплясываем', 4),
  plural2ndPerson: Word('выплясываете', 4),
  plural3rdPerson: Word('выплясывают', 4),
  masculinePast: Word('выплясывал', 4),
  femininePast: Word('выплясывала', 4),
  neuterPast: Word('выплясывало', 4),
  pluralPast: Word('выплясывали', 4),
  imperativeInformal: Word('выплясывай', 4),
  imperativeFormal: Word('выплясывайте', 4),
  imperfect: [],
};

perfectVerbs.set(выплясывать.name.text, выплясывать);

export { выплясывать };