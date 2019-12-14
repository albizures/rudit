import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щадить: PerfectVerb = {
  name: Word('щадить', 3),
  singular1stPerson: Word('щажу', 3),
  singular2ndPerson: Word('щадишь', 3),
  singular3rdPerson: Word('щадит', 3),
  plural1stPerson: Word('щадим', 3),
  plural2ndPerson: Word('щадите', 3),
  plural3rdPerson: Word('щадят', 3),
  masculinePast: Word('щадил', 3),
  femininePast: Word('щадила', 3),
  neuterPast: Word('щадило', 3),
  pluralPast: Word('щадили', 3),
  imperativeInformal: Word('щади', 3),
  imperativeFormal: Word('щадите', 3),
  imperfect: ['пощадить'],
};

perfectVerbs.set(щадить.name.text, щадить);

export { щадить };