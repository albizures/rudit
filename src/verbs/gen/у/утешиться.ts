import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утешиться: PerfectVerb = {
  name: Word('утешиться', 2),
  singular1stPerson: Word('утешусь', 2),
  singular2ndPerson: Word('утешишься', 2),
  singular3rdPerson: Word('утешится', 2),
  plural1stPerson: Word('утешимся', 2),
  plural2ndPerson: Word('утешитесь', 2),
  plural3rdPerson: Word('утешатся', 2),
  masculinePast: Word('утешился', 2),
  femininePast: Word('утешилась', 2),
  neuterPast: Word('утешилось', 2),
  pluralPast: Word('утешились', 2),
  imperativeInformal: Word('утешься', 2),
  imperativeFormal: Word('утешьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(утешиться.name.text, утешиться);

export { утешиться };