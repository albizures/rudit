import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкатываться: PerfectVerb = {
  name: Word('обкатываться', 3),
  singular1stPerson: Word('обкатываюсь', 3),
  singular2ndPerson: Word('обкатываешься', 3),
  singular3rdPerson: Word('обкатывается', 3),
  plural1stPerson: Word('обкатываемся', 3),
  plural2ndPerson: Word('обкатываетесь', 3),
  plural3rdPerson: Word('обкатываются', 3),
  masculinePast: Word('обкатывался', 3),
  femininePast: Word('обкатывалась', 3),
  neuterPast: Word('обкатывалось', 3),
  pluralPast: Word('обкатывались', 3),
  imperativeInformal: Word('обкатывайся', 3),
  imperativeFormal: Word('обкатывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обкатываться.name.text, обкатываться);

export { обкатываться };