import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клюнуть: PerfectVerb = {
  name: Word('клюнуть', 2),
  singular1stPerson: Word('клюну', 2),
  singular2ndPerson: Word('клюнешь', 2),
  singular3rdPerson: Word('клюнет', 2),
  plural1stPerson: Word('клюнем', 2),
  plural2ndPerson: Word('клюнете', 2),
  plural3rdPerson: Word('клюнут', 2),
  masculinePast: Word('клюнул', 2),
  femininePast: Word('клюнула', 2),
  neuterPast: Word('клюнуло', 2),
  pluralPast: Word('клюнули', 2),
  imperativeInformal: Word('клюнь', 2),
  imperativeFormal: Word('клюньте', 2),
  imperfect: ['клевать'],
};

perfectVerbs.set(клюнуть.name.text, клюнуть);

export { клюнуть };