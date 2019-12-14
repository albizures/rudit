import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const списаться: PerfectVerb = {
  name: Word('списаться', 4),
  singular1stPerson: Word('спишусь', 4),
  singular2ndPerson: Word('спишешься', 2),
  singular3rdPerson: Word('спишется', 2),
  plural1stPerson: Word('спишемся', 2),
  plural2ndPerson: Word('спишетесь', 2),
  plural3rdPerson: Word('спишутся', 2),
  masculinePast: Word('списался', 4),
  femininePast: Word('списалась', 4),
  neuterPast: Word('списалось', 4),
  pluralPast: Word('списались', 4),
  imperativeInformal: Word('спишись', 4),
  imperativeFormal: Word('спишитесь', 4),
  imperfect: [],
};

perfectVerbs.set(списаться.name.text, списаться);

export { списаться };