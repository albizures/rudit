import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const влиться: PerfectVerb = {
  name: Word('влиться', 2),
  singular1stPerson: Word('вольюсь', 4),
  singular2ndPerson: Word('вольёшься', 4),
  singular3rdPerson: Word('вольётся', 4),
  plural1stPerson: Word('вольёмся', 4),
  plural2ndPerson: Word('вольётесь', 4),
  plural3rdPerson: Word('вольются', 4),
  masculinePast: Word('влился', 2),
  femininePast: Word('влилась', 4),
  neuterPast: Word('влилось', 2),
  pluralPast: Word('влились', 2),
  imperativeInformal: Word('влейся', 2),
  imperativeFormal: Word('влейтесь', 2),
  imperfect: ['вливаться'],
};

perfectVerbs.set(влиться.name.text, влиться);

export { влиться };