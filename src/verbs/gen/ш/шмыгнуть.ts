import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шмыгнуть: PerfectVerb = {
  name: Word('шмыгнуть', 5),
  singular1stPerson: Word('шмыгну', 5),
  singular2ndPerson: Word('шмыгнёшь', 5),
  singular3rdPerson: Word('шмыгнёт', 5),
  plural1stPerson: Word('шмыгнём', 5),
  plural2ndPerson: Word('шмыгнёте', 5),
  plural3rdPerson: Word('шмыгнут', 5),
  masculinePast: Word('шмыгнул', 5),
  femininePast: Word('шмыгнула', 5),
  neuterPast: Word('шмыгнуло', 5),
  pluralPast: Word('шмыгнули', 5),
  imperativeInformal: Word('шмыгни', 5),
  imperativeFormal: Word('шмыгните', 5),
  imperfect: [],
};

perfectVerbs.set(шмыгнуть.name.text, шмыгнуть);

export { шмыгнуть };