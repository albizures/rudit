import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вычищать: PerfectVerb = {
  name: Word('вычищать', 5),
  singular1stPerson: Word('вычищаю', 5),
  singular2ndPerson: Word('вычищаешь', 5),
  singular3rdPerson: Word('вычищает', 5),
  plural1stPerson: Word('вычищаем', 5),
  plural2ndPerson: Word('вычищаете', 5),
  plural3rdPerson: Word('вычищают', 5),
  masculinePast: Word('вычищал', 5),
  femininePast: Word('вычищала', 5),
  neuterPast: Word('вычищало', 5),
  pluralPast: Word('вычищали', 5),
  imperativeInformal: Word('вычищай', 5),
  imperativeFormal: Word('вычищайте', 5),
  imperfect: [],
};

perfectVerbs.set(вычищать.name.text, вычищать);

export { вычищать };