import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарываться: PerfectVerb = {
  name: Word('зарываться', 5),
  singular1stPerson: Word('зарываюсь', 5),
  singular2ndPerson: Word('зарываешься', 5),
  singular3rdPerson: Word('зарывается', 5),
  plural1stPerson: Word('зарываемся', 5),
  plural2ndPerson: Word('зарываетесь', 5),
  plural3rdPerson: Word('зарываются', 5),
  masculinePast: Word('зарывался', 5),
  femininePast: Word('зарывалась', 5),
  neuterPast: Word('зарывалось', 5),
  pluralPast: Word('зарывались', 5),
  imperativeInformal: Word('зарывайся', 5),
  imperativeFormal: Word('зарывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(зарываться.name.text, зарываться);

export { зарываться };