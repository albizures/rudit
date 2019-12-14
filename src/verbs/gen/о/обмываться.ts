import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмываться: PerfectVerb = {
  name: Word('обмываться', 5),
  singular1stPerson: Word('обмываюсь', 5),
  singular2ndPerson: Word('обмываешься', 5),
  singular3rdPerson: Word('обмывается', 5),
  plural1stPerson: Word('обмываемся', 5),
  plural2ndPerson: Word('обмываетесь', 5),
  plural3rdPerson: Word('обмываются', 5),
  masculinePast: Word('обмывался', 5),
  femininePast: Word('обмывалась', 5),
  neuterPast: Word('обмывалось', 5),
  pluralPast: Word('обмывались', 5),
  imperativeInformal: Word('обмывайся', 5),
  imperativeFormal: Word('обмывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обмываться.name.text, обмываться);

export { обмываться };