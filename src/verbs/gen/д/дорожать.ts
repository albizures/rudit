import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дорожать: PerfectVerb = {
  name: Word('дорожать', 5),
  singular1stPerson: Word('дорожаю', 5),
  singular2ndPerson: Word('дорожаешь', 5),
  singular3rdPerson: Word('дорожает', 5),
  plural1stPerson: Word('дорожаем', 5),
  plural2ndPerson: Word('дорожаете', 5),
  plural3rdPerson: Word('дорожают', 5),
  masculinePast: Word('дорожал', 5),
  femininePast: Word('дорожала', 5),
  neuterPast: Word('дорожало', 5),
  pluralPast: Word('дорожали', 5),
  imperativeInformal: Word('дорожай', 5),
  imperativeFormal: Word('дорожайте', 5),
  imperfect: ['подорожать'],
};

perfectVerbs.set(дорожать.name.text, дорожать);

export { дорожать };