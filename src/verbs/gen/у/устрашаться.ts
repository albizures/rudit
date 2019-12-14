import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устрашаться: PerfectVerb = {
  name: Word('устрашаться', 6),
  singular1stPerson: Word('устрашаюсь', 6),
  singular2ndPerson: Word('устрашаешься', 6),
  singular3rdPerson: Word('устрашается', 6),
  plural1stPerson: Word('устрашаемся', 6),
  plural2ndPerson: Word('устрашаетесь', 6),
  plural3rdPerson: Word('устрашаются', 6),
  masculinePast: Word('устрашался', 6),
  femininePast: Word('устрашалась', 6),
  neuterPast: Word('устрашалось', 6),
  pluralPast: Word('устрашались', 6),
  imperativeInformal: Word('устрашайся', 6),
  imperativeFormal: Word('устрашайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(устрашаться.name.text, устрашаться);

export { устрашаться };