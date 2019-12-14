import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстояться: PerfectVerb = {
  name: Word('отстояться', 5),
  singular1stPerson: Word('отстоюсь', 5),
  singular2ndPerson: Word('отстоишься', 5),
  singular3rdPerson: Word('отстоится', 5),
  plural1stPerson: Word('отстоимся', 5),
  plural2ndPerson: Word('отстоитесь', 5),
  plural3rdPerson: Word('отстоятся', 5),
  masculinePast: Word('отстоялся', 5),
  femininePast: Word('отстоялась', 5),
  neuterPast: Word('отстоялось', 5),
  pluralPast: Word('отстоялись', 5),
  imperativeInformal: Word('отстойся', 4),
  imperativeFormal: Word('отстойтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отстояться.name.text, отстояться);

export { отстояться };