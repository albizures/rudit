import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проницать: PerfectVerb = {
  name: Word('проницать', 6),
  singular1stPerson: Word('проницаю', 6),
  singular2ndPerson: Word('проницаешь', 6),
  singular3rdPerson: Word('проницает', 6),
  plural1stPerson: Word('проницаем', 6),
  plural2ndPerson: Word('проницаете', 6),
  plural3rdPerson: Word('проницают', 6),
  masculinePast: Word('проницал', 6),
  femininePast: Word('проницала', 6),
  neuterPast: Word('проницало', 6),
  pluralPast: Word('проницали', 6),
  imperativeInformal: Word('проницай', 6),
  imperativeFormal: Word('проницайте', 6),
  imperfect: [],
};

perfectVerbs.set(проницать.name.text, проницать);

export { проницать };