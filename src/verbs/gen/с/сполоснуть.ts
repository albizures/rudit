import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сполоснуть: PerfectVerb = {
  name: Word('сполоснуть', 7),
  singular1stPerson: Word('сполосну', 7),
  singular2ndPerson: Word('сполоснёшь', 7),
  singular3rdPerson: Word('сполоснёт', 7),
  plural1stPerson: Word('сполоснём', 7),
  plural2ndPerson: Word('сполоснёте', 7),
  plural3rdPerson: Word('сполоснут', 7),
  masculinePast: Word('сполоснул', 7),
  femininePast: Word('сполоснула', 7),
  neuterPast: Word('сполоснуло', 7),
  pluralPast: Word('сполоснули', 7),
  imperativeInformal: Word('сполосни', 7),
  imperativeFormal: Word('сполосните', 7),
  imperfect: [],
};

perfectVerbs.set(сполоснуть.name.text, сполоснуть);

export { сполоснуть };