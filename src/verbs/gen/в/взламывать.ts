import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взламывать: PerfectVerb = {
  name: Word('взламывать', 3),
  singular1stPerson: Word('взламываю', 3),
  singular2ndPerson: Word('взламываешь', 3),
  singular3rdPerson: Word('взламывает', 3),
  plural1stPerson: Word('взламываем', 3),
  plural2ndPerson: Word('взламываете', 3),
  plural3rdPerson: Word('взламывают', 3),
  masculinePast: Word('взламывал', 3),
  femininePast: Word('взламывала', 3),
  neuterPast: Word('взламывало', 3),
  pluralPast: Word('взламывали', 3),
  imperativeInformal: Word('взламывай', 3),
  imperativeFormal: Word('взламывайте', 3),
  imperfect: [],
};

perfectVerbs.set(взламывать.name.text, взламывать);

export { взламывать };