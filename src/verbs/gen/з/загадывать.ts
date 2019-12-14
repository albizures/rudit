import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загадывать: PerfectVerb = {
  name: Word('загадывать', 3),
  singular1stPerson: Word('загадываю', 3),
  singular2ndPerson: Word('загадываешь', 3),
  singular3rdPerson: Word('загадывает', 3),
  plural1stPerson: Word('загадываем', 3),
  plural2ndPerson: Word('загадываете', 3),
  plural3rdPerson: Word('загадывают', 3),
  masculinePast: Word('загадывал', 3),
  femininePast: Word('загадывала', 3),
  neuterPast: Word('загадывало', 3),
  pluralPast: Word('загадывали', 3),
  imperativeInformal: Word('загадывай', 3),
  imperativeFormal: Word('загадывайте', 3),
  imperfect: [],
};

perfectVerbs.set(загадывать.name.text, загадывать);

export { загадывать };