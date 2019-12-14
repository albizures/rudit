import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зааплодировать: PerfectVerb = {
  name: Word('зааплодировать', 7),
  singular1stPerson: Word('зааплодирую', 7),
  singular2ndPerson: Word('зааплодируешь', 7),
  singular3rdPerson: Word('зааплодирует', 7),
  plural1stPerson: Word('зааплодируем', 7),
  plural2ndPerson: Word('зааплодируете', 7),
  plural3rdPerson: Word('зааплодируют', 7),
  masculinePast: Word('зааплодировал', 7),
  femininePast: Word('зааплодировала', 7),
  neuterPast: Word('зааплодировало', 7),
  pluralPast: Word('зааплодировали', 7),
  imperativeInformal: Word('зааплодируй', 7),
  imperativeFormal: Word('зааплодируйте', 7),
  imperfect: [],
};

perfectVerbs.set(зааплодировать.name.text, зааплодировать);

export { зааплодировать };