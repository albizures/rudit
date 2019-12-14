import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гнуть: PerfectVerb = {
  name: Word('гнуть', 2),
  singular1stPerson: Word('гну', 2),
  singular2ndPerson: Word('гнёшь', 2),
  singular3rdPerson: Word('гнёт', 2),
  plural1stPerson: Word('гнём', 2),
  plural2ndPerson: Word('гнёте', 4),
  plural3rdPerson: Word('гнут', 2),
  masculinePast: Word('гнул', 2),
  femininePast: Word('гнула', 2),
  neuterPast: Word('гнуло', 2),
  pluralPast: Word('гнули', 2),
  imperativeInformal: Word('гни', 2),
  imperativeFormal: Word('гните', 2),
  imperfect: ['согнуть'],
};

perfectVerbs.set(гнуть.name.text, гнуть);

export { гнуть };