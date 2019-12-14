import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порасти: PerfectVerb = {
  name: Word('порасти', 6),
  singular1stPerson: Word('порасту', 6),
  singular2ndPerson: Word('порастёшь', 6),
  singular3rdPerson: Word('порастёт', 6),
  plural1stPerson: Word('порастём', 6),
  plural2ndPerson: Word('порастёте', 6),
  plural3rdPerson: Word('порастут', 6),
  masculinePast: Word('порос', 3),
  femininePast: Word('поросла', 6),
  neuterPast: Word('поросло', 6),
  pluralPast: Word('поросли', 6),
  imperativeInformal: Word('порасти', 6),
  imperativeFormal: Word('порастите', 6),
  imperfect: [],
};

perfectVerbs.set(порасти.name.text, порасти);

export { порасти };