import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распарываться: PerfectVerb = {
  name: Word('распарываться', 4),
  singular1stPerson: Word('распарываюсь', 4),
  singular2ndPerson: Word('распарываешься', 4),
  singular3rdPerson: Word('распарывается', 4),
  plural1stPerson: Word('распарываемся', 4),
  plural2ndPerson: Word('распарываетесь', 4),
  plural3rdPerson: Word('распарываются', 4),
  masculinePast: Word('распарывался', 4),
  femininePast: Word('распарывалась', 4),
  neuterPast: Word('распарывалось', 4),
  pluralPast: Word('распарывались', 4),
  imperativeInformal: Word('распарывайся', 4),
  imperativeFormal: Word('распарывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(распарываться.name.text, распарываться);

export { распарываться };