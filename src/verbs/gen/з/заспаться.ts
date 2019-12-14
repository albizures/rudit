import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заспаться: PerfectVerb = {
  name: Word('заспаться', 4),
  singular1stPerson: Word('засплюсь', 5),
  singular2ndPerson: Word('заспишься', 4),
  singular3rdPerson: Word('заспится', 4),
  plural1stPerson: Word('заспимся', 4),
  plural2ndPerson: Word('заспитесь', 4),
  plural3rdPerson: Word('заспятся', 4),
  masculinePast: Word('заспался', 4),
  femininePast: Word('заспалась', 6),
  neuterPast: Word('заспалось//заспало'сь', 4),
  pluralPast: Word('заспались//заспали'сь', 4),
  imperativeInformal: Word('заспись', 4),
  imperativeFormal: Word('заспитесь', 4),
  imperfect: [],
};

perfectVerbs.set(заспаться.name.text, заспаться);

export { заспаться };