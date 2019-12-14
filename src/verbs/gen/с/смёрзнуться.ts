import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смёрзнуться: PerfectVerb = {
  name: Word('смёрзнуться', 2),
  singular1stPerson: Word('смёрзнусь', 2),
  singular2ndPerson: Word('смёрзнешься', 2),
  singular3rdPerson: Word('смёрзнется', 2),
  plural1stPerson: Word('смёрзнемся', 2),
  plural2ndPerson: Word('смёрзнетесь', 2),
  plural3rdPerson: Word('смёрзнутся', 2),
  masculinePast: Word('смёрзся', 2),
  femininePast: Word('смёрзлась', 2),
  neuterPast: Word('смёрзлось', 2),
  pluralPast: Word('смёрзлись', 2),
  imperativeInformal: Word('смёрзнись', 2),
  imperativeFormal: Word('смёрзнитесь', 2),
  imperfect: [],
};

perfectVerbs.set(смёрзнуться.name.text, смёрзнуться);

export { смёрзнуться };