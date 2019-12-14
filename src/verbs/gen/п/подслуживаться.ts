import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подслуживаться: PerfectVerb = {
  name: Word('подслуживаться', 5),
  singular1stPerson: Word('подслуживаюсь', 5),
  singular2ndPerson: Word('подслуживаешься', 5),
  singular3rdPerson: Word('подслуживается', 5),
  plural1stPerson: Word('подслуживаемся', 5),
  plural2ndPerson: Word('подслуживаетесь', 5),
  plural3rdPerson: Word('подслуживаются', 5),
  masculinePast: Word('подслуживался', 5),
  femininePast: Word('подслуживалась', 5),
  neuterPast: Word('подслуживалось', 5),
  pluralPast: Word('подслуживались', 5),
  imperativeInformal: Word('подслуживайся', 5),
  imperativeFormal: Word('подслуживайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(подслуживаться.name.text, подслуживаться);

export { подслуживаться };