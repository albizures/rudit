import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поцарапать: PerfectVerb = {
  name: Word('поцарапать', 5),
  singular1stPerson: Word('поцарапаю', 5),
  singular2ndPerson: Word('поцарапаешь', 5),
  singular3rdPerson: Word('поцарапает', 5),
  plural1stPerson: Word('поцарапаем', 5),
  plural2ndPerson: Word('поцарапаете', 5),
  plural3rdPerson: Word('поцарапают', 5),
  masculinePast: Word('поцарапал', 5),
  femininePast: Word('поцарапала', 5),
  neuterPast: Word('поцарапало', 5),
  pluralPast: Word('поцарапали', 5),
  imperativeInformal: Word('поцарапай', 5),
  imperativeFormal: Word('поцарапайте', 5),
  imperfect: [],
};

perfectVerbs.set(поцарапать.name.text, поцарапать);

export { поцарапать };