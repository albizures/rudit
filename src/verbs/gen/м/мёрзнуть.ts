import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мёрзнуть: PerfectVerb = {
  name: Word('мёрзнуть', 5),
  singular1stPerson: Word('мёрзну', 5),
  singular2ndPerson: Word('мёрзнешь', 5),
  singular3rdPerson: Word('мёрзнет', 5),
  plural1stPerson: Word('мёрзнем', 5),
  plural2ndPerson: Word('мёрзнете', 5),
  plural3rdPerson: Word('мёрзнут', 5),
  masculinePast: Word('мёрз//мёрзнул', 11),
  femininePast: Word('мёрзла', 5),
  neuterPast: Word('мёрзло', 5),
  pluralPast: Word('мёрзли', 5),
  imperativeInformal: Word('мёрзни', 5),
  imperativeFormal: Word('мёрзните', 7),
  imperfect: [],
};

perfectVerbs.set(мёрзнуть.name.text, мёрзнуть);

export { мёрзнуть };