import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const редактировать: PerfectVerb = {
  name: Word('редактировать', 6),
  singular1stPerson: Word('редактирую', 6),
  singular2ndPerson: Word('редактируешь', 6),
  singular3rdPerson: Word('редактирует', 6),
  plural1stPerson: Word('редактируем', 6),
  plural2ndPerson: Word('редактируете', 6),
  plural3rdPerson: Word('редактируют', 6),
  masculinePast: Word('редактировал', 6),
  femininePast: Word('редактировала', 6),
  neuterPast: Word('редактировало', 6),
  pluralPast: Word('редактировали', 6),
  imperativeInformal: Word('редактируй', 6),
  imperativeFormal: Word('редактируйте', 6),
  imperfect: ['отредактировать'],
};

perfectVerbs.set(редактировать.name.text, редактировать);

export { редактировать };