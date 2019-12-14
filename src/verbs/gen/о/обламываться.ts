import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обламываться: PerfectVerb = {
  name: Word('обламываться', 3),
  singular1stPerson: Word('обламываюсь', 3),
  singular2ndPerson: Word('обламываешься', 3),
  singular3rdPerson: Word('обламывается', 3),
  plural1stPerson: Word('обламываемся', 3),
  plural2ndPerson: Word('обламываетесь', 3),
  plural3rdPerson: Word('обламываются', 3),
  masculinePast: Word('обламывался', 3),
  femininePast: Word('обламывалась', 3),
  neuterPast: Word('обламывалось', 3),
  pluralPast: Word('обламывались', 3),
  imperativeInformal: Word('обламывайся', 3),
  imperativeFormal: Word('обламывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обламываться.name.text, обламываться);

export { обламываться };