import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оправдаться: PerfectVerb = {
  name: Word('оправдаться', 6),
  singular1stPerson: Word('оправдаюсь', 6),
  singular2ndPerson: Word('оправдаешься', 6),
  singular3rdPerson: Word('оправдается', 6),
  plural1stPerson: Word('оправдаемся', 6),
  plural2ndPerson: Word('оправдаетесь', 6),
  plural3rdPerson: Word('оправдаются', 6),
  masculinePast: Word('оправдался', 6),
  femininePast: Word('оправдалась', 6),
  neuterPast: Word('оправдалось', 6),
  pluralPast: Word('оправдались', 6),
  imperativeInformal: Word('оправдайся', 6),
  imperativeFormal: Word('оправдайтесь', 6),
  imperfect: ['оправдываться'],
};

perfectVerbs.set(оправдаться.name.text, оправдаться);

export { оправдаться };