import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сцапать: PerfectVerb = {
  name: Word('сцапать', 2),
  singular1stPerson: Word('сцапаю', 2),
  singular2ndPerson: Word('сцапаешь', 2),
  singular3rdPerson: Word('сцапает', 2),
  plural1stPerson: Word('сцапаем', 2),
  plural2ndPerson: Word('сцапаете', 2),
  plural3rdPerson: Word('сцапают', 2),
  masculinePast: Word('сцапал', 2),
  femininePast: Word('сцапала', 2),
  neuterPast: Word('сцапало', 2),
  pluralPast: Word('сцапали', 2),
  imperativeInformal: Word('сцапай', 2),
  imperativeFormal: Word('сцапайте', 2),
  imperfect: [],
};

perfectVerbs.set(сцапать.name.text, сцапать);

export { сцапать };