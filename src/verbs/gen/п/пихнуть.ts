import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пихнуть: PerfectVerb = {
  name: Word('пихнуть', 4),
  singular1stPerson: Word('пихну', 4),
  singular2ndPerson: Word('пихнёшь', 4),
  singular3rdPerson: Word('пихнёт', 4),
  plural1stPerson: Word('пихнём', 4),
  plural2ndPerson: Word('пихнёте', 4),
  plural3rdPerson: Word('пихнут', 4),
  masculinePast: Word('пихнул', 4),
  femininePast: Word('пихнула', 4),
  neuterPast: Word('пихнуло', 4),
  pluralPast: Word('пихнули', 4),
  imperativeInformal: Word('пихни', 4),
  imperativeFormal: Word('пихните', 4),
  imperfect: [],
};

perfectVerbs.set(пихнуть.name.text, пихнуть);

export { пихнуть };