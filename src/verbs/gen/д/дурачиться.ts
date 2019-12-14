import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дурачиться: PerfectVerb = {
  name: Word('дурачиться', 3),
  singular1stPerson: Word('дурачусь', 3),
  singular2ndPerson: Word('дурачишься', 3),
  singular3rdPerson: Word('дурачится', 3),
  plural1stPerson: Word('дурачимся', 3),
  plural2ndPerson: Word('дурачитесь', 3),
  plural3rdPerson: Word('дурачатся', 3),
  masculinePast: Word('дурачился', 3),
  femininePast: Word('дурачилась', 3),
  neuterPast: Word('дурачилось', 3),
  pluralPast: Word('дурачились', 3),
  imperativeInformal: Word('дурачься', 3),
  imperativeFormal: Word('дурачьтесь', 3),
  imperfect: ['подурачиться'],
};

perfectVerbs.set(дурачиться.name.text, дурачиться);

export { дурачиться };