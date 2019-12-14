import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашагать: PerfectVerb = {
  name: Word('зашагать', 5),
  singular1stPerson: Word('зашагаю', 5),
  singular2ndPerson: Word('зашагаешь', 5),
  singular3rdPerson: Word('зашагает', 5),
  plural1stPerson: Word('зашагаем', 5),
  plural2ndPerson: Word('зашагаете', 5),
  plural3rdPerson: Word('зашагают', 5),
  masculinePast: Word('зашагал', 5),
  femininePast: Word('зашагала', 5),
  neuterPast: Word('зашагало', 5),
  pluralPast: Word('зашагали', 5),
  imperativeInformal: Word('зашагай', 5),
  imperativeFormal: Word('зашагайте', 5),
  imperfect: [],
};

perfectVerbs.set(зашагать.name.text, зашагать);

export { зашагать };