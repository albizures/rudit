import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const корректировать: PerfectVerb = {
  name: Word('корректировать', 7),
  singular1stPerson: Word('корректирую', 7),
  singular2ndPerson: Word('корректируешь', 7),
  singular3rdPerson: Word('корректирует', 7),
  plural1stPerson: Word('корректируем', 7),
  plural2ndPerson: Word('корректируете', 7),
  plural3rdPerson: Word('корректируют', 7),
  masculinePast: Word('корректировал', 7),
  femininePast: Word('корректировала', 7),
  neuterPast: Word('корректировало', 7),
  pluralPast: Word('корректировали', 7),
  imperativeInformal: Word('корректируй', 7),
  imperativeFormal: Word('корректируйте', 7),
  imperfect: [],
};

perfectVerbs.set(корректировать.name.text, корректировать);

export { корректировать };