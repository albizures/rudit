import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const царапать: PerfectVerb = {
  name: Word('царапать', 3),
  singular1stPerson: Word('царапаю', 3),
  singular2ndPerson: Word('царапаешь', 3),
  singular3rdPerson: Word('царапает', 3),
  plural1stPerson: Word('царапаем', 3),
  plural2ndPerson: Word('царапаете', 3),
  plural3rdPerson: Word('царапают', 3),
  masculinePast: Word('царапал', 3),
  femininePast: Word('царапала', 3),
  neuterPast: Word('царапало', 3),
  pluralPast: Word('царапали', 3),
  imperativeInformal: Word('царапай', 3),
  imperativeFormal: Word('царапайте', 3),
  imperfect: ['поцарапать','оцарапать','нацарапать'],
};

perfectVerbs.set(царапать.name.text, царапать);

export { царапать };