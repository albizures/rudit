import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплюснуть: PerfectVerb = {
  name: Word('сплюснуть', 3),
  singular1stPerson: Word('сплюсну', 3),
  singular2ndPerson: Word('сплюснешь', 3),
  singular3rdPerson: Word('сплюснет', 3),
  plural1stPerson: Word('сплюснем', 3),
  plural2ndPerson: Word('сплюснете', 3),
  plural3rdPerson: Word('сплюснут', 3),
  masculinePast: Word('сплюснул', 3),
  femininePast: Word('сплюснула', 3),
  neuterPast: Word('сплюснуло', 3),
  pluralPast: Word('сплюснули', 3),
  imperativeInformal: Word('сплюсни', 3),
  imperativeFormal: Word('сплюсните', 3),
  imperfect: [],
};

perfectVerbs.set(сплюснуть.name.text, сплюснуть);

export { сплюснуть };