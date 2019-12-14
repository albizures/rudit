import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const злопыхать: PerfectVerb = {
  name: Word('злопыхать', 6),
  singular1stPerson: Word('злопыхаю', 6),
  singular2ndPerson: Word('злопыхаешь', 6),
  singular3rdPerson: Word('злопыхает', 6),
  plural1stPerson: Word('злопыхаем', 6),
  plural2ndPerson: Word('злопыхаете', 6),
  plural3rdPerson: Word('злопыхают', 6),
  masculinePast: Word('злопыхал', 6),
  femininePast: Word('злопыхала', 6),
  neuterPast: Word('злопыхало', 6),
  pluralPast: Word('злопыхали', 6),
  imperativeInformal: Word('злопыхай', 6),
  imperativeFormal: Word('злопыхайте', 6),
  imperfect: [],
};

perfectVerbs.set(злопыхать.name.text, злопыхать);

export { злопыхать };