import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкидывать: PerfectVerb = {
  name: Word('выкидывать', 3),
  singular1stPerson: Word('выкидываю', 3),
  singular2ndPerson: Word('выкидываешь', 3),
  singular3rdPerson: Word('выкидывает', 3),
  plural1stPerson: Word('выкидываем', 3),
  plural2ndPerson: Word('выкидываете', 3),
  plural3rdPerson: Word('выкидывают', 3),
  masculinePast: Word('выкидывал', 3),
  femininePast: Word('выкидывала', 3),
  neuterPast: Word('выкидывало', 3),
  pluralPast: Word('выкидывали', 3),
  imperativeInformal: Word('выкидывай', 3),
  imperativeFormal: Word('выкидывайте', 3),
  imperfect: [],
};

perfectVerbs.set(выкидывать.name.text, выкидывать);

export { выкидывать };