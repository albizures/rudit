import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрязниться: PerfectVerb = {
  name: Word('загрязниться', 7),
  singular1stPerson: Word('загрязнюсь', 7),
  singular2ndPerson: Word('загрязнишься', 7),
  singular3rdPerson: Word('загрязнится', 7),
  plural1stPerson: Word('загрязнимся', 7),
  plural2ndPerson: Word('загрязнитесь', 7),
  plural3rdPerson: Word('загрязнятся', 7),
  masculinePast: Word('загрязнился', 7),
  femininePast: Word('загрязнилась', 7),
  neuterPast: Word('загрязнилось', 7),
  pluralPast: Word('загрязнились', 7),
  imperativeInformal: Word('загрязнись', 7),
  imperativeFormal: Word('загрязнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(загрязниться.name.text, загрязниться);

export { загрязниться };