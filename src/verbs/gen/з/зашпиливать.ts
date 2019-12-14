import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашпиливать: PerfectVerb = {
  name: Word('зашпиливать', 4),
  singular1stPerson: Word('зашпиливаю', 4),
  singular2ndPerson: Word('зашпиливаешь', 4),
  singular3rdPerson: Word('зашпиливает', 4),
  plural1stPerson: Word('зашпиливаем', 4),
  plural2ndPerson: Word('зашпиливаете', 4),
  plural3rdPerson: Word('зашпиливают', 4),
  masculinePast: Word('зашпиливал', 4),
  femininePast: Word('зашпиливала', 4),
  neuterPast: Word('зашпиливало', 4),
  pluralPast: Word('зашпиливали', 4),
  imperativeInformal: Word('зашпиливай', 4),
  imperativeFormal: Word('зашпиливайте', 4),
  imperfect: [],
};

perfectVerbs.set(зашпиливать.name.text, зашпиливать);

export { зашпиливать };