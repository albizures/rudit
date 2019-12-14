import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возрастать: PerfectVerb = {
  name: Word('возрастать', 7),
  singular1stPerson: Word('возрастаю', 7),
  singular2ndPerson: Word('возрастаешь', 7),
  singular3rdPerson: Word('возрастает', 7),
  plural1stPerson: Word('возрастаем', 7),
  plural2ndPerson: Word('возрастаете', 7),
  plural3rdPerson: Word('возрастают', 7),
  masculinePast: Word('возрастал', 7),
  femininePast: Word('возрастала', 7),
  neuterPast: Word('возрастало', 7),
  pluralPast: Word('возрастали', 7),
  imperativeInformal: Word('возрастай', 7),
  imperativeFormal: Word('возрастайте', 7),
  imperfect: ['возрасти'],
};

perfectVerbs.set(возрастать.name.text, возрастать);

export { возрастать };