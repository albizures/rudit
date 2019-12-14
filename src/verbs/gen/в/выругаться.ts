import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выругаться: PerfectVerb = {
  name: Word('выругаться', 1),
  singular1stPerson: Word('выругаюсь', 1),
  singular2ndPerson: Word('выругаешься', 1),
  singular3rdPerson: Word('выругается', 1),
  plural1stPerson: Word('выругаемся', 1),
  plural2ndPerson: Word('выругаетесь', 1),
  plural3rdPerson: Word('выругаются', 1),
  masculinePast: Word('выругался', 1),
  femininePast: Word('выругалась', 1),
  neuterPast: Word('выругалось', 1),
  pluralPast: Word('выругались', 1),
  imperativeInformal: Word('выругайся', 1),
  imperativeFormal: Word('выругайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выругаться.name.text, выругаться);

export { выругаться };