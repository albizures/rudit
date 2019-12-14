import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырасти: PerfectVerb = {
  name: Word('вырасти', 1),
  singular1stPerson: Word('вырасту', 1),
  singular2ndPerson: Word('вырастешь', 1),
  singular3rdPerson: Word('вырастет', 1),
  plural1stPerson: Word('вырастем', 1),
  plural2ndPerson: Word('вырастете', 1),
  plural3rdPerson: Word('вырастут', 1),
  masculinePast: Word('вырос', 1),
  femininePast: Word('выросла', 1),
  neuterPast: Word('выросло', 1),
  pluralPast: Word('выросли', 1),
  imperativeInformal: Word('вырасти', 1),
  imperativeFormal: Word('вырастите', 1),
  imperfect: ['расти','вырастать'],
};

perfectVerbs.set(вырасти.name.text, вырасти);

export { вырасти };