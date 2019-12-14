import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оправдываться: PerfectVerb = {
  name: Word('оправдываться', 3),
  singular1stPerson: Word('оправдываюсь', 3),
  singular2ndPerson: Word('оправдываешься', 3),
  singular3rdPerson: Word('оправдывается', 3),
  plural1stPerson: Word('оправдываемся', 3),
  plural2ndPerson: Word('оправдываетесь', 3),
  plural3rdPerson: Word('оправдываются', 3),
  masculinePast: Word('оправдывался', 3),
  femininePast: Word('оправдывалась', 3),
  neuterPast: Word('оправдывалось', 3),
  pluralPast: Word('оправдывались', 3),
  imperativeInformal: Word('оправдывайся', 3),
  imperativeFormal: Word('оправдывайтесь', 3),
  imperfect: ['оправдаться'],
};

perfectVerbs.set(оправдываться.name.text, оправдываться);

export { оправдываться };