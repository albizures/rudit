import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужаснуть: PerfectVerb = {
  name: Word('ужаснуть', 5),
  singular1stPerson: Word('ужасну', 5),
  singular2ndPerson: Word('ужаснёшь', 5),
  singular3rdPerson: Word('ужаснёт', 5),
  plural1stPerson: Word('ужаснём', 5),
  plural2ndPerson: Word('ужаснёте', 5),
  plural3rdPerson: Word('ужаснут', 5),
  masculinePast: Word('ужаснул', 5),
  femininePast: Word('ужаснула', 5),
  neuterPast: Word('ужаснуло', 5),
  pluralPast: Word('ужаснули', 5),
  imperativeInformal: Word('ужасни', 5),
  imperativeFormal: Word('ужасните', 5),
  imperfect: ['ужасать'],
};

perfectVerbs.set(ужаснуть.name.text, ужаснуть);

export { ужаснуть };