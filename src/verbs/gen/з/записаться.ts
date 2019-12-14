import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const записаться: PerfectVerb = {
  name: Word('записаться', 5),
  singular1stPerson: Word('Запишусь', 1),
  singular2ndPerson: Word('Запишешься', 1),
  singular3rdPerson: Word('', -1),
  plural1stPerson: Word('', -1),
  plural2ndPerson: Word('', -1),
  plural3rdPerson: Word('Запишутся', 1),
  masculinePast: Word('Записался', 1),
  femininePast: Word('Записалась', 1),
  neuterPast: Word('', -1),
  pluralPast: Word('', -1),
  imperativeInformal: Word('Запишись', 1),
  imperativeFormal: Word('Запишитесь', 1),
  imperfect: ['записываться'],
};

perfectVerbs.set(записаться.name.text, записаться);

export { записаться };