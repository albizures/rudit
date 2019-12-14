import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ополоснуть: PerfectVerb = {
  name: Word('ополоснуть', 7),
  singular1stPerson: Word('ополосну', 7),
  singular2ndPerson: Word('ополоснёшь', 7),
  singular3rdPerson: Word('ополоснёт', 7),
  plural1stPerson: Word('ополоснём', 7),
  plural2ndPerson: Word('ополоснёте', 7),
  plural3rdPerson: Word('ополоснут', 7),
  masculinePast: Word('ополоснул', 7),
  femininePast: Word('ополоснула', 7),
  neuterPast: Word('ополоснуло', 7),
  pluralPast: Word('ополоснули', 7),
  imperativeInformal: Word('ополосни', 7),
  imperativeFormal: Word('ополосните', 7),
  imperfect: [],
};

perfectVerbs.set(ополоснуть.name.text, ополоснуть);

export { ополоснуть };