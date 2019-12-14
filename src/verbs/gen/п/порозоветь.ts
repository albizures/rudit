import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порозоветь: PerfectVerb = {
  name: Word('порозоветь', 7),
  singular1stPerson: Word('порозовею', 7),
  singular2ndPerson: Word('порозовеешь', 7),
  singular3rdPerson: Word('порозовеет', 7),
  plural1stPerson: Word('порозовеем', 7),
  plural2ndPerson: Word('порозовеете', 7),
  plural3rdPerson: Word('порозовеют', 7),
  masculinePast: Word('порозовел', 7),
  femininePast: Word('порозовела', 7),
  neuterPast: Word('порозовело', 7),
  pluralPast: Word('порозовели', 7),
  imperativeInformal: Word('порозовей', 7),
  imperativeFormal: Word('порозовейте', 7),
  imperfect: [],
};

perfectVerbs.set(порозоветь.name.text, порозоветь);

export { порозоветь };