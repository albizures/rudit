import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совращать: PerfectVerb = {
  name: Word('совращать', 6),
  singular1stPerson: Word('совращаю', 6),
  singular2ndPerson: Word('совращаешь', 6),
  singular3rdPerson: Word('совращает', 6),
  plural1stPerson: Word('совращаем', 6),
  plural2ndPerson: Word('совращаете', 6),
  plural3rdPerson: Word('совращают', 6),
  masculinePast: Word('совращал', 6),
  femininePast: Word('совращала', 6),
  neuterPast: Word('совращало', 6),
  pluralPast: Word('совращали', 6),
  imperativeInformal: Word('совращай', 6),
  imperativeFormal: Word('совращайте', 6),
  imperfect: [],
};

perfectVerbs.set(совращать.name.text, совращать);

export { совращать };