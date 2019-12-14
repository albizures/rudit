import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрастать: PerfectVerb = {
  name: Word('отрастать', 6),
  singular1stPerson: Word('отрастаю', 6),
  singular2ndPerson: Word('отрастаешь', 6),
  singular3rdPerson: Word('отрастает', 6),
  plural1stPerson: Word('отрастаем', 6),
  plural2ndPerson: Word('отрастаете', 6),
  plural3rdPerson: Word('отрастают', 6),
  masculinePast: Word('отрастал', 6),
  femininePast: Word('отрастала', 6),
  neuterPast: Word('отрастало', 6),
  pluralPast: Word('отрастали', 6),
  imperativeInformal: Word('отрастай', 6),
  imperativeFormal: Word('отрастайте', 6),
  imperfect: [],
};

perfectVerbs.set(отрастать.name.text, отрастать);

export { отрастать };