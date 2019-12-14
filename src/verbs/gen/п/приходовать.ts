import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приходовать: PerfectVerb = {
  name: Word('приходовать', 4),
  singular1stPerson: Word('приходую', 4),
  singular2ndPerson: Word('приходуешь', 4),
  singular3rdPerson: Word('приходует', 4),
  plural1stPerson: Word('приходуем', 4),
  plural2ndPerson: Word('приходуете', 4),
  plural3rdPerson: Word('приходуют', 4),
  masculinePast: Word('приходовал', 4),
  femininePast: Word('приходовала', 4),
  neuterPast: Word('приходовало', 4),
  pluralPast: Word('приходовали', 4),
  imperativeInformal: Word('приходуй', 4),
  imperativeFormal: Word('приходуйте', 4),
  imperfect: [],
};

perfectVerbs.set(приходовать.name.text, приходовать);

export { приходовать };