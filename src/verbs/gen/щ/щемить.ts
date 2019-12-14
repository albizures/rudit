import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const щемить: PerfectVerb = {
  name: Word('щемить', 3),
  singular1stPerson: Word('щемлю', 4),
  singular2ndPerson: Word('щемишь', 3),
  singular3rdPerson: Word('щемит', 3),
  plural1stPerson: Word('щемим', 3),
  plural2ndPerson: Word('щемите', 3),
  plural3rdPerson: Word('щемят', 3),
  masculinePast: Word('щемил', 3),
  femininePast: Word('щемила', 3),
  neuterPast: Word('щемило', 3),
  pluralPast: Word('щемили', 3),
  imperativeInformal: Word('щеми', 3),
  imperativeFormal: Word('щемите', 3),
  imperfect: [],
};

perfectVerbs.set(щемить.name.text, щемить);

export { щемить };