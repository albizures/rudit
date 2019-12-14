import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слоиться: PerfectVerb = {
  name: Word('слоиться', 3),
  singular1stPerson: Word('слоюсь', 3),
  singular2ndPerson: Word('слоишься', 3),
  singular3rdPerson: Word('слоится', 3),
  plural1stPerson: Word('слоимся', 3),
  plural2ndPerson: Word('слоитесь', 3),
  plural3rdPerson: Word('слоятся', 3),
  masculinePast: Word('слоился', 3),
  femininePast: Word('слоилась', 3),
  neuterPast: Word('слоилось', 3),
  pluralPast: Word('слоились', 3),
  imperativeInformal: Word('слоись', 3),
  imperativeFormal: Word('слоитесь', 3),
  imperfect: [],
};

perfectVerbs.set(слоиться.name.text, слоиться);

export { слоиться };