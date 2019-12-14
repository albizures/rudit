import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заснуть: PerfectVerb = {
  name: Word('заснуть', 4),
  singular1stPerson: Word('засну', 4),
  singular2ndPerson: Word('заснёшь', 4),
  singular3rdPerson: Word('заснёт', 4),
  plural1stPerson: Word('заснём', 4),
  plural2ndPerson: Word('заснёте', 4),
  plural3rdPerson: Word('заснут', 4),
  masculinePast: Word('заснул', 4),
  femininePast: Word('заснула', 4),
  neuterPast: Word('заснуло', 4),
  pluralPast: Word('заснули', 4),
  imperativeInformal: Word('засни', 4),
  imperativeFormal: Word('засните', 4),
  imperfect: [],
};

perfectVerbs.set(заснуть.name.text, заснуть);

export { заснуть };