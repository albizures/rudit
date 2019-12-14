import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const булькнуть: PerfectVerb = {
  name: Word('булькнуть', 1),
  singular1stPerson: Word('булькну', 1),
  singular2ndPerson: Word('булькнешь', 1),
  singular3rdPerson: Word('булькнет', 1),
  plural1stPerson: Word('булькнем', 1),
  plural2ndPerson: Word('булькнете', 1),
  plural3rdPerson: Word('булькнут', 1),
  masculinePast: Word('булькнул', 1),
  femininePast: Word('булькнула', 1),
  neuterPast: Word('булькнуло', 1),
  pluralPast: Word('булькнули', 1),
  imperativeInformal: Word('булькни', 1),
  imperativeFormal: Word('булькните', 1),
  imperfect: [],
};

perfectVerbs.set(булькнуть.name.text, булькнуть);

export { булькнуть };