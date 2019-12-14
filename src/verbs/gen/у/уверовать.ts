import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уверовать: PerfectVerb = {
  name: Word('уверовать', 2),
  singular1stPerson: Word('уверую', 2),
  singular2ndPerson: Word('уверуешь', 2),
  singular3rdPerson: Word('уверует', 2),
  plural1stPerson: Word('уверуем', 2),
  plural2ndPerson: Word('уверуете', 2),
  plural3rdPerson: Word('уверуют', 2),
  masculinePast: Word('уверовал', 2),
  femininePast: Word('уверовала', 2),
  neuterPast: Word('уверовало', 2),
  pluralPast: Word('уверовали', 2),
  imperativeInformal: Word('уверуй', 2),
  imperativeFormal: Word('уверуйте', 2),
  imperfect: [],
};

perfectVerbs.set(уверовать.name.text, уверовать);

export { уверовать };