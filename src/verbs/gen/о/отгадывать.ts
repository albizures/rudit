import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгадывать: PerfectVerb = {
  name: Word('отгадывать', 3),
  singular1stPerson: Word('отгадываю', 3),
  singular2ndPerson: Word('отгадываешь', 3),
  singular3rdPerson: Word('отгадывает', 3),
  plural1stPerson: Word('отгадываем', 3),
  plural2ndPerson: Word('отгадываете', 3),
  plural3rdPerson: Word('отгадывают', 3),
  masculinePast: Word('отгадывал', 3),
  femininePast: Word('отгадывала', 3),
  neuterPast: Word('отгадывало', 3),
  pluralPast: Word('отгадывали', 3),
  imperativeInformal: Word('отгадывай', 3),
  imperativeFormal: Word('отгадывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отгадывать.name.text, отгадывать);

export { отгадывать };