import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удостоиться: PerfectVerb = {
  name: Word('удостоиться', 5),
  singular1stPerson: Word('удостоюсь', 5),
  singular2ndPerson: Word('удостоишься', 5),
  singular3rdPerson: Word('удостоится', 5),
  plural1stPerson: Word('удостоимся', 5),
  plural2ndPerson: Word('удостоитесь', 5),
  plural3rdPerson: Word('удостоятся', 5),
  masculinePast: Word('удостоился', 5),
  femininePast: Word('удостоилась', 5),
  neuterPast: Word('удостоилось', 5),
  pluralPast: Word('удостоились', 5),
  imperativeInformal: Word('удостойся', 5),
  imperativeFormal: Word('удостойтесь', 5),
  imperfect: [],
};

perfectVerbs.set(удостоиться.name.text, удостоиться);

export { удостоиться };