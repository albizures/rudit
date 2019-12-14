import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облагать: PerfectVerb = {
  name: Word('облагать', 5),
  singular1stPerson: Word('облагаю', 5),
  singular2ndPerson: Word('облагаешь', 5),
  singular3rdPerson: Word('облагает', 5),
  plural1stPerson: Word('облагаем', 5),
  plural2ndPerson: Word('облагаете', 5),
  plural3rdPerson: Word('облагают', 5),
  masculinePast: Word('облагал', 5),
  femininePast: Word('облагала', 5),
  neuterPast: Word('облагало', 5),
  pluralPast: Word('облагали', 5),
  imperativeInformal: Word('облагай', 5),
  imperativeFormal: Word('облагайте', 5),
  imperfect: ['обложить'],
};

perfectVerbs.set(облагать.name.text, облагать);

export { облагать };