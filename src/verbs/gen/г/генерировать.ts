import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const генерировать: PerfectVerb = {
  name: Word('генерировать', 5),
  singular1stPerson: Word('генерирую', 5),
  singular2ndPerson: Word('генерируешь', 5),
  singular3rdPerson: Word('генерирует', 5),
  plural1stPerson: Word('генерируем', 5),
  plural2ndPerson: Word('генерируете', 5),
  plural3rdPerson: Word('генерируют', 5),
  masculinePast: Word('генерировал', 5),
  femininePast: Word('генерировала', 5),
  neuterPast: Word('генерировало', 5),
  pluralPast: Word('генерировали', 5),
  imperativeInformal: Word('генерируй', 5),
  imperativeFormal: Word('генерируйте', 5),
  imperfect: [],
};

perfectVerbs.set(генерировать.name.text, генерировать);

export { генерировать };