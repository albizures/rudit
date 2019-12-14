import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растолстеть: PerfectVerb = {
  name: Word('растолстеть', 8),
  singular1stPerson: Word('растолстею', 8),
  singular2ndPerson: Word('растолстеешь', 8),
  singular3rdPerson: Word('растолстеет', 8),
  plural1stPerson: Word('растолстеем', 8),
  plural2ndPerson: Word('растолстеете', 8),
  plural3rdPerson: Word('растолстеют', 8),
  masculinePast: Word('растолстел', 8),
  femininePast: Word('растолстела', 8),
  neuterPast: Word('растолстело', 8),
  pluralPast: Word('растолстели', 8),
  imperativeInformal: Word('растолстей', 8),
  imperativeFormal: Word('растолстейте', 8),
  imperfect: [],
};

perfectVerbs.set(растолстеть.name.text, растолстеть);

export { растолстеть };