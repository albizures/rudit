import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекодировать: PerfectVerb = {
  name: Word('перекодировать', 7),
  singular1stPerson: Word('перекодирую', 7),
  singular2ndPerson: Word('перекодируешь', 7),
  singular3rdPerson: Word('перекодирует', 7),
  plural1stPerson: Word('перекодируем', 7),
  plural2ndPerson: Word('перекодируете', 7),
  plural3rdPerson: Word('перекодируют', 7),
  masculinePast: Word('перекодировал', 7),
  femininePast: Word('перекодировала', 7),
  neuterPast: Word('перекодировало', 7),
  pluralPast: Word('перекодировали', 7),
  imperativeInformal: Word('перекодируй', 7),
  imperativeFormal: Word('перекодируйте', 7),
  imperfect: [],
};

perfectVerbs.set(перекодировать.name.text, перекодировать);

export { перекодировать };