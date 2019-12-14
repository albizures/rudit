import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымарываться: PerfectVerb = {
  name: Word('вымарываться', 3),
  singular1stPerson: Word('вымарываюсь', 3),
  singular2ndPerson: Word('вымарываешься', 3),
  singular3rdPerson: Word('вымарывается', 3),
  plural1stPerson: Word('вымарываемся', 3),
  plural2ndPerson: Word('вымарываетесь', 3),
  plural3rdPerson: Word('вымарываются', 3),
  masculinePast: Word('вымарывался', 3),
  femininePast: Word('вымарывалась', 3),
  neuterPast: Word('вымарывалось', 3),
  pluralPast: Word('вымарывались', 3),
  imperativeInformal: Word('вымарывайся', 3),
  imperativeFormal: Word('вымарывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(вымарываться.name.text, вымарываться);

export { вымарываться };