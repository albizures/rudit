import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дополнять: PerfectVerb = {
  name: Word('дополнять', 6),
  singular1stPerson: Word('дополняю', 6),
  singular2ndPerson: Word('дополняешь', 6),
  singular3rdPerson: Word('дополняет', 6),
  plural1stPerson: Word('дополняем', 6),
  plural2ndPerson: Word('дополняете', 6),
  plural3rdPerson: Word('дополняют', 6),
  masculinePast: Word('дополнял', 6),
  femininePast: Word('дополняла', 6),
  neuterPast: Word('дополняло', 6),
  pluralPast: Word('дополняли', 6),
  imperativeInformal: Word('дополняй', 6),
  imperativeFormal: Word('дополняйте', 6),
  imperfect: ['дополнить'],
};

perfectVerbs.set(дополнять.name.text, дополнять);

export { дополнять };