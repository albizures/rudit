import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const успокоиться: PerfectVerb = {
  name: Word('успокоиться', 5),
  singular1stPerson: Word('успокоюсь', 5),
  singular2ndPerson: Word('успокоишься', 5),
  singular3rdPerson: Word('успокоится', 5),
  plural1stPerson: Word('успокоимся', 5),
  plural2ndPerson: Word('успокоитесь', 5),
  plural3rdPerson: Word('успокоятся', 5),
  masculinePast: Word('успокоился', 5),
  femininePast: Word('успокоилась', 5),
  neuterPast: Word('успокоилось', 5),
  pluralPast: Word('успокоились', 5),
  imperativeInformal: Word('успокойся', 5),
  imperativeFormal: Word('успокойтесь', 5),
  imperfect: ['успокаиваться'],
};

perfectVerbs.set(успокоиться.name.text, успокоиться);

export { успокоиться };