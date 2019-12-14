import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разметить: PerfectVerb = {
  name: Word('разметить', 4),
  singular1stPerson: Word('размечу', 4),
  singular2ndPerson: Word('разметишь', 4),
  singular3rdPerson: Word('разметит', 4),
  plural1stPerson: Word('разметим', 4),
  plural2ndPerson: Word('разметите', 4),
  plural3rdPerson: Word('разметят', 4),
  masculinePast: Word('разметил', 4),
  femininePast: Word('разметила', 4),
  neuterPast: Word('разметило', 4),
  pluralPast: Word('разметили', 4),
  imperativeInformal: Word('разметь', 4),
  imperativeFormal: Word('разметьте', 4),
  imperfect: [],
};

perfectVerbs.set(разметить.name.text, разметить);

export { разметить };