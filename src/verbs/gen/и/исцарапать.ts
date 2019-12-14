import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исцарапать: PerfectVerb = {
  name: Word('исцарапать', 5),
  singular1stPerson: Word('исцарапаю', 5),
  singular2ndPerson: Word('исцарапаешь', 5),
  singular3rdPerson: Word('исцарапает', 5),
  plural1stPerson: Word('исцарапаем', 5),
  plural2ndPerson: Word('исцарапаете', 5),
  plural3rdPerson: Word('исцарапают', 5),
  masculinePast: Word('исцарапал', 5),
  femininePast: Word('исцарапала', 5),
  neuterPast: Word('исцарапало', 5),
  pluralPast: Word('исцарапали', 5),
  imperativeInformal: Word('исцарапай', 5),
  imperativeFormal: Word('исцарапайте', 5),
  imperfect: [],
};

perfectVerbs.set(исцарапать.name.text, исцарапать);

export { исцарапать };