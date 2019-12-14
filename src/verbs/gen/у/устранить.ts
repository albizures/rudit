import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устранить: PerfectVerb = {
  name: Word('устранить', 6),
  singular1stPerson: Word('устраню', 6),
  singular2ndPerson: Word('устранишь', 6),
  singular3rdPerson: Word('устранит', 6),
  plural1stPerson: Word('устраним', 6),
  plural2ndPerson: Word('устраните', 6),
  plural3rdPerson: Word('устранят', 6),
  masculinePast: Word('устранил', 6),
  femininePast: Word('устранила', 6),
  neuterPast: Word('устранило', 6),
  pluralPast: Word('устранили', 6),
  imperativeInformal: Word('устрани', 6),
  imperativeFormal: Word('устраните', 6),
  imperfect: [],
};

perfectVerbs.set(устранить.name.text, устранить);

export { устранить };