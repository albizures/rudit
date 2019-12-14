import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нависать: PerfectVerb = {
  name: Word('нависать', 5),
  singular1stPerson: Word('нависаю', 5),
  singular2ndPerson: Word('нависаешь', 5),
  singular3rdPerson: Word('нависает', 5),
  plural1stPerson: Word('нависаем', 5),
  plural2ndPerson: Word('нависаете', 5),
  plural3rdPerson: Word('нависают', 5),
  masculinePast: Word('нависал', 5),
  femininePast: Word('нависала', 5),
  neuterPast: Word('нависало', 5),
  pluralPast: Word('нависали', 5),
  imperativeInformal: Word('нависай', 5),
  imperativeFormal: Word('нависайте', 5),
  imperfect: [],
};

perfectVerbs.set(нависать.name.text, нависать);

export { нависать };