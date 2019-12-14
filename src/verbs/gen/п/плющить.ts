import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плющить: PerfectVerb = {
  name: Word('плющить', 2),
  singular1stPerson: Word('плющу', 2),
  singular2ndPerson: Word('плющишь', 2),
  singular3rdPerson: Word('плющит', 2),
  plural1stPerson: Word('плющим', 2),
  plural2ndPerson: Word('плющите', 2),
  plural3rdPerson: Word('плющат', 2),
  masculinePast: Word('плющил', 2),
  femininePast: Word('плющила', 2),
  neuterPast: Word('плющило', 2),
  pluralPast: Word('плющили', 2),
  imperativeInformal: Word('плющи//плю'щь', 2),
  imperativeFormal: Word('плющьте', 2),
  imperfect: [],
};

perfectVerbs.set(плющить.name.text, плющить);

export { плющить };