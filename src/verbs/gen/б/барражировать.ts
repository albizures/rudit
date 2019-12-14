import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const барражировать: PerfectVerb = {
  name: Word('барражировать', 6),
  singular1stPerson: Word('барражирую', 6),
  singular2ndPerson: Word('барражируешь', 6),
  singular3rdPerson: Word('барражирует', 6),
  plural1stPerson: Word('барражируем', 6),
  plural2ndPerson: Word('барражируете', 6),
  plural3rdPerson: Word('барражируют', 6),
  masculinePast: Word('барражировал', 6),
  femininePast: Word('барражировала', 6),
  neuterPast: Word('барражировало', 6),
  pluralPast: Word('барражировали', 6),
  imperativeInformal: Word('барражируй', 6),
  imperativeFormal: Word('барражируйте', 6),
  imperfect: [],
};

perfectVerbs.set(барражировать.name.text, барражировать);

export { барражировать };