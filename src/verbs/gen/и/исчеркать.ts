import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исчеркать: PerfectVerb = {
  name: Word('исчеркать', 6),
  singular1stPerson: Word('исчеркаю', 6),
  singular2ndPerson: Word('исчеркаешь', 6),
  singular3rdPerson: Word('исчеркает', 6),
  plural1stPerson: Word('исчеркаем', 6),
  plural2ndPerson: Word('исчеркаете', 6),
  plural3rdPerson: Word('исчеркают', 6),
  masculinePast: Word('исчеркал', 6),
  femininePast: Word('исчеркала', 6),
  neuterPast: Word('исчеркало', 6),
  pluralPast: Word('исчеркали', 6),
  imperativeInformal: Word('исчеркай', 6),
  imperativeFormal: Word('исчеркайте', 6),
  imperfect: [],
};

perfectVerbs.set(исчеркать.name.text, исчеркать);

export { исчеркать };