import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закидывать: PerfectVerb = {
  name: Word('закидывать', 3),
  singular1stPerson: Word('закидываю', 3),
  singular2ndPerson: Word('закидываешь', 3),
  singular3rdPerson: Word('закидывает', 3),
  plural1stPerson: Word('закидываем', 3),
  plural2ndPerson: Word('закидываете', 3),
  plural3rdPerson: Word('закидывают', 3),
  masculinePast: Word('закидывал', 3),
  femininePast: Word('закидывала', 3),
  neuterPast: Word('закидывало', 3),
  pluralPast: Word('закидывали', 3),
  imperativeInformal: Word('закидывай', 3),
  imperativeFormal: Word('закидывайте', 3),
  imperfect: [],
};

perfectVerbs.set(закидывать.name.text, закидывать);

export { закидывать };