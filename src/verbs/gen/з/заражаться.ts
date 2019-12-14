import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заражаться: PerfectVerb = {
  name: Word('заражаться', 5),
  singular1stPerson: Word('заражаюсь', 5),
  singular2ndPerson: Word('заражаешься', 5),
  singular3rdPerson: Word('заражается', 5),
  plural1stPerson: Word('заражаемся', 5),
  plural2ndPerson: Word('заражаетесь', 5),
  plural3rdPerson: Word('заражаются', 5),
  masculinePast: Word('заражался', 5),
  femininePast: Word('заражалась', 5),
  neuterPast: Word('заражалось', 5),
  pluralPast: Word('заражались', 5),
  imperativeInformal: Word('заражайся', 5),
  imperativeFormal: Word('заражайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заражаться.name.text, заражаться);

export { заражаться };