import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ревизовать: PerfectVerb = {
  name: Word('ревизовать', 7),
  singular1stPerson: Word('ревизую', 5),
  singular2ndPerson: Word('ревизуешь', 5),
  singular3rdPerson: Word('ревизует', 5),
  plural1stPerson: Word('ревизуем', 5),
  plural2ndPerson: Word('ревизуете', 5),
  plural3rdPerson: Word('ревизуют', 5),
  masculinePast: Word('ревизовал', 7),
  femininePast: Word('ревизовала', 7),
  neuterPast: Word('ревизовало', 7),
  pluralPast: Word('ревизовали', 7),
  imperativeInformal: Word('ревизуй', 5),
  imperativeFormal: Word('ревизуйте', 5),
  imperfect: [],
};

perfectVerbs.set(ревизовать.name.text, ревизовать);

export { ревизовать };