import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сграбастать: PerfectVerb = {
  name: Word('сграбастать', 5),
  singular1stPerson: Word('сграбастаю', 5),
  singular2ndPerson: Word('сграбастаешь', 5),
  singular3rdPerson: Word('сграбастает', 5),
  plural1stPerson: Word('сграбастаем', 5),
  plural2ndPerson: Word('сграбастаете', 5),
  plural3rdPerson: Word('сграбастают', 5),
  masculinePast: Word('сграбастал', 5),
  femininePast: Word('сграбастала', 5),
  neuterPast: Word('сграбастало', 5),
  pluralPast: Word('сграбастали', 5),
  imperativeInformal: Word('сграбастай', 5),
  imperativeFormal: Word('сграбастайте', 5),
  imperfect: [],
};

perfectVerbs.set(сграбастать.name.text, сграбастать);

export { сграбастать };