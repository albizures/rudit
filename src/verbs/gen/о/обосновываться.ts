import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обосновываться: PerfectVerb = {
  name: Word('обосновываться', 5),
  singular1stPerson: Word('обосновываюсь', 5),
  singular2ndPerson: Word('обосновываешься', 5),
  singular3rdPerson: Word('обосновывается', 5),
  plural1stPerson: Word('обосновываемся', 5),
  plural2ndPerson: Word('обосновываетесь', 5),
  plural3rdPerson: Word('обосновываются', 5),
  masculinePast: Word('обосновывался', 5),
  femininePast: Word('обосновывалась', 5),
  neuterPast: Word('обосновывалось', 5),
  pluralPast: Word('обосновывались', 5),
  imperativeInformal: Word('обосновывайся', 5),
  imperativeFormal: Word('обосновывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обосновываться.name.text, обосновываться);

export { обосновываться };