import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удорожать: PerfectVerb = {
  name: Word('удорожать', 6),
  singular1stPerson: Word('удорожаю', 6),
  singular2ndPerson: Word('удорожаешь', 6),
  singular3rdPerson: Word('удорожает', 6),
  plural1stPerson: Word('удорожаем', 6),
  plural2ndPerson: Word('удорожаете', 6),
  plural3rdPerson: Word('удорожают', 6),
  masculinePast: Word('удорожал', 6),
  femininePast: Word('удорожала', 6),
  neuterPast: Word('удорожало', 6),
  pluralPast: Word('удорожали', 6),
  imperativeInformal: Word('удорожай', 6),
  imperativeFormal: Word('удорожайте', 6),
  imperfect: [],
};

perfectVerbs.set(удорожать.name.text, удорожать);

export { удорожать };