import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сэкономить: PerfectVerb = {
  name: Word('сэкономить', 5),
  singular1stPerson: Word('сэкономлю', 5),
  singular2ndPerson: Word('сэкономишь', 5),
  singular3rdPerson: Word('сэкономит', 5),
  plural1stPerson: Word('сэкономим', 5),
  plural2ndPerson: Word('сэкономите', 5),
  plural3rdPerson: Word('сэкономят', 5),
  masculinePast: Word('сэкономил', 5),
  femininePast: Word('сэкономила', 5),
  neuterPast: Word('сэкономило', 5),
  pluralPast: Word('сэкономили', 5),
  imperativeInformal: Word('сэкономь', 5),
  imperativeFormal: Word('сэкономьте', 5),
  imperfect: [],
};

perfectVerbs.set(сэкономить.name.text, сэкономить);

export { сэкономить };