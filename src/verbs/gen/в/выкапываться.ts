import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкапываться: PerfectVerb = {
  name: Word('выкапываться', 3),
  singular1stPerson: Word('выкапываюсь', 3),
  singular2ndPerson: Word('выкапываешься', 3),
  singular3rdPerson: Word('выкапывается', 3),
  plural1stPerson: Word('выкапываемся', 3),
  plural2ndPerson: Word('выкапываетесь', 3),
  plural3rdPerson: Word('выкапываются', 3),
  masculinePast: Word('выкапывался', 3),
  femininePast: Word('выкапывалась', 3),
  neuterPast: Word('выкапывалось', 3),
  pluralPast: Word('выкапывались', 3),
  imperativeInformal: Word('выкапывайся', 3),
  imperativeFormal: Word('выкапывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(выкапываться.name.text, выкапываться);

export { выкапываться };