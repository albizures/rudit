import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мелькнуть: PerfectVerb = {
  name: Word('мелькнуть', 6),
  singular1stPerson: Word('мелькну', 6),
  singular2ndPerson: Word('мелькнёшь', 6),
  singular3rdPerson: Word('мелькнёт', 6),
  plural1stPerson: Word('мелькнём', 6),
  plural2ndPerson: Word('мелькнёте', 6),
  plural3rdPerson: Word('мелькнут', 6),
  masculinePast: Word('мелькнул', 6),
  femininePast: Word('мелькнула', 6),
  neuterPast: Word('мелькнуло', 6),
  pluralPast: Word('мелькнули', 6),
  imperativeInformal: Word('мелькни', 6),
  imperativeFormal: Word('мелькните', 6),
  imperfect: ['мелькать'],
};

perfectVerbs.set(мелькнуть.name.text, мелькнуть);

export { мелькнуть };