import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задирать: PerfectVerb = {
  name: Word('задирать', 5),
  singular1stPerson: Word('задираю', 5),
  singular2ndPerson: Word('задираешь', 5),
  singular3rdPerson: Word('задирает', 5),
  plural1stPerson: Word('задираем', 5),
  plural2ndPerson: Word('задираете', 5),
  plural3rdPerson: Word('задирают', 5),
  masculinePast: Word('задирал', 5),
  femininePast: Word('задирала', 5),
  neuterPast: Word('задирало', 5),
  pluralPast: Word('задирали', 5),
  imperativeInformal: Word('задирай', 5),
  imperativeFormal: Word('задирайте', 5),
  imperfect: [],
};

perfectVerbs.set(задирать.name.text, задирать);

export { задирать };