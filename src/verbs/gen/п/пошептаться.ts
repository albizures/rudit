import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пошептаться: PerfectVerb = {
  name: Word('пошептаться', 6),
  singular1stPerson: Word('пошепчусь', 6),
  singular2ndPerson: Word('пошепчешься', 3),
  singular3rdPerson: Word('пошепчется', 3),
  plural1stPerson: Word('пошепчемся', 3),
  plural2ndPerson: Word('пошепчетесь', 3),
  plural3rdPerson: Word('пошепчутся', 3),
  masculinePast: Word('пошептался', 6),
  femininePast: Word('пошепталась', 6),
  neuterPast: Word('пошепталось', 6),
  pluralPast: Word('пошептались', 6),
  imperativeInformal: Word('пошепчись', 6),
  imperativeFormal: Word('пошепчитесь', 6),
  imperfect: [],
};

perfectVerbs.set(пошептаться.name.text, пошептаться);

export { пошептаться };