import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пришпиливать: PerfectVerb = {
  name: Word('пришпиливать', 5),
  singular1stPerson: Word('пришпиливаю', 5),
  singular2ndPerson: Word('пришпиливаешь', 5),
  singular3rdPerson: Word('пришпиливает', 5),
  plural1stPerson: Word('пришпиливаем', 5),
  plural2ndPerson: Word('пришпиливаете', 5),
  plural3rdPerson: Word('пришпиливают', 5),
  masculinePast: Word('пришпиливал', 5),
  femininePast: Word('пришпиливала', 5),
  neuterPast: Word('пришпиливало', 5),
  pluralPast: Word('пришпиливали', 5),
  imperativeInformal: Word('пришпиливай', 5),
  imperativeFormal: Word('пришпиливайте', 5),
  imperfect: [],
};

perfectVerbs.set(пришпиливать.name.text, пришпиливать);

export { пришпиливать };