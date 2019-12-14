import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const снискать: PerfectVerb = {
  name: Word('снискать', 5),
  singular1stPerson: Word('снискаю', 5),
  singular2ndPerson: Word('снискаешь', 5),
  singular3rdPerson: Word('снискает', 5),
  plural1stPerson: Word('снискаем', 5),
  plural2ndPerson: Word('снискаете', 5),
  plural3rdPerson: Word('снискают', 5),
  masculinePast: Word('снискал', 5),
  femininePast: Word('снискала', 5),
  neuterPast: Word('снискало', 5),
  pluralPast: Word('снискали', 5),
  imperativeInformal: Word('снискай', 5),
  imperativeFormal: Word('снискайте', 5),
  imperfect: [],
};

perfectVerbs.set(снискать.name.text, снискать);

export { снискать };