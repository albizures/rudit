import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разногласить: PerfectVerb = {
  name: Word('разногласить', 7),
  singular1stPerson: Word('разноглашу', 7),
  singular2ndPerson: Word('разногласишь', 7),
  singular3rdPerson: Word('разногласит', 7),
  plural1stPerson: Word('разногласим', 7),
  plural2ndPerson: Word('разногласите', 7),
  plural3rdPerson: Word('разногласят', 7),
  masculinePast: Word('разногласил', 7),
  femininePast: Word('разногласила', 7),
  neuterPast: Word('разногласило', 7),
  pluralPast: Word('разногласили', 7),
  imperativeInformal: Word('разноглась', 7),
  imperativeFormal: Word('разногласьте', 7),
  imperfect: [],
};

perfectVerbs.set(разногласить.name.text, разногласить);

export { разногласить };