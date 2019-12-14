import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устыдить: PerfectVerb = {
  name: Word('устыдить', 5),
  singular1stPerson: Word('устыжу', 5),
  singular2ndPerson: Word('устыдишь', 5),
  singular3rdPerson: Word('устыдит', 5),
  plural1stPerson: Word('устыдим', 5),
  plural2ndPerson: Word('устыдите', 5),
  plural3rdPerson: Word('устыдят', 5),
  masculinePast: Word('устыдил', 5),
  femininePast: Word('устыдила', 5),
  neuterPast: Word('устыдило', 5),
  pluralPast: Word('устыдили', 5),
  imperativeInformal: Word('устыди', 5),
  imperativeFormal: Word('устыдите', 5),
  imperfect: [],
};

perfectVerbs.set(устыдить.name.text, устыдить);

export { устыдить };