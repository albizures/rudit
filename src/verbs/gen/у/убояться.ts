import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const убояться: PerfectVerb = {
  name: Word('убояться', 3),
  singular1stPerson: Word('убоюсь', 3),
  singular2ndPerson: Word('убоишься', 3),
  singular3rdPerson: Word('убоится', 3),
  plural1stPerson: Word('убоимся', 3),
  plural2ndPerson: Word('убоитесь', 3),
  plural3rdPerson: Word('убоятся', 3),
  masculinePast: Word('убоялся', 3),
  femininePast: Word('убоялась', 3),
  neuterPast: Word('убоялось', 3),
  pluralPast: Word('убоялись', 3),
  imperativeInformal: Word('убойся', 2),
  imperativeFormal: Word('убойтесь', 2),
  imperfect: [],
};

perfectVerbs.set(убояться.name.text, убояться);

export { убояться };