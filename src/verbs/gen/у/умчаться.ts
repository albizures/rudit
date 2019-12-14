import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умчаться: PerfectVerb = {
  name: Word('умчаться', 3),
  singular1stPerson: Word('умчусь', 3),
  singular2ndPerson: Word('умчишься', 3),
  singular3rdPerson: Word('умчится', 3),
  plural1stPerson: Word('умчимся', 3),
  plural2ndPerson: Word('умчитесь', 3),
  plural3rdPerson: Word('умчатся', 3),
  masculinePast: Word('умчался', 3),
  femininePast: Word('умчалась', 3),
  neuterPast: Word('умчалось', 3),
  pluralPast: Word('умчались', 3),
  imperativeInformal: Word('умчись', 3),
  imperativeFormal: Word('умчитесь', 3),
  imperfect: [],
};

perfectVerbs.set(умчаться.name.text, умчаться);

export { умчаться };