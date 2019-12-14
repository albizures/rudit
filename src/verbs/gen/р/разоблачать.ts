import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разоблачать: PerfectVerb = {
  name: Word('разоблачать', 8),
  singular1stPerson: Word('разоблачаю', 8),
  singular2ndPerson: Word('разоблачаешь', 8),
  singular3rdPerson: Word('разоблачает', 8),
  plural1stPerson: Word('разоблачаем', 8),
  plural2ndPerson: Word('разоблачаете', 8),
  plural3rdPerson: Word('разоблачают', 8),
  masculinePast: Word('разоблачал', 8),
  femininePast: Word('разоблачала', 8),
  neuterPast: Word('разоблачало', 8),
  pluralPast: Word('разоблачали', 8),
  imperativeInformal: Word('разоблачай', 8),
  imperativeFormal: Word('разоблачайте', 8),
  imperfect: [],
};

perfectVerbs.set(разоблачать.name.text, разоблачать);

export { разоблачать };