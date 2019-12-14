import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скидывать: PerfectVerb = {
  name: Word('скидывать', 2),
  singular1stPerson: Word('скидываю', 2),
  singular2ndPerson: Word('скидываешь', 2),
  singular3rdPerson: Word('скидывает', 2),
  plural1stPerson: Word('скидываем', 2),
  plural2ndPerson: Word('скидываете', 2),
  plural3rdPerson: Word('скидывают', 2),
  masculinePast: Word('скидывал', 2),
  femininePast: Word('скидывала', 2),
  neuterPast: Word('скидывало', 2),
  pluralPast: Word('скидывали', 2),
  imperativeInformal: Word('скидывай', 2),
  imperativeFormal: Word('скидывайте', 2),
  imperfect: [],
};

perfectVerbs.set(скидывать.name.text, скидывать);

export { скидывать };