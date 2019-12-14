import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уступать: PerfectVerb = {
  name: Word('уступать', 5),
  singular1stPerson: Word('уступаю', 5),
  singular2ndPerson: Word('уступаешь', 5),
  singular3rdPerson: Word('уступает', 5),
  plural1stPerson: Word('уступаем', 5),
  plural2ndPerson: Word('уступаете', 5),
  plural3rdPerson: Word('уступают', 5),
  masculinePast: Word('уступал', 5),
  femininePast: Word('уступала', 5),
  neuterPast: Word('уступало', 5),
  pluralPast: Word('уступали', 5),
  imperativeInformal: Word('уступай', 5),
  imperativeFormal: Word('уступайте', 5),
  imperfect: ['уступить'],
};

perfectVerbs.set(уступать.name.text, уступать);

export { уступать };