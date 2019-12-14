import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протоколировать: PerfectVerb = {
  name: Word('протоколировать', 8),
  singular1stPerson: Word('протоколирую', 8),
  singular2ndPerson: Word('протоколируешь', 8),
  singular3rdPerson: Word('протоколирует', 8),
  plural1stPerson: Word('протоколируем', 8),
  plural2ndPerson: Word('протоколируете', 8),
  plural3rdPerson: Word('протоколируют', 8),
  masculinePast: Word('протоколировал', 8),
  femininePast: Word('протоколировала', 8),
  neuterPast: Word('протоколировало', 8),
  pluralPast: Word('протоколировали', 8),
  imperativeInformal: Word('протоколируй', 8),
  imperativeFormal: Word('протоколируйте', 8),
  imperfect: [],
};

perfectVerbs.set(протоколировать.name.text, протоколировать);

export { протоколировать };