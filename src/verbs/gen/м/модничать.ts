import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const модничать: PerfectVerb = {
  name: Word('модничать', 1),
  singular1stPerson: Word('модничаю', 1),
  singular2ndPerson: Word('модничаешь', 1),
  singular3rdPerson: Word('модничает', 1),
  plural1stPerson: Word('модничаем', 1),
  plural2ndPerson: Word('модничаете', 1),
  plural3rdPerson: Word('модничают', 1),
  masculinePast: Word('модничал', 1),
  femininePast: Word('модничала', 1),
  neuterPast: Word('модничало', 1),
  pluralPast: Word('модничали', 1),
  imperativeInformal: Word('модничай', 1),
  imperativeFormal: Word('модничайте', 1),
  imperfect: [],
};

perfectVerbs.set(модничать.name.text, модничать);

export { модничать };