import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const анестезировать: PerfectVerb = {
  name: Word('анестезировать', 7),
  singular1stPerson: Word('анестезирую', 7),
  singular2ndPerson: Word('анестезируешь', 7),
  singular3rdPerson: Word('анестезирует', 7),
  plural1stPerson: Word('анестезируем', 7),
  plural2ndPerson: Word('анестезируете', 7),
  plural3rdPerson: Word('анестезируют', 7),
  masculinePast: Word('анестезировал', 7),
  femininePast: Word('анестезировала', 7),
  neuterPast: Word('анестезировало', 7),
  pluralPast: Word('анестезировали', 7),
  imperativeInformal: Word('анестезируй', 7),
  imperativeFormal: Word('анестезируйте', 7),
  imperfect: [],
};

perfectVerbs.set(анестезировать.name.text, анестезировать);

export { анестезировать };