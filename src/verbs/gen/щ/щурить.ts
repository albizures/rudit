import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щурить: PerfectVerb = {
  name: Word('щурить', 1),
  singular1stPerson: Word('щурю', 1),
  singular2ndPerson: Word('щуришь', 1),
  singular3rdPerson: Word('щурит', 1),
  plural1stPerson: Word('щурим', 1),
  plural2ndPerson: Word('щурите', 1),
  plural3rdPerson: Word('щурят', 1),
  masculinePast: Word('щурил', 1),
  femininePast: Word('щурила', 1),
  neuterPast: Word('щурило', 1),
  pluralPast: Word('щурили', 1),
  imperativeInformal: Word('щурь', 1),
  imperativeFormal: Word('щурьте', 1),
  imperfect: [],
};

perfectVerbs.set(щурить.name.text, щурить);

export { щурить };