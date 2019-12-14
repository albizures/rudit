import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const виснуть: PerfectVerb = {
  name: Word('виснуть', 1),
  singular1stPerson: Word('висну', 1),
  singular2ndPerson: Word('виснешь', 1),
  singular3rdPerson: Word('виснет', 1),
  plural1stPerson: Word('виснем', 1),
  plural2ndPerson: Word('виснете', 1),
  plural3rdPerson: Word('виснут', 1),
  masculinePast: Word('вис//ви'снул', 1),
  femininePast: Word('висла', 1),
  neuterPast: Word('висло', 1),
  pluralPast: Word('висли', 1),
  imperativeInformal: Word('висни', 1),
  imperativeFormal: Word('висните', 1),
  imperfect: [],
};

perfectVerbs.set(виснуть.name.text, виснуть);

export { виснуть };