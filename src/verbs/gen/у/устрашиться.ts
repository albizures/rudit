import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устрашиться: PerfectVerb = {
  name: Word('устрашиться', 6),
  singular1stPerson: Word('устрашусь', 6),
  singular2ndPerson: Word('устрашишься', 6),
  singular3rdPerson: Word('устрашится', 6),
  plural1stPerson: Word('устрашимся', 6),
  plural2ndPerson: Word('устрашитесь', 6),
  plural3rdPerson: Word('устрашатся', 6),
  masculinePast: Word('устрашился', 6),
  femininePast: Word('устрашилась', 6),
  neuterPast: Word('устрашилось', 6),
  pluralPast: Word('устрашились', 6),
  imperativeInformal: Word('устрашись', 6),
  imperativeFormal: Word('устрашитесь', 6),
  imperfect: [],
};

perfectVerbs.set(устрашиться.name.text, устрашиться);

export { устрашиться };