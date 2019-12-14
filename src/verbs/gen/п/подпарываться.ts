import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпарываться: PerfectVerb = {
  name: Word('подпарываться', 4),
  singular1stPerson: Word('подпарываюсь', 4),
  singular2ndPerson: Word('подпарываешься', 4),
  singular3rdPerson: Word('подпарывается', 4),
  plural1stPerson: Word('подпарываемся', 4),
  plural2ndPerson: Word('подпарываетесь', 4),
  plural3rdPerson: Word('подпарываются', 4),
  masculinePast: Word('подпарывался', 4),
  femininePast: Word('подпарывалась', 4),
  neuterPast: Word('подпарывалось', 4),
  pluralPast: Word('подпарывались', 4),
  imperativeInformal: Word('подпарывайся', 4),
  imperativeFormal: Word('подпарывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подпарываться.name.text, подпарываться);

export { подпарываться };