import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const остаться: PerfectVerb = {
  name: Word('остаться', 3),
  singular1stPerson: Word('останусь', 3),
  singular2ndPerson: Word('останешься', 3),
  singular3rdPerson: Word('останется', 3),
  plural1stPerson: Word('останемся', 3),
  plural2ndPerson: Word('останетесь', 3),
  plural3rdPerson: Word('останутся', 3),
  masculinePast: Word('остался', 3),
  femininePast: Word('осталась', 3),
  neuterPast: Word('осталось', 3),
  pluralPast: Word('остались', 3),
  imperativeInformal: Word('останься', 3),
  imperativeFormal: Word('останьтесь', 3),
  imperfect: ['оставаться'],
};

perfectVerbs.set(остаться.name.text, остаться);

export { остаться };