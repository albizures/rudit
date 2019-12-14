import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изобличать: PerfectVerb = {
  name: Word('изобличать', 7),
  singular1stPerson: Word('изобличаю', 7),
  singular2ndPerson: Word('изобличаешь', 7),
  singular3rdPerson: Word('изобличает', 7),
  plural1stPerson: Word('изобличаем', 7),
  plural2ndPerson: Word('изобличаете', 7),
  plural3rdPerson: Word('изобличают', 7),
  masculinePast: Word('изобличал', 7),
  femininePast: Word('изобличала', 7),
  neuterPast: Word('изобличало', 7),
  pluralPast: Word('изобличали', 7),
  imperativeInformal: Word('изобличай', 7),
  imperativeFormal: Word('изобличайте', 7),
  imperfect: [],
};

perfectVerbs.set(изобличать.name.text, изобличать);

export { изобличать };