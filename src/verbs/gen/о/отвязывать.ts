import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвязывать: PerfectVerb = {
  name: Word('отвязывать', 3),
  singular1stPerson: Word('отвязываю', 3),
  singular2ndPerson: Word('отвязываешь', 3),
  singular3rdPerson: Word('отвязывает', 3),
  plural1stPerson: Word('отвязываем', 3),
  plural2ndPerson: Word('отвязываете', 3),
  plural3rdPerson: Word('отвязывают', 3),
  masculinePast: Word('отвязывал', 3),
  femininePast: Word('отвязывала', 3),
  neuterPast: Word('отвязывало', 3),
  pluralPast: Word('отвязывали', 3),
  imperativeInformal: Word('отвязывай', 3),
  imperativeFormal: Word('отвязывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отвязывать.name.text, отвязывать);

export { отвязывать };