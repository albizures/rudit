import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заулыбаться: PerfectVerb = {
  name: Word('заулыбаться', 6),
  singular1stPerson: Word('заулыбаюсь', 6),
  singular2ndPerson: Word('заулыбаешься', 6),
  singular3rdPerson: Word('заулыбается', 6),
  plural1stPerson: Word('заулыбаемся', 6),
  plural2ndPerson: Word('заулыбаетесь', 6),
  plural3rdPerson: Word('заулыбаются', 6),
  masculinePast: Word('заулыбался', 6),
  femininePast: Word('заулыбалась', 6),
  neuterPast: Word('заулыбалось', 6),
  pluralPast: Word('заулыбались', 6),
  imperativeInformal: Word('заулыбайся', 6),
  imperativeFormal: Word('заулыбайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(заулыбаться.name.text, заулыбаться);

export { заулыбаться };