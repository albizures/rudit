import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облезать: PerfectVerb = {
  name: Word('облезать', 5),
  singular1stPerson: Word('облезаю', 5),
  singular2ndPerson: Word('облезаешь', 5),
  singular3rdPerson: Word('облезает', 5),
  plural1stPerson: Word('облезаем', 5),
  plural2ndPerson: Word('облезаете', 5),
  plural3rdPerson: Word('облезают', 5),
  masculinePast: Word('облезал', 5),
  femininePast: Word('облезала', 5),
  neuterPast: Word('облезало', 5),
  pluralPast: Word('облезали', 5),
  imperativeInformal: Word('облезай', 5),
  imperativeFormal: Word('облезайте', 5),
  imperfect: [],
};

perfectVerbs.set(облезать.name.text, облезать);

export { облезать };