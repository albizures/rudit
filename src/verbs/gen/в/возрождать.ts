import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возрождать: PerfectVerb = {
  name: Word('возрождать', 7),
  singular1stPerson: Word('возрождаю', 7),
  singular2ndPerson: Word('возрождаешь', 7),
  singular3rdPerson: Word('возрождает', 7),
  plural1stPerson: Word('возрождаем', 7),
  plural2ndPerson: Word('возрождаете', 7),
  plural3rdPerson: Word('возрождают', 7),
  masculinePast: Word('возрождал', 7),
  femininePast: Word('возрождала', 7),
  neuterPast: Word('возрождало', 7),
  pluralPast: Word('возрождали', 7),
  imperativeInformal: Word('возрождай', 7),
  imperativeFormal: Word('возрождайте', 7),
  imperfect: ['возродить'],
};

perfectVerbs.set(возрождать.name.text, возрождать);

export { возрождать };