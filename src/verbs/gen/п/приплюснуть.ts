import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приплюснуть: PerfectVerb = {
  name: Word('приплюснуть', 5),
  singular1stPerson: Word('приплюсну', 5),
  singular2ndPerson: Word('приплюснешь', 5),
  singular3rdPerson: Word('приплюснет', 5),
  plural1stPerson: Word('приплюснем', 5),
  plural2ndPerson: Word('приплюснете', 5),
  plural3rdPerson: Word('приплюснут', 5),
  masculinePast: Word('приплюснул', 5),
  femininePast: Word('приплюснула', 5),
  neuterPast: Word('приплюснуло', 5),
  pluralPast: Word('приплюснули', 5),
  imperativeInformal: Word('приплюсни', 5),
  imperativeFormal: Word('приплюсните', 5),
  imperfect: [],
};

perfectVerbs.set(приплюснуть.name.text, приплюснуть);

export { приплюснуть };