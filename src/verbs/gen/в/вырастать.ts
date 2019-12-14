import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырастать: PerfectVerb = {
  name: Word('вырастать', 6),
  singular1stPerson: Word('вырастаю', 6),
  singular2ndPerson: Word('вырастаешь', 6),
  singular3rdPerson: Word('вырастает', 6),
  plural1stPerson: Word('вырастаем', 6),
  plural2ndPerson: Word('вырастаете', 6),
  plural3rdPerson: Word('вырастают', 6),
  masculinePast: Word('вырастал', 6),
  femininePast: Word('вырастала', 6),
  neuterPast: Word('вырастало', 6),
  pluralPast: Word('вырастали', 6),
  imperativeInformal: Word('вырастай', 6),
  imperativeFormal: Word('вырастайте', 6),
  imperfect: [],
};

perfectVerbs.set(вырастать.name.text, вырастать);

export { вырастать };