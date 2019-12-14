import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подметить: PerfectVerb = {
  name: Word('подметить', 4),
  singular1stPerson: Word('подмечу', 4),
  singular2ndPerson: Word('подметишь', 4),
  singular3rdPerson: Word('подметит', 4),
  plural1stPerson: Word('подметим', 4),
  plural2ndPerson: Word('подметите', 4),
  plural3rdPerson: Word('подметят', 4),
  masculinePast: Word('подметил', 4),
  femininePast: Word('подметила', 4),
  neuterPast: Word('подметило', 4),
  pluralPast: Word('подметили', 4),
  imperativeInformal: Word('подметь', 4),
  imperativeFormal: Word('подметьте', 4),
  imperfect: [],
};

perfectVerbs.set(подметить.name.text, подметить);

export { подметить };