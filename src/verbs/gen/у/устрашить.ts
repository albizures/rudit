import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устрашить: PerfectVerb = {
  name: Word('устрашить', 6),
  singular1stPerson: Word('устрашу', 6),
  singular2ndPerson: Word('устрашишь', 6),
  singular3rdPerson: Word('устрашит', 6),
  plural1stPerson: Word('устрашим', 6),
  plural2ndPerson: Word('устрашите', 6),
  plural3rdPerson: Word('устрашат', 6),
  masculinePast: Word('устрашил', 6),
  femininePast: Word('устрашила', 6),
  neuterPast: Word('устрашило', 6),
  pluralPast: Word('устрашили', 6),
  imperativeInformal: Word('устраши', 6),
  imperativeFormal: Word('устрашите', 6),
  imperfect: ['устрашать'],
};

perfectVerbs.set(устрашить.name.text, устрашить);

export { устрашить };