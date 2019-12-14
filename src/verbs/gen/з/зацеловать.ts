import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зацеловать: PerfectVerb = {
  name: Word('зацеловать', 7),
  singular1stPerson: Word('зацелую', 5),
  singular2ndPerson: Word('зацелуешь', 5),
  singular3rdPerson: Word('зацелует', 5),
  plural1stPerson: Word('зацелуем', 5),
  plural2ndPerson: Word('зацелуете', 5),
  plural3rdPerson: Word('зацелуют', 5),
  masculinePast: Word('зацеловал', 7),
  femininePast: Word('зацеловала', 7),
  neuterPast: Word('зацеловало', 7),
  pluralPast: Word('зацеловали', 7),
  imperativeInformal: Word('зацелуй', 5),
  imperativeFormal: Word('зацелуйте', 5),
  imperfect: [],
};

perfectVerbs.set(зацеловать.name.text, зацеловать);

export { зацеловать };