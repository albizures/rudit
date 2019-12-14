import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const симпатизировать: PerfectVerb = {
  name: Word('симпатизировать', 8),
  singular1stPerson: Word('симпатизирую', 8),
  singular2ndPerson: Word('симпатизируешь', 8),
  singular3rdPerson: Word('симпатизирует', 8),
  plural1stPerson: Word('симпатизируем', 8),
  plural2ndPerson: Word('симпатизируете', 8),
  plural3rdPerson: Word('симпатизируют', 8),
  masculinePast: Word('симпатизировал', 8),
  femininePast: Word('симпатизировала', 8),
  neuterPast: Word('симпатизировало', 8),
  pluralPast: Word('симпатизировали', 8),
  imperativeInformal: Word('симпатизируй', 8),
  imperativeFormal: Word('симпатизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(симпатизировать.name.text, симпатизировать);

export { симпатизировать };