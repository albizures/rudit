import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взглядывать: PerfectVerb = {
  name: Word('взглядывать', 4),
  singular1stPerson: Word('взглядываю', 4),
  singular2ndPerson: Word('взглядываешь', 4),
  singular3rdPerson: Word('взглядывает', 4),
  plural1stPerson: Word('взглядываем', 4),
  plural2ndPerson: Word('взглядываете', 4),
  plural3rdPerson: Word('взглядывают', 4),
  masculinePast: Word('взглядывал', 4),
  femininePast: Word('взглядывала', 4),
  neuterPast: Word('взглядывало', 4),
  pluralPast: Word('взглядывали', 4),
  imperativeInformal: Word('взглядывай', 4),
  imperativeFormal: Word('взглядывайте', 4),
  imperfect: ['взглянуть'],
};

perfectVerbs.set(взглядывать.name.text, взглядывать);

export { взглядывать };