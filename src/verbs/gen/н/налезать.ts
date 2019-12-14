import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налезать: PerfectVerb = {
  name: Word('налезать', 5),
  singular1stPerson: Word('налезаю', 5),
  singular2ndPerson: Word('налезаешь', 5),
  singular3rdPerson: Word('налезает', 5),
  plural1stPerson: Word('налезаем', 5),
  plural2ndPerson: Word('налезаете', 5),
  plural3rdPerson: Word('налезают', 5),
  masculinePast: Word('налезал', 5),
  femininePast: Word('налезала', 5),
  neuterPast: Word('налезало', 5),
  pluralPast: Word('налезали', 5),
  imperativeInformal: Word('налезай', 5),
  imperativeFormal: Word('налезайте', 5),
  imperfect: [],
};

perfectVerbs.set(налезать.name.text, налезать);

export { налезать };