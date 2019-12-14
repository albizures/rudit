import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пальнуть: PerfectVerb = {
  name: Word('пальнуть', 5),
  singular1stPerson: Word('пальну', 5),
  singular2ndPerson: Word('пальнёшь', 5),
  singular3rdPerson: Word('пальнёт', 5),
  plural1stPerson: Word('пальнём', 5),
  plural2ndPerson: Word('пальнёте', 5),
  plural3rdPerson: Word('пальнут', 5),
  masculinePast: Word('пальнул', 5),
  femininePast: Word('пальнула', 5),
  neuterPast: Word('пальнуло', 5),
  pluralPast: Word('пальнули', 5),
  imperativeInformal: Word('пальни', 5),
  imperativeFormal: Word('пальните', 5),
  imperfect: [],
};

perfectVerbs.set(пальнуть.name.text, пальнуть);

export { пальнуть };