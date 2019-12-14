import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возделывать: PerfectVerb = {
  name: Word('возделывать', 4),
  singular1stPerson: Word('возделываю', 4),
  singular2ndPerson: Word('возделываешь', 4),
  singular3rdPerson: Word('возделывает', 4),
  plural1stPerson: Word('возделываем', 4),
  plural2ndPerson: Word('возделываете', 4),
  plural3rdPerson: Word('возделывают', 4),
  masculinePast: Word('возделывал', 4),
  femininePast: Word('возделывала', 4),
  neuterPast: Word('возделывало', 4),
  pluralPast: Word('возделывали', 4),
  imperativeInformal: Word('возделывай', 4),
  imperativeFormal: Word('возделывайте', 4),
  imperfect: [],
};

perfectVerbs.set(возделывать.name.text, возделывать);

export { возделывать };