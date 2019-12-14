import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оскальзываться: PerfectVerb = {
  name: Word('оскальзываться', 3),
  singular1stPerson: Word('оскальзываюсь', 3),
  singular2ndPerson: Word('оскальзываешься', 3),
  singular3rdPerson: Word('оскальзывается', 3),
  plural1stPerson: Word('оскальзываемся', 3),
  plural2ndPerson: Word('оскальзываетесь', 3),
  plural3rdPerson: Word('оскальзываются', 3),
  masculinePast: Word('оскальзывался', 3),
  femininePast: Word('оскальзывалась', 3),
  neuterPast: Word('оскальзывалось', 3),
  pluralPast: Word('оскальзывались', 3),
  imperativeInformal: Word('оскальзывайся', 3),
  imperativeFormal: Word('оскальзывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(оскальзываться.name.text, оскальзываться);

export { оскальзываться };