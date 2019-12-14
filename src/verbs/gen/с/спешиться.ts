import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спешиться: PerfectVerb = {
  name: Word('спешиться', 2),
  singular1stPerson: Word('спешусь', 2),
  singular2ndPerson: Word('спешишься', 2),
  singular3rdPerson: Word('спешится', 2),
  plural1stPerson: Word('спешимся', 2),
  plural2ndPerson: Word('спешитесь', 2),
  plural3rdPerson: Word('спешатся', 2),
  masculinePast: Word('спешился', 2),
  femininePast: Word('спешилась', 2),
  neuterPast: Word('спешилось', 2),
  pluralPast: Word('спешились', 2),
  imperativeInformal: Word('спешься', 2),
  imperativeFormal: Word('спешьтесь', 2),
  imperfect: ['спешиваться'],
};

perfectVerbs.set(спешиться.name.text, спешиться);

export { спешиться };