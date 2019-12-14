import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омрачать: PerfectVerb = {
  name: Word('омрачать', 5),
  singular1stPerson: Word('омрачаю', 5),
  singular2ndPerson: Word('омрачаешь', 5),
  singular3rdPerson: Word('омрачает', 5),
  plural1stPerson: Word('омрачаем', 5),
  plural2ndPerson: Word('омрачаете', 5),
  plural3rdPerson: Word('омрачают', 5),
  masculinePast: Word('омрачал', 5),
  femininePast: Word('омрачала', 5),
  neuterPast: Word('омрачало', 5),
  pluralPast: Word('омрачали', 5),
  imperativeInformal: Word('омрачай', 5),
  imperativeFormal: Word('омрачайте', 5),
  imperfect: [],
};

perfectVerbs.set(омрачать.name.text, омрачать);

export { омрачать };