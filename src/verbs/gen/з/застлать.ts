import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застлать: PerfectVerb = {
  name: Word('застлать', 5),
  singular1stPerson: Word('застелю', 6),
  singular2ndPerson: Word('застелешь', 4),
  singular3rdPerson: Word('застелет', 4),
  plural1stPerson: Word('застелем', 4),
  plural2ndPerson: Word('застелете', 4),
  plural3rdPerson: Word('застелют', 4),
  masculinePast: Word('застлал', 5),
  femininePast: Word('застлала', 5),
  neuterPast: Word('застлало', 5),
  pluralPast: Word('застлали', 5),
  imperativeInformal: Word('застели', 6),
  imperativeFormal: Word('застелите', 6),
  imperfect: [],
};

perfectVerbs.set(застлать.name.text, застлать);

export { застлать };