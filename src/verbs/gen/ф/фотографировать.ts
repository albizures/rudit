import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const фотографировать: PerfectVerb = {
  name: Word('фотографировать', 8),
  singular1stPerson: Word('фотографирую', 8),
  singular2ndPerson: Word('фотографируешь', 8),
  singular3rdPerson: Word('фотографирует', 8),
  plural1stPerson: Word('фотографируем', 8),
  plural2ndPerson: Word('фотографируете', 8),
  plural3rdPerson: Word('фотографируют', 8),
  masculinePast: Word('фотографировал', 8),
  femininePast: Word('фотографировала', 8),
  neuterPast: Word('фотографировало', 8),
  pluralPast: Word('фотографировали', 8),
  imperativeInformal: Word('фотографируй', 8),
  imperativeFormal: Word('фотографируйте', 8),
  imperfect: ['сфотографировать'],
};

perfectVerbs.set(фотографировать.name.text, фотографировать);

export { фотографировать };