import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const апробировать: PerfectVerb = {
  name: Word('апробировать', 5),
  singular1stPerson: Word('апробирую', 5),
  singular2ndPerson: Word('апробируешь', 5),
  singular3rdPerson: Word('апробирует', 5),
  plural1stPerson: Word('апробируем', 5),
  plural2ndPerson: Word('апробируете', 5),
  plural3rdPerson: Word('апробируют', 5),
  masculinePast: Word('апробировал', 5),
  femininePast: Word('апробировала', 5),
  neuterPast: Word('апробировало', 5),
  pluralPast: Word('апробировали', 5),
  imperativeInformal: Word('апробируй', 5),
  imperativeFormal: Word('апробируйте', 5),
  imperfect: [],
};

perfectVerbs.set(апробировать.name.text, апробировать);

export { апробировать };