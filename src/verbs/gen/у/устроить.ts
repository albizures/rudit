import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устроить: PerfectVerb = {
  name: Word('устроить', 4),
  singular1stPerson: Word('устрою', 4),
  singular2ndPerson: Word('устроишь', 4),
  singular3rdPerson: Word('устроит', 4),
  plural1stPerson: Word('устроим', 4),
  plural2ndPerson: Word('устроите', 4),
  plural3rdPerson: Word('устроят', 4),
  masculinePast: Word('устроил', 4),
  femininePast: Word('устроила', 4),
  neuterPast: Word('устроило', 4),
  pluralPast: Word('устроили', 4),
  imperativeInformal: Word('устрой', 4),
  imperativeFormal: Word('устройте', 4),
  imperfect: ['устраивать'],
};

perfectVerbs.set(устроить.name.text, устроить);

export { устроить };