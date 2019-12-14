import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остерегаться: PerfectVerb = {
  name: Word('остерегаться', 7),
  singular1stPerson: Word('остерегаюсь', 7),
  singular2ndPerson: Word('остерегаешься', 7),
  singular3rdPerson: Word('остерегается', 7),
  plural1stPerson: Word('остерегаемся', 7),
  plural2ndPerson: Word('остерегаетесь', 7),
  plural3rdPerson: Word('остерегаются', 7),
  masculinePast: Word('остерегался', 7),
  femininePast: Word('остерегалась', 7),
  neuterPast: Word('остерегалось', 7),
  pluralPast: Word('остерегались', 7),
  imperativeInformal: Word('остерегайся', 7),
  imperativeFormal: Word('остерегайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(остерегаться.name.text, остерегаться);

export { остерегаться };