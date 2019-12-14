import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замаячить: PerfectVerb = {
  name: Word('замаячить', 4),
  singular1stPerson: Word('замаячу', 4),
  singular2ndPerson: Word('замаячишь', 4),
  singular3rdPerson: Word('замаячит', 4),
  plural1stPerson: Word('замаячим', 4),
  plural2ndPerson: Word('замаячите', 4),
  plural3rdPerson: Word('замаячат', 4),
  masculinePast: Word('замаячил', 4),
  femininePast: Word('замаячила', 4),
  neuterPast: Word('замаячило', 4),
  pluralPast: Word('замаячили', 4),
  imperativeInformal: Word('замаячь', 4),
  imperativeFormal: Word('замаячьте', 4),
  imperfect: [],
};

perfectVerbs.set(замаячить.name.text, замаячить);

export { замаячить };