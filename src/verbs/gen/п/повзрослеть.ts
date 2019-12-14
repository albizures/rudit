import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повзрослеть: PerfectVerb = {
  name: Word('повзрослеть', 8),
  singular1stPerson: Word('повзрослею', 8),
  singular2ndPerson: Word('повзрослеешь', 8),
  singular3rdPerson: Word('повзрослеет', 8),
  plural1stPerson: Word('повзрослеем', 8),
  plural2ndPerson: Word('повзрослеете', 8),
  plural3rdPerson: Word('повзрослеют', 8),
  masculinePast: Word('повзрослел', 8),
  femininePast: Word('повзрослела', 8),
  neuterPast: Word('повзрослело', 8),
  pluralPast: Word('повзрослели', 8),
  imperativeInformal: Word('повзрослей', 8),
  imperativeFormal: Word('повзрослейте', 8),
  imperfect: [],
};

perfectVerbs.set(повзрослеть.name.text, повзрослеть);

export { повзрослеть };