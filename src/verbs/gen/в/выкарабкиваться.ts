import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкарабкиваться: PerfectVerb = {
  name: Word('выкарабкиваться', 5),
  singular1stPerson: Word('выкарабкиваюсь', 5),
  singular2ndPerson: Word('выкарабкиваешься', 5),
  singular3rdPerson: Word('выкарабкивается', 5),
  plural1stPerson: Word('выкарабкиваемся', 5),
  plural2ndPerson: Word('выкарабкиваетесь', 5),
  plural3rdPerson: Word('выкарабкиваются', 5),
  masculinePast: Word('выкарабкивался', 5),
  femininePast: Word('выкарабкивалась', 5),
  neuterPast: Word('выкарабкивалось', 5),
  pluralPast: Word('выкарабкивались', 5),
  imperativeInformal: Word('выкарабкивайся', 5),
  imperativeFormal: Word('выкарабкивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выкарабкиваться.name.text, выкарабкиваться);

export { выкарабкиваться };