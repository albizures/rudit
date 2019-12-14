import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const устареть: PerfectVerb = {
  name: Word('устареть', 5),
  singular1stPerson: Word('устарею', 5),
  singular2ndPerson: Word('устареешь', 5),
  singular3rdPerson: Word('устареет', 5),
  plural1stPerson: Word('устареем', 5),
  plural2ndPerson: Word('устареете', 5),
  plural3rdPerson: Word('устареют', 5),
  masculinePast: Word('устарел', 5),
  femininePast: Word('устарела', 5),
  neuterPast: Word('устарело', 5),
  pluralPast: Word('устарели', 5),
  imperativeInformal: Word('устарей', 5),
  imperativeFormal: Word('устарейте', 5),
  imperfect: [],
};

perfectVerbs.set(устареть.name.text, устареть);

export { устареть };