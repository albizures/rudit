import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прирастать: PerfectVerb = {
  name: Word('прирастать', 7),
  singular1stPerson: Word('прирастаю', 7),
  singular2ndPerson: Word('прирастаешь', 7),
  singular3rdPerson: Word('прирастает', 7),
  plural1stPerson: Word('прирастаем', 7),
  plural2ndPerson: Word('прирастаете', 7),
  plural3rdPerson: Word('прирастают', 7),
  masculinePast: Word('прирастал', 7),
  femininePast: Word('прирастала', 7),
  neuterPast: Word('прирастало', 7),
  pluralPast: Word('прирастали', 7),
  imperativeInformal: Word('прирастай', 7),
  imperativeFormal: Word('прирастайте', 7),
  imperfect: [],
};

perfectVerbs.set(прирастать.name.text, прирастать);

export { прирастать };