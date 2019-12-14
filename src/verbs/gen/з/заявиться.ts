import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заявиться: PerfectVerb = {
  name: Word('заявиться', 4),
  singular1stPerson: Word('заявлюсь', 5),
  singular2ndPerson: Word('заявишься', 2),
  singular3rdPerson: Word('заявится', 2),
  plural1stPerson: Word('заявимся', 2),
  plural2ndPerson: Word('заявитесь', 2),
  plural3rdPerson: Word('заявятся', 2),
  masculinePast: Word('заявился', 4),
  femininePast: Word('заявилась', 4),
  neuterPast: Word('заявилось', 4),
  pluralPast: Word('заявились', 4),
  imperativeInformal: Word('заявись', 4),
  imperativeFormal: Word('заявитесь', 4),
  imperfect: [],
};

perfectVerbs.set(заявиться.name.text, заявиться);

export { заявиться };