import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недосчитываться: PerfectVerb = {
  name: Word('недосчитываться', 6),
  singular1stPerson: Word('недосчитываюсь', 6),
  singular2ndPerson: Word('недосчитываешься', 6),
  singular3rdPerson: Word('недосчитывается', 6),
  plural1stPerson: Word('недосчитываемся', 6),
  plural2ndPerson: Word('недосчитываетесь', 6),
  plural3rdPerson: Word('недосчитываются', 6),
  masculinePast: Word('недосчитывался', 6),
  femininePast: Word('недосчитывалась', 6),
  neuterPast: Word('недосчитывалось', 6),
  pluralPast: Word('недосчитывались', 6),
  imperativeInformal: Word('недосчитывайся', 6),
  imperativeFormal: Word('недосчитывайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(недосчитываться.name.text, недосчитываться);

export { недосчитываться };