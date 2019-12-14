import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побеспокоить: PerfectVerb = {
  name: Word('побеспокоить', 8),
  singular1stPerson: Word('побеспокою', 8),
  singular2ndPerson: Word('побеспокоишь', 8),
  singular3rdPerson: Word('побеспокоит', 8),
  plural1stPerson: Word('побеспокоим', 8),
  plural2ndPerson: Word('побеспокоите', 8),
  plural3rdPerson: Word('побеспокоят', 8),
  masculinePast: Word('побеспокоил', 8),
  femininePast: Word('побеспокоила', 8),
  neuterPast: Word('побеспокоило', 8),
  pluralPast: Word('побеспокоили', 8),
  imperativeInformal: Word('побеспокой', 8),
  imperativeFormal: Word('побеспокойте', 8),
  imperfect: [],
};

perfectVerbs.set(побеспокоить.name.text, побеспокоить);

export { побеспокоить };