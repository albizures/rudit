import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жонглировать: PerfectVerb = {
  name: Word('жонглировать', 5),
  singular1stPerson: Word('жонглирую', 5),
  singular2ndPerson: Word('жонглируешь', 5),
  singular3rdPerson: Word('жонглирует', 5),
  plural1stPerson: Word('жонглируем', 5),
  plural2ndPerson: Word('жонглируете', 5),
  plural3rdPerson: Word('жонглируют', 5),
  masculinePast: Word('жонглировал', 5),
  femininePast: Word('жонглировала', 5),
  neuterPast: Word('жонглировало', 5),
  pluralPast: Word('жонглировали', 5),
  imperativeInformal: Word('жонглируй', 5),
  imperativeFormal: Word('жонглируйте', 5),
  imperfect: ['пожонглировать'],
};

perfectVerbs.set(жонглировать.name.text, жонглировать);

export { жонглировать };