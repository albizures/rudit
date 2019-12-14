import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подорожать: PerfectVerb = {
  name: Word('подорожать', 7),
  singular1stPerson: Word('подорожаю', 7),
  singular2ndPerson: Word('подорожаешь', 7),
  singular3rdPerson: Word('подорожает', 7),
  plural1stPerson: Word('подорожаем', 7),
  plural2ndPerson: Word('подорожаете', 7),
  plural3rdPerson: Word('подорожают', 7),
  masculinePast: Word('подорожал', 7),
  femininePast: Word('подорожала', 7),
  neuterPast: Word('подорожало', 7),
  pluralPast: Word('подорожали', 7),
  imperativeInformal: Word('подорожай', 7),
  imperativeFormal: Word('подорожайте', 7),
  imperfect: [],
};

perfectVerbs.set(подорожать.name.text, подорожать);

export { подорожать };