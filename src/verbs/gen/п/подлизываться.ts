import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подлизываться: PerfectVerb = {
  name: Word('подлизываться', 4),
  singular1stPerson: Word('подлизываюсь', 4),
  singular2ndPerson: Word('подлизываешься', 4),
  singular3rdPerson: Word('подлизывается', 4),
  plural1stPerson: Word('подлизываемся', 4),
  plural2ndPerson: Word('подлизываетесь', 4),
  plural3rdPerson: Word('подлизываются', 4),
  masculinePast: Word('подлизывался', 4),
  femininePast: Word('подлизывалась', 4),
  neuterPast: Word('подлизывалось', 4),
  pluralPast: Word('подлизывались', 4),
  imperativeInformal: Word('подлизывайся', 4),
  imperativeFormal: Word('подлизывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подлизываться.name.text, подлизываться);

export { подлизываться };