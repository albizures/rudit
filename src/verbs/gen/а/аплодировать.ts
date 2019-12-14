import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аплодировать: PerfectVerb = {
  name: Word('аплодировать', 5),
  singular1stPerson: Word('аплодирую', 5),
  singular2ndPerson: Word('аплодируешь', 5),
  singular3rdPerson: Word('аплодирует', 5),
  plural1stPerson: Word('аплодируем', 5),
  plural2ndPerson: Word('аплодируете', 5),
  plural3rdPerson: Word('аплодируют', 5),
  masculinePast: Word('аплодировал', 5),
  femininePast: Word('аплодировала', 5),
  neuterPast: Word('аплодировало', 5),
  pluralPast: Word('аплодировали', 5),
  imperativeInformal: Word('аплодируй', 5),
  imperativeFormal: Word('аплодируйте', 5),
  imperfect: ['зааплодировать','поаплодировать'],
};

perfectVerbs.set(аплодировать.name.text, аплодировать);

export { аплодировать };