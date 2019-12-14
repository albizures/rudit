import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбываться: PerfectVerb = {
  name: Word('сбываться', 4),
  singular1stPerson: Word('сбываюсь', 4),
  singular2ndPerson: Word('сбываешься', 4),
  singular3rdPerson: Word('сбывается', 4),
  plural1stPerson: Word('сбываемся', 4),
  plural2ndPerson: Word('сбываетесь', 4),
  plural3rdPerson: Word('сбываются', 4),
  masculinePast: Word('сбывался', 4),
  femininePast: Word('сбывалась', 4),
  neuterPast: Word('сбывалось', 4),
  pluralPast: Word('сбывались', 4),
  imperativeInformal: Word('сбывайся', 4),
  imperativeFormal: Word('сбывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сбываться.name.text, сбываться);

export { сбываться };