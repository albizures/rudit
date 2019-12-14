import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плюнуть: PerfectVerb = {
  name: Word('плюнуть', 2),
  singular1stPerson: Word('плюну', 2),
  singular2ndPerson: Word('плюнешь', 2),
  singular3rdPerson: Word('плюнет', 2),
  plural1stPerson: Word('плюнем', 2),
  plural2ndPerson: Word('плюнете', 2),
  plural3rdPerson: Word('плюнут', 2),
  masculinePast: Word('плюнул', 2),
  femininePast: Word('плюнула', 2),
  neuterPast: Word('плюнуло', 2),
  pluralPast: Word('плюнули', 2),
  imperativeInformal: Word('плюнь', 2),
  imperativeFormal: Word('плюньте', 2),
  imperfect: ['плевать'],
};

perfectVerbs.set(плюнуть.name.text, плюнуть);

export { плюнуть };