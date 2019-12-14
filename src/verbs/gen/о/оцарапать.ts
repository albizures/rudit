import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оцарапать: PerfectVerb = {
  name: Word('оцарапать', 4),
  singular1stPerson: Word('оцарапаю', 4),
  singular2ndPerson: Word('оцарапаешь', 4),
  singular3rdPerson: Word('оцарапает', 4),
  plural1stPerson: Word('оцарапаем', 4),
  plural2ndPerson: Word('оцарапаете', 4),
  plural3rdPerson: Word('оцарапают', 4),
  masculinePast: Word('оцарапал', 4),
  femininePast: Word('оцарапала', 4),
  neuterPast: Word('оцарапало', 4),
  pluralPast: Word('оцарапали', 4),
  imperativeInformal: Word('оцарапай', 4),
  imperativeFormal: Word('оцарапайте', 4),
  imperfect: [],
};

perfectVerbs.set(оцарапать.name.text, оцарапать);

export { оцарапать };