import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вскарабкаться: PerfectVerb = {
  name: Word('вскарабкаться', 5),
  singular1stPerson: Word('вскарабкаюсь', 5),
  singular2ndPerson: Word('вскарабкаешься', 5),
  singular3rdPerson: Word('вскарабкается', 5),
  plural1stPerson: Word('вскарабкаемся', 5),
  plural2ndPerson: Word('вскарабкаетесь', 5),
  plural3rdPerson: Word('вскарабкаются', 5),
  masculinePast: Word('вскарабкался', 5),
  femininePast: Word('вскарабкалась', 5),
  neuterPast: Word('вскарабкалось', 5),
  pluralPast: Word('вскарабкались', 5),
  imperativeInformal: Word('вскарабкайся', 5),
  imperativeFormal: Word('вскарабкайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(вскарабкаться.name.text, вскарабкаться);

export { вскарабкаться };