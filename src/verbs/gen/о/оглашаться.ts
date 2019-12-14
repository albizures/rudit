import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглашаться: PerfectVerb = {
  name: Word('оглашаться', 5),
  singular1stPerson: Word('оглашаюсь', 5),
  singular2ndPerson: Word('оглашаешься', 5),
  singular3rdPerson: Word('оглашается', 5),
  plural1stPerson: Word('оглашаемся', 5),
  plural2ndPerson: Word('оглашаетесь', 5),
  plural3rdPerson: Word('оглашаются', 5),
  masculinePast: Word('оглашался', 5),
  femininePast: Word('оглашалась', 5),
  neuterPast: Word('оглашалось', 5),
  pluralPast: Word('оглашались', 5),
  imperativeInformal: Word('оглашайся', 5),
  imperativeFormal: Word('оглашайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(оглашаться.name.text, оглашаться);

export { оглашаться };