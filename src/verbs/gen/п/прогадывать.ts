import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогадывать: PerfectVerb = {
  name: Word('прогадывать', 4),
  singular1stPerson: Word('прогадываю', 4),
  singular2ndPerson: Word('прогадываешь', 4),
  singular3rdPerson: Word('прогадывает', 4),
  plural1stPerson: Word('прогадываем', 4),
  plural2ndPerson: Word('прогадываете', 4),
  plural3rdPerson: Word('прогадывают', 4),
  masculinePast: Word('прогадывал', 4),
  femininePast: Word('прогадывала', 4),
  neuterPast: Word('прогадывало', 4),
  pluralPast: Word('прогадывали', 4),
  imperativeInformal: Word('прогадывай', 4),
  imperativeFormal: Word('прогадывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прогадывать.name.text, прогадывать);

export { прогадывать };