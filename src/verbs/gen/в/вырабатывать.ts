import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырабатывать: PerfectVerb = {
  name: Word('вырабатывать', 5),
  singular1stPerson: Word('вырабатываю', 5),
  singular2ndPerson: Word('вырабатываешь', 5),
  singular3rdPerson: Word('вырабатывает', 5),
  plural1stPerson: Word('вырабатываем', 5),
  plural2ndPerson: Word('вырабатываете', 5),
  plural3rdPerson: Word('вырабатывают', 5),
  masculinePast: Word('вырабатывал', 5),
  femininePast: Word('вырабатывала', 5),
  neuterPast: Word('вырабатывало', 5),
  pluralPast: Word('вырабатывали', 5),
  imperativeInformal: Word('вырабатывай', 5),
  imperativeFormal: Word('вырабатывайте', 5),
  imperfect: [],
};

perfectVerbs.set(вырабатывать.name.text, вырабатывать);

export { вырабатывать };