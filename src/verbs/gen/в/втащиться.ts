import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втащиться: PerfectVerb = {
  name: Word('втащиться', 4),
  singular1stPerson: Word('втащусь', 4),
  singular2ndPerson: Word('втащишься', 2),
  singular3rdPerson: Word('втащится', 2),
  plural1stPerson: Word('втащимся', 2),
  plural2ndPerson: Word('втащитесь', 2),
  plural3rdPerson: Word('втащатся', 2),
  masculinePast: Word('втащился', 4),
  femininePast: Word('втащилась', 4),
  neuterPast: Word('втащилось', 4),
  pluralPast: Word('втащились', 4),
  imperativeInformal: Word('втащись', 4),
  imperativeFormal: Word('втащитесь', 4),
  imperfect: [],
};

perfectVerbs.set(втащиться.name.text, втащиться);

export { втащиться };