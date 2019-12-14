import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нахапать: PerfectVerb = {
  name: Word('нахапать', 3),
  singular1stPerson: Word('нахапаю', 3),
  singular2ndPerson: Word('нахапаешь', 3),
  singular3rdPerson: Word('нахапает', 3),
  plural1stPerson: Word('нахапаем', 3),
  plural2ndPerson: Word('нахапаете', 3),
  plural3rdPerson: Word('нахапают', 3),
  masculinePast: Word('нахапал', 3),
  femininePast: Word('нахапала', 3),
  neuterPast: Word('нахапало', 3),
  pluralPast: Word('нахапали', 3),
  imperativeInformal: Word('нахапай', 3),
  imperativeFormal: Word('нахапайте', 3),
  imperfect: [],
};

perfectVerbs.set(нахапать.name.text, нахапать);

export { нахапать };