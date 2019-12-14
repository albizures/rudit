import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отправиться: PerfectVerb = {
  name: Word('отправиться', 4),
  singular1stPerson: Word('отправлюсь', 4),
  singular2ndPerson: Word('отправишься', 4),
  singular3rdPerson: Word('отправится', 4),
  plural1stPerson: Word('отправимся', 4),
  plural2ndPerson: Word('отправитесь', 4),
  plural3rdPerson: Word('отправятся', 4),
  masculinePast: Word('отправился', 4),
  femininePast: Word('отправилась', 4),
  neuterPast: Word('отправилось', 4),
  pluralPast: Word('отправились', 4),
  imperativeInformal: Word('отправься', 4),
  imperativeFormal: Word('отправьтесь', 4),
  imperfect: ['отправляться'],
};

perfectVerbs.set(отправиться.name.text, отправиться);

export { отправиться };