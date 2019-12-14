import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развращать: PerfectVerb = {
  name: Word('развращать', 7),
  singular1stPerson: Word('развращаю', 7),
  singular2ndPerson: Word('развращаешь', 7),
  singular3rdPerson: Word('развращает', 7),
  plural1stPerson: Word('развращаем', 7),
  plural2ndPerson: Word('развращаете', 7),
  plural3rdPerson: Word('развращают', 7),
  masculinePast: Word('развращал', 7),
  femininePast: Word('развращала', 7),
  neuterPast: Word('развращало', 7),
  pluralPast: Word('развращали', 7),
  imperativeInformal: Word('развращай', 7),
  imperativeFormal: Word('развращайте', 7),
  imperfect: [],
};

perfectVerbs.set(развращать.name.text, развращать);

export { развращать };