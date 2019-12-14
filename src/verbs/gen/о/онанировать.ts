import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const онанировать: PerfectVerb = {
  name: Word('онанировать', 4),
  singular1stPerson: Word('онанирую', 4),
  singular2ndPerson: Word('онанируешь', 4),
  singular3rdPerson: Word('онанирует', 4),
  plural1stPerson: Word('онанируем', 4),
  plural2ndPerson: Word('онанируете', 4),
  plural3rdPerson: Word('онанируют', 4),
  masculinePast: Word('онанировал', 4),
  femininePast: Word('онанировала', 4),
  neuterPast: Word('онанировало', 4),
  pluralPast: Word('онанировали', 4),
  imperativeInformal: Word('онанируй', 4),
  imperativeFormal: Word('онанируйте', 4),
  imperfect: [],
};

perfectVerbs.set(онанировать.name.text, онанировать);

export { онанировать };