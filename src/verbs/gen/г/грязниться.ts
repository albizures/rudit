import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грязниться: PerfectVerb = {
  name: Word('грязниться', 5),
  singular1stPerson: Word('грязнюсь', 5),
  singular2ndPerson: Word('грязнишься', 5),
  singular3rdPerson: Word('грязнится', 5),
  plural1stPerson: Word('грязнимся', 5),
  plural2ndPerson: Word('грязнитесь', 5),
  plural3rdPerson: Word('грязнятся', 5),
  masculinePast: Word('грязнился', 5),
  femininePast: Word('грязнилась', 5),
  neuterPast: Word('грязнилось', 5),
  pluralPast: Word('грязнились', 5),
  imperativeInformal: Word('грязнись', 5),
  imperativeFormal: Word('грязнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(грязниться.name.text, грязниться);

export { грязниться };