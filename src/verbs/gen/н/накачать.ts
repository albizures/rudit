import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накачать: PerfectVerb = {
  name: Word('накачать', 5),
  singular1stPerson: Word('накачаю', 5),
  singular2ndPerson: Word('накачаешь', 5),
  singular3rdPerson: Word('накачает', 5),
  plural1stPerson: Word('накачаем', 5),
  plural2ndPerson: Word('накачаете', 5),
  plural3rdPerson: Word('накачают', 5),
  masculinePast: Word('накачал', 5),
  femininePast: Word('накачала', 5),
  neuterPast: Word('накачало', 5),
  pluralPast: Word('накачали', 5),
  imperativeInformal: Word('накачай', 5),
  imperativeFormal: Word('накачайте', 5),
  imperfect: [],
};

perfectVerbs.set(накачать.name.text, накачать);

export { накачать };