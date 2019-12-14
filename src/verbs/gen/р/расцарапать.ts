import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расцарапать: PerfectVerb = {
  name: Word('расцарапать', 6),
  singular1stPerson: Word('расцарапаю', 6),
  singular2ndPerson: Word('расцарапаешь', 6),
  singular3rdPerson: Word('расцарапает', 6),
  plural1stPerson: Word('расцарапаем', 6),
  plural2ndPerson: Word('расцарапаете', 6),
  plural3rdPerson: Word('расцарапают', 6),
  masculinePast: Word('расцарапал', 6),
  femininePast: Word('расцарапала', 6),
  neuterPast: Word('расцарапало', 6),
  pluralPast: Word('расцарапали', 6),
  imperativeInformal: Word('расцарапай', 6),
  imperativeFormal: Word('расцарапайте', 6),
  imperfect: [],
};

perfectVerbs.set(расцарапать.name.text, расцарапать);

export { расцарапать };