import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натешиться: PerfectVerb = {
  name: Word('натешиться', 3),
  singular1stPerson: Word('натешусь', 3),
  singular2ndPerson: Word('натешишься', 3),
  singular3rdPerson: Word('натешится', 3),
  plural1stPerson: Word('натешимся', 3),
  plural2ndPerson: Word('натешитесь', 3),
  plural3rdPerson: Word('натешатся', 3),
  masculinePast: Word('натешился', 3),
  femininePast: Word('натешилась', 3),
  neuterPast: Word('натешилось', 3),
  pluralPast: Word('натешились', 3),
  imperativeInformal: Word('натешься', 3),
  imperativeFormal: Word('натешьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(натешиться.name.text, натешиться);

export { натешиться };