import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сплюнуть: PerfectVerb = {
  name: Word('сплюнуть', 3),
  singular1stPerson: Word('сплюну', 3),
  singular2ndPerson: Word('сплюнешь', 3),
  singular3rdPerson: Word('сплюнет', 3),
  plural1stPerson: Word('сплюнем', 3),
  plural2ndPerson: Word('сплюнете', 3),
  plural3rdPerson: Word('сплюнут', 3),
  masculinePast: Word('сплюнул', 3),
  femininePast: Word('сплюнула', 3),
  neuterPast: Word('сплюнуло', 3),
  pluralPast: Word('сплюнули', 3),
  imperativeInformal: Word('сплюнь', 3),
  imperativeFormal: Word('сплюньте', 3),
  imperfect: [],
};

perfectVerbs.set(сплюнуть.name.text, сплюнуть);

export { сплюнуть };