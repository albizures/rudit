import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доплюнуть: PerfectVerb = {
  name: Word('доплюнуть', 4),
  singular1stPerson: Word('доплюну', 4),
  singular2ndPerson: Word('доплюнешь', 4),
  singular3rdPerson: Word('доплюнет', 4),
  plural1stPerson: Word('доплюнем', 4),
  plural2ndPerson: Word('доплюнете', 4),
  plural3rdPerson: Word('доплюнут', 4),
  masculinePast: Word('доплюнул', 4),
  femininePast: Word('доплюнула', 4),
  neuterPast: Word('доплюнуло', 4),
  pluralPast: Word('доплюнули', 4),
  imperativeInformal: Word('доплюнь', 4),
  imperativeFormal: Word('доплюньте', 4),
  imperfect: [],
};

perfectVerbs.set(доплюнуть.name.text, доплюнуть);

export { доплюнуть };