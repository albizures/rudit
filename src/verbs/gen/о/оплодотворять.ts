import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплодотворять: PerfectVerb = {
  name: Word('оплодотворять', 10),
  singular1stPerson: Word('оплодотворяю', 10),
  singular2ndPerson: Word('оплодотворяешь', 10),
  singular3rdPerson: Word('оплодотворяет', 10),
  plural1stPerson: Word('оплодотворяем', 10),
  plural2ndPerson: Word('оплодотворяете', 10),
  plural3rdPerson: Word('оплодотворяют', 10),
  masculinePast: Word('оплодотворял', 10),
  femininePast: Word('оплодотворяла', 10),
  neuterPast: Word('оплодотворяло', 10),
  pluralPast: Word('оплодотворяли', 10),
  imperativeInformal: Word('оплодотворяй', 10),
  imperativeFormal: Word('оплодотворяйте', 10),
  imperfect: [],
};

perfectVerbs.set(оплодотворять.name.text, оплодотворять);

export { оплодотворять };