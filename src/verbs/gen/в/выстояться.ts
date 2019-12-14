import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстояться: PerfectVerb = {
  name: Word('выстояться', 1),
  singular1stPerson: Word('выстоюсь', 1),
  singular2ndPerson: Word('выстоишься', 1),
  singular3rdPerson: Word('выстоится', 1),
  plural1stPerson: Word('выстоимся', 1),
  plural2ndPerson: Word('выстоитесь', 1),
  plural3rdPerson: Word('выстоятся', 1),
  masculinePast: Word('выстоялся', 1),
  femininePast: Word('выстоялась', 1),
  neuterPast: Word('выстоялось', 1),
  pluralPast: Word('выстоялись', 1),
  imperativeInformal: Word('выстойся', 1),
  imperativeFormal: Word('выстойтесь', 1),
  imperfect: [],
};

perfectVerbs.set(выстояться.name.text, выстояться);

export { выстояться };