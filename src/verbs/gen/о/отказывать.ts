import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отказывать: PerfectVerb = {
  name: Word('отказывать', 3),
  singular1stPerson: Word('отказываю', 3),
  singular2ndPerson: Word('отказываешь', 3),
  singular3rdPerson: Word('отказывает', 3),
  plural1stPerson: Word('отказываем', 3),
  plural2ndPerson: Word('отказываете', 3),
  plural3rdPerson: Word('отказывают', 3),
  masculinePast: Word('отказывал', 3),
  femininePast: Word('отказывала', 3),
  neuterPast: Word('отказывало', 3),
  pluralPast: Word('отказывали', 3),
  imperativeInformal: Word('отказывай', 3),
  imperativeFormal: Word('отказывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отказывать.name.text, отказывать);

export { отказывать };