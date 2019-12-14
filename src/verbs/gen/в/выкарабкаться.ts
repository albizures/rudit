import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкарабкаться: PerfectVerb = {
  name: Word('выкарабкаться', 1),
  singular1stPerson: Word('выкарабкаюсь', 1),
  singular2ndPerson: Word('выкарабкаешься', 1),
  singular3rdPerson: Word('выкарабкается', 1),
  plural1stPerson: Word('выкарабкаемся', 1),
  plural2ndPerson: Word('выкарабкаетесь', 1),
  plural3rdPerson: Word('выкарабкаются', 1),
  masculinePast: Word('выкарабкался', 1),
  femininePast: Word('выкарабкалась', 1),
  neuterPast: Word('выкарабкалось', 1),
  pluralPast: Word('выкарабкались', 1),
  imperativeInformal: Word('выкарабкайся', 1),
  imperativeFormal: Word('выкарабкайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выкарабкаться.name.text, выкарабкаться);

export { выкарабкаться };