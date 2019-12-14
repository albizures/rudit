import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарываться: PerfectVerb = {
  name: Word('нарываться', 5),
  singular1stPerson: Word('нарываюсь', 5),
  singular2ndPerson: Word('нарываешься', 5),
  singular3rdPerson: Word('нарывается', 5),
  plural1stPerson: Word('нарываемся', 5),
  plural2ndPerson: Word('нарываетесь', 5),
  plural3rdPerson: Word('нарываются', 5),
  masculinePast: Word('нарывался', 5),
  femininePast: Word('нарывалась', 5),
  neuterPast: Word('нарывалось', 5),
  pluralPast: Word('нарывались', 5),
  imperativeInformal: Word('нарывайся', 5),
  imperativeFormal: Word('нарывайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(нарываться.name.text, нарываться);

export { нарываться };