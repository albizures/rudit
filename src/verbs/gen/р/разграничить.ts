import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разграничить: PerfectVerb = {
  name: Word('разграничить', 7),
  singular1stPerson: Word('разграничу', 7),
  singular2ndPerson: Word('разграничишь', 7),
  singular3rdPerson: Word('разграничит', 7),
  plural1stPerson: Word('разграничим', 7),
  plural2ndPerson: Word('разграничите', 7),
  plural3rdPerson: Word('разграничат', 7),
  masculinePast: Word('разграничил', 7),
  femininePast: Word('разграничила', 7),
  neuterPast: Word('разграничило', 7),
  pluralPast: Word('разграничили', 7),
  imperativeInformal: Word('разграничь', 7),
  imperativeFormal: Word('разграничьте', 7),
  imperfect: [],
};

perfectVerbs.set(разграничить.name.text, разграничить);

export { разграничить };