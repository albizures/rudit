import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const писаться: PerfectVerb = {
  name: Word('писаться', 3),
  singular1stPerson: Word('пишусь', 3),
  singular2ndPerson: Word('пишешься', 1),
  singular3rdPerson: Word('пишется', 1),
  plural1stPerson: Word('пишемся', 1),
  plural2ndPerson: Word('пишетесь', 1),
  plural3rdPerson: Word('пишутся', 1),
  masculinePast: Word('писался', 3),
  femininePast: Word('писалась', 3),
  neuterPast: Word('писалось', 3),
  pluralPast: Word('писались', 3),
  imperativeInformal: Word('пишись', 3),
  imperativeFormal: Word('пишитесь', 3),
  imperfect: [],
};

perfectVerbs.set(писаться.name.text, писаться);

export { писаться };