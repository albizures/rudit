import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкопаться: PerfectVerb = {
  name: Word('выкопаться', 1),
  singular1stPerson: Word('выкопаюсь', 1),
  singular2ndPerson: Word('выкопаешься', 1),
  singular3rdPerson: Word('выкопается', 1),
  plural1stPerson: Word('выкопаемся', 1),
  plural2ndPerson: Word('выкопаетесь', 1),
  plural3rdPerson: Word('выкопаются', 1),
  masculinePast: Word('выкопался', 1),
  femininePast: Word('выкопалась', 1),
  neuterPast: Word('выкопалось', 1),
  pluralPast: Word('выкопались', 1),
  imperativeInformal: Word('выкопайся', 1),
  imperativeFormal: Word('выкопайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выкопаться.name.text, выкопаться);

export { выкопаться };