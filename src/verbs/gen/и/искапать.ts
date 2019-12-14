import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искапать: PerfectVerb = {
  name: Word('искапать', 3),
  singular1stPerson: Word('искапаю', 3),
  singular2ndPerson: Word('искапаешь', 3),
  singular3rdPerson: Word('искапает', 3),
  plural1stPerson: Word('искапаем', 3),
  plural2ndPerson: Word('искапаете', 3),
  plural3rdPerson: Word('искапают', 3),
  masculinePast: Word('искапал', 3),
  femininePast: Word('искапала', 3),
  neuterPast: Word('искапало', 3),
  pluralPast: Word('искапали', 3),
  imperativeInformal: Word('искапай', 3),
  imperativeFormal: Word('искапайте', 3),
  imperfect: [],
};

perfectVerbs.set(искапать.name.text, искапать);

export { искапать };