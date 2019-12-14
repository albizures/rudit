import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уродовать: PerfectVerb = {
  name: Word('уродовать', 2),
  singular1stPerson: Word('уродую', 2),
  singular2ndPerson: Word('уродуешь', 2),
  singular3rdPerson: Word('уродует', 2),
  plural1stPerson: Word('уродуем', 2),
  plural2ndPerson: Word('уродуете', 2),
  plural3rdPerson: Word('уродуют', 2),
  masculinePast: Word('уродовал', 2),
  femininePast: Word('уродовала', 2),
  neuterPast: Word('уродовало', 2),
  pluralPast: Word('уродовали', 2),
  imperativeInformal: Word('уродуй', 2),
  imperativeFormal: Word('уродуйте', 2),
  imperfect: ['изуродовать'],
};

perfectVerbs.set(уродовать.name.text, уродовать);

export { уродовать };