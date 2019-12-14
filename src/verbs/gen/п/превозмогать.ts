import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превозмогать: PerfectVerb = {
  name: Word('превозмогать', 9),
  singular1stPerson: Word('превозмогаю', 9),
  singular2ndPerson: Word('превозмогаешь', 9),
  singular3rdPerson: Word('превозмогает', 9),
  plural1stPerson: Word('превозмогаем', 9),
  plural2ndPerson: Word('превозмогаете', 9),
  plural3rdPerson: Word('превозмогают', 9),
  masculinePast: Word('превозмогал', 9),
  femininePast: Word('превозмогала', 9),
  neuterPast: Word('превозмогало', 9),
  pluralPast: Word('превозмогали', 9),
  imperativeInformal: Word('превозмогай', 9),
  imperativeFormal: Word('превозмогайте', 9),
  imperfect: [],
};

perfectVerbs.set(превозмогать.name.text, превозмогать);

export { превозмогать };