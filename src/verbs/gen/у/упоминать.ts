import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упоминать: PerfectVerb = {
  name: Word('упоминать', 6),
  singular1stPerson: Word('упоминаю', 6),
  singular2ndPerson: Word('упоминаешь', 6),
  singular3rdPerson: Word('упоминает', 6),
  plural1stPerson: Word('упоминаем', 6),
  plural2ndPerson: Word('упоминаете', 6),
  plural3rdPerson: Word('упоминают', 6),
  masculinePast: Word('упоминал', 6),
  femininePast: Word('упоминала', 6),
  neuterPast: Word('упоминало', 6),
  pluralPast: Word('упоминали', 6),
  imperativeInformal: Word('упоминай', 6),
  imperativeFormal: Word('упоминайте', 6),
  imperfect: ['упомянуть'],
};

perfectVerbs.set(упоминать.name.text, упоминать);

export { упоминать };