import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разглагольствовать: PerfectVerb = {
  name: Word('разглагольствовать', 7),
  singular1stPerson: Word('разглагольствую', 7),
  singular2ndPerson: Word('разглагольствуешь', 7),
  singular3rdPerson: Word('разглагольствует', 7),
  plural1stPerson: Word('разглагольствуем', 7),
  plural2ndPerson: Word('разглагольствуете', 7),
  plural3rdPerson: Word('разглагольствуют', 7),
  masculinePast: Word('разглагольствовал', 7),
  femininePast: Word('разглагольствовала', 7),
  neuterPast: Word('разглагольствовало', 7),
  pluralPast: Word('разглагольствовали', 7),
  imperativeInformal: Word('разглагольствуй', 7),
  imperativeFormal: Word('разглагольствуйте', 7),
  imperfect: [],
};

perfectVerbs.set(разглагольствовать.name.text, разглагольствовать);

export { разглагольствовать };