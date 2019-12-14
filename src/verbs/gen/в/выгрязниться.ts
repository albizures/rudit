import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгрязниться: PerfectVerb = {
  name: Word('выгрязниться', 1),
  singular1stPerson: Word('выгрязнюсь', 1),
  singular2ndPerson: Word('выгрязнишься', 1),
  singular3rdPerson: Word('выгрязнится', 1),
  plural1stPerson: Word('выгрязнимся', 1),
  plural2ndPerson: Word('выгрязнитесь', 1),
  plural3rdPerson: Word('выгрязнятся', 1),
  masculinePast: Word('выгрязнился', 1),
  femininePast: Word('выгрязнилась', 1),
  neuterPast: Word('выгрязнилось', 1),
  pluralPast: Word('выгрязнились', 1),
  imperativeInformal: Word('выгрязнись', 1),
  imperativeFormal: Word('выгрязнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(выгрязниться.name.text, выгрязниться);

export { выгрязниться };