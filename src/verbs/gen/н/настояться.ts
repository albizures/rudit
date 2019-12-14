import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const настояться: PerfectVerb = {
  name: Word('настояться', 5),
  singular1stPerson: Word('настоюсь', 5),
  singular2ndPerson: Word('настоишься', 5),
  singular3rdPerson: Word('настоится', 5),
  plural1stPerson: Word('настоимся', 5),
  plural2ndPerson: Word('настоитесь', 5),
  plural3rdPerson: Word('настоятся', 5),
  masculinePast: Word('настоялся', 5),
  femininePast: Word('настоялась', 5),
  neuterPast: Word('настоялось', 5),
  pluralPast: Word('настоялись', 5),
  imperativeInformal: Word('настойся', 4),
  imperativeFormal: Word('настойтесь', 4),
  imperfect: [],
};

perfectVerbs.set(настояться.name.text, настояться);

export { настояться };