import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предзнаменовать: PerfectVerb = {
  name: Word('предзнаменовать', 12),
  singular1stPerson: Word('предзнаменую', 10),
  singular2ndPerson: Word('предзнаменуешь', 10),
  singular3rdPerson: Word('предзнаменует', 10),
  plural1stPerson: Word('предзнаменуем', 10),
  plural2ndPerson: Word('предзнаменуете', 10),
  plural3rdPerson: Word('предзнаменуют', 10),
  masculinePast: Word('предзнаменовал', 12),
  femininePast: Word('предзнаменовала', 12),
  neuterPast: Word('предзнаменовало', 12),
  pluralPast: Word('предзнаменовали', 12),
  imperativeInformal: Word('предзнаменуй', 10),
  imperativeFormal: Word('предзнаменуйте', 10),
  imperfect: [],
};

perfectVerbs.set(предзнаменовать.name.text, предзнаменовать);

export { предзнаменовать };