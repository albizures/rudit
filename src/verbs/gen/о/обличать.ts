import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обличать: PerfectVerb = {
  name: Word('обличать', 5),
  singular1stPerson: Word('обличаю', 5),
  singular2ndPerson: Word('обличаешь', 5),
  singular3rdPerson: Word('обличает', 5),
  plural1stPerson: Word('обличаем', 5),
  plural2ndPerson: Word('обличаете', 5),
  plural3rdPerson: Word('обличают', 5),
  masculinePast: Word('обличал', 5),
  femininePast: Word('обличала', 5),
  neuterPast: Word('обличало', 5),
  pluralPast: Word('обличали', 5),
  imperativeInformal: Word('обличай', 5),
  imperativeFormal: Word('обличайте', 5),
  imperfect: ['обличить'],
};

perfectVerbs.set(обличать.name.text, обличать);

export { обличать };