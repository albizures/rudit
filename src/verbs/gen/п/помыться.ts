import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помыться: PerfectVerb = {
  name: Word('помыться', 3),
  singular1stPerson: Word('помоюсь', 3),
  singular2ndPerson: Word('помоешься', 3),
  singular3rdPerson: Word('помоется', 3),
  plural1stPerson: Word('помоемся', 3),
  plural2ndPerson: Word('помоетесь', 3),
  plural3rdPerson: Word('помоются', 3),
  masculinePast: Word('помылся', 3),
  femininePast: Word('помылась', 3),
  neuterPast: Word('помылось', 3),
  pluralPast: Word('помылись', 3),
  imperativeInformal: Word('помойся', 3),
  imperativeFormal: Word('помойтесь', 3),
  imperfect: ['мыться'],
};

perfectVerbs.set(помыться.name.text, помыться);

export { помыться };