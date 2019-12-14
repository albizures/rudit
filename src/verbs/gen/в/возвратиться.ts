import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвратиться: PerfectVerb = {
  name: Word('возвратиться', 7),
  singular1stPerson: Word('возвращусь', 7),
  singular2ndPerson: Word('возвратишься', 7),
  singular3rdPerson: Word('возвратится', 7),
  plural1stPerson: Word('возвратимся', 7),
  plural2ndPerson: Word('возвратитесь', 7),
  plural3rdPerson: Word('возвратятся', 7),
  masculinePast: Word('возвратился', 7),
  femininePast: Word('возвратилась', 7),
  neuterPast: Word('возвратилось', 7),
  pluralPast: Word('возвратились', 7),
  imperativeInformal: Word('возвратись', 7),
  imperativeFormal: Word('возвратитесь', 7),
  imperfect: ['возвращаться'],
};

perfectVerbs.set(возвратиться.name.text, возвратиться);

export { возвратиться };