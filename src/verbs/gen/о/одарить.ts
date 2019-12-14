import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одарить: PerfectVerb = {
  name: Word('одарить', 4),
  singular1stPerson: Word('одарю', 4),
  singular2ndPerson: Word('одаришь', 4),
  singular3rdPerson: Word('одарит', 4),
  plural1stPerson: Word('одарим', 4),
  plural2ndPerson: Word('одарите', 4),
  plural3rdPerson: Word('одарят', 4),
  masculinePast: Word('одарил', 4),
  femininePast: Word('одарила', 4),
  neuterPast: Word('одарило', 4),
  pluralPast: Word('одарили', 4),
  imperativeInformal: Word('одари', 4),
  imperativeFormal: Word('одарите', 4),
  imperfect: [],
};

perfectVerbs.set(одарить.name.text, одарить);

export { одарить };