import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гарантировать: PerfectVerb = {
  name: Word('гарантировать', 6),
  singular1stPerson: Word('гарантирую', 6),
  singular2ndPerson: Word('гарантируешь', 6),
  singular3rdPerson: Word('гарантирует', 6),
  plural1stPerson: Word('гарантируем', 6),
  plural2ndPerson: Word('гарантируете', 6),
  plural3rdPerson: Word('гарантируют', 6),
  masculinePast: Word('гарантировал', 6),
  femininePast: Word('гарантировала', 6),
  neuterPast: Word('гарантировало', 6),
  pluralPast: Word('гарантировали', 6),
  imperativeInformal: Word('гарантируй', 6),
  imperativeFormal: Word('гарантируйте', 6),
  imperfect: [],
};

perfectVerbs.set(гарантировать.name.text, гарантировать);

export { гарантировать };