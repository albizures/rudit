import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отпихнуть: PerfectVerb = {
  name: Word('отпихнуть', 6),
  singular1stPerson: Word('отпихну', 6),
  singular2ndPerson: Word('отпихнёшь', 6),
  singular3rdPerson: Word('отпихнёт', 6),
  plural1stPerson: Word('отпихнём', 6),
  plural2ndPerson: Word('отпихнёте', 6),
  plural3rdPerson: Word('отпихнут', 6),
  masculinePast: Word('отпихнул', 6),
  femininePast: Word('отпихнула', 6),
  neuterPast: Word('отпихнуло', 6),
  pluralPast: Word('отпихнули', 6),
  imperativeInformal: Word('отпихни', 6),
  imperativeFormal: Word('отпихните', 6),
  imperfect: [],
};

perfectVerbs.set(отпихнуть.name.text, отпихнуть);

export { отпихнуть };