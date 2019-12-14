import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свинячить: PerfectVerb = {
  name: Word('свинячить', 4),
  singular1stPerson: Word('свинячу', 4),
  singular2ndPerson: Word('свинячишь', 4),
  singular3rdPerson: Word('свинячит', 4),
  plural1stPerson: Word('свинячим', 4),
  plural2ndPerson: Word('свинячите', 4),
  plural3rdPerson: Word('свинячат', 4),
  masculinePast: Word('свинячил', 4),
  femininePast: Word('свинячила', 4),
  neuterPast: Word('свинячило', 4),
  pluralPast: Word('свинячили', 4),
  imperativeInformal: Word('свинячь', 4),
  imperativeFormal: Word('свинячьте', 4),
  imperfect: [],
};

perfectVerbs.set(свинячить.name.text, свинячить);

export { свинячить };