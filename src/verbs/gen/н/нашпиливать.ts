import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нашпиливать: PerfectVerb = {
  name: Word('нашпиливать', 4),
  singular1stPerson: Word('нашпиливаю', 4),
  singular2ndPerson: Word('нашпиливаешь', 4),
  singular3rdPerson: Word('нашпиливает', 4),
  plural1stPerson: Word('нашпиливаем', 4),
  plural2ndPerson: Word('нашпиливаете', 4),
  plural3rdPerson: Word('нашпиливают', 4),
  masculinePast: Word('нашпиливал', 4),
  femininePast: Word('нашпиливала', 4),
  neuterPast: Word('нашпиливало', 4),
  pluralPast: Word('нашпиливали', 4),
  imperativeInformal: Word('нашпиливай', 4),
  imperativeFormal: Word('нашпиливайте', 4),
  imperfect: [],
};

perfectVerbs.set(нашпиливать.name.text, нашпиливать);

export { нашпиливать };