import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предотвращать: PerfectVerb = {
  name: Word('предотвращать', 10),
  singular1stPerson: Word('предотвращаю', 10),
  singular2ndPerson: Word('предотвращаешь', 10),
  singular3rdPerson: Word('предотвращает', 10),
  plural1stPerson: Word('предотвращаем', 10),
  plural2ndPerson: Word('предотвращаете', 10),
  plural3rdPerson: Word('предотвращают', 10),
  masculinePast: Word('предотвращал', 10),
  femininePast: Word('предотвращала', 10),
  neuterPast: Word('предотвращало', 10),
  pluralPast: Word('предотвращали', 10),
  imperativeInformal: Word('предотвращай', 10),
  imperativeFormal: Word('предотвращайте', 10),
  imperfect: [],
};

perfectVerbs.set(предотвращать.name.text, предотвращать);

export { предотвращать };