import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпугнуть: PerfectVerb = {
  name: Word('отпугнуть', 6),
  singular1stPerson: Word('отпугну', 6),
  singular2ndPerson: Word('отпугнёшь', 6),
  singular3rdPerson: Word('отпугнёт', 6),
  plural1stPerson: Word('отпугнём', 6),
  plural2ndPerson: Word('отпугнёте', 6),
  plural3rdPerson: Word('отпугнут', 6),
  masculinePast: Word('отпугнул', 6),
  femininePast: Word('отпугнула', 6),
  neuterPast: Word('отпугнуло', 6),
  pluralPast: Word('отпугнули', 6),
  imperativeInformal: Word('отпугни', 6),
  imperativeFormal: Word('отпугните', 6),
  imperfect: [],
};

perfectVerbs.set(отпугнуть.name.text, отпугнуть);

export { отпугнуть };