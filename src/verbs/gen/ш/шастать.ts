import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шастать: PerfectVerb = {
  name: Word('шастать', 1),
  singular1stPerson: Word('шастаю', 1),
  singular2ndPerson: Word('шастаешь', 1),
  singular3rdPerson: Word('шастает', 1),
  plural1stPerson: Word('шастаем', 1),
  plural2ndPerson: Word('шастаете', 1),
  plural3rdPerson: Word('шастают', 1),
  masculinePast: Word('шастал', 1),
  femininePast: Word('шастала', 1),
  neuterPast: Word('шастало', 1),
  pluralPast: Word('шастали', 1),
  imperativeInformal: Word('шастай', 1),
  imperativeFormal: Word('шастайте', 1),
  imperfect: [],
};

perfectVerbs.set(шастать.name.text, шастать);

export { шастать };