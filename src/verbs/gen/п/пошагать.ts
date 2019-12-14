import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошагать: PerfectVerb = {
  name: Word('пошагать', 5),
  singular1stPerson: Word('пошагаю', 5),
  singular2ndPerson: Word('пошагаешь', 5),
  singular3rdPerson: Word('пошагает', 5),
  plural1stPerson: Word('пошагаем', 5),
  plural2ndPerson: Word('пошагаете', 5),
  plural3rdPerson: Word('пошагают', 5),
  masculinePast: Word('пошагал', 5),
  femininePast: Word('пошагала', 5),
  neuterPast: Word('пошагало', 5),
  pluralPast: Word('пошагали', 5),
  imperativeInformal: Word('пошагай', 5),
  imperativeFormal: Word('пошагайте', 5),
  imperfect: [],
};

perfectVerbs.set(пошагать.name.text, пошагать);

export { пошагать };