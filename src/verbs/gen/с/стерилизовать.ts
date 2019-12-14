import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стерилизовать: PerfectVerb = {
  name: Word('стерилизовать', 10),
  singular1stPerson: Word('стерилизую', 8),
  singular2ndPerson: Word('стерилизуешь', 8),
  singular3rdPerson: Word('стерилизует', 8),
  plural1stPerson: Word('стерилизуем', 8),
  plural2ndPerson: Word('стерилизуете', 8),
  plural3rdPerson: Word('стерилизуют', 8),
  masculinePast: Word('стерилизовал', 10),
  femininePast: Word('стерилизовала', 10),
  neuterPast: Word('стерилизовало', 10),
  pluralPast: Word('стерилизовали', 10),
  imperativeInformal: Word('стерилизуй', 8),
  imperativeFormal: Word('стерилизуйте', 8),
  imperfect: [],
};

perfectVerbs.set(стерилизовать.name.text, стерилизовать);

export { стерилизовать };