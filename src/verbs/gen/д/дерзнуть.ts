import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дерзнуть: PerfectVerb = {
  name: Word('дерзнуть', 5),
  singular1stPerson: Word('дерзну', 5),
  singular2ndPerson: Word('дерзнёшь', 1),
  singular3rdPerson: Word('дерзнёт', 1),
  plural1stPerson: Word('дерзнём', 1),
  plural2ndPerson: Word('дерзнёте', 1),
  plural3rdPerson: Word('дерзнут', 5),
  masculinePast: Word('дерзнул', 5),
  femininePast: Word('дерзнула', 5),
  neuterPast: Word('дерзнуло', 5),
  pluralPast: Word('дерзнули', 5),
  imperativeInformal: Word('дерзни', 5),
  imperativeFormal: Word('дерзните', 5),
  imperfect: ['дерзать'],
};

perfectVerbs.set(дерзнуть.name.text, дерзнуть);

export { дерзнуть };