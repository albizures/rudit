import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заграбастать: PerfectVerb = {
  name: Word('заграбастать', 6),
  singular1stPerson: Word('заграбастаю', 6),
  singular2ndPerson: Word('заграбастаешь', 6),
  singular3rdPerson: Word('заграбастает', 6),
  plural1stPerson: Word('заграбастаем', 6),
  plural2ndPerson: Word('заграбастаете', 6),
  plural3rdPerson: Word('заграбастают', 6),
  masculinePast: Word('заграбастал', 6),
  femininePast: Word('заграбастала', 6),
  neuterPast: Word('заграбастало', 6),
  pluralPast: Word('заграбастали', 6),
  imperativeInformal: Word('заграбастай', 6),
  imperativeFormal: Word('заграбастайте', 6),
  imperfect: [],
};

perfectVerbs.set(заграбастать.name.text, заграбастать);

export { заграбастать };