import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const награбастать: PerfectVerb = {
  name: Word('награбастать', 6),
  singular1stPerson: Word('награбастаю', 6),
  singular2ndPerson: Word('награбастаешь', 6),
  singular3rdPerson: Word('награбастает', 6),
  plural1stPerson: Word('награбастаем', 6),
  plural2ndPerson: Word('награбастаете', 6),
  plural3rdPerson: Word('награбастают', 6),
  masculinePast: Word('награбастал', 6),
  femininePast: Word('награбастала', 6),
  neuterPast: Word('награбастало', 6),
  pluralPast: Word('награбастали', 6),
  imperativeInformal: Word('награбастай', 6),
  imperativeFormal: Word('награбастайте', 6),
  imperfect: [],
};

perfectVerbs.set(награбастать.name.text, награбастать);

export { награбастать };