import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промелькнуть: PerfectVerb = {
  name: Word('промелькнуть', 9),
  singular1stPerson: Word('промелькну', 9),
  singular2ndPerson: Word('промелькнёшь', 4),
  singular3rdPerson: Word('промелькнёт', 4),
  plural1stPerson: Word('промелькнём', 4),
  plural2ndPerson: Word('промелькнёте', 4),
  plural3rdPerson: Word('промелькнут', 9),
  masculinePast: Word('промелькнул', 9),
  femininePast: Word('промелькнула', 9),
  neuterPast: Word('промелькнуло', 9),
  pluralPast: Word('промелькнули', 9),
  imperativeInformal: Word('промелькни', 9),
  imperativeFormal: Word('промелькните', 9),
  imperfect: [],
};

perfectVerbs.set(промелькнуть.name.text, промелькнуть);

export { промелькнуть };