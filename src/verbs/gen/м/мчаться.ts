import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мчаться: PerfectVerb = {
  name: Word('мчаться', 2),
  singular1stPerson: Word('мчусь', 2),
  singular2ndPerson: Word('мчишься', 2),
  singular3rdPerson: Word('мчится', 2),
  plural1stPerson: Word('мчимся', 2),
  plural2ndPerson: Word('мчитесь', 2),
  plural3rdPerson: Word('мчатся', 2),
  masculinePast: Word('мчался', 2),
  femininePast: Word('мчалась', 2),
  neuterPast: Word('мчалось', 2),
  pluralPast: Word('мчались', 2),
  imperativeInformal: Word('мчись', 2),
  imperativeFormal: Word('мчитесь', 2),
  imperfect: ['помчаться'],
};

perfectVerbs.set(мчаться.name.text, мчаться);

export { мчаться };