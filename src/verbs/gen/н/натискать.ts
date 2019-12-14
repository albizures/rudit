import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натискать: PerfectVerb = {
  name: Word('натискать', 3),
  singular1stPerson: Word('натискаю', 3),
  singular2ndPerson: Word('натискаешь', 3),
  singular3rdPerson: Word('натискает', 3),
  plural1stPerson: Word('натискаем', 3),
  plural2ndPerson: Word('натискаете', 3),
  plural3rdPerson: Word('натискают', 3),
  masculinePast: Word('натискал', 3),
  femininePast: Word('натискала', 3),
  neuterPast: Word('натискало', 3),
  pluralPast: Word('натискали', 3),
  imperativeInformal: Word('натискай', 3),
  imperativeFormal: Word('натискайте', 3),
  imperfect: [],
};

perfectVerbs.set(натискать.name.text, натискать);

export { натискать };