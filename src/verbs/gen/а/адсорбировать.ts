import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const адсорбировать: PerfectVerb = {
  name: Word('адсорбировать', 6),
  singular1stPerson: Word('адсорбирую', 6),
  singular2ndPerson: Word('адсорбируешь', 6),
  singular3rdPerson: Word('адсорбирует', 6),
  plural1stPerson: Word('адсорбируем', 6),
  plural2ndPerson: Word('адсорбируете', 6),
  plural3rdPerson: Word('адсорбируют', 6),
  masculinePast: Word('адсорбировал', 6),
  femininePast: Word('адсорбировала', 6),
  neuterPast: Word('адсорбировало', 6),
  pluralPast: Word('адсорбировали', 6),
  imperativeInformal: Word('адсорбируй', 6),
  imperativeFormal: Word('адсорбируйте', 6),
  imperfect: [],
};

perfectVerbs.set(адсорбировать.name.text, адсорбировать);

export { адсорбировать };