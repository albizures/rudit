import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полоскаться: PerfectVerb = {
  name: Word('полоскаться', 6),
  singular1stPerson: Word('полощусь', 5),
  singular2ndPerson: Word('полощешься', 3),
  singular3rdPerson: Word('полощется', 3),
  plural1stPerson: Word('полощемся', 3),
  plural2ndPerson: Word('полощетесь', 3),
  plural3rdPerson: Word('полощутся', 3),
  masculinePast: Word('полоскался', 6),
  femininePast: Word('полоскалась', 6),
  neuterPast: Word('полоскалось', 6),
  pluralPast: Word('полоскались', 6),
  imperativeInformal: Word('полощись', 5),
  imperativeFormal: Word('полощитесь', 5),
  imperfect: [],
};

perfectVerbs.set(полоскаться.name.text, полоскаться);

export { полоскаться };