import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стабилизовать: PerfectVerb = {
  name: Word('стабилизовать', 10),
  singular1stPerson: Word('стабилизую', 8),
  singular2ndPerson: Word('стабилизуешь', 8),
  singular3rdPerson: Word('стабилизует', 8),
  plural1stPerson: Word('стабилизуем', 8),
  plural2ndPerson: Word('стабилизуете', 8),
  plural3rdPerson: Word('стабилизуют', 8),
  masculinePast: Word('стабилизовал', 10),
  femininePast: Word('стабилизовала', 10),
  neuterPast: Word('стабилизовало', 10),
  pluralPast: Word('стабилизовали', 10),
  imperativeInformal: Word('стабилизуй', 8),
  imperativeFormal: Word('стабилизуйте', 8),
  imperfect: [],
};

perfectVerbs.set(стабилизовать.name.text, стабилизовать);

export { стабилизовать };