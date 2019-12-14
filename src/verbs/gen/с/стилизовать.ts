import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стилизовать: PerfectVerb = {
  name: Word('стилизовать', 8),
  singular1stPerson: Word('стилизую', 6),
  singular2ndPerson: Word('стилизуешь', 6),
  singular3rdPerson: Word('стилизует', 6),
  plural1stPerson: Word('стилизуем', 6),
  plural2ndPerson: Word('стилизуете', 6),
  plural3rdPerson: Word('стилизуют', 6),
  masculinePast: Word('стилизовал', 8),
  femininePast: Word('стилизовала', 8),
  neuterPast: Word('стилизовало', 8),
  pluralPast: Word('стилизовали', 8),
  imperativeInformal: Word('стилизуй', 6),
  imperativeFormal: Word('стилизуйте', 6),
  imperfect: [],
};

perfectVerbs.set(стилизовать.name.text, стилизовать);

export { стилизовать };