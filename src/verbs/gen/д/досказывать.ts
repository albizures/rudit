import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const досказывать: PerfectVerb = {
  name: Word('досказывать', 4),
  singular1stPerson: Word('досказываю', 4),
  singular2ndPerson: Word('досказываешь', 4),
  singular3rdPerson: Word('досказывает', 4),
  plural1stPerson: Word('досказываем', 4),
  plural2ndPerson: Word('досказываете', 4),
  plural3rdPerson: Word('досказывают', 4),
  masculinePast: Word('досказывал', 4),
  femininePast: Word('досказывала', 4),
  neuterPast: Word('досказывало', 4),
  pluralPast: Word('досказывали', 4),
  imperativeInformal: Word('досказывай', 4),
  imperativeFormal: Word('досказывайте', 4),
  imperfect: [],
};

perfectVerbs.set(досказывать.name.text, досказывать);

export { досказывать };