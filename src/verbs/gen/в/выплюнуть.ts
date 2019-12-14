import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплюнуть: PerfectVerb = {
  name: Word('выплюнуть', 1),
  singular1stPerson: Word('выплюну', 1),
  singular2ndPerson: Word('выплюнешь', 1),
  singular3rdPerson: Word('выплюнет', 1),
  plural1stPerson: Word('выплюнем', 1),
  plural2ndPerson: Word('выплюнете', 1),
  plural3rdPerson: Word('выплюнут', 1),
  masculinePast: Word('выплюнул', 1),
  femininePast: Word('выплюнула', 1),
  neuterPast: Word('выплюнуло', 1),
  pluralPast: Word('выплюнули', 1),
  imperativeInformal: Word('выплюни//вы'плюнь', 1),
  imperativeFormal: Word('выплюньте', 1),
  imperfect: [],
};

perfectVerbs.set(выплюнуть.name.text, выплюнуть);

export { выплюнуть };