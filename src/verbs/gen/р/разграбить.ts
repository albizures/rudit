import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разграбить: PerfectVerb = {
  name: Word('разграбить', 5),
  singular1stPerson: Word('разграблю', 5),
  singular2ndPerson: Word('разграбишь', 5),
  singular3rdPerson: Word('разграбит', 5),
  plural1stPerson: Word('разграбим', 5),
  plural2ndPerson: Word('разграбите', 5),
  plural3rdPerson: Word('разграбят', 5),
  masculinePast: Word('разграбил', 5),
  femininePast: Word('разграбила', 5),
  neuterPast: Word('разграбило', 5),
  pluralPast: Word('разграбили', 5),
  imperativeInformal: Word('разграбь', 5),
  imperativeFormal: Word('разграбьте', 5),
  imperfect: [],
};

perfectVerbs.set(разграбить.name.text, разграбить);

export { разграбить };