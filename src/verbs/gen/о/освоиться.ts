import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освоиться: PerfectVerb = {
  name: Word('освоиться', 3),
  singular1stPerson: Word('освоюсь', 3),
  singular2ndPerson: Word('освоишься', 3),
  singular3rdPerson: Word('освоится', 3),
  plural1stPerson: Word('освоимся', 3),
  plural2ndPerson: Word('освоитесь', 3),
  plural3rdPerson: Word('освоятся', 3),
  masculinePast: Word('освоился', 3),
  femininePast: Word('освоилась', 3),
  neuterPast: Word('освоилось', 3),
  pluralPast: Word('освоились', 3),
  imperativeInformal: Word('освойся', 3),
  imperativeFormal: Word('освойтесь', 3),
  imperfect: [],
};

perfectVerbs.set(освоиться.name.text, освоиться);

export { освоиться };