import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const суметь: PerfectVerb = {
  name: Word('суметь', 3),
  singular1stPerson: Word('сумею', 3),
  singular2ndPerson: Word('сумеешь', 3),
  singular3rdPerson: Word('сумеет', 3),
  plural1stPerson: Word('сумеем', 3),
  plural2ndPerson: Word('сумеете', 3),
  plural3rdPerson: Word('сумеют', 3),
  masculinePast: Word('сумел', 3),
  femininePast: Word('сумела', 3),
  neuterPast: Word('сумело', 3),
  pluralPast: Word('сумели', 3),
  imperativeInformal: Word('сумей', 3),
  imperativeFormal: Word('сумейте', 3),
  imperfect: ['уметь'],
};

perfectVerbs.set(суметь.name.text, суметь);

export { суметь };