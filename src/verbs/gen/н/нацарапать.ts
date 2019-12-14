import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нацарапать: PerfectVerb = {
  name: Word('нацарапать', 5),
  singular1stPerson: Word('нацарапаю', 5),
  singular2ndPerson: Word('нацарапаешь', 5),
  singular3rdPerson: Word('нацарапает', 5),
  plural1stPerson: Word('нацарапаем', 5),
  plural2ndPerson: Word('нацарапаете', 5),
  plural3rdPerson: Word('нацарапают', 5),
  masculinePast: Word('нацарапал', 5),
  femininePast: Word('нацарапала', 5),
  neuterPast: Word('нацарапало', 5),
  pluralPast: Word('нацарапали', 5),
  imperativeInformal: Word('нацарапай', 5),
  imperativeFormal: Word('нацарапайте', 5),
  imperfect: [],
};

perfectVerbs.set(нацарапать.name.text, нацарапать);

export { нацарапать };