import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const цыкнуть: PerfectVerb = {
  name: Word('цыкнуть', 1),
  singular1stPerson: Word('цыкну', 1),
  singular2ndPerson: Word('цыкнешь', 1),
  singular3rdPerson: Word('цыкнет', 1),
  plural1stPerson: Word('цыкнем', 1),
  plural2ndPerson: Word('цыкнете', 1),
  plural3rdPerson: Word('цыкнут', 1),
  masculinePast: Word('цыкнул', 1),
  femininePast: Word('цыкнула', 1),
  neuterPast: Word('цыкнуло', 1),
  pluralPast: Word('цыкнули', 1),
  imperativeInformal: Word('цыкни', 1),
  imperativeFormal: Word('цыкните', 1),
  imperfect: [],
};

perfectVerbs.set(цыкнуть.name.text, цыкнуть);

export { цыкнуть };