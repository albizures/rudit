import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насадить: PerfectVerb = {
  name: Word('насадить', 5),
  singular1stPerson: Word('насажу', 5),
  singular2ndPerson: Word('насадишь', 5),
  singular3rdPerson: Word('насадит', 5),
  plural1stPerson: Word('насадим', 5),
  plural2ndPerson: Word('насадите', 5),
  plural3rdPerson: Word('насадят', 5),
  masculinePast: Word('насадил', 5),
  femininePast: Word('насадила', 5),
  neuterPast: Word('насадило', 5),
  pluralPast: Word('насадили', 5),
  imperativeInformal: Word('насади', 5),
  imperativeFormal: Word('насадите', 5),
  imperfect: [],
};

perfectVerbs.set(насадить.name.text, насадить);

export { насадить };