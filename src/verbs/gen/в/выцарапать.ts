import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выцарапать: PerfectVerb = {
  name: Word('выцарапать', 1),
  singular1stPerson: Word('выцарапаю', 1),
  singular2ndPerson: Word('выцарапаешь', 1),
  singular3rdPerson: Word('выцарапает', 1),
  plural1stPerson: Word('выцарапаем', 1),
  plural2ndPerson: Word('выцарапаете', 1),
  plural3rdPerson: Word('выцарапают', 1),
  masculinePast: Word('выцарапал', 1),
  femininePast: Word('выцарапала', 1),
  neuterPast: Word('выцарапало', 1),
  pluralPast: Word('выцарапали', 1),
  imperativeInformal: Word('выцарапай', 1),
  imperativeFormal: Word('выцарапайте', 1),
  imperfect: [],
};

perfectVerbs.set(выцарапать.name.text, выцарапать);

export { выцарапать };