import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смёрзнуться: PerfectVerb = {
  name: Word('смёрзнуться', 10),
  singular1stPerson: Word('смёрзнусь', 6),
  singular2ndPerson: Word('смёрзнешься', 6),
  singular3rdPerson: Word('смёрзнется', 6),
  plural1stPerson: Word('смёрзнемся', 6),
  plural2ndPerson: Word('смёрзнетесь', 6),
  plural3rdPerson: Word('смёрзнутся', 9),
  masculinePast: Word('смёрзся', 6),
  femininePast: Word('смёрзлась', 6),
  neuterPast: Word('смёрзлось', 6),
  pluralPast: Word('смёрзлись', 6),
  imperativeInformal: Word('смёрзнись', 6),
  imperativeFormal: Word('смёрзнитесь', 8),
  imperfect: [],
};

perfectVerbs.set(смёрзнуться.name.text, смёрзнуться);

export { смёрзнуться };