import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const карабкаться: PerfectVerb = {
  name: Word('карабкаться', 3),
  singular1stPerson: Word('карабкаюсь', 3),
  singular2ndPerson: Word('карабкаешься', 3),
  singular3rdPerson: Word('карабкается', 3),
  plural1stPerson: Word('карабкаемся', 3),
  plural2ndPerson: Word('карабкаетесь', 3),
  plural3rdPerson: Word('карабкаются', 3),
  masculinePast: Word('карабкался', 3),
  femininePast: Word('карабкалась', 3),
  neuterPast: Word('карабкалось', 3),
  pluralPast: Word('карабкались', 3),
  imperativeInformal: Word('карабкайся', 3),
  imperativeFormal: Word('карабкайтесь', 3),
  imperfect: ['вскарабкаться'],
};

perfectVerbs.set(карабкаться.name.text, карабкаться);

export { карабкаться };