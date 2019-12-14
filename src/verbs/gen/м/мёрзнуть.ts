import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мёрзнуть: PerfectVerb = {
  name: Word('мёрзнуть', 1),
  singular1stPerson: Word('мёрзну', 1),
  singular2ndPerson: Word('мёрзнешь', 1),
  singular3rdPerson: Word('мёрзнет', 1),
  plural1stPerson: Word('мёрзнем', 1),
  plural2ndPerson: Word('мёрзнете', 1),
  plural3rdPerson: Word('мёрзнут', 1),
  masculinePast: Word('мёрз//мёрзнул', 1),
  femininePast: Word('мёрзла', 1),
  neuterPast: Word('мёрзло', 1),
  pluralPast: Word('мёрзли', 1),
  imperativeInformal: Word('мёрзни', 1),
  imperativeFormal: Word('мёрзните', 1),
  imperfect: [],
};

perfectVerbs.set(мёрзнуть.name.text, мёрзнуть);

export { мёрзнуть };