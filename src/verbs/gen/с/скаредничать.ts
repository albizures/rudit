import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скаредничать: PerfectVerb = {
  name: Word('скаредничать', 2),
  singular1stPerson: Word('скаредничаю', 2),
  singular2ndPerson: Word('скаредничаешь', 2),
  singular3rdPerson: Word('скаредничает', 2),
  plural1stPerson: Word('скаредничаем', 2),
  plural2ndPerson: Word('скаредничаете', 2),
  plural3rdPerson: Word('скаредничают', 2),
  masculinePast: Word('скаредничал', 2),
  femininePast: Word('скаредничала', 2),
  neuterPast: Word('скаредничало', 2),
  pluralPast: Word('скаредничали', 2),
  imperativeInformal: Word('скаредничай', 2),
  imperativeFormal: Word('скаредничайте', 2),
  imperfect: [],
};

perfectVerbs.set(скаредничать.name.text, скаредничать);

export { скаредничать };