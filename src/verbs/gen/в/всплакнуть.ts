import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const всплакнуть: PerfectVerb = {
  name: Word('всплакнуть', 7),
  singular1stPerson: Word('всплакну', 7),
  singular2ndPerson: Word('всплакнёшь', 7),
  singular3rdPerson: Word('всплакнёт', 7),
  plural1stPerson: Word('всплакнём', 7),
  plural2ndPerson: Word('всплакнёте', 7),
  plural3rdPerson: Word('всплакнут', 7),
  masculinePast: Word('всплакнул', 7),
  femininePast: Word('всплакнула', 7),
  neuterPast: Word('всплакнуло', 7),
  pluralPast: Word('всплакнули', 7),
  imperativeInformal: Word('всплакни', 7),
  imperativeFormal: Word('всплакните', 7),
  imperfect: [],
};

perfectVerbs.set(всплакнуть.name.text, всплакнуть);

export { всплакнуть };