import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вышвырнуть: PerfectVerb = {
  name: Word('вышвырнуть', 1),
  singular1stPerson: Word('вышвырну', 1),
  singular2ndPerson: Word('вышвырнешь', 1),
  singular3rdPerson: Word('вышвырнет', 1),
  plural1stPerson: Word('вышвырнем', 1),
  plural2ndPerson: Word('вышвырнете', 1),
  plural3rdPerson: Word('вышвырнут', 1),
  masculinePast: Word('вышвырнул', 1),
  femininePast: Word('вышвырнула', 1),
  neuterPast: Word('вышвырнуло', 1),
  pluralPast: Word('вышвырнули', 1),
  imperativeInformal: Word('вышвырни', 1),
  imperativeFormal: Word('вышвырните', 1),
  imperfect: [],
};

perfectVerbs.set(вышвырнуть.name.text, вышвырнуть);

export { вышвырнуть };