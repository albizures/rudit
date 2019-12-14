import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заживаться: PerfectVerb = {
  name: Word('заживаться', 5),
  singular1stPerson: Word('заживаюсь', 5),
  singular2ndPerson: Word('заживаешься', 5),
  singular3rdPerson: Word('заживается', 5),
  plural1stPerson: Word('заживаемся', 5),
  plural2ndPerson: Word('заживаетесь', 5),
  plural3rdPerson: Word('заживаются', 5),
  masculinePast: Word('заживался', 5),
  femininePast: Word('заживалась', 5),
  neuterPast: Word('заживалось', 5),
  pluralPast: Word('заживались', 5),
  imperativeInformal: Word('заживайся', 5),
  imperativeFormal: Word('заживайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заживаться.name.text, заживаться);

export { заживаться };