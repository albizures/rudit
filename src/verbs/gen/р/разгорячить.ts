import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгорячить: PerfectVerb = {
  name: Word('разгорячить', 8),
  singular1stPerson: Word('разгорячу', 8),
  singular2ndPerson: Word('разгорячишь', 8),
  singular3rdPerson: Word('разгорячит', 8),
  plural1stPerson: Word('разгорячим', 8),
  plural2ndPerson: Word('разгорячите', 8),
  plural3rdPerson: Word('разгорячат', 8),
  masculinePast: Word('разгорячил', 8),
  femininePast: Word('разгорячила', 8),
  neuterPast: Word('разгорячило', 8),
  pluralPast: Word('разгорячили', 8),
  imperativeInformal: Word('разгорячи', 8),
  imperativeFormal: Word('разгорячите', 8),
  imperfect: [],
};

perfectVerbs.set(разгорячить.name.text, разгорячить);

export { разгорячить };