import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передохнуть: PerfectVerb = {
  name: Word('передохнуть', 5),
  singular1stPerson: Word('передохну', 5),
  singular2ndPerson: Word('передохнешь', 5),
  singular3rdPerson: Word('передохнет', 5),
  plural1stPerson: Word('передохнем', 5),
  plural2ndPerson: Word('передохнете', 5),
  plural3rdPerson: Word('передохнут', 5),
  masculinePast: Word('передохнул', 5),
  femininePast: Word('передохнула', 5),
  neuterPast: Word('передохнуло', 5),
  pluralPast: Word('передохнули', 5),
  imperativeInformal: Word('передохни', 5),
  imperativeFormal: Word('передохните', 5),
  imperfect: ['передыхать','дохнуть'],
};

perfectVerbs.set(передохнуть.name.text, передохнуть);

export { передохнуть };