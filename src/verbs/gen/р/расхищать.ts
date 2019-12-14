import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расхищать: PerfectVerb = {
  name: Word('расхищать', 6),
  singular1stPerson: Word('расхищаю', 6),
  singular2ndPerson: Word('расхищаешь', 6),
  singular3rdPerson: Word('расхищает', 6),
  plural1stPerson: Word('расхищаем', 6),
  plural2ndPerson: Word('расхищаете', 6),
  plural3rdPerson: Word('расхищают', 6),
  masculinePast: Word('расхищал', 6),
  femininePast: Word('расхищала', 6),
  neuterPast: Word('расхищало', 6),
  pluralPast: Word('расхищали', 6),
  imperativeInformal: Word('расхищай', 6),
  imperativeFormal: Word('расхищайте', 6),
  imperfect: [],
};

perfectVerbs.set(расхищать.name.text, расхищать);

export { расхищать };