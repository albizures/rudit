import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устрашать: PerfectVerb = {
  name: Word('устрашать', 6),
  singular1stPerson: Word('устрашаю', 6),
  singular2ndPerson: Word('устрашаешь', 6),
  singular3rdPerson: Word('устрашает', 6),
  plural1stPerson: Word('устрашаем', 6),
  plural2ndPerson: Word('устрашаете', 6),
  plural3rdPerson: Word('устрашают', 6),
  masculinePast: Word('устрашал', 6),
  femininePast: Word('устрашала', 6),
  neuterPast: Word('устрашало', 6),
  pluralPast: Word('устрашали', 6),
  imperativeInformal: Word('устрашай', 6),
  imperativeFormal: Word('устрашайте', 6),
  imperfect: ['устрашить'],
};

perfectVerbs.set(устрашать.name.text, устрашать);

export { устрашать };