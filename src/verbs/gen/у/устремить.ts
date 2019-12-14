import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устремить: PerfectVerb = {
  name: Word('устремить', 6),
  singular1stPerson: Word('устремлю', 7),
  singular2ndPerson: Word('устремишь', 6),
  singular3rdPerson: Word('устремит', 6),
  plural1stPerson: Word('устремим', 6),
  plural2ndPerson: Word('устремите', 6),
  plural3rdPerson: Word('устремят', 6),
  masculinePast: Word('устремил', 6),
  femininePast: Word('устремила', 6),
  neuterPast: Word('устремило', 6),
  pluralPast: Word('устремили', 6),
  imperativeInformal: Word('устреми', 6),
  imperativeFormal: Word('устремите', 6),
  imperfect: [],
};

perfectVerbs.set(устремить.name.text, устремить);

export { устремить };