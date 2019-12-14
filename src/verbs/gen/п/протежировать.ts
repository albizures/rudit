import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протежировать: PerfectVerb = {
  name: Word('протежировать', 6),
  singular1stPerson: Word('протежирую', 6),
  singular2ndPerson: Word('протежируешь', 6),
  singular3rdPerson: Word('протежирует', 6),
  plural1stPerson: Word('протежируем', 6),
  plural2ndPerson: Word('протежируете', 6),
  plural3rdPerson: Word('протежируют', 6),
  masculinePast: Word('протежировал', 6),
  femininePast: Word('протежировала', 6),
  neuterPast: Word('протежировало', 6),
  pluralPast: Word('протежировали', 6),
  imperativeInformal: Word('протежируй', 6),
  imperativeFormal: Word('протежируйте', 6),
  imperfect: [],
};

perfectVerbs.set(протежировать.name.text, протежировать);

export { протежировать };