import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозябнуть: PerfectVerb = {
  name: Word('прозябнуть', 4),
  singular1stPerson: Word('прозябну', 4),
  singular2ndPerson: Word('прозябнешь', 4),
  singular3rdPerson: Word('прозябнет', 4),
  plural1stPerson: Word('прозябнем', 4),
  plural2ndPerson: Word('прозябнете', 4),
  plural3rdPerson: Word('прозябнут', 4),
  masculinePast: Word('прозяб', 4),
  femininePast: Word('прозябла', 4),
  neuterPast: Word('прозябло', 4),
  pluralPast: Word('прозябли', 4),
  imperativeInformal: Word('прозябни', 4),
  imperativeFormal: Word('прозябните', 4),
  imperfect: [],
};

perfectVerbs.set(прозябнуть.name.text, прозябнуть);

export { прозябнуть };