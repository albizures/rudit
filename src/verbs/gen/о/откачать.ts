import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откачать: PerfectVerb = {
  name: Word('откачать', 5),
  singular1stPerson: Word('откачаю', 5),
  singular2ndPerson: Word('откачаешь', 5),
  singular3rdPerson: Word('откачает', 5),
  plural1stPerson: Word('откачаем', 5),
  plural2ndPerson: Word('откачаете', 5),
  plural3rdPerson: Word('откачают', 5),
  masculinePast: Word('откачал', 5),
  femininePast: Word('откачала', 5),
  neuterPast: Word('откачало', 5),
  pluralPast: Word('откачали', 5),
  imperativeInformal: Word('откачай', 5),
  imperativeFormal: Word('откачайте', 5),
  imperfect: [],
};

perfectVerbs.set(откачать.name.text, откачать);

export { откачать };