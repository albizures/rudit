import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const улучшать: PerfectVerb = {
  name: Word('улучшать', 5),
  singular1stPerson: Word('улучшаю', 5),
  singular2ndPerson: Word('улучшаешь', 5),
  singular3rdPerson: Word('улучшает', 5),
  plural1stPerson: Word('улучшаем', 5),
  plural2ndPerson: Word('улучшаете', 5),
  plural3rdPerson: Word('улучшают', 5),
  masculinePast: Word('улучшал', 5),
  femininePast: Word('улучшала', 5),
  neuterPast: Word('улучшало', 5),
  pluralPast: Word('улучшали', 5),
  imperativeInformal: Word('улучшай', 5),
  imperativeFormal: Word('улучшайте', 5),
  imperfect: ['улучшить'],
};

perfectVerbs.set(улучшать.name.text, улучшать);

export { улучшать };