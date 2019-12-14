import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задуть: PerfectVerb = {
  name: Word('задуть', 3),
  singular1stPerson: Word('задую', 3),
  singular2ndPerson: Word('задуешь', 3),
  singular3rdPerson: Word('задует', 3),
  plural1stPerson: Word('задуем', 3),
  plural2ndPerson: Word('задуете', 3),
  plural3rdPerson: Word('задуют', 3),
  masculinePast: Word('задул', 3),
  femininePast: Word('задула', 3),
  neuterPast: Word('задуло', 3),
  pluralPast: Word('задули', 3),
  imperativeInformal: Word('задуй', 3),
  imperativeFormal: Word('задуйте', 3),
  imperfect: [],
};

perfectVerbs.set(задуть.name.text, задуть);

export { задуть };