import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добегаться: PerfectVerb = {
  name: Word('добегаться', 3),
  singular1stPerson: Word('добегаюсь', 3),
  singular2ndPerson: Word('добегаешься', 3),
  singular3rdPerson: Word('добегается', 3),
  plural1stPerson: Word('добегаемся', 3),
  plural2ndPerson: Word('добегаетесь', 3),
  plural3rdPerson: Word('добегаются', 3),
  masculinePast: Word('добегался', 3),
  femininePast: Word('добегалась', 3),
  neuterPast: Word('добегалось', 3),
  pluralPast: Word('добегались', 3),
  imperativeInformal: Word('добегайся', 3),
  imperativeFormal: Word('добегайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(добегаться.name.text, добегаться);

export { добегаться };