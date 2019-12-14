import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const экономить: PerfectVerb = {
  name: Word('экономить', 4),
  singular1stPerson: Word('экономлю', 4),
  singular2ndPerson: Word('экономишь', 4),
  singular3rdPerson: Word('экономит', 4),
  plural1stPerson: Word('экономим', 4),
  plural2ndPerson: Word('экономите', 4),
  plural3rdPerson: Word('экономят', 4),
  masculinePast: Word('экономил', 4),
  femininePast: Word('экономила', 4),
  neuterPast: Word('экономило', 4),
  pluralPast: Word('экономили', 4),
  imperativeInformal: Word('экономь', 4),
  imperativeFormal: Word('экономьте', 4),
  imperfect: [],
};

perfectVerbs.set(экономить.name.text, экономить);

export { экономить };