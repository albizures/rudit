import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наклониться: PerfectVerb = {
  name: Word('наклониться', 6),
  singular1stPerson: Word('наклонюсь', 6),
  singular2ndPerson: Word('наклонишься', 4),
  singular3rdPerson: Word('наклонится', 4),
  plural1stPerson: Word('наклонимся', 4),
  plural2ndPerson: Word('наклонитесь', 4),
  plural3rdPerson: Word('наклонятся', 4),
  masculinePast: Word('наклонился', 6),
  femininePast: Word('наклонилась', 6),
  neuterPast: Word('наклонилось', 6),
  pluralPast: Word('наклонились', 6),
  imperativeInformal: Word('наклонись', 6),
  imperativeFormal: Word('наклонитесь', 6),
  imperfect: [],
};

perfectVerbs.set(наклониться.name.text, наклониться);

export { наклониться };