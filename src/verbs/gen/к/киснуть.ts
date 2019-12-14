import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const киснуть: PerfectVerb = {
  name: Word('киснуть', 1),
  singular1stPerson: Word('кисну', 1),
  singular2ndPerson: Word('киснешь', 1),
  singular3rdPerson: Word('киснет', 1),
  plural1stPerson: Word('киснем', 1),
  plural2ndPerson: Word('киснете', 1),
  plural3rdPerson: Word('киснут', 1),
  masculinePast: Word('кис//ки'снул', 1),
  femininePast: Word('кисла', 1),
  neuterPast: Word('кисло', 1),
  pluralPast: Word('кисли', 1),
  imperativeInformal: Word('кисни', 1),
  imperativeFormal: Word('кисните', 1),
  imperfect: [],
};

perfectVerbs.set(киснуть.name.text, киснуть);

export { киснуть };