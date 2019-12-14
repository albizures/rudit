import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заправиться: PerfectVerb = {
  name: Word('заправиться', 4),
  singular1stPerson: Word('заправлюсь', 4),
  singular2ndPerson: Word('заправишься', 4),
  singular3rdPerson: Word('заправится', 4),
  plural1stPerson: Word('заправимся', 4),
  plural2ndPerson: Word('заправитесь', 4),
  plural3rdPerson: Word('заправятся', 4),
  masculinePast: Word('заправился', 4),
  femininePast: Word('заправилась', 4),
  neuterPast: Word('заправилось', 4),
  pluralPast: Word('заправились', 4),
  imperativeInformal: Word('заправься', 4),
  imperativeFormal: Word('заправьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(заправиться.name.text, заправиться);

export { заправиться };