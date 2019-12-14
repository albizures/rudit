import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обглядываться: PerfectVerb = {
  name: Word('обглядываться', 4),
  singular1stPerson: Word('обглядываюсь', 4),
  singular2ndPerson: Word('обглядываешься', 4),
  singular3rdPerson: Word('обглядывается', 4),
  plural1stPerson: Word('обглядываемся', 4),
  plural2ndPerson: Word('обглядываетесь', 4),
  plural3rdPerson: Word('обглядываются', 4),
  masculinePast: Word('обглядывался', 4),
  femininePast: Word('обглядывалась', 4),
  neuterPast: Word('обглядывалось', 4),
  pluralPast: Word('обглядывались', 4),
  imperativeInformal: Word('обглядывайся', 4),
  imperativeFormal: Word('обглядывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(обглядываться.name.text, обглядываться);

export { обглядываться };