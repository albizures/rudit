import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поступать: PerfectVerb = {
  name: Word('поступать', 6),
  singular1stPerson: Word('поступаю', 6),
  singular2ndPerson: Word('поступаешь', 6),
  singular3rdPerson: Word('поступает', 6),
  plural1stPerson: Word('поступаем', 6),
  plural2ndPerson: Word('поступаете', 6),
  plural3rdPerson: Word('поступают', 6),
  masculinePast: Word('поступал', 6),
  femininePast: Word('поступала', 6),
  neuterPast: Word('поступало', 6),
  pluralPast: Word('поступали', 6),
  imperativeInformal: Word('поступай', 6),
  imperativeFormal: Word('поступайте', 6),
  imperfect: ['поступить'],
};

perfectVerbs.set(поступать.name.text, поступать);

export { поступать };