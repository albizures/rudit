import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уснуть: PerfectVerb = {
  name: Word('уснуть', 3),
  singular1stPerson: Word('усну', 3),
  singular2ndPerson: Word('уснёшь', 0),
  singular3rdPerson: Word('уснёт', 0),
  plural1stPerson: Word('уснём', 0),
  plural2ndPerson: Word('уснёте', 5),
  plural3rdPerson: Word('уснут', 3),
  masculinePast: Word('уснул', 3),
  femininePast: Word('уснула', 3),
  neuterPast: Word('уснуло', 3),
  pluralPast: Word('уснули', 3),
  imperativeInformal: Word('усни', 3),
  imperativeFormal: Word('усните', 3),
  imperfect: [],
};

perfectVerbs.set(уснуть.name.text, уснуть);

export { уснуть };