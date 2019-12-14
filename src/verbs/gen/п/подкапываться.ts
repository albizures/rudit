import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкапываться: PerfectVerb = {
  name: Word('подкапываться', 4),
  singular1stPerson: Word('подкапываюсь', 4),
  singular2ndPerson: Word('подкапываешься', 4),
  singular3rdPerson: Word('подкапывается', 4),
  plural1stPerson: Word('подкапываемся', 4),
  plural2ndPerson: Word('подкапываетесь', 4),
  plural3rdPerson: Word('подкапываются', 4),
  masculinePast: Word('подкапывался', 4),
  femininePast: Word('подкапывалась', 4),
  neuterPast: Word('подкапывалось', 4),
  pluralPast: Word('подкапывались', 4),
  imperativeInformal: Word('подкапывайся', 4),
  imperativeFormal: Word('подкапывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подкапываться.name.text, подкапываться);

export { подкапываться };